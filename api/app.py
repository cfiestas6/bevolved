import os
from utils.run_test import run_tests_on_repo
from os.path import join, dirname
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

database_folder = os.path.join(os.path.dirname(__file__), 'database')
os.makedirs(database_folder, exist_ok=True)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(database_folder, 'bevolved.db')
db = SQLAlchemy(app)


# =========================
# Database Models
# =========================
class Student(db.Model):
    student_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(200))
    last_name = db.Column(db.String(200))
    email = db.Column(db.String(200), unique=True, nullable=False)
    wallet = db.Column(db.String(200), unique=True, nullable=False)
    grades = db.relationship('Grades', backref='student', lazy=True)


class Verificator(db.Model):
    verificator_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(200))
    last_name = db.Column(db.String(200))
    email = db.Column(db.String(200), unique=True, nullable=False)
    wallet = db.Column(db.String(200), unique=True, nullable=False)
    evaluations = db.Column(db.Integer, default=0)
    active = db.Column(db.Boolean, default=True)


class Exams(db.Model):
    exam_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    verificator_id = db.Column(db.Integer, db.ForeignKey('verificator.verificator_id'))
    student_id = db.Column(db.Integer, db.ForeignKey('student.student_id'), nullable=False)
    exam_code = db.Column(db.Integer, default=1)
    grade = db.Column(db.Integer)
    passed = db.Column(db.Boolean, default=False)
    repository = db.Column(db.String(500))


class Grades(db.Model):
    student_id = db.Column(db.Integer, db.ForeignKey('student.student_id'), primary_key=True)
    exam00 = db.Column(db.Integer)


with app.app_context():
    db.create_all()


# =========================
# User Auth Routes
# =========================
@app.route("/users/signin", methods=['POST'])
def sign_in():
    data = request.get_json()
    wallet = data.get('wallet')
    verificator = Verificator.query.filter_by(wallet=wallet).first()
    student = Student.query.filter_by(wallet=wallet).first()
    if student:
        return jsonify({
            'user_id': student.student_id,
            'first_name': student.first_name,
            'last_name': student.last_name,
            'wallet': student.wallet,
            'email': student.email
        })
    else:
        return jsonify({
            'user_id': verificator.verificator_id,
            'first_name': verificator.first_name,
            'last_name': verificator.last_name,
            'wallet': verificator.wallet,
            'email': verificator.email
        })


@app.route("/users/signup", methods=['POST'])
def sign_up():

    data = request.get_json()
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    wallet = data.get('wallet')
    email = data.get('email')
    if data.get('verificator') == "1":
        verificator = Verificator(
            first_name=first_name,
            last_name=last_name,
            wallet=wallet,
            email=email
        )

        db.session.add(verificator)

    else:
        student = Student(
            first_name=first_name,
            last_name=last_name,
            wallet=wallet,
            email=email
        )
        db.session.add(student)
    db.session.commit()

    return jsonify({
            'first_name': first_name,
            'last_name': last_name,
            'wallet': wallet,
            'email': email
    })


# =========================
# Exam Functions
# =========================
@app.route("/exam/start", methods=['POST'])
def exam_start():
    data = request.get_json()
    student_id = data.get('student_id')

    module = Exams(student_id=student_id)
    db.session.add(module)
    db.session.commit()

    return jsonify({
        "student_id": student_id
    })


@app.route("/exam/end", methods=['POST'])
def exam_end():
    data = request.get_json()
    exam_id = data.get('exam_id')
    exam = Exams.query.filter_by(exam_id=exam_id).first()
    student_repository = data.get('repository')
    exam.repository = student_repository
    test_result = 90 # run_tests_on_repo(student_repository, "/test/tests/exam")
    # student_id = data.get('student_id')
    # grades = Grades.query.find_by(student_id=student_id).first()
    # grades.exam00 = test_result
    db.session.commit()

    return jsonify({
        "exam_result": test_result
    })


@app.route("/exam/verify", methods=['POST'])
def exam_verify():
    data = request.get_json()
    passed = data.get('passed')
    exam_id = data.get('exam_id')
    verificator_id = data.get('verificator_id')
    exam = Exams.query.Find_by(exam_id=exam_id)
    exam.verificator_id = verificator_id
    exam.passed = passed
    db.session.commit()


@app.route("/exam", methods=['GET'])
def exam_data():
    data = request.get_json()
    exam_id = data.get('exam_id')
    exam = Exams.query.filter_by(exam_id=exam_id).first()
    student_id = exam.student_id
    student = Student.query.filter_by(student_id=student_id)

    return jsonify({
        "student_data": {
            "student_id": student_id,
            "email": student.email,
            "wallet": student.wallet
        },
        "exam_data": {
            "exam_id": exam.exam_id,
            "grade": exam.grade,
            "student_id": exam.student_id,
            "verficator_id": exam.verificator_id,
            "repository": exam.repository,
            "passed": exam.passed,
            "exam_code": exam.exam_code
        }
    })


# =========================
# Grades Functions
# =========================
@app.route("/grades", methods=['GET'])
def grades_get():
    data = request.get_json()
    student_id = data.get('student_id')
    grades = Grades.query.find_by(student_id=student_id).first()
    return jsonify({
        "student_id": student_id,
        "exam": grades.exam00
    })


if __name__ == '__main__':
    app.run(debug=True)

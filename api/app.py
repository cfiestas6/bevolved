import os
from os.path import join, dirname
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Tus muertos'

if __name__ == '__main__':
    app.run(debug=True)

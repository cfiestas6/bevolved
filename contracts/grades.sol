// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract StudentGrades is Ownable {
    event GradeAdded(uint studentId, string course, uint grade);
    event ExamPaid(uint studentId, uint examId, uint nonce);
    event ExamPassed(uint studentId, uint examId);

    struct Grade {
        string course;
        uint grade;
    }

    struct ExamPayment {
        uint examId;
        address verifierAddress;
        uint256 amount;
        uint nonce;
    }

    struct ExamPass {
        uint examId;
        bool pass;
    }

    mapping(uint => Grade[]) private studentGrades;
    mapping(uint => address) private studentWallets;
    mapping(uint => ExamPayment[]) private studentPayments;
    mapping(uint => ExamPass[]) private studentPassedExams;
    mapping(uint => mapping(uint => bool)) private studentPassed;
    mapping(uint => mapping(uint => uint)) private studentExamNonces;

    uint256 public examPrice;

    constructor() {
        examPrice = 1 ether; // Default price
    }

    function setExamPrice(uint256 _price) public onlyOwner {
        examPrice = _price;
    }

    function addStudent(uint _studentId, address _wallet) public onlyOwner {
        studentWallets[_studentId] = _wallet;
    }

    function addGrade(uint _studentId, string memory _course, uint _grade) public onlyOwner {
        require(bytes(_course).length > 0, "Course name is required");
        require(_grade <= 100, "Grade must be between 0 and 100");
        studentGrades[_studentId].push(Grade(_course, _grade));
        emit GradeAdded(_studentId, _course, _grade);
    }

    function go_exam(uint _studentId, address payable _verifierAddress, uint _examId, uint _nonce) public payable {
        require(msg.value == examPrice, "Incorrect exam payment");
        require(studentExamNonces[_studentId][_examId] < _nonce, "New nonce must be greater than the previous one");
        studentExamNonces[_studentId][_examId] = _nonce;
        studentPayments[_studentId].push(ExamPayment(_examId, _verifierAddress, msg.value, _nonce));
        studentPassed[_studentId][_examId] = false;  // Reset the pass status for a new exam
        uint256 verifierPayment = msg.value / 2;
        _verifierAddress.transfer(verifierPayment);
        emit ExamPaid(_studentId, _examId, _nonce);
    }

    function passExam(uint _studentId, uint _examId, bool _isPassed) public {
        require(!studentPassed[_studentId][_examId], "Already passed, make another payment to attempt again");
        uint len = studentPayments[_studentId].length;
        require(len > 0, "No payment found for this student");
        require(studentPayments[_studentId][len - 1].verifierAddress == msg.sender, "Only verifier can call this function");
        studentPassedExams[_studentId].push(ExamPass(_examId, _isPassed));
        studentPassed[_studentId][_examId] = _isPassed;  // Set the pass status
        if (_isPassed) {
            emit ExamPassed(_studentId, _examId);
        }
    }

    function burn_student(uint _studentId) public onlyOwner {
        studentWallets[_studentId] = address(0);
    }

    function getGrades(uint _studentId) public view returns(Grade[] memory) {
        return studentGrades[_studentId];
    }

    function getWallet(uint _studentId) public view returns(address) {
        return studentWallets[_studentId];
    }

    function getPayments(uint _studentId) public view returns(ExamPayment[] memory) {
        return studentPayments[_studentId];
    }

    function getPassedExams(uint _studentId) public view returns(ExamPass[] memory) {
        return studentPassedExams[_studentId];
    }
        function withdraw(uint amount) external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > amount, "Not enough balance ");
        payable(owner()).transfer(amount);
    }
}

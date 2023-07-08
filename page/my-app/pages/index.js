import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

const CONTRACT_ABI = [ /* your contract's ABI here */ ];
const CONTRACT_ADDRESS = 'YourContractAddressHere';

export default function ExamPage() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [verifierAddress, setVerifierAddress] = useState('');
  const [examId, setExamId] = useState('');
  const [nonce, setNonce] = useState('');
  const [isPassed, setIsPassed] = useState(false);
  const [course, setCourse] = useState('');
  const [grade, setGrade] = useState('');

  useEffect(() => {
    async function initWeb3() {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        const contractInstance = new web3Instance.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        setContract(contractInstance);

        const accounts = await web3Instance.eth.getAccounts();
        setAccounts(accounts);
      } else {
        alert("Please install MetaMask or another Ethereum wallet");
      }
    }

    initWeb3();
  }, []);

  async function goExam() {
    if (!contract || !web3) return;

    await contract.methods.go_exam(studentId, verifierAddress, examId, nonce).send({
      from: accounts[0],
      value: web3.utils.toWei('1', 'ether')
    });
  }

  async function passExam() {
    if (!contract) return;

    await contract.methods.passExam(studentId, examId, isPassed).send({
      from: accounts[0]
    });
  }

  async function addGrade() {
    if (!contract) return;

    await contract.methods.addGrade(studentId, course, grade).send({
      from: accounts[0]
    });
  }

  return (
    <div>
      <input value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="Student ID" />
      <input value={verifierAddress} onChange={(e) => setVerifierAddress(e.target.value)} placeholder="Verifier Address" />
      <input value={examId} onChange={(e) => setExamId(e.target.value)} placeholder="Exam ID" />
      <input value={nonce} onChange={(e) => setNonce(e.target.value)} placeholder="Nonce" />
      <button onClick={goExam}>Go Exam</button>

      <input value={examId} onChange={(e) => setExamId(e.target.value)} placeholder="Exam ID" />
      <input type="checkbox" checked={isPassed} onChange={(e) => setIsPassed(e.target.checked)} />
      <button onClick={passExam}>Pass Exam</button>

      <input value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="Student ID" />
      <input value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Course" />
      <input value={grade} onChange={(e) => setGrade(e.target.value)} placeholder="Grade" />
      <button onClick={addGrade}>Add Grade</button>
    </div>
  );
}

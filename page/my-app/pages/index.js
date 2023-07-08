import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import CONTRACT_ABI from "./abi.json";

const CONTRACT_ADDRESS = '0x4648a43B2C14Da09FdF82B161150d3F634f40491';

export default function ExamPage() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [studentIdExam, setStudentIdExam] = useState('');
  const [studentIdGrade, setStudentIdGrade] = useState('');
  const [verifierAddress, setVerifierAddress] = useState('');
  const [examId, setExamId] = useState('');
  const [examIdPass, setExamIdPass] = useState('');
  const [nonce, setNonce] = useState('');
  const [isPassed, setIsPassed] = useState(false);
  const [course, setCourse] = useState('');
  const [grade, setGrade] = useState('');

  useEffect(() => {
    async function initWeb3() {
      // Here, we're using MetaMask's provider detection utility to get the provider.
      const provider = await detectEthereumProvider();
      
      if (provider) {
        const web3Instance = new Web3(provider);
        const contractInstance = new web3Instance.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        setWeb3(web3Instance);
        setContract(contractInstance);

        const accounts = await web3Instance.eth.getAccounts();
        setAccounts(accounts);
        
        // Request account access if needed (This part requires user interaction.)
        if (provider !== window.ethereum) {
          console.error('Do you have multiple wallets installed?');
        } else if (!window.ethereum.isConnected()) {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
        }

        const chainId = await web3Instance.eth.getChainId();
          console.log('Chain ID:', chainId);  // Check the chain ID in console

          if (chainId !== 5) {
            alert('Please connect to the Goerli test network');
          }
      } else {
        alert('Please install MetaMask or another Ethereum wallet');
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

    await contract.methods.passExam(studentIdExam, examIdPass, isPassed).send({
      from: accounts[0]
    });
  }

  async function addGrade() {
    if (!contract) return;

    await contract.methods.addGrade(studentIdGrade, course, grade).send({
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

      <input value={studentIdExam} onChange={(e) => setStudentIdExam(e.target.value)} placeholder="Student ID" />
      <input value={examIdPass} onChange={(e) => setExamIdPass(e.target.value)} placeholder="Exam ID" />
      <input type="checkbox" checked={isPassed} onChange={(e) => setIsPassed(e.target.checked)} />
      <button onClick={passExam}>Pass Exam</button>

      <input value={studentIdGrade} onChange={(e) => setStudentIdGrade(e.target.value)} placeholder="Student ID" />
      <input value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Course" />
      <input value={grade} onChange={(e) => setGrade(e.target.value)} placeholder="Grade" />
      <button onClick={addGrade}>Add Grade</button>
    </div>
  );
}

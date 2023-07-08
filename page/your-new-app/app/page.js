import React, { useEffect, useState } from 'react';
import Web3 from 'web3';

// Replace this with the actual ABI and contract address
const CONTRACT_ABI = [ /* your contract's ABI here */ ];
const CONTRACT_ADDRESS = 'YourContractAddressHere';

export default function ExamPage() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);

  // Initialize web3 and contract
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

  async function goExam(studentId, verifierAddress, examId, nonce) {
    if (!contract || !web3) return;

    const tx = await contract.methods.go_exam(studentId, verifierAddress, examId, nonce).send({
      from: accounts[0],
      value: web3.utils.toWei('1', 'ether')
    });
  }

  async function passExam(studentId, examId, isPassed) {
    if (!contract) return;

    const tx = await contract.methods.passExam(studentId, examId, isPassed).send({
      from: accounts[0]
    });
  }

  async function addGrade(studentId, course, grade) {
    if (!contract) return;

    const tx = await contract.methods.addGrade(studentId, course, grade).send({
      from: accounts[0]
    });
  }

  return (
    <div>
      {/* You can add the input fields and buttons here to interact with the contract */}
    </div>
  );
}



import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import CONTRACT_ABI from "./abi.json";

const CONTRACT_ADDRESS = '0x4648a43B2C14Da09FdF82B161150d3F634f40491';

export default function Home() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [studentId, setStudentId] = useState(1);
  const [examId, setExamId] = useState(1);
  const [examPrice, setExamPrice] = useState(1);

  useEffect(() => {
      if (typeof window.ethereum !== 'undefined') {
          const ethereumProvider = new ethers.providers.Web3Provider(window.ethereum);
          setProvider(ethereumProvider);

          const signer = ethereumProvider.getSigner();
          setSigner(signer);

          const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
          setContract(contract);
      }
  }, []);

  useEffect(() => {
      const getAccount = async () => {
          if (signer) {
              const account = await signer.getAddress();
              setAccount(account);
          }
      };
      getAccount();
  }, [signer]);

  const handleGoExam = async () => {
      try {
          const nonce = await provider.getTransactionCount(account);
          const gasPrice = await provider.getGasPrice();
          const gasEstimate = await contract.estimateGas.go_exam(studentId, account, examId, nonce, { value: ethers.utils.parseEther(examPrice.toString()) });
          const transactionResponse = await contract.go_exam(studentId, account, examId, nonce, {
              value: ethers.utils.parseEther(examPrice.toString()),
              gasLimit: gasEstimate.toNumber(),
              gasPrice: gasPrice
          });
          console.log('Transaction Hash:', transactionResponse.hash);
          const transactionReceipt = await transactionResponse.wait();
          console.log('Transaction Receipt:', transactionReceipt);
      } catch (error) {
          console.log('Error:', error);
      }
  };

  return (
      <div>
          <button onClick={handleGoExam}>Go Exam</button>
      </div>
  );
}
// WalletPage.js
import React, { useState } from 'react';
import './WalletPage.css'; // Import file CSS để tùy chỉnh giao diện
import { v4 as uuidv4 } from 'uuid'; 
const WalletPage = ({ setPage, walletBalance, transactions, addTransaction }) => {
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');

  const handleSubmit = () => {
    if (amount !== '') {
      const transaction = {
        id: uuidv4(),
        amount: parseFloat(amount),
        type: transactionType,
        date: new Date().toLocaleString(),
      };

      addTransaction(transaction);
      setAmount('');
    }
  };

  return (
    <div className="wallet-container">
      <h2>Wallet Page</h2>
      <div className="balance-container">
        <p>Balance: {walletBalance} VND</p>
      </div>
      <div className="transaction-form">
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <label>
          Type:
          <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </select>
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="transaction-history">
        <h3>Transaction History</h3>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.type === 'deposit' ? 'Deposit' : 'Withdraw'} of {transaction.amount} VND on {transaction.date}
            </li>
          ))}
        </ul>
      </div>
      <button className="back-button" onClick={() => setPage('list')}>
        Back to List Timeshare
      </button>
    </div>
  );
};

export default WalletPage;
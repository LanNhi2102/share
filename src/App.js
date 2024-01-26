// App.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navigation from './Navigation';
import ListTimesharePage from './ListTimesharePage';
import CreateTimesharePage from './CreateTimesharePage';
import WalletPage from './WalletPage';
import './App.css';

const App = () => {
  const [page, setPage] = useState('list');
  const [listTimeshare, setListTimeshare] = useState([]);
  const [walletBalance, setWalletBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTimeshare = (timeshare) => {
    setListTimeshare([...listTimeshare, { id: uuidv4(), ...timeshare }]);
  };

  const deleteTimeshare = (id) => {
    setListTimeshare(listTimeshare.filter((timeshare) => timeshare.id !== id));
  };

  const editTimeshare = (updatedTimeshare) => {
    setListTimeshare(
      listTimeshare.map((timeshare) =>
        timeshare.id === updatedTimeshare.id ? updatedTimeshare : timeshare
      )
    );
  };

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);

    // Update wallet balance based on transaction type
    if (transaction.type === 'deposit') {
      setWalletBalance(walletBalance + transaction.amount);
    } else if (transaction.type === 'withdraw') {
      setWalletBalance(walletBalance - transaction.amount);
    }
  };

  return (
    <div className="app-container">
      <Navigation setPage={setPage} />
      <main className="main-content">
        {page === 'list' ? (
          <ListTimesharePage
            listTimeshare={listTimeshare}
            deleteTimeshare={deleteTimeshare}
            editTimeshare={editTimeshare}
          />
        ) : page === 'create' ? (
          <CreateTimesharePage addTimeshare={addTimeshare} />
        ) : (
          <WalletPage
            setPage={setPage}
            walletBalance={walletBalance}
            transactions={transactions}
            addTransaction={addTransaction}
          />
        )}
      </main>
    </div>
  );
};

export default App;

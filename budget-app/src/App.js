import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';
import logo from './logo.svg';
import Home from './Home';
import './App.css';
import Navbar from './Navbar';
import "./index.css";

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance />
        <IncomeExpenses/>
        <TransactionList/>
      </div>
    </div>
  );
}

export default App;

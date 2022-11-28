import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';
//import logo from './logo.svg';
import Home from './Home';
import './App.css';
import Navbar from './Navbar';
import Categories from './CategoriesPage/Categories';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Categories' element={<Categories />}></Route>
          <Route path='/Budget' element = {<TransactionList/>}></Route>
        </Routes>
      </div>
  );
}

export default App;

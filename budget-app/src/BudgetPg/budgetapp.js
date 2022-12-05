import React,{useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './budget';
import Remaining from './remaining';
import ExpenseTotal from './expenseTotal';
import AddExpenseForm from './addExpenseForm';
import ExpenseList from './expenseList';
import { AppProvider } from '../Context/AppContext';
import {getHousing, getFoodGroceries, getSavings, getEmergencyFund, getTransportation, getUtilities} from '../utils/getMethods';
import {NewBudget, newBudget} from '../utils/putMethods';

const BudgetApp= () => {
	// get budget and assign to state variable called budgetValue
	// update expenses -> update
	const [name, setName] = useState('');
	const [cost, setCost] = useState('');
	const [rent, setRent] = useState([]);
    const [food, setFood] = useState([]);
    const [saving, setSaving] = useState([]);
    const [emerge, setEmerge] = useState([]);
    const [transport, setTransport] = useState([]);
    const [util, setUtil] = useState([]);

    /**************************************************************************
     * USE EFFECTS
     * These functions allow for the retrieval of the data from the database
     * Also it allows us to put information into the database as well.
    **************************************************************************/
    useEffect(() => {
        getHousing().then(setRent)
        getFoodGroceries().then(setFood)
        getSavings().then(setSaving)
        getEmergencyFund().then(setEmerge)
        getTransportation().then(setTransport)
        getUtilities().then(setUtil)
    }, [])
	
	const initialState = {
		budget: 2000,
		expenses: [{	id: '1', name: rent.category, cost: rent.Budget}, {id: '2', name: food.category, cost: food.Budget}, 
		{id: '3', name: saving.category, cost: saving.Budget}, {id: '4', name: emerge.category, cost: emerge.Budget}, 
		{id: '5', name: transport.category, cost: transport.Budget}, {id:'6', name: util.category, cost: util.Budget} ]
	}

	const expense = [{	id: '1', name: rent.category, cost: rent.Budget}, {id: '2', name: food.category, cost: food.Budget}, 
						  {id: '3', name: saving.category, cost: saving.Budget}, {id: '4', name: emerge.category, cost: emerge.Budget}, 
						  {id: '5', name: transport.category, cost: transport.Budget}, {id:'6', name: util.category, cost: util.Budget} ];

	// const updateExpense = () =>
	// {

	// 	if(name == rent.category)
	// 	{
	// 		return NewBudget(1, expense[0].cost);
	// 	}
	// 	else if(name == food.category)
	// 	{
	// 		return NewBudget(2, expense[1].cost);
	// 	}
	// 	else if(name == saving.category)
	// 	{
	// 		return NewBudget(3, expense[2].cost);
	// 	}
	// 	else if(name == emerge.category)
	// 	{
	// 		return NewBudget(4, expense[3].cost);
	// 	}
	// 	else if(name == transport.category)
	// 	{
	// 		return NewBudget(5, expense[4].cost);
	// 	}
	// 	else if(name == util.category)
	// 	{
	// 		return NewBudget(6, expense[5].cost);
	// 	}
	// }

	

	const totalExpense = rent.Budget + food.Budget + saving.Budget + emerge.Budget +
						transport.Budget + util.Budget

	const remaining = 2000 - totalExpense;
	
	return (
		<AppProvider InitialState={initialState}>
			<div className='container'>
				<h1 className='mt-3'>My Budget Planner</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget rent={rent} food={food} saving={saving} emerge={emerge} transport={transport} util={util} />
					</div>
					<div className='col-sm'>
						<Remaining totalExpense={totalExpense} budget={remaining}/>
					</div>
					<div className='col-sm'>
						<ExpenseTotal totalExpense={totalExpense}/>
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<ExpenseList  expenses={expense} />
					</div>
				</div>
				<h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm expense={expense} rent={rent} food={food} saving={saving} emerge={emerge} transport={transport} util={util} name={name} setName={setName} cost={cost} setCost={setCost}/>
					</div>
				</div>
			</div>
		</AppProvider>
	);
};


export default BudgetApp;

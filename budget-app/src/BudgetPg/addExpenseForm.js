import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../Context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import {getHousing, getFoodGroceries, getSavings, getEmergencyFund, getTransportation, getUtilities} from '../utils/getMethods';
import {NewBudget, newBudget} from '../utils/putMethods';

const AddExpenseForm = () => {
	
    const [name, setName] = useState('');
	const [cost, setCost] = useState('');
	const [rent, setRent] = useState([]);
	const [food, setFood] = useState([]);
	const [saving, setSaving] = useState([]);
	const [emerge, setEmerge] = useState([]);
	const [transport, setTransport] = useState([]);
	const [util, setUtil] = useState([]);
	const { dispatch } = useContext(AppContext);

	useEffect(() => {
		getHousing().then(setRent)
	}, [])

	useEffect(() => {
		getFoodGroceries().then(setFood)
	}, [])
	useEffect(() => {
		getSavings().then(setSaving)
	}, [])
	useEffect(() => {
		getEmergencyFund().then(setEmerge)
	}, [])
	useEffect(() => {
		getTransportation().then(setTransport)
	}, [])
	useEffect(() => {
		getUtilities().then(setUtil)
	}, [])

    const OnSubmit = (event) => {

    /**************************************************************************
     * USE EFFECTS
     * These functions allow for the retrieval of the data from the database
     * Also it allows us to put information into the database as well.
    **************************************************************************/
		
        event.preventDefault();
		
		const expense = {
			id: uuidv4(),
			name: name,
			cost: parseInt(cost),
		}

		if(expense.name == rent.category)
		{
			expense.id = '1';
			NewBudget(1, expense.cost);
		}
		else if(expense.name == food.category)
		{
			expense.id = '2';
			NewBudget(2, expense.cost);
		}
		else if(expense.name == saving.category)
		{
			expense.id = '3';
			NewBudget(3, expense.cost);
		}
		else if(expense.name == emerge.category)
		{
			expense.id = '4';
			NewBudget(4, expense.cost);
		}
		else if(expense.name == transport.category)
		{
			expense.id = '5';
			NewBudget(5, expense.cost);
		}
		else if(expense.name == util.category)
		{
			expense.id = '6';
			NewBudget(6, expense.cost);
		}

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

	};

	return (
		<form onSubmit={OnSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label htmlFor='name'>Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<label htmlFor='cost'>Cost</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;
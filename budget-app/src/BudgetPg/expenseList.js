import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import ExpenseItem from './expenseItem';
import {getHousing, getFoodGroceries, getSavings, getEmergencyFund, getTransportation, getUtilities} from '../utils/getMethods';

const ExpenseList = () => {
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
    const expenses = [
		{
			id: '1',
			name: rent.category,
			cost: rent.Budget
		},
		{
			id: '2',
			name: food.category,
			cost: food.Budget
		},
		{
			id: '3',
			name: saving.category,
			cost: saving.Budget
		},
		{
			id: '4',
			name: emerge.category,
			cost: emerge.Budget
		},
		{
			id: '5',
			name: transport.category,
			cost: transport.Budget
		},
		{
			id: '6',
			name: util.category,
			cost: util.Budget
		}
	]

    return (
		<ul className='list-group'>
			{expenses.map((expense) => (
				<ExpenseItem key={expense.id} name={expense.name} cost={expense.cost} />
			))}
		</ul>
    )
}

export default ExpenseList;

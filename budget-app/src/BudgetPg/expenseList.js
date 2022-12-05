import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import ExpenseItem from './expenseItem';
//import {getHousing, getFoodGroceries, getSavings, getEmergencyFund, getTransportation, getUtilities} from '../utils/getMethods';

const ExpenseList = (props) => {
	
    return (
		<ul className='list-group'>
			{props.expenses.map((expense) => (
				<ExpenseItem key={expense.id} name={expense.name} cost={expense.cost} />
			))}
		</ul>
    )
}

export default ExpenseList;

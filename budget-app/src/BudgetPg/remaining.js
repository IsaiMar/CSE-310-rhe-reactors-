import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';


const Remaining = (props) => {
	

	const { expenses, budget } = useContext(AppContext);

	// const totalExpenses = expenses.reduce((total, item) => {
	// 	return (total = props.totalExpense);
	// }, 0);

	const alertType = props.totalExpense > props.budget ? 'alert-danger' : 'alert-success';

	return (
		<div className={`alert ${alertType}`}>
			<span>Remaining: ${props.budget}</span>
		</div>
	);
};

export default Remaining;
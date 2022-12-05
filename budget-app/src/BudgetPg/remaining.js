import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import {getHousing, getFoodGroceries, getSavings, getEmergencyFund, getTransportation, getUtilities} from '../utils/getMethods';


const Remaining = () => {
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
  
	const totalExpense = rent.Budget + food.Budget + saving.Budget + emerge.Budget +
						transport.Budget + util.Budget;

	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total = totalExpense);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div className={`alert ${alertType}`}>
			<span>Remaining: ${budget - totalExpenses}</span>
		</div>
	);
};

export default Remaining;
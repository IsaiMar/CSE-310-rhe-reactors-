import React, { useReducer, createContext, useState, useEffect} from "react";
import {getHousing, getFoodGroceries, getSavings, getEmergencyFund, getTransportation, getUtilities} from '../utils/getMethods';


const AppReducer = (state, action) => {
	

	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
            case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		default:
			return state;
	}
};

const initialState = {
	budget: 2000,
	expenses: [
		{ id: 12, name: 'shopping', cost: 0 },
		{ id: 13, name: 'holiday', cost: 0 },
		{ id: 14, name: 'car service', cost: 0 },
	],
};

// const State = () =>{
// 	const [rent, setRent] = useState([]);
//     const [food, setFood] = useState([]);
//     const [saving, setSaving] = useState([]);
//     const [emerge, setEmerge] = useState([]);
//     const [transport, setTransport] = useState([]);
//     const [util, setUtil] = useState([]);

//     /**************************************************************************
//      * USE EFFECTS
//      * These functions allow for the retrieval of the data from the database
//      * Also it allows us to put information into the database as well.
//     **************************************************************************/
//     useEffect(() => {
//         getHousing().then(setRent)
//         getFoodGroceries().then(setFood)
//         getSavings().then(setSaving)
//         getEmergencyFund().then(setEmerge)
//         getTransportation().then(setTransport)
//         getUtilities().then(setUtil)
//     }, [])
	
// 	const initialState = {
// 		budget: 2000,
// 		expense: [
// 		{id: '1', name: rent.category, cost: rent.Budget}, {id: '2', name: food.category, cost: food.Budget}, 
// 		{id: '3', name: saving.category, cost: saving.Budget}, {id: '4', name: emerge.category, cost: emerge.Budget}, 
// 		{id: '5', name: transport.category, cost: transport.Budget}, {id:'6', name: util.category, cost: util.Budget} 
// 	],
// 	};
// 	// const initialState ={
// 	// 	budget: 2000,
// 	// 	expenses: props.expense
// 	// }
// 	// return initialState;
// 	return initialState
// }

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, props.InitialState);//State());
	//console.log(State())
	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expense,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
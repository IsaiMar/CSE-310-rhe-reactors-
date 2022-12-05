import React, { useContext, useState} from 'react';
import { AppContext } from '../Context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import {NewBudget, newBudget} from '../utils/putMethods';
import { DropDownList } from '@progress/kendo-react-dropdowns';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);
	// const [name, setName] = useState('');
	// const [cost, setCost] = useState('');

    const OnSubmit = (event) => {

    /**************************************************************************
     * USE EFFECTS
     * These functions allow for the retrieval of the data from the database
     * Also it allows us to put information into the database as well.
    **************************************************************************/
		
        event.preventDefault();
		
		const expense = {
			id: uuidv4(),
			name: props.name,
			cost: parseInt(props.cost),
		}

		if(props.name == props.rent.category)
		{
			expense.id = '1';
			NewBudget(1, expense.cost);
		}
		else if(props.name == props.food.category)
		{
			expense.id = '2';
			NewBudget(2, expense.cost);
		}
		else if(props.name == props.saving.category)
		{
			expense.id = '3';
			NewBudget(3, expense.cost);
		}
		else if(props.name == props.emerge.category)
		{
			expense.id = '4';
			NewBudget(4, expense.cost);
		}
		else if(props.name == props.transport.category)
		{
			expense.id = '5';
			NewBudget(5, expense.cost);
		}
		else if(props.name == props.util.category)
		{
			expense.id = '6';
			NewBudget(6, expense.cost);
		}

		dispatch({
			type: 'ADD_EXPENSE',
			payload: props.expense,
		});
		window.location.reload();
	};

	return (
		<form onSubmit={OnSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label htmlFor='name'>Name</label>
					<select
					required='required'
					type='text'
					className='form-control'
					id='name'
					value={props.name}
					onChange={(event) => props.setName(event.target.value)}>
					<option> ---Choose category--- </option>  

                    <option>{props.rent.category}</option>  

                    <option>{props.food.category}</option>  

                    <option>{props.saving.category}</option>  

                    <option>{props.emerge.category}</option>  

                    <option>{props.transport.category}n</option>  

                    <option>{props.util.category}</option>  
					</select>
				</div>
				<div className='col-sm'>
					<label htmlFor='cost'>Cost</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='cost'
						value={props.cost}
						onChange={(event) => props.setCost(event.target.value)}
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
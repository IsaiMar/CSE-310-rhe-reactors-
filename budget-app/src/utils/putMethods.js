import axios from 'axios';

const api = 'http://localhost:5500'

/******************************************************************************
 * NEW BUDGET
 * INPUT: id ===> The id of the category's budget you want to update.
 *        data => The data from the user (budget amount).
 * OUTPUT: json object.
 * DESCRIPTION: This function takes a category id and then the budget amount
 *              (in json format), then returns data as a json object.
******************************************************************************/
export async function NewBudget(id, data)
{
    console.log(`${api}/${id}/${data}`)
    const response = await fetch(`${api}/${id}/${data}`, {
        method: 'PUT',
        body: JSON.stringify(data)
    })

    return response.json()
}
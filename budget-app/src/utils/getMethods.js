import axios from "axios";

const api = 'http://localhost:5500';

  /****************************************************************************
   * GET HOUSING
   * OUTPUT: This function returns all the information for housing in json
   *         format.
   * USE: Use this function for the description page. Set a variable equal to
   *      the function call and then do: variable.keyName
   * DESCRIPTION: This function is called and then turns the housing data into
   *              json data.
  ****************************************************************************/
  export const getHousing = async() =>
  {
    let re = await axios.get(`${api}/1`);
    const data = re.data[0];
    const array = {
      "category" : data.category,
      "importance": data.importance,
      "due_date" : data.due_date,
      "description": data.description,
      "Budget": data.Budget
    };
    return array;
  }
  
  /****************************************************************************
   * GET FOOD/GROCERIES
   * OUTPUT: This function returns all the information for food/groceries in 
   *         json format.
   * USE: Use this function for the description page. Set a variable equal to 
   *      the function call and then do: variable.keyName
   * DESCRIPTION: This function is called and then turns the food/groceries
   *              data into json data.
  ****************************************************************************/
  export async function getFoodGroceries()
  {
    let re = await axios.get(`${api}/2`);
    const data = re.data[0];
    const array = {
      "category" : data.category,
      "importance": data.importance,
      "due_date" : data.due_date,
      "description": data.description,
      "Budget": data.Budget
    };
    return array;
  }
  
  /****************************************************************************
   * GET SAVINGS
   * OUTPUT: This function returns all the information for savings in json 
   *         format.
   * USE: Use this function for the description page. Set a variable equal to
   *      the function call and then do: variable.keyName
   * DESCRIPTION: This function is called and then turns the savings data
   *              into json data.
  ****************************************************************************/
  export async function getSavings()
  {
    let re = await axios.get(`${api}/3`);
    const data = re.data[0];
    const array = {
      "category" : data.category,
      "importance": data.importance,
      "due_date" : data.due_date,
      "description": data.description,
      "Budget": data.Budget
    };
    return array;
  }
  
  /****************************************************************************
   * GET EMERGENCY FUND
   * OUTPUT: This function returns all the information for Emergency Fund into 
   *         json format.
   * USE: Use this function for the description page. Set a variable equal to
   *      the function call and then do: variable.keyName
   * DESCRIPTION: This function is called and then turns the Emergency Fund data
   *              into json data.
  ****************************************************************************/
  export async function getEmergencyFund()
  {
    let re = await axios.get(`${api}/4`);
    const data = re.data[0];
    const array = {
      "category" : data.category,
      "importance": data.importance,
      "due_date" : data.due_date,
      "description": data.description,
      "Budget": data.Budget
    };
    return array;
  }
  
  /****************************************************************************
   * GET TRANSPORTATION
   * OUTPUT: This function returns all the information for transportation in 
   *         json format.
   * USE: Use this function for the description page. Set a variable equal to
   *      the function call and then do: variable.keyName
   * DESCRIPTION: This function is called and then turns the transportation
   *              data into json data.
  ****************************************************************************/
  export async function getTransportation()
  {
    let re = await axios.get(`${api}/5`);
    const data = re.data[0];
    const array = {
      "category" : data.category,
      "importance": data.importance,
      "due_date" : data.due_date,
      "description": data.description,
      "Budget": data.Budget
    };
    return array;
  }
  
  /****************************************************************************
   * GET UTITILITIES
   * OUTPUT: This function returns all the information for Utilities in json 
   *         format.
   * USE: Use this function for the description page. Set a variable equal to
   *      the function call and then do: variable.keyName
   * DESCRIPTION: This function is called and then turns the Utilities data
   *              into json data.
  ****************************************************************************/
  export async function getUtilities()
  {
    let re = await axios.get(`${api}/6`);
    const data = re.data[0];
    const array = {
      "category" : data.category,
      "importance": data.importance,
      "due_date" : data.due_date,
      "description": data.description,
      "Budget": data.Budget
    };
    return array;
  }

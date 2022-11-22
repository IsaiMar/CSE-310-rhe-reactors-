import axios from "axios";

const api = axios.create({
    baseURL: `http://localhost:5500/`
  })
  
  /****************************************************************************
   * GET HOUSING
   * OUTPUT: This function returns all the information for housing in json
   *         format.
   * USE: Use this function for the description page. Set a variable equal to
   *      the function call and then do: variable.keyName
   * DESCRIPTION: This function is called and then turns the housing data into
   *              json data.
  ****************************************************************************/
  export async function getHousing()
  {
    let data = await api.get('/1').then(({data})=> data);
    return data.json();
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
    let data = await api.get('/2').then(({data}) => data);
    return data.json();
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
    let data = await api.get('/3').then(({data}) => data);
    return data.json();
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
    let data = await api.get('/4').then(({data}) => data);
    return data.json();
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
    let data = await api.get('/5').then(({data}) => data);
    return data.json();
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
    let data = await api.get('/6').then(({data}) => data);
    return data.json();
  }

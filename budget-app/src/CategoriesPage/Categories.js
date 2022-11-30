import '../App.css';
import React, {useState, useEffect} from 'react';
import {getHousing, getFoodGroceries, getSavings, getEmergencyFund, getTransportation, getUtilities} from '../utils/getMethods';
const Categories =() => {
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

    // const [api] = useState('http://localhost:5500/categories');
    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     props.setHandler(api);
    // };

return (
    
    <div id="main">
        <div id="categories-title">
            <h1>Learn About The Budget Categories</h1>
        </div>
        <div id="categories">
            <div id="shortcuts">
                <div><a href="#rent">Housing</a></div>
                <div><a href="#food">Food</a><br/></div>
                <div><a href="#savings">Savings</a><br/></div>
                <div><a href="#e-fund">Emergency Fund</a><br/></div>
                <div><a href="#utilities">Utilities</a></div>
                <div><a href="#transportation">Transportation</a></div>

            </div>
            <div id="info">
                <div id="rent">
                    <h1> {rent.category} </h1>
                    <p> {rent.description}
                        <br/><br />
                        Importance: {rent.importance}
                        <br/><br />
                        Due Date: {rent.due_date}
                        
                    {/* <br/><br />
                    Mortgage: a loan from a bank or other financial institution that helps a borrower purchase a home. 
                    It is paid when the borrower and the financial institution agree that it should be paid. 
                    <br /><br />
                    Rent: is the amount of money that is paid by the person living in an apartment to a landlord. 
                    Usually it is paid on the first of the month. 
                    <br /><br />
                    It is usually important to save some money for home repairs because you never know when something 
                    will break or just run down. An example of a home repair would be a bathroom remodel or fixing your kitchen sink.  */}
                    </p>  
                </div>
                    
                <div id="food">
                    <h1>{food.category}</h1>
                    <p> {food.description}
                        <br/><br />
                        Importance: {food.importance}
                        <br/><br />
                        Due Date: {food.due_date}
                        <br/><br />
                    {/*Basically, what you are going to eat in the next month. Yes, you are going to cook for yourself, 
                        unless you want to spend 3 times as much money eating out (who can afford that?). 
                        There`s different ways to budget for this, here are some suggestions:
                        <br /><br />
                        Plan your meals first and then make a grocery list of what ingredients you will need to cook. 
                        <br /><br />
                        You can also add here everything that you are going to buy in the grocery store like shampoo, 
                        paper towels, etc. Don`t be afraid of getting good toilet paper, sometimes quality is better than saving a couple bucks.
                        <br /><br />
                        Some weeks are going to be more expensive than others. You should look back at how much you 
                        spent in the past weeks and plan to spend the average amount of that. If you can`t afford it, plan cheaper meals. */}
                        </p>
                </div>
                <div id="savings">
                    <h1>{saving.category}</h1>
                    <p> {saving.description}
                        <br/><br />
                        Importance: {saving.importance}
                        <br/><br />
                        Due Date: {saving.due_date}
                        <br/><br />
                        {/*Description - Savings could be money or investments. 
                        Meaning - Savings means the money one has saved, especially through a bank or investment plan.
                        Importance - Savings are important for rainy days. Savings ensures that a person is able to maintain their 
                        current lifestyle even after they stop working.
                    Due Date - At every paycheck, the savings must be taken out from the paycheck and put into a savings account. */}
                        </p>
                </div>
                <div id="e-fund">
                    <h1>{emerge.category}</h1>
                    <p> {emerge.description}
                        <br/><br />
                        Importance: {emerge.importance}
                        <br/><br />
                        Due Date: {emerge.due_date}
                        <br/><br />
                        {/*Description - Emergency funds are money
                        Meaning - An emergency fund, also known as contingency fund, is a personal budget set aside as a financial 
                        safety net for future mishaps or unexpected expenses.
                        Importance - To avoid depending on credit cards or high interest loans on broke days.
                        Due Date - At every paycheck the emergency funds must be taken out and put aside. */}
                        </p>
                </div>
                <div id="utilities">
                    <h1>{util.category}</h1>
                    <p> {util.description}
                        <br/><br />
                        Importance: {util.importance}
                        <br/><br />
                        Due Date: {util.due_date}
                        <br/><br />
                        {/*What are utilities: They are stuff like, Power, Gas, sewage, trash, internet, and water. 
                        <br /><br />
                        These are usually due at the beginning of the month but some companies allow you to choose when it is paid by. 
                        <br /><br />
                        Without paying utilities, you won`t be able to live and you could lose your apartment or pay penalties.  */}
                        </p>
                </div>
                
                <div id="transportation">
                    <h1>{transport.category}</h1>
                    <p> {transport.description}
                        <br/><br />
                        Importance: {transport.importance}
                        <br/><br />
                        Due Date: {transport.due_date}
                        <br/><br />
                    {/*Transportation can include anything you spend money on when moving from one place to another. 
                    This could include bus tickets or car gasoline. How much do you spend on transportation in a day, week, or month?  */}
                        </p>
                </div>
            </div>
            
        </div>
        <div id="footer">
            <p></p>
        </div>
    </div>
)
}

export default Categories;
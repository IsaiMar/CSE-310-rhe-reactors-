import '../App.css';

const Categories = () => {

    // const [api] = useState('http://localhost:5500/categories');
    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     props.setHandler(api);
    // };

return (
    
    <div id="main">
        <div id="">
            <h1 id="title">Learn About The Budget Categories</h1>
        </div>
        <div id="categories">
            <div>
                <p><a href="#rent">Rent</a></p>
                <p><a href="#food">Food</a></p>
                <p><a href="#savings">Savings</a></p>
                <p><a href="#e-fund">Emergency Fund</a></p>
                <p><a href="#utilities">Utilities</a></p>
            </div>
            <div id="rent">
                <h1>Rent</h1>
                <p>The things that go into housing would be a mortgage or rent, and usually home repairs.
                <br/><br />
                Mortgage: a loan from a bank or other financial institution that helps a borrower purchase a home. 
                It is paid when the borrower and the financial institution agree that it should be paid. 
                <br /><br />
                Rent: is the amount of money that is paid by the person living in an apartment to a landlord. 
                Usually it is paid on the first of the month. 
                <br /><br />
                It is usually important to save some money for home repairs because you never know when something 
                will break or just run down. An example of a home repair would be a bathroom remodel or fixing your kitchen sink. 
                </p>  
            </div>
                
            <div id="food">
                <h1>Food/Groceries</h1>
                <p>Basically, what you are going to eat in the next month. Yes, you are going to cook for yourself, 
                    unless you want to spend 3 times as much money eating out (who can afford that?). 
                    There`s different ways to budget for this, here are some suggestions:
                    <br /><br />
                    Plan your meals first and then make a grocery list of what ingredients you will need to cook. 
                    <br /><br />
                    You can also add here everything that you are going to buy in the grocery store like shampoo, 
                    paper towels, etc. Don`t be afraid of getting good toilet paper, sometimes quality is better than saving a couple bucks.
                    <br /><br />
                    Some weeks are going to be more expensive than others. You should look back at how much you 
                    spent in the past weeks and plan to spend the average amount of that. If you can`t afford it, plan cheaper meals.
                    </p>
            </div>
            <div id="savings">
                <h1>Savings</h1>
                <p>Description - Savings could be money or investments. 
                    Meaning - Savings means the money one has saved, especially through a bank or investment plan.
                    Importance - Savings are important for rainy days. Savings ensures that a person is able to maintain their 
                    current lifestyle even after they stop working.
                    Due Date - At every paycheck, the savings must be taken out from the paycheck and put into a savings account. 
                    </p>
            </div>
            <div id="e-fund">
                <h1>Emergency Fund</h1>
                <p>Description - Emergency funds are money
                    Meaning - An emergency fund, also known as contingency fund, is a personal budget set aside as a financial 
                    safety net for future mishaps or unexpected expenses.
                    Importance - To avoid depending on credit cards or high interest loans on broke days.
                    Due Date - At every paycheck the emergency funds must be taken out and put aside.
                    </p>
            </div>
            <div id="utilities">
                <h1>Utilities</h1>
                <p>What are utilities: They are stuff like, Power, Gas, sewage, trash, internet, and water. 
                    <br /><br />
                    These are usually due at the beginning of the month but some companies allow you to choose when it is paid by. 
                    <br /><br />
                    Without paying utilities, you won`t be able to live and you could lose your apartment or pay penalties. 
                    </p>
            </div>
        </div>
        <div id="footer">
            <p></p>
        </div>
    </div>
)
}

export default Categories;
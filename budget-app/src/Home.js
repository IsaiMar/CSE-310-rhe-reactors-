import React from "react";
import "./Home.css"


export default function Home(){
    return(
        <div className="home">
            <h1>
                Welcome to the Budget App
            </h1>
            <p>
                Today you are going to learn how to make your own budget, 
            </p>
            <h1>
                What is a budget?
            </h1>
            <p>
                Budgeting is a skill everyone needs to have <br/><br/>
                According to Oxford dictionary, "A budget is 
                spending plan based on income and expenses. In other words, it’s an estimate of 
                how much money you’ll make and spendover a certain period of time, such as a month or year. 
                In this webapp we are going to provide with tools that will help you to plan your budget.
                We divided it into different categories that you can add your income and your expense per
                category. 
            </p>
        </div>
    )
}
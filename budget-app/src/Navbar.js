import React, { Component } from 'react'
import "./Navbar.css";
import {Menu} from './Menu'



class Navbar extends Component{
  render(){
    return (
      <nav className='NavbarItems'>
        <h1  className='logo'>
          The Budget App
        </h1>
        <div className='menu-icons'>
          <i className='fas fa-bars'></i>
        </div>
        <ul className='nav-menu'>
          {Menu.map((item,index)=>{
            return(
              <li key = {index}>
                <a href={item.url}
                className = {item.cName}>
              <i className={item.icon}> </i> {item.title}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    )

  }
}
export default Navbar;

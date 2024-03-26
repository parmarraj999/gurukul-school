import React, { useState } from 'react'
import "./nav.css"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddmissionButton from '../../components/button/button';
function Nav() {

    const [open,setOpen] = useState(false);
    const handleNav = ()=>{
        setOpen(!open)
    }
  return (
    <div onClick={handleNav} className={`${open ? "nav-container open" : "nav-container closed"}`} >
        <div className="logo">
            <img src='../../../image/logo.png' />
        </div>
        <div className="menu">
            <ul>
                <NavLink to='/' className="navlink ">Home</NavLink>
                <NavLink to='/about' className="navlink">About</NavLink>
                <NavLink to='/gallary' className="navlink ">Gallary</NavLink>
                <NavLink to='/contact' className="navlink">Contact </NavLink>
            </ul>
            <div className='menu-image-container' >
                <img src='../../../image/karate.jpg' />
            </div>
            <AddmissionButton text="Addmission" background="white" color="black" width="230px"/>
        </div>
    </div>
  )
}

export default Nav
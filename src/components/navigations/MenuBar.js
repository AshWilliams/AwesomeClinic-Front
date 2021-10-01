import React from 'react'

import './MenuBar.css'

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <img className="logo" src='https://www.designevo.com/res/templates/thumb_small/simple-medical-clinic.png'/>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/MyProfile">My Profile</a></li>
                    <li><a href="/MyApointements">My Appointments</a></li>                
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;
import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                    <h1>Awesome Clinic</h1>
                    <h2>Book your Appointment!</h2>
                    <Link to="/">Book Now!</Link>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;
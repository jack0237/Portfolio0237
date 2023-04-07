import React from "react";
import './Navbar.css'
import Mode from "../Mode/Mode";

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Jason</div>
                <Mode />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Eperience</li>
                        <li>Portfolio</li>
                        <li>Test</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar
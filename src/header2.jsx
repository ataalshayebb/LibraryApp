import { useState } from "react";
import {Link} from 'react-router-dom'

function Headerr() {
    return (
        <header>
            <div className="logo">
                <img src="./library_-removebg-preview.png" alt="" />
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to='/aboutus'>About Us</Link>
                        <Link to='/contactus'>Contact Us</Link> 
                        <Link to='/'>Home</Link> 
                        <Link to='/signup'>Log out</Link> 
                        
                         
                       
                        
                    </li>
                </ul>
            </nav>

            <div className="icons">

            </div>
        </header>
    )
}

export default Headerr;


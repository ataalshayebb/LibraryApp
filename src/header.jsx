import { useState } from "react";
import {Link} from 'react-router-dom'
import Signup from "./signup";

function Header() {
    const [logo, setLogo]=useState(false);
    if(localStorage.getItem("name")){
    setTimeout(() => {
        setLogo(true)
    }, 2100);
}
    const isLoggedIn = localStorage.getItem('email') !== null; 
    const Logout = () => {
        localStorage.clear();
        window.location.href = 'signup'; 
    };
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
                        <Link to='/catalog'>Catalog</Link>
                        <Link to='/'>Home</Link> 
                        {isLoggedIn && logo ? (
                    <li>
                        <button onClick={Logout}>Log Out</button>
                    </li>
                ) : (
                    <li><a href="/signup">Sign Up</a></li>
                )} 
                        
                         
                       
                        
                    </li>
                </ul>
            </nav>

            <div className="icons">

            </div>
        </header>
    )
}

export default Header;


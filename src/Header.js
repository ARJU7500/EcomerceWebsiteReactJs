import React from 'react';
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <div class="header">
                <div class="togle">
                    <div id="icon">
                        <i onclick="myFunction(x)" class=" fa fa-toggle-on"></i>
                    </div>
                </div>
                <div class="container">
                    <nav>
                        <input type="checkbox" id="checkbtn" />
                        <label for="checkbtn" class="navicon"><i class="fa fa-bars"></i></label>
                        <a href="index.html"><img src="./img/logo.png" /></a>
                        <ul>
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/product" >Products</Link></li>
                            <li><Link to="/about" >About</Link></li>
                            <li><Link to="/contact" >Contact</Link></li>
                            <li><Link to="/account" >Account</Link></li>
                            <li><Link to="/" ><img src="./img/cart.png" /></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Header;
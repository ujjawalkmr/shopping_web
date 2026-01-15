import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "../css_file/Appbar.css";

function Appbar() {
  const WebLogo="/assets/images/web_logo.png";
    return (
        <nav>
            <ul className="appbar">
               <img src={WebLogo} alt="profile" className="logo" />

                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/product">Milk Subscription</Link></li>
                <li><Link to="/product">Gift</Link></li>
                <li><Link to="/contact">Contact</Link></li>

                 <div className="right-menu">
                   <li className="login">
                     <Link to="/login">
                       <FaUser className="login-icon" />
                        Login
                     </Link>
                   </li>
                   <li><Link to="/profile">
                    <FaUser className="profile-pic" /> </Link></li>
                  
                 </div>

            </ul>
        </nav>
    );
}
export default Appbar
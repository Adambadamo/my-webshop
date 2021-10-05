import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <Link to="/" className="logo">
                Hipity Shopity
            </Link>
            <div className="links">
                <ul>
                    <li>
                        <Link to = "/">
                            Home
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to = "/signup">
                            Signup
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to = "/cart">
                            Cart
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
   )
}

export default Header;
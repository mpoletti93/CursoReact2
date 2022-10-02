import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink} from "react-router-dom";
import Button from '@mui/material/Button'

function NavBar() {
    return (
<header>
    <h1 className="navbar-brand mb-0 h1"><Link to="/">TuVinito</Link></h1>
        <nav className="nav">
            <input type="checkbox" id="nav"></input>
            <label htmlFor="nav">
                <span></span>
                <span></span>
                <span></span>
            </label>   
            <ul className="menu"> 
                <li><NavLink to="/categoria/tinto">Tintos</NavLink></li>
                <li><NavLink to="/categoria/blanco">Blancos</NavLink></li>
                <li><NavLink to="/categoria/rosado">Rosados</NavLink></li>
                <li><NavLink to="/cart/"><CartWidget/></NavLink></li>
                <li><Button /> </li>
            </ul>
        </nav>
</header>
)
}

export default NavBar;

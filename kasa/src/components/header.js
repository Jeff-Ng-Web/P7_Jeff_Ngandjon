import React from "react"
import {NavLink} from "react-router-dom"
import Logo from "../assets/logo/Logo.svg"

// affiche le et les liens de nqvigations
const Header = () => {
    return (
        <header>
            <img className="logo" src={Logo} alt="Logo Kasa" />
            <nav>
                <ul>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/a-propos">
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header

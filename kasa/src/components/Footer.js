import React from "react"
import Logo from "../assets/logo/Logo_White.svg"

const Footer = () => {
    return (
        <footer>
            <div className="footer_content">
                <img src={Logo} alt="Logo Kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer

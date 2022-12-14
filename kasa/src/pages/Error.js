import React from "react"
import {Link} from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/header"

const Error = () => {
    return (
        <div>
            <div className="content">
                <Header />
                <main className="error">
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <Link className="backHome" to="/">
                        Retourner sur la page d’accueil
                    </Link>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Error

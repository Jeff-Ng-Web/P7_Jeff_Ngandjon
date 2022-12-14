import React from "react"
import Footer from "../components/Footer"
import Appartements from "../components/Appartements"
import Header from "../components/header"
import home from "../assets/img/home.jpg"

const Home = () => {
    return (
        <div>
            <div className="content">
                <Header />
                <div className="banner">
                    <div className="home_background">
                        <h1>Chez vous, partout et ailleurs</h1>
                        <img src={home} alt="Paysage de rochers avec des arbres à côté de la mer" />
                    </div>
                </div>
                <Appartements />
            </div>
            <Footer />
        </div>
    )
}

export default Home

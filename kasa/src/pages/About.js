import React from "react"
import about from "../assets/img/about.jpg"
import Footer from "../components/Footer"
import Header from "../components/header"
import Dropdown from "../components/Dropdown"

const About = () => {
    const reliability =
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const security =
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    return (
        <div>
            <div className="content">
                <Header />
                <div className="bannerAbout">
                    <img src={about} alt="Paysage montagneux" />
                </div>
                <main className="dropdownAbout">
                    <Dropdown classDP="dropdownAbout__button" classP="dropdownAbout__p" title="Fiabilité" content={reliability} />
                    <Dropdown classDP="dropdownAbout__button" classP="dropdownAbout__p" title="Respect" content={respect} />
                    <Dropdown classDP="dropdownAbout__button" classP="dropdownAbout__p" title="Service" content={service} />
                    <Dropdown classDP="dropdownAbout__button" classP="dropdownAbout__p" title="Sécurité" content={security} />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default About

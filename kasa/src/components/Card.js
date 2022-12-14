import React from "react"
import { Link } from 'react-router-dom'

const Card = ({location}) => {
    //récupère de le nom de l'emplacement de l'url
    const urlName = location.title.split(' ').join('_')
    //supprime les accents de l'url
    const urlNameNoAccents = urlName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    //URL
    const url = `article/${location.id}_${urlNameNoAccents}`
    return (
        <article>
            <Link to={url} >
                <h2>{location.title}</h2>
                <img src={location.cover} alt={"image " + location.title} />
            </Link>
        </article>
    )
}

export default Card

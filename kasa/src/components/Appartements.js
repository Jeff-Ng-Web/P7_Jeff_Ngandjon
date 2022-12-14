import axios from "axios"
import React from "react"
import {useEffect, useState} from "react"
import Card from "./Card"

const Appartements = () => {
    const [locationsData, setLocationsData] = useState([])
    useEffect(() => {
        axios
            .get("./logements.json")
            .then((res) => setLocationsData(res.data))
            .catch((error) => {
                console.log(error)
            })
    })
    return (
        <main className="locations">
            <div className="locations__container">
                {locationsData.map((location, id) => (
                    <Card key={id} location={location} />
                ))}
            </div>
        </main>
    )
}
export default Appartements

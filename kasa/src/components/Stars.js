import React from "react"
import Star from "../assets/logo/Star.svg"
import Star_Gray from "../assets/logo/Star_Gray.svg"

const Stars = ({stars}) => {
    //rating stars
    const starsNumber = stars && JSON.parse(stars)
    //create table to display stars images
    const starsString = "star ".repeat(5)
    let starsTable = starsString.split(" ")
    starsTable.pop()
    //find empty Stars number
    const emptyStarsNumber = 5 - starsNumber
    //tables of stars
    const fullStars = starsTable.splice(0, starsNumber)
    const emptyStars = starsTable.splice(0, emptyStarsNumber)

    return (
        <div className="content__info2__stars">
            {fullStars.map((rate, index) => (
                <img src={Star} alt="" key={index}/>
            ))}
            {emptyStars.map((emptyStar, index) => (
                <img src={Star_Gray} alt="" key={index}/>
            ))}
        </div>
    )
}

export default Stars

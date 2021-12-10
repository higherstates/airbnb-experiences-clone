import React from "react";

function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.img} className="card--img" alt={props.alt} />
            <div className="card--stats">
                <img src="./images/star.png" className="card--stats_star" alt="star" />
                <span className="card--stats_rating">{props.rating}</span>
                <span className="card--stats_reviews gray">({props.reviewCount})</span>
                <span className="card--stats_location gray">· {props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--cost">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}

export default Card;
import React from "react";
import "./card.css"

function Card(props) {
    console.log(props)
    console.log(props.picture.large)
    return (    
    <div className="card">
        <img src={props.picture.large} alt="{ JSON.stringify(props.name) }"></img>
        <p>{ props.name.first } { props.name.last } --- Phone: { props.phone }</p>
        <p>Gender: { props.gender }, Age: { props.dob.age }</p>
    </div>
    )
}

export default Card;
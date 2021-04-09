import React from "react";
import "./card.css"

function Card(props) {
    console.log(props)
    console.log(props.picture.large)
    return (    
    <div className="card">
        <img src={props.picture.large} alt="{ JSON.stringify(props.name) }"></img>
        <p>{ props.name.first } { props.name.last }</p>
        <p>{ props.gender }</p>
        <p>{ props.phone }</p>
    </div>
    )
}

export default Card;
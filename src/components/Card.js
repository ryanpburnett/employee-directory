import React from "react";

function Card(props) {
    console.log(props)
    return (    
    <div>
        <p>{ JSON.stringify(props.name) }</p>
        <p>{ props.gender }</p>
    </div>
    )
}

export default Card;
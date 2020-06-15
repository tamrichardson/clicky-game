import React from "react"

function CharacterCard(props) {
    return (
        <img onClick={() => props.clickListener(props.id)} src={props.image} alt="" />
    )
}
    
    export default CharacterCard;
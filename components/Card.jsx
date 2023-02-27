import React from "react"

function Card(props)
{
    return(
        <div className='card'>
            <img className='card_img' src={props.image} alt="Image of the event"/>
            <h3 className='card_title'>{props.title}</h3>
            <p className='card_description'>{props.description}</p>
            <button className='card_button'> Learn More </button>
        </div>
    )
}

export default Card;
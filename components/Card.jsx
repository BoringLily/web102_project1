import React from "react"

function Card(props)
{
    return(
        <div className='card'>
            <img className='card_img' src={props.image} alt="Image of the event"/>
            <h3 className='card_title'>{props.title}</h3>
            <div className='card_date'>{props.date}</div>
            <div className='card_location'>{props.location}</div>
            <a className='card_link' href={props.link}> Learn More </a>
        </div>
    )
}

export default Card;
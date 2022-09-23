import React from 'react';
import "./card.styles.css"; 

const Card = (props) => {
    return (    
        <div className='card-container'>
        <img alt='any' src={`https://robohash.org/${props.monster.id+3}?set=set5&size=180x180`}></img>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
    )
};

export default Card;

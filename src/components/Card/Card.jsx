import React from "react";
import './Card.css';


const Card = (props) => {
    return (
        <>
            {/* here we map through the data that will be imported using props from the Home home component  */}
            {props.details.map((item, index) =>( 
                <div className="card" key={index}>
                    <div className="card__image">
                        <img src={item.img} alt=""/>
                    </div>
                    <div>
                        <p className="card__title">{item.title}</p>
                        <p className="description">{item.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}


export default Card;
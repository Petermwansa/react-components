import React from "react";
import Card from "../Card/Card";
import CardData from "../../CardData";
import './Home.css';

const Home = () => {
    return(
        <>
            <div className="home__cards">
                {/* here we send the CardData as props to the Card component  */}
                <Card details={CardData}/>
            </div>
        </>
    )
}


export default Home;
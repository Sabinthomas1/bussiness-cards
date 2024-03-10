import React from "react";
import "./Home.css";
import connectArrow from '../assets/connect-arrow.svg'
import homeRound from '../assets/home-round.svg'
import downArrow from '../assets/downarrow.svg'

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-container-sec">
            <div className="home-text-sec"> 
                 <h1>
                Meet my friend:One tap,
                <br />
                endless business possibilities
            </h1>
                <p>Discover a world of efficiency and opportunity with 'Meet my friend'. With just one tap, our innovative platform opens the door to endless business possibilities, simplifying connections and empowering growth.</p>
              <div className="home-buttons">
                <button className="home-white-button" >check now</button>
                <button className="home-black-button">connect <img src={connectArrow} alt="" /></button>
                </div>
                </div>
            <div> <img className="home-round-image " src={homeRound} alt="" /></div>
            </div>
             <img className="home-downarrow" src={downArrow} alt="" />
        </div>

    );
};

export default Home;

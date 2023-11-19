import React from "react";
import '../styles/Home.css';
import HomeImage from "../images/Home3.jpg";
import Search from "../components/Search";

const Home = () => {
    
  
    return (
        <>
        <div className="home">
            <div className="homeLeft">
                
                <img src={HomeImage} alt="Home Image" className="homeImg"></img>
            </div>
            <div className="homeRight">
            <h1>Unleash Your Potential</h1>
                <p>Step into a world of strength, dedication, and transformation. Your journey to a healthier, stronger you starts now. Embrace the grind, celebrate the progress.</p>
            </div>
        </div>
        <Search />
        </>
    );
  };
  
  export default Home;
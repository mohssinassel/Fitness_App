import React, { useEffect } from "react";
import '../styles/Home.css';
import HomeImage from "../images/Home3.jpg";
import Search from "../components/Search";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration : 1000
        });
    });
  
    return (
        <>
        <div className="home">
        <div className='let' data-aos="fade-right" data-aos-delay="1000">LET'S</div>
        <div className='do' data-aos="fade-left" data-aos-delay="2000">DO</div>
        <div className='it' data-aos="fade-up" data-aos-delay="3000">IT</div>
            <div className="homeLeft" >
                
                <img src={HomeImage} alt="Home Image" className="homeImg" data-aos="zoom-in"></img>
            </div>
            <div className="homeRight">
            <span class="bg__blur first_blur"></span>  
            <span class="bg__blur header__blur"></span>
            <h1 className="firstH1"><span>MAKE</span> YOUR</h1>
            <h1 className="secondH1">BODY SHAPE</h1>
            <p>Step into a world of strength, dedication, and transformation.<br/> Your journey to a healthier, stronger you starts now. <br/>Embrace the grind, celebrate the progress.</p>
            </div>
        </div>
        <Search />
        </>
    );
  };
  
  export default Home;
import React from 'react';



// import Logo from '../assets/images/Logo.png';
import { Container } from 'reactstrap';
import { MdFavorite } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';


const Navbar = () => (
    <div className='navBar'>
        <div className='navBarLeft'>
            <div className='logo'>GY<CgGym className='logoIcon'/>M</div>
            <div className='navigation' >
                <div><NavLink to="/" className="linkMenu">Home</NavLink><span></span><span></span><span></span><span></span></div>
                <div><NavLink to="/exercices" className="linkMenu">Exercices</NavLink><span></span><span></span><span></span><span></span></div>
            </div>
        </div>
        <div className='navBarRight'>
            <span >
                <NavLink to="/favorite"><MdFavorite className='cartIcon'/></NavLink>
            </span>
        
      </div>
    
  </div>
);

export default Navbar;

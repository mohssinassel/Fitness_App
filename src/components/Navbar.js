    import React from 'react';



    // import Logo from '../assets/images/Logo.png';
    import { Container } from 'reactstrap';
    import { MdFavorite } from "react-icons/md";
    import { CgGym } from "react-icons/cg";
    import { NavLink } from 'react-router-dom';
    import '../styles/Navbar.css';
    import { useState } from 'react';       


    const Navbar = () => {
        const [isMenuOpen, setMenuOpen] = useState(false);

        const toggleMenu = () => {
            setMenuOpen(!isMenuOpen);
        };
        return (
            <div className={`navBar ${isMenuOpen ? 'open' : ''}`}>
                <div className='navBarLeft'>
                    <div className='logo'>GY<CgGym className='logoIcon'/>M</div>
                    <div className={`navigation ${isMenuOpen ? 'open' : ''}`} >
                        <div><NavLink to="/" className="linkMenu" onClick={toggleMenu}>Home</NavLink><span></span><span></span><span></span><span></span></div>
                        <div><NavLink to="/exercises" className="linkMenu" onClick={toggleMenu}>Exercices</NavLink></div>
                        <div><NavLink to="/favorite" className="linkMenu" onClick={toggleMenu}> Favorites</NavLink></div>
                    </div>
                </div>
                <div className={`menuToggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                </div>
            
            </div>
        );
        };

    export default Navbar;

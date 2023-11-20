import React from "react";
import { CgGym } from "react-icons/cg";
import '../styles/footer.css';

const Footer = () => {
    return (
            <div className="footer">
                <h1 className="footer__logo">GY<CgGym className='logoIcon'/>M</h1>
                <h2>Change Your Body</h2>
            </div>
    );
};
export default Footer;
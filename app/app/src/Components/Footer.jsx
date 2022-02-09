import React from 'react'
import logo from "../images/download.png"
import "../Css/Footer.css"


function Footer() {

    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <img src={logo} alt="Footer Logo" />
                </div>
                <p className="footer__text">©2019. All Rights Reserved</p>
                <a className="footer__link" href="https://github.com/KevinAllen4325" target="_blank">Github</a>
            </div>
        </footer>
    )
}

export default Footer;
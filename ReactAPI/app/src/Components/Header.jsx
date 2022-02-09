import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">React</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/qrcode" className="nav-link">QRCode</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/covid" className="nav-link" href="#">Covid</Link>
                            </li>
                            <li className="nav-item">  
                                <Link to="/random" className="nav-link" href="#">Random Image</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
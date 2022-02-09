import React from 'react';
import { useEffect, useState, useCallback, useContext } from 'react';
import logo from "../images/download.png";
import "../Css/Header.css";
import Search from './Search';
import { Link, useLocation } from "react-router-dom";
import { DarkMode } from '../App';

const style = {
    width: "32px",
    height: "32px",
    textAlign: "center",
    textTransform: "uppercase",
    borderRadius: "50%",
    backgroundColor: "#b81d24",
    color: "#e5e5e5",
    fontSize: "0.9em",
    fontWeight: "600",
    display: "flex",
    lineHeight: "32px",
    justifyContent: "center"
}

function Header() {
    const darkMode = useContext(DarkMode);
    const [local, setLocal] = useState(null);
    const [status,setStatus] = useState(false);
    const location = useLocation();
    const LogOut = useCallback(() => {
        if (local !== null) {
            return <span onClick={removeLocal} className="logout">Log Out</span>
        }
    }, [local])

    const removeLocal = useCallback(() => {
        window.localStorage.removeItem("data");
    }, [])

    useEffect(() => {
        const locals = JSON.parse(localStorage.getItem("data"));
        setLocal(locals)
    }, [location.pathname])

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/">
                        <img className="netflix__logo" src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="header__right">
                    <Search />
                    <div className="header__register" onClick = {() => status === false ? setStatus(true) : setStatus(false)}>
                        <Link to={{
                            pathname: `${local == null ? "/registration" : "/"}`
                        }} className="user">
                            <span className="header__register__link" style={local !== null ? style : null}>{local == null ? "Register" : `${local.firstName.charAt(0)}`}</span>
                        </Link>
                        {local !== null ? <div className="register__dropdown" style = {status !== false ? {display:"block"} : {display:"none"}}>
                            <div className="register__dropdown__content">
                                <div className="register__content__group">
                                    <h2 className="register__content__title">{local !== null ? `${local.firstName + ' ' + local.lastname}` : ""}</h2>
                                </div>
                                <div className="register__content__group">
                                    <p>
                                        <Link to="/createlist" className="create__list">Add List</Link>
                                    </p>
                                </div>
                                <div className="register__content__group">
                                    {LogOut()}
                                </div>
                            </div>
                        </div> : null}
                    </div>
                    <div className="dark__mode" onClick={() => darkMode.mode == false ? darkMode.setMode(true) : darkMode.setMode(false)} style={darkMode.mode == false ? { color: "#fff" } : { color: "#000" }}>
                        <span className="dark__mode__icon"><i className="fas fa-moon"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
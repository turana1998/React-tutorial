import React from 'react';
import "..//Css/Header.css";
import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { DarkMode } from '../App';
import { MoviesContext } from '../Context';

const style = {
    left:"30px"
}

function Search() {
    const darkMode = useContext(DarkMode);
    const { searchValue, setSearchValue, SearchMovies } = useContext(MoviesContext)
    const [isVisible, setIsVisible] = useState(false)
    const [left,setLeft] = useState()

    const searchAction = () => {
        if(isVisible === false) {
            setIsVisible(true)
            style.left="5px";
        } else if(isVisible === true) {
            setIsVisible(false)
            style.left="30px"
        }
        
    }

    return (
        <div className="header__search">
            <div className="header__search__form">
                <form action="">
                    <div className="form-group">
                        <input type="search" style={isVisible !== false ? { width: "200px",opacity:"1" } : { width: "0px",opacity:"0" }} value={searchValue} onChange={(e) => {
                            SearchMovies()
                            setSearchValue(e.target.value)
                        }} name="search" id="search" className="search__bar" placeholder="Search for movies.." />
                        <span className="header__search__icon" onClick={searchAction} style={darkMode.mode === false ? { color: "#e5e5e5",left:`${style.left}` } : { color: "#141414",left:`${style.left}` }}>
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search;
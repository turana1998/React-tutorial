import React from 'react';
import { useState, useContext } from 'react';
import shortid from "shortid";
import Slide from './Slide';
import "../Css/Movies.css";
import { Link } from "react-router-dom"
import { DarkMode } from '../App';
import { MoviesContext } from '../Context';

const css = {
    width: "280px"
}

function Trending({ categoryname, movies, list_id }) {
    const { searchValue, setCurrentPage } = useContext(MoviesContext)
    const darkMode = useContext(DarkMode);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);

    const prevSlider = () => {
        if (currentIndex === 0) {
            return;
        } else {
            setCurrentIndex(currentIndex - 1);
            setTranslateValue(translateValue - -(parseInt(css.width)))
        }

    }

    const nextSlider = () => {
        if (currentIndex === movies.length - 1) {
            setCurrentIndex(0);
            setTranslateValue(0);
        } else {
            setCurrentIndex(currentIndex + 1);
            setTranslateValue(translateValue + -(parseInt(css.width)));
        }

    }

    const newTitle = categoryname.replace(/[^A-Z0-9]/ig, "");
    return (
        <>
            <div className="movie__section">
                <div className="movie__slider__controls">
                    <span className="movie__slider__prev__control" onClick={prevSlider} >
                        <i className="fas fa-angle-left"></i>
                    </span>
                    <span className="movie__slider__next__control" onClick={nextSlider} >
                        <i className="fas fa-angle-right"></i>
                    </span>
                </div>
                <div className="movie__header">
                    <Link to={{
                        pathname: `/movie-update/${newTitle}`, state: {
                            listId: list_id
                        }
                    }} className="movie__options__edit">
                        <span className="movie__options__edit__icon"><i className="fas fa-pen-square"></i></span>
                    </Link>
                    <h3 className="movie__title" style={darkMode.mode === false ? { color: "#e5e5e5" } : { color: "#141414" }}>{categoryname}</h3>
                </div>
                <div className="movie__slider">
                    <div className="movie__slider__wrapper" style={{
                        transform: `translateX(${translateValue}px)`,
                        transition: 'transform ease-out 0.45s,margin-left .3s'
                    }}>
                        {
                            movies?.map((item, index) => {
                                return (
                                    <Slide key={shortid.generate()} list_id={list_id} style={css} {...item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trending;
import React from 'react'
import { Link } from "react-router-dom";
import "..//Css/SearchMovies.css"

function SearchMovie({ onClick, list_id, style, id, backdrop_path, original_name, original_title, vote_average, popularity, release_date, first_air_date, media_type }) {
    const IMG_API = "https://image.tmdb.org/t/p/w500";
    return (
        <div className="search__movie__content" style={{ maxWidth: "268px" }} >
            <div className="search__movie__content__overlay"></div>
            <div className="search__movie__content__img">
                <img src={IMG_API + backdrop_path} alt={original_title} />
            </div>
            <Link to={{
                pathname: `/${media_type}/${id}`, state: {
                    mediaType: media_type
                }
            }} className="single__post__movie">
                <div className="search__movie__content__details">
                    <h3 className="search__movie__content__title">{original_name || original_title}</h3>
                    <div className="search__movie__content__subinfo">
                        <p className="movie__green">{popularity}</p>
                        <p className="movie__rate">{vote_average}</p>
                        <p className="movie__duration">{release_date || first_air_date}</p>
                    </div>
                </div>
            </Link>
            <div className="search__movie__options">
                <button className="search__movie__options__btn" onClick={onClick}>
                    <span className="movie__options__icon"><i className="fas fa-plus"></i></span>
                </button>
            </div>
        </div>
    )
}

export default SearchMovie;
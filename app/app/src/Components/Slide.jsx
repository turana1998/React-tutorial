import React from 'react';
import { useContext, useRef } from 'react';
import { Link } from "react-router-dom";
import { MoviesContext } from '../Context';
import SDK from '../SDK';
import "../Css/Movies.css";

const cssTransition = {
    transform: "scale(1.7) rotate(.0001deg)",
    marginLeft: "97px",
    marginRight: "98px"
}

const Slide = ({ list_id, style, id, backdrop_path, original_name, original_title, vote_average, popularity, release_date, first_air_date, media_type }) => {
    const { searchValue } = useContext(MoviesContext);
    const sdk = useRef(new SDK());
    const IMG_API = "https://image.tmdb.org/t/p/w500";
    const removeItems = async (e) => {
        e.preventDefault();
        const data = {
            items: [
                {
                    media_type: media_type,
                    media_id: id
                }
            ]
        }

        try {
            await sdk.current.RemoveItems(list_id, data);
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="movie__slider__slide" style={searchValue.trim() === "" ? style : { maxWidth: "280px" }}>
            <div className="movie__slider__slide__overlay"></div>
            <div className="movie__slider__slide__img">
                <img src={IMG_API + backdrop_path} alt={original_title} />
            </div>
            <Link to={{
                pathname: `/${media_type}/${id}`, state: {
                    mediaType: media_type
                }
            }} className="single__post__movie">
                <div className="movie__slider__slide__details">
                    <h3 className="movie__slider__slide__title">{original_name || original_title}</h3>
                    <div className="movie__slider__slide__subinfo">
                        <p className="movie__green">{popularity}</p>
                        <p className="movie__rate">{vote_average}</p>
                        <p className="movie__duration">{release_date || first_air_date}</p>
                    </div>
                </div>
            </Link>
            <div className="movie__options">
                <button className="movie__options__btn" onClick={removeItems}>
                    <span className="movie__options__icon"><i className="fas fa-minus"></i></span>
                </button>
            </div>
        </div>
    )
}

export default Slide;
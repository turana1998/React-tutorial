import React from 'react'
import { useContext, useEffect, useState, useRef } from 'react';
import { MoviesContext } from '../Context';
import { useParams, useLocation } from "react-router-dom";
import "../Css/SinglePost.css"
import { DarkMode } from '../App';
import SDK from '../SDK';

function SinglePost() {
    const { movies, searchValue } = useContext(MoviesContext);
    const darkMode = useContext(DarkMode);
    const [movie, setMovie] = useState(null);
    let { id } = useParams();
    const location = useLocation();
    const mediaType = location.state?.mediaType;
    const sdk = useRef(new SDK());
    const IMG_API = "https://image.tmdb.org/t/p/w500";

    const Detail = async () => {
        try {
            const detData = await sdk.current.MovieDetail(mediaType, id);
            setMovie(detData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        Detail()
    }, [])

    return (
        <div className="movie-detail">
            <div className="movie-detail__img">
                <img src={IMG_API + movie?.poster_path} alt="Poster" />
            </div>
            <div className="movie__subdetail" style={darkMode.mode === false ? { color: "#e5e5e5" } : { color: "#141414" }}>
                <h1 className="movie-detail__title">{movie?.original_name || movie?.original_title}</h1>
                <p className="movie__rating"><strong>Rating:</strong> {movie?.vote_average}</p>
                <p className="movie__start"><strong>Date:</strong> {movie?.first_air_date || movie?.release_date}</p>
                <p className="movie__overview"><strong>Overview:</strong> {movie?.overview}</p>
            </div>
        </div>
    )
}

export default SinglePost;
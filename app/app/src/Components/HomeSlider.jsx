import React from 'react';
import { useState, useRef, useContext, useEffect } from 'react';
import shortid from "shortid";
import { MoviesContext } from '../Context';
import SDK from '../SDK';
import "../Css/Slider.css"

const style = {
    width: "1200px"
}

function HomeSlider() {
    const { searchValue } = useContext(MoviesContext)
    const [homeData, setHomeData] = useState([]);
    const [translateValue, setTranslateValue] = useState(0);
    const slides = useRef(null);
    const sdk = useRef(new SDK());
    const slideNum = homeData.length;

    const sliderPrev = () => {
        if (translateValue !== 0) {
            setTranslateValue(translateValue + slides.current.clientWidth)
        }
        else if (translateValue <= slideNum) {
            setTranslateValue(translateValue + -(slideNum - 1) * slides.current.clientWidth);
        }
    }

    const sliderNext = () => {
        if (translateValue !== -((slideNum - 1) * slides.current.clientWidth)) {
            setTranslateValue(translateValue - slides.current.clientWidth)
        }
        else if (translateValue <= slideNum - 1) {
            setTranslateValue(0);
        }
    }

    const getMovies = async () => {
        try {
            const movieData = await sdk.current.HomeMovies(7112925);
            setHomeData(movieData?.results)           
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovies();
    },[])

    return (
        <>
            {
                searchValue.trim() === "" ? <div className="main">
                    <div className="main__container">
                        <div className="carousel">
                            <div className="carousel__slider" style={{
                                transform: `translateX(${translateValue}px)`,
                                transition: 'transform ease-out 0.45s'
                            }} ref={slides}>
                                {
                                    homeData.map((item) => {
                                        return (
                                            <Slide key={shortid.generate()} {...item} />
                                        )
                                    })
                                }
                            </div>
                            <button className="carousel__control carousel__control__prev" onClick={sliderPrev}>
                                <span className="carousel__control__icon">
                                    <i className="fas fa-caret-left"></i>
                                </span>
                            </button>
                            <button className="carousel__control carousel__control__next" onClick={sliderNext}>
                                <span className="carousel__control__icon">
                                    <i className="fas fa-caret-right"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div> : null
            }
        </>
    )
}

const Slide = ({ original_title,original_name, backdrop_path, overview, release_date, vote_average,popularity }) => {
    const IMG_API = "https://image.tmdb.org/t/p/w500";
    return (
        <div className="carousel__slide" style={style}>
            <div className="carousel__slide__content">
                <div className="carousel__slide__content__item">
                    <div className="carousel__slide__info">
                        <h2 className="carousel__slide__info__title carousel__slide__info__one__title">{original_title ?? original_name}</h2>
                        <h3 className="carousel__slide__info__title">{release_date}</h3>
                        <p className="carousel__slide__info__summary">
                            {overview}
                        </p>
                        <div className="carousel__slide__updown">
                            <i className="far fa-thumbs-up"></i>
                            <i className="far fa-thumbs-down"></i>
                        </div>
                        <p className="carousel__slide__info__summary">Popularity: {popularity}</p>
                        <p className="carousel__slide__info__summary carousel__slide__info__last__summary">Rating: {vote_average}</p>
                    </div>
                </div>
                <div className="carousel__slide__img" style={{ backgroundImage: `url(${IMG_API + backdrop_path})` }}></div>
            </div>
        </div>
    )
}

export default HomeSlider;
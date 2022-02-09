import React from 'react';
import { useState, useContext, useEffect } from 'react';
import shortid from "shortid";
import { useInView } from 'react-intersection-observer';
import { BeatLoader } from "react-spinners"
import Trending from './Trending';
import Modal from './Modal';
import SearchMovie from './SearchMovie';
import "../Css/Movies.css";
import { MoviesContext } from '../Context';

const loaderCss = {
    display: "flex",
    justifyContent: "center"
}

function Movies() {
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    const { movies, SearchMovies,currentPage,setCurrentPage, searchValue, searchDatas } = useContext(MoviesContext);
    const [isOpen, setIsOpen] = useState(false)
    const [modalInfo, setModalInfo] = useState(null)

    const modalClick = (index) => {
        const datas = searchDatas?.searchMovies[index];
        setModalInfo(datas);
        setIsOpen(true)
    }

    useEffect(() => {
        if(inView){
            setCurrentPage(currentPage + 1)
        }
    },[inView])

    useEffect(() => {
        SearchMovies(true)
    },[currentPage])

    return (
        <>
            {isOpen && <Modal {...modalInfo} closeModal={setIsOpen} />}
            <div className="movie__wrapper">
                <div className="movie__sections" style={searchValue.trim() === "" ? { display: "block" } : { display: "flex", flexWrap: "wrap" }}>
                    {
                        searchValue.trim() === "" ? movies?.map((obj) => {
                            return (
                                <Trending key={shortid.generate()} list_id={obj?.id} categoryname={obj?.name} movies={obj?.results} />
                            );
                        }) : searchDatas?.searchMovies?.map((data, index) => {
                            const obj = {};
                            if(index === searchDatas?.searchMovies?.length -1) {
                                obj.ref = ref
                            }
                            return (
                                <div {...obj}><SearchMovie onClick={() => { modalClick(index) }} {...data} /></div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Movies;
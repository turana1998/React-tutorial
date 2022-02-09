import React from 'react'
import { useState, createContext, useEffect, useCallback, useRef } from 'react';
import SDK from './SDK';

export const MoviesContext = createContext({})

export function MoviesProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    const [allMovies, setAllMovies] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [list, setList] = useState(null);
    const [movies, setMovies] = useState();
    const [searchDatas, setSearchDatas] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const prevController = useRef(null);
    const sdk = useRef(new SDK());

    const getData = async () => {
        try {
            const data = await sdk.current.getLists();
            if (searchValue.trim() === "") {
                setList(data?.results)
            }
        } catch (error) {
            console.log(error)
        }

    }

    const getMovies = useCallback(async () => {
        const list_id = [];
        for (let i = 0; i < list?.length; i++) {
            list_id.push(list[i].id)
        }

        try {
            Promise.all(list_id?.map(id => sdk.current.getMovies(id))).then((res) => {
                if (searchValue.trim() === "") {
                    setAllMovies(res)
                }
            })
        } catch (error) {
            console.log(error)
        }

    }, [list])

    const SearchMovies = async (isInfinity = false, { page = 1 } = {}) => {
        if (searchValue.trim() === "") {
            return;
        }
        try {
            const controller = new AbortController();

            if (prevController.current) {
                prevController.current.abort();
            }
            prevController.current = controller;
            const searchData = await sdk.current.SearchMovies(searchValue, { abortSignal: controller.signal,page: currentPage });
            if (isInfinity) {
                setSearchDatas(
                    {
                        name: "Search results",
                        searchMovies: [...searchDatas?.searchMovies, ...searchData?.results?.filter(w => w?.media_type !== "person" && w?.backdrop_path)]
                    }
                )
            } else {
                setSearchDatas(
                    {
                        name: "Search results",
                        searchMovies: searchData?.results?.filter(w => w?.media_type !== "person" && w?.backdrop_path)
                    }
                )
            }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (searchValue.trim() === "") {
            getData()
        } else {
            SearchMovies()
        }
    }, [searchValue])

    useEffect(() => {
        if (allMovies !== null) {
            setMovies(allMovies)
        }
    }, [allMovies])

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(true)
        }, 1300);
        return () => clearTimeout(loadingTimeout);
    }, [movies])

    useEffect(() => {
        if (list !== null) {
            getMovies()
        }
    }, [list])

    return (
        <MoviesContext.Provider value={{
            movies,
            searchValue,
            list,
            isLoading,
            currentPage,
            searchDatas,
            setMovies,
            setSearchValue,
            SearchMovies,
            setList,
            setIsLoading,
            setCurrentPage,
            setSearchDatas
        }}>
            {children}
        </MoviesContext.Provider>
    )
}

export default MoviesProvider;
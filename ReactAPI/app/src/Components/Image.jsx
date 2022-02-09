import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import '../App.css'

function Image() {
    const [url, setUrl] = useState();

    const Cat = useCallback(() => {
        fetch("https://cataas.com/cat")
            .then((res) => {
                return res.blob();
            }).then((data) => {
                setUrl(URL.createObjectURL(data))
            })
    },[url])

    useEffect(() => {
        Cat()
    }, [])

    return (
        <div className="wrapper">
            <div className="wrapper__img">
                <img src={url} alt="Image" />
            </div>
            <button>Changed</button>
        </div>
    )
}

export default Image;
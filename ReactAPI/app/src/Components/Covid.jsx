import React from 'react'
import { useState, useEffect, useRef } from 'react';
import "../App.css"

function Covid() {

    const [stateInfo, setStateInfo] = useState();
    const [vaccinesInfo, setVaccinesInfo] = useState();

    const [value, setValue] = useState();
    const stateRef = useRef(null);

    const getValue = (e) => {
        e.preventDefault();
        let stateValue = stateRef.current.value;
        setValue(stateValue)
    }

    useEffect(() => {
        fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${value}`)
            .then((res) => {
                return res.json();
            }).then(data => {
               for(let datas in data) {
                   console.log(data[datas])
                   setStateInfo(data[datas])
               }
            })

        // fetch(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${value}`)
        //     .then((res) => {
        //         return res.json();
        //     }).then((data) => {
        //         for(let infos in data) {
        //             setVaccinesInfo(data[infos])
        //         }
        //     })
    }, [value])



    return (
        <div className="col-md-8 offset-2">
            <div className="wrapper__form mt-4 d-flex">
                <div className="form-group">
                    <input ref={stateRef} type="text" name="state" id="state" className="form-control" />
                </div>
                <div className="form-group mx-2">
                    <button onClick={getValue} type="submit" className="btn btn-success">Click Me</button>
                </div>
            </div>
            <div>
                <p>Rəhmətə gedən insanların sayı: {stateInfo?.deaths}</p>
                <p>Təsdiqlənən insaların sayı : {stateInfo?.confirmed}</p>
            </div>
        </div>
    )
}

export default Covid;
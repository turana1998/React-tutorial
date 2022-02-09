import React from 'react'
import { useContext, useState, useEffect, useRef } from 'react';
import "..//Css/CreateList.css"
import { MoviesContext } from '../Context';
import { DarkMode } from '../App'
import { useParams,useLocation,useNavigate  } from "react-router-dom";
import SDK from '../SDK';

function Update() {
    const { list } = useContext(MoviesContext);
    const darkMode = useContext(DarkMode)
    const [listdata, setListData] = useState(null);
    const { name } = useParams();
    const location = useLocation();
    const router = useNavigate ();
    const listId = location.state?.listId
    const listNameRef = useRef(null);
    const listDescriptionRef = useRef(null)
    const sdk = useRef(new SDK())
    
    const UpdateList = async () => {
        const data = {
            name:listNameRef.current.value,
            description:listDescriptionRef.current.value
        }

        await sdk.current.UpdateList(listId,data)
    }

    useEffect(() => {
        const res = () => {
            const obj = list?.find((w) => w?.name.replace(/[^A-Z0-9]/ig, "") === name);
            if(obj) return obj;
        }
        setListData(res())
    }, [])
    return (
        <div className="create__list__wrapper">
            <div className="create__list__form">
                <form action="" onSubmit={() => {
                    UpdateList()
                    router.push({
                        pathname:"/"
                    })
                }}>
                    <div className="create__list__form__group">
                        <label className="create__list__title" htmlFor="Name" style={darkMode.mode === false ? {color:"#e5e5e5"} : {color:"#141414"}}>Name</label>
                        <input ref={listNameRef} type="text" onChange={(e) => {
                            setListData(e.target.value)
                        }} value={listdata?.name} name="name" id="name" className="create__list__form__control" style={{ height: "6px" }} />
                    </div>
                    <div className="create__list__form__group">
                        <label className="create__list__title" htmlFor="Description" style={darkMode.mode === false ? {color:"#e5e5e5"} : {color:"#141414"}}>Description</label>
                        <textarea ref={listDescriptionRef} onChange={(e) => {
                            setListData(e.target.value)
                        }} type="text" value={listdata?.description} name="description" id="description" className="create__list__form__control" />
                    </div>
                    <div className="create__list__form__group">
                        <label className="create__list__title" htmlFor="General List" style={darkMode.mode === false ? {color:"#e5e5e5"} : {color:"#141414"}}>General List?</label>
                        <select className="general__list" name="general__list" id="general__list">
                            <option value="1" selected="selected">Yes</option>
                            <option value="0">No</option>
                        </select>
                    </div>
                    <div className="create__list__form__group">
                        <label className="create__list__title" htmlFor="Sort By" style={darkMode.mode === false ? {color:"#e5e5e5"} : {color:"#141414"}}>Sort By</label>
                        <select className="sort__by" name="sort__by" id="sort__by">
                            <option value="original_order.asc" selected="selected">Orijinal Artan</option>
                            <option value="original_order.desc">Orijinal Azalan</option>
                            <option value="vote_average.asc">Artan Oylar</option>
                            <option value="vote_average.desc">Artan Oylar</option>
                            <option value="primary_release_date.asc">Artan Yayınlanma Tarihi</option>
                            <option value="primary_release_date.desc">Azalan Yayınlanma Tarihi</option>
                            <option value="title.asc">Başlık (A-Z)</option>
                            <option value="title.desc">Başlık (Z-A)</option>
                        </select>
                    </div>
                    <button type="submit" className="create__list__btn">Update List</button>
                </form>
            </div>
        </div>
    )
}

export default Update;
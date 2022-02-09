import React from 'react'
import { useContext, useMemo, useRef } from 'react';
import "..//Css/Movies.css"
import { MoviesContext } from '../Context';
import SDK from '../SDK';

function Modal({ closeModal, id, media_type }) {
    const { list } = useContext(MoviesContext);
    const listName = useRef(null);
    const sdk = useRef(new SDK());
    const Lists = useMemo(() => {
        return (
            <>
                {
                    list?.map((item) => {
                        return (
                            <option value={item?.id}>{item?.name}</option>
                        )
                    })
                }
            </>
        )
    }, [list])

    const AddItems = async (e) => {
        e.preventDefault();
        const list_id = listName.current.value;
        const data = {
            items: [
                {
                    media_type: media_type,
                    media_id: parseFloat(id)
                }
            ]
        }

        try {
            await sdk.current.AddItems(list_id, data)
        } catch (error) {
            console.log(error)
        }

        if(data) {
            alert("Movie to list added")
        }

    }

    return (
        <div className="tooltip">
            <div className="tooltip__content">
                <span className="close__modal" onClick={() => closeModal(false)}><i className="fas fa-times"></i></span>
                <div className="tooltip__popup">
                    <div className="tooltip__dropdown">
                        <button onClick={AddItems} className="tooltip__list__btn" type="button">Add Items</button>
                        <select ref={listName} className="tooltip__dropdown__select" name="movie__list" id="dropdown__items">
                            <option value="0" selected="selected">Add it to one of your lists...</option>
                            {Lists}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
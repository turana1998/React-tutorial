import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';

function QRcode() {

    const [qrcode, setQRCODE] = useState(null);
    const [value, setValue] = useState(null)
    const [color,setColor] = useState(null)
    const qrcodeRef = useRef(null)

    const getValue = useCallback((e) => {
        e.preventDefault()
        const qrcodeValue = qrcodeRef.current.value;
        setValue(qrcodeValue);
    }, [])

    useEffect(() => {
        fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}&color=${color}`)
            .then((res) => {
                return res.blob();
            }).then((data) => {
                setQRCODE(URL.createObjectURL(data));
            })
    }, [value,color])

    return (
        <div className="col-md-4 offset-4">
            <div className="wrapper__form mt-4 d-flex justify-content-center">
                <div className="form-group">
                    <input ref={qrcodeRef} type="text" name="qrcode" id="qrcode" className='form-control' />
                </div>
                <div className="form-group mx-2">
                    <input type="submit" value="Check" onClick={getValue} className="btn btn-success" />
                </div>
                <div className="qrcode__img">
                    <img src={qrcode} alt="QRCode" />
                </div>
            </div>
            <div className="wrapper__radio__buttons d-flex justify-content-evenly">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" onClick={() => setColor("255-0-0")} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                        Red
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" onClick={() => setColor("255-255-0") } type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                        Yellow
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" onClick={() => setColor("0-255-0")} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                    <label className="form-check-label" htmlFor="inlineRadio3">Green</label>
                </div>
            </div>
        </div>
    )
}

export default QRcode;
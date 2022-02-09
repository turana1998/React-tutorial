import { forwardRef, useState } from 'react'

const Child = forwardRef((props, reference) => {

    const [XorO, setXorO] = useState()

    return <>
        <input ref={reference} type="text" className="border-2 border-black" onChange={
            (e)=>{
                const customData = [...props.data]
                customData.push({id: customData.length+1, name: e.target.value})
                props.setData(customData)
            }
        }/>
    </>

})

export default Child;
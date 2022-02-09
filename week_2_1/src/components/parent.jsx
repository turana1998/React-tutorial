import { useRef, useState } from 'react'
import { generate } from 'shortid'
import Child from './child'

const Parent = () => {

    // const inputRef = useRef(null)

    const [data, setData] = useState([
        { id: 1, name: "Tuncay" }, // ntn7tt
        { id: 2, name: "Bayramov" }, // h4wgw4g
        { id: 3, name: "Aliyev" } // q3dhd5
    ])

    return (
        <div className="flex flex-col items-center w-full space-y-3">

            {data.map((item, index) => <Child key={generate()} setData={setData} data={data}/>)}

            {/* {data.map((item, index) => {

                return <div className="w-[150px]" key={generate()}>
                    <input type="text" value={` Bu ${index}`} className="border-2 border-black" />
                    <button onClick={() => {
                        const customData = [...data]
                        customData.splice(index, 1)
                        setData(customData)
                    }}>
                        Remove
                    </button>
                </div>
            })} */}


            {/* <h1>Parent</h1>
            <Child ref={inputRef} />

            <button onClick={()=> console.log(inputRef.current.value)}>
                Click
            </button> */}
        </div>
    )

}

export default Parent;
import React, { useContext } from 'react';
import { SampleContext } from '../App';
import Child3 from './Child3';

export default function Child2() {
    const [store, setStore] = useContext(SampleContext)

    return <div>Child2
        <input type="text" className="border-2 border-black"
            onChange={(e) => setStore({ ...store, name: e.target.value })} />
        <Child3 />
    </div>;
}

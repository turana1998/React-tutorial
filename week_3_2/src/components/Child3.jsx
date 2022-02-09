import { useContext } from 'react';
import { SampleContext } from '../App';

export default function Child3() {
    const [store] = useContext(SampleContext)

    return <div>{store.name} - {store.surname} - {store.age}</div>;
}

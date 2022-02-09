import { useParams } from 'react-router-dom'

export default function Blog() {

    const params = useParams()

    console.log(params)

    return <div>Blog - {params.surname} - {params.name}</div>;
}

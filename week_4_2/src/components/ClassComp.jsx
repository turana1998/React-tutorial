import { Component } from 'react';
import { useLocation } from 'react-router-dom'
import { Context } from '../App'

class ClassComp extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            name: 'Turana',
            surname: '',
            age: 0,
            nameList: []
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        console.log(this);
        // this.setState({
        //     ...this.state,
        //     name: 'Mehemmed'
        // })
    }

    onChange2 = () => {
        this.setState((prevState) => ({
            ...this.state,
            name: 'Elnara',
            age: prevState.age + 1
        }))
    }

    componentDidMount() {
        this.a = window.addEventListener('scroll', () => {
            console.log('scroll');
        });
        //console.log(this.state.name) // useEffect empty array
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("useEffect no array")
        if (this.state.name !== prevState.name) {
            console.log('Name changed - useEffect with full array ');
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.a);
    }

    render() {
        console.log(this.state.name)
        return <Context.Consumer>
            {({ name }) => (
                <>
                    <div>{this.state.name} {this.props.surname} {this.state.age}</div> <br />
                    <button onClick={this.onChange2} className="bg-red-500 p-3">
                        Change Name
                    </button>
                    {name}
                </>
            )}
        </Context.Consumer>
    }
}

const WithClassComp = (ClassProp) => {
    return function MyComponent() {
        const location = useLocation()
        return <ClassProp location={location} />
    }
}

export default WithClassComp(ClassComp);



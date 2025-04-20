import React from "react"

class Car extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "blue",
            model: "Mustang",
            brand: "Ford",
            year: 1964
        }
    }
    shouldComponentUpdate() {
        return true
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: "white" })
        }, 3000)
    }
    changeColor = () => {
        this.setState({ color: "maroon" })
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model}
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}
                >
                    Change Color
                </button>
            </div>
        )
    }
}

export class RedCar extends React.Component {
    render() {
        return <h2>I am a {this.props.color} Car</h2>
    }
}

export class Model extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <h2>I am a {this.props.model}</h2>
    }
}

export default Car
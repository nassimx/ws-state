import React, { Component } from 'react'

export default class counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            memory: null
        }
    }
    componentDidMount = () => {
        this.setState({
            memory: setInterval(() => {
                this.setState({ counter: this.state.counter + 1 })
            }, 1000)
        })
    }
    componentDidUpdate() {
        console.log(this.state.memory)
    }
    componentWillUnmount() {
        clearInterval(this.state.memory)
    }
    render() {
        return (
            <div>
                <h2>{this.state.counter}</h2>
            </div>
        )
    }
}

// type rcc- react class components
import React, { Component } from 'react'

export default class Random extends Component {
    constructor(props) {
        super(props)
        console.log(props);

    }
    render() {
        return (
            <>
                <p>This is a Random Page</p>
                <p>I am working at:{this.props.comp} </p>
            </>
        )
    } 
}

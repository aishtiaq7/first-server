import React, { Component } from 'react'

export default class LoginClass extends Component {
    constructor(){
        super();
        this.state = {
            email:''
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        //
    }   
    render() {
        return (
            <div>
                <h3>LoginClassComponent</h3>
            </div>
        )
    }
}

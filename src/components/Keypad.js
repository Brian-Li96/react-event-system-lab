import React, {Component} from "react";

// Code Keypad Component Here
export default class KeyPad extends Component {

    handleInputPassword = () => console.log('Entering password...')

    render() {
        return (
            <div>
                <input 
                    type="password"
                    onKeyUp={this.handleInputPassword}
                />
            </div>
        )
    }
}
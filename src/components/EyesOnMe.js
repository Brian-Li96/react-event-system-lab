import React, {Component} from "react";

// Code EyesOnMe Component Here
export default class EyesOnMe extends Component {

    focusHandle = () => console.log('Good!')
    blurHandle = () => console.log('Hey! Eyes on me!')


    render() {
        return(
            <button onFocus={this.focusHandle} onBlur={this.blurHandle} >

            </button>
        )
    }
}

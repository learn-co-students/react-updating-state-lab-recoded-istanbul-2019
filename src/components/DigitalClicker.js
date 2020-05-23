// Code DigitalClicker Component Here
import React, {Component} from 'react';
export class DigitalClicker extends Component {
    constructor(){
        super()
        this.state ={
            timesClicked : 0,
        }
    }
    newFun= ()=> {
        this.setState(perState=>{
            return {
                timesClicked: perState.timesClicked +1
            }
        })
    }
    render (){
        return (
            <div>
                <button onClick = {this.newFun} > {this.state.timesClicked} </button>
            </div>
        )
    }
    }
export default DigitalClicker

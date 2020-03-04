// Code DigitalClicker Component Here
import React, { Component } from 'react';
class DigitalClicker extends Component {
    constructor(){
        super();
        this.state={
            timesClicked:0
        }
    }
    handelClick=()=>{
        this.setState((previousState)=> {
            return {timesClicked: previousState.timesClicked +1}
         })
    }
  render() {
   return (
       <div>
       <button onClick={this.handelClick}>{this.state.timesClicked}</button></div>
   )
  }
}
export default DigitalClicker;
// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {

    constructor(){
        super()

        this.state = {
            timesClicked : 0
        }

        this.incrementCounter = this.incrementCounter.bind(this)
        this.resetCounter = this.resetCounter.bind(this)
    }

    incrementCounter(){
        this.setState((state)=>{
            return {timesClicked:state.timesClicked+1}
        })
    }

    resetCounter() {
        this.setState( {timesClicked:0} )
    }
    
    render(){
        return(
            <div id="global2">
                <div>Count: {this.state.timesClicked}</div>
                <div>
                    <button onClick = {this.incrementCounter}>Increment</button>
                    <button onClick = {this.resetCounter}>Reset</button>
                </div>
            </div>
            
        )
    }
}

export default DigitalClicker
import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }
    counter = () => this.setState(prevState => {
        return {
            timesClicked: prevState.timesClicked + 1
        }
    })
    render() {
        const { timesClicked } = this.state;
        return (
            <React.Fragment>
                <label for={timesClicked}></label>
                <button id={timesClicked} value={timesClicked} onClick={this.counter}>{timesClicked}</button>
            </React.Fragment>
        )
    }
}
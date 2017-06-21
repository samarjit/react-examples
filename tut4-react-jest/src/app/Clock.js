import React from 'react'

export default class Clock extends React.Component {
    formatTime(timeInSeconds){
        var d = new Date(0);
        d.setHours(0)
        d.setMinutes(0)
        d.setSeconds(timeInSeconds)
        return d.toLocaleTimeString();
    }

    setTimeInSeconds() {

    }
    constructor(props) {
        super(props);
        if(props.timeInSeconds) {
           this.state = {time: this.formatTime(props.timeInSeconds) };
        } else {
            this.state = {time:this.formatTime(0)};
        }
    }

    componentDidMount() {
       //setInterval( () => { this.setState({time: new Date()}); }, 1000);
    }
    render() {
        return (
            <span className="clock-text">{this.state.time}</span>
        )
    }
}
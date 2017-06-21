import React from 'react'


export default class Countdown extends React.Component {
    constructor(props){
        super(props)
        this.state = {};

    }
    componentDidMount(){
        setTimeout( ()=> { if(this.state.count>0) this.state.count--; } , 1000);
    }

    handleSetCountdownTime(count){
        this.state.count = count;
        this.state.countdownStatus = 1;
    }

    render(){
        return (<div>Test Countdown</div>)
    }
}
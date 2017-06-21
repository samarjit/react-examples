import React from 'react';
import Clock from './app/Clock'
import CountdownForm from './app/Countdown.form'

export default class App extends React.Component {
  render () {
    return <div> Hello React! <Clock/> <CountdownForm/> </div>;
  }
}
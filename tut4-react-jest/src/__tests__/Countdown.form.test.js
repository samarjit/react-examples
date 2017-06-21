import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import CountdownForm from '../app/Countdown.form'
import ls from "../utils/localStorage.js"

beforeAll(() => {
    console.log("before fired")
    const ls = require("../utils/localStorage.js");
    ls.setLocalStorage();
});

describe('CountdownForm', () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CountdownForm/>, div);
    });

    it('should call onSetCountdownTime if valid seconds entered', () => {
        const spy = jest.fn();
        const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdownTime={spy}/>);
        const form = TestUtils.findRenderedDOMComponentWithTag(countdownForm, 'form');
        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit(form);
        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call onSetCountdownTime if invalid seconds entered', () => {
        const spy = jest.fn();
        const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdownTime={spy}/>);
        const form = TestUtils.findRenderedDOMComponentWithTag(countdownForm, 'form');
        countdownForm.refs.seconds.value = '1H63';
        TestUtils.Simulate.submit(form);
        expect(spy).not.toHaveBeenCalled();
    });

    describe('login', ()=> {
        ls.setLocalStorage();
        console.log(global.localStorage)
        const spy = jest.fn();
        const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdownTime={spy}/>);
        countdownForm.login();
       // countdownForm.logout();
        expect(countdownForm.state.loggedIn).toBe(true)
    })

    describe('logout', ()=> {
        ls.setLocalStorage();
        const spy = jest.fn();
        const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdownTime={spy}/>);
        countdownForm.login();
       countdownForm.logout();
       expect(countdownForm.state.loggedIn).toBe(undefined)
    })
});
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Clock from '../app/Clock';

describe('Clock', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Clock />, div);
    });
    
    describe('render', () => {
        it('should render the clock', () => {
            const clock = shallow(<Clock timeInSeconds={63} />);
            const time = <span className="clock-text">00:01:03</span>; 
            console.log(clock.html())
            expect(clock.contains(time)).toEqual(true);
        });
    }); 
    
    describe('formatTime', () => {
        it('should format seconds', () => {
            const clock = shallow(<Clock />);
            const seconds = 635;
            const expected = '00:10:35';
            const actual = clock.instance().formatTime(seconds); 
            expect(actual).toBe(expected);
        });

        it('should format seconds when minutes or seconds are less than 10', () => {
            const clock = shallow(<Clock />);
            const seconds = 65;
            const expected = '00:01:05';
            const actual = clock.instance().formatTime(seconds);
            console.log(actual)
            expect(actual).toBe(expected);
        });
    });
});
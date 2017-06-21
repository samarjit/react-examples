import reducer, { defaultState } from 'redux/modules/userAuth';
import deepFreeze from 'deep-freeze';

describe('(Redux) userAuth', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(defaultState);
    });
  });
});

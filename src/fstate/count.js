import React from 'react';
import { provideState, injectState, softUpdate } from 'freactal';

import delay from './delay';

const Child = injectState(({ state, effects }) => (
  <div>
    <div>
      Our counter is at: {state.counter}
    </div>
    <div>
      The added version is: {state.added5}
    </div>
    <div>
      The squared version is: {state.squared}
    </div>
    <button onClick={effects.addOne}>Add one</button>
    <button onClick={effects.addOneAsync}>Add one async</button>
  </div>
));

const wrapComponentWithState = provideState({
  initialState: () => ({ counter: 0 }),
  effects: {
    addOne: softUpdate(state => ({ counter: state.counter + 1 })),
    addOneAsync: async () => {
      await delay(1000);
      return state => ({ ...state, counter: state.counter + 1 });
    },
  },
  computed: {
    added5: state => state.counter + 5,
    squared: state => state.counter * state.counter,
  },
});

const Parent = wrapComponentWithState(() => <Child />)

export default Parent

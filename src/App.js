import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, switchLogged} from './actions';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.loggedReducer);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      <br></br><br></br><br></br>
      <button onClick={() => dispatch(switchLogged())}>{isLogged ? 'Logged Out' : 'Logged In'}</button>
      <br></br>
      STATUS: {isLogged ? 'Logged In' : 'Logged Out'}
    </div>
  );
}

export default App;

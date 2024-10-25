import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter.js';

const Counter = () => {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)

  // Easier way to extract both values in a single line using destructuring.
  // const { counter, showCounter } = useSelector(state => state)

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  function handleIncreaseByFive(){
    dispatch(counterActions.increase({number: 5})) // { type: SOME_UNIQUE_IDENTIFIER, payload: { number: 5 } <= is the payload in this case. }
  }

  function handleDecreaseByFive(){
    dispatch(counterActions.decrease({number: 5}))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter &&
      <div className={classes.value}>{counter}</div>
      }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={handleIncreaseByFive}>Increase by 5</button>
        <button onClick={handleDecreaseByFive}>Decrease by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

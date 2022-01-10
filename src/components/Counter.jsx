import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementAsync,
} from "../redux/actions/counterActions";

function Counter() {
  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(incrementAsync())}>
        Increment after 1 second
      </button>{" "}
      <button onClick={() => dispatch(increment())}>Increment</button>{" "}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <hr />
      <div>Clicked: {value} times</div>
    </div>
  );
}

export default Counter;

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/actions";

function App() {
  const count = useSelector(
    (store: { counterReducer: number }) => store?.counterReducer
  );
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://redux.js.org/" target="_blank">
          <img
            src="https://redux.js.org/img/redux.svg"
            className="logo"
            alt="Redux Logo"
          />
        </a>
      </div>
      <h1>React Redux</h1>
      <div className="card">
        <button onClick={() => dispatch(decrement(5))}>-5</button>
        <button onClick={() => dispatch(decrement(1))}>-</button>
        <input type="number" value={count} disabled />
        <button onClick={() => dispatch(increment(1))}>+</button>
        <button onClick={() => dispatch(increment(5))}>+5</button>
      </div>
    </>
  );
}

export default App;

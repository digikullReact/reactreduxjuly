import logo from "./logo.svg";
import "./App.css";
import { increment, decrement, incrementByAmount } from "./slices/slice";
import { addTodo } from "./slices/todo";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(state);

  const handleClick = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleincrementBy10 = () => {
    dispatch(incrementByAmount(10));
  };

  const addTodoAction=()=>{

    dispatch(addTodo("hello people"));

  }
  return (
    <div className="App">
      <h1>{state.value}</h1>

      <button onClick={handleClick}>Increment</button>

      <button onClick={handleDecrement}>Decrement</button>

      <button onClick={handleincrementBy10}>incrementBy10</button>

      <button onClick={addTodoAction}>AddTodo</button>

    </div>
  );
}

export default App;

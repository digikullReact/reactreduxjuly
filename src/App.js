import { useState } from "react";

import "./App.css";
import { increment, decrement, incrementByAmount } from "./slices/slice";
import { addTodo } from "./slices/todo";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [task, setTask] = useState("");
  const state = useSelector((state) => state.counter);
  const stateTodo = useSelector((state) => state.todos);

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

  const addTodoAction = () => {
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <div className="App">
      <h1>{state.value}</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleClick}>Increment</button>

      <button onClick={handleDecrement}>Decrement</button>

      <button onClick={handleincrementBy10}>incrementBy10</button>

      <button onClick={addTodoAction}>AddTodo</button>

      {stateTodo.todos.map((ele) => (
        <li>{ele}</li>
      ))}
    </div>
  );
}

export default App;

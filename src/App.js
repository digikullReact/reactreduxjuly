import logo from './logo.svg';
import './App.css';
import {increment} from "./slice";
import {useDispatch,useSelector} from "react-redux";

function App() {
  const state=useSelector(state=>state.counter);
  const dispatch =useDispatch();
  console.log(state);

  const  handleClick=()=>{
    dispatch(increment());


  }
  return (
    <div className="App">

      <h1>{state.value}</h1>


      <button onClick={handleClick}>

       Increment

      </button>
     
    </div>
  );
}

export default App;

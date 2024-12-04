import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0)
  const [incrementClicked, setIncrement] = useState(false)
  const [decrementClicked, setDecrement] = useState(false)
 
useEffect(() =>
{
  setCount(prevState => prevState + 10)
},[incrementClicked])
 
 
useEffect(() =>
{
  setCount(prevState => prevState - 10)
},[decrementClicked])
 

  return (
    <div className="m-10 flex items-center justify-center gap-5">
    <button className= "bg-[red] items-center justify-center p-2 flex text-[white] rounded-[10px]" onClick={() => setDecrement(prevState => !prevState)}>Decrement by 10</button>
    <button className="bg-[blue] h-full w-5 text-white rounded-[50%] flex items-center justify-center border-0" onClick={() => setCount(prevState => prevState - 1)}>-</button>
    <div className="text-5xl">{count}</div>
    <button onClick={() => setCount(prevState => prevState + 1 )} className="bg-[blue] h-full w-5 text-white rounded-[50%] flex items-center justify-center border-0">+</button>
    <button className="bg-[green] items-center justify-center p-2 flex text-[white] rounded-[10px]" onClick={() => setIncrement(prevState => !prevState)}>Increment by 10</button>
  </div>
  );
}

export default App;

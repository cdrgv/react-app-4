import { useEffect, useState } from "react";
import "./App.css"
function App(){
  const [initial,setInitial]=useState(0);
  const [count,setCount]=useState(0);
  const [theme,setTheme]=useState(true);
  const InputHandler=(e)=>{
    setInitial(e.target.value);
  }
  useEffect(()=>{
    setCount(parseInt(initial));
  },[initial]);
  return(
    <div className={theme?"blue":"red"}>
      <div className="division">
      <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
      <input type="number" onChange={(e)=>InputHandler(e)}/>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      </div>
    </div>
  )
}
export default App;
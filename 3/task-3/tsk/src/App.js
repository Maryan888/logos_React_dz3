import { createContext,useState} from "react";

import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import "./App.css";
export const AppContext = createContext(null)

const App = () => {
  const[data,setData] = useState(false)
  // const [user, setUser] = useState(true);
  let message2 = "I learn React"
  
  let message = message2
  const sendDataHandler = ()=>{
    setData(true)
     
  }
  return (
    <div>

      <AppContext.Provider value={!data ? { message2 } : { message }}>
        <Child1 />
        <Child2 />
        
      </AppContext.Provider>
      

      <button onClick={sendDataHandler}>Send data</button>
    </div>
  )
};

export default App;

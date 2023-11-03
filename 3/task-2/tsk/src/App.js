import { useState } from "react"
import { useEffect } from "react"
import UsersComponent from "./components/UsersComponent";
import "./App.css";


const App = () => {

  const [users, setUsers] = useState([])
  
  useEffect(() => {
    getUser()
    
  },[])
  const getUser = async () => {

    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      let data = await response.json()
      setUsers(data)

    }
    catch {

    }

  }

 


  return (
  <div>
    {users.map((users) => 
      
        <UsersComponent users={users} key={users.id} />
        
       )}
  </div>
  )
};

export default App;

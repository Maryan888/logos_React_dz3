
import React, {useState, useEffect } from "react";
import "./App.css";
import Users from "./components/users/Users";


const App = () => {
  const [users, setUsers] = useState([])
 useEffect(() => {
    getUsers()
   
  }, [])
  const getUsers = async () => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      let data = await response.json()
      setUsers(data)
    
    }
    catch { }
  }


  return (
    <div> <Users users={users} /></div>
   
  )
};

export default App;

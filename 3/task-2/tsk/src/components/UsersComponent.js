
import './UsersComponent.css'
import { useState } from 'react'
import UserComponent from "./UserComponent";

const UsersComponent = (props) => {
  const [button, setButton] = useState(true)
 
  const openPostHandler = () => {
    setButton(false)
  }

  return (
    <div className="UsersComponent">
      {button?<UserComponent openPostHandler={openPostHandler}/>: 
      <div className="userComponent">

        <p>{props.users.name}</p>
        <p>{props.users.username}</p>
        <p>{props.users.email}</p>
        <p>{props.users.phone}</p>
        <p>{props.users.website}</p>
      </div>
      }


    </div>

  )

}

export default UsersComponent
import User from "./User"

import './User.css'

const Users = (props) => {



  return (
    <div className="columns">
      {props.users.map((user) =>
        <div>
          <User key={user.id} user = {user}/>
        </div>

      )}
    </div>


  )


}

export default Users
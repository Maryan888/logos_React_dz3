import './User.css'
const UserDetails = (props) => {



  return (
    <div className="paragraph">
    <h2>Details</h2>
      <p>{props.details.id}</p>
      <p>{props.details.username}</p>
      <p>{props.details.email}</p>
      <p>{props.details.phone}</p>
      <p>{props.details.website}</p>
      
    </div>
  )
}

export default UserDetails
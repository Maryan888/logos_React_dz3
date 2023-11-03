import './User.css'
const UserAddress = (props) => {
  // console.log(props.adress.street);
return(
 
  <div className="paragraph">
    <h2>Address</h2>
    <p>{props.adress.street}</p>
    <p>{props.adress.suite}</p>
    <p>{props.adress.city}</p>
  </div>
)

 
}

export default UserAddress
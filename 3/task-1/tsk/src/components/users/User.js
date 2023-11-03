import UserDetails from "./UserDetails"
import UserAddress from "./UserAddress"
import Company from "./Company"
import './User.css'

const User = (props) => {

  return (
    <div className="column" >
      <UserDetails
        
        details={props.user} />
      <UserAddress
        
        adress={props.user.address} />
      <Company
        
        company={props.user.company} />
    </div>
  )

}

export default User
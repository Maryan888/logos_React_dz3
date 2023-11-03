import './User.css'
const Company = (props) => {

  return (
    <div className="paragraph">
      <h2>Company</h2>
      <p>{props.company.name}</p>
      <p>{props.company.catchPhrase}</p>
      <p>{props.company.bs}</p>
    </div>
  )
}

export default Company
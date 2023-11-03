
import { useContext } from "react"
import { AppContext } from '../App'
const SubChild2_2 = () => {
  const appContext2 = useContext(AppContext)


  return (
    <div>
      <h1>SubChild2</h1>
      <div className="box2" >
        <h2> {appContext2.message2}</h2>
      </div>
    </div>

  )

}
export default SubChild2_2
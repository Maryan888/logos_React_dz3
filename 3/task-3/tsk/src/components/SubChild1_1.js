

import { useContext } from 'react'
import './SubChild.css'
import { AppContext } from '../App'
const SubChild1_1 = () => {
  const appContext1 = useContext(AppContext)

  return (
    <div>
      <h1>SubChild1</h1>
      <div className="box1" >
        <h2> {appContext1.message}</h2>
      </div>
    </div>

  )

}
export default SubChild1_1
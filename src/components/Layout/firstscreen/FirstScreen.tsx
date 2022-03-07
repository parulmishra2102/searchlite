import React from 'react'
import Button1 from '../../common/Button1'
import { useNavigate} from "react-router-dom";



export const FirstScreen = () => {
  const navigate = useNavigate()
  const enrollHandler =()=>{
    navigate("/firstscreen/enroll")
    return ""
    
  }
  return (
    <>
    <h3 style={{ color: "blue" }}>To start, please select one of the option below:</h3>
     
      <div style={{display:"flex",
      justifyContent:"center",
    }}>
      
        <Button1 onClick = {enrollHandler}>Enroll</Button1>
        <Button1>Re-Enroll</Button1>
        <Button1>Dis-Enroll</Button1>
      </div>
      </>
  
  )
}

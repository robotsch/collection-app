import Input from "./Input"
import { Link } from 'react-router-dom'
import { Button } from "@mui/material"

import "./Success.scss"

export default function Success(){
  return(
    <div className="success-page">
      <img src="src\public\verify-success-success-tick-icon-with-png-and-vector-format-372259.png"></img>
      <p>Your form has been successfully submitted!</p>
      <p>Would you like to submit again?</p>
      <Button component={Link} to="/form">
        Submit again
      </Button>
    </div>
  )
}
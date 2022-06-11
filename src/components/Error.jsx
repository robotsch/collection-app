import { Button } from "@mui/material"

import "./Error.scss"

export default function Error(props){
  return(
    <div className="error-page">
      <img src="src\public\lcd - general fault error icon.png"></img>
      <p>Your form has been been rejected</p>
      <p>Would you like to retry?</p>
      <Button onClick={props.setSubmit}>
        Submit again
      </Button>
    </div>
  )
}
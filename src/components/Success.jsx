import { Button } from "@mui/material"

import "./Success.scss"

export default function Success(props){
  return(
    <div className="success-page">
      <img src="src\public\1398913_circle_correct_mark_success_tick_icon.png"></img>
      <p>Your form has been successfully submitted!</p>
      <p>Would you like to submit again?</p>
      <Button onClick={props.setSubmit}>
        Submit again
      </Button>
    </div>
  )
}
import "./Input.scss"
import TextField from '@mui/material/TextField'

export default function Input(props) {

  return (
    <div>
      <form>
        <TextField id="outlined-basic" label={props.label} variant="outlined" />
      </form>
    </div>
  );
}

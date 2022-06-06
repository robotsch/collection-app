import { Box } from '@mui/system'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import './Input.scss'

export default function Input() {

  return (
    <div>
      <Box
        id="form"
        component="form"
        sx={{
          // '& .MuiTextField-root': { m: 1, width: '25ch' },
          'display': 'flex', 
          'flexDirection': 'column',
          'justifyContent': 'center',
          'alignItems': 'center',
          'width': '100%'
        }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div id="logo-text">
          <b>
            <i>
              Collection Application Logo Placeholder
            </i>
          </b>
        </div>
        <TextField
          id="filled-text1"
          label="text1"
          type="text"
          variant="standard"
        />
        <br/>
        <TextField
          id="filled-text2"
          label="text2"
          type="text"
          variant="standard"
        />
        <br/>
        <TextField
          id="filled-text3"
          label="text3"
          type="text"
          variant="standard"
        />
        <br/>
        <Button
          id="image"
          component="label"
          variant="outlined"
          sx={{
            'marginTop': '17px'
          }}
          >
          Upload Image
          <input type="file" accept="image/*" hidden/>
        </Button> 
        <Button
          id="submit"
          component="span"
          label="submit"
          type="submit"
          variant="contained"
          sx={{
            'margin': '20px' 
          }}
        >
          Submit
        </Button>
      </Box>
      <img id="background-flare" src="src\public\toppng.com-wave-clip-border-wave-border-1046x575.png"></img>
    </div>
  )
}

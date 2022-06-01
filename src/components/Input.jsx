import { Box } from '@mui/system'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import './Input.scss'

export default function Input() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          'display': 'flex', 
          'flexDirection': 'column',
          'justifyContent': 'center',
          'alignItems': 'center'
        }}
        noValidate
        autoComplete="off"
      >
        <div id="logo-text">
          <b>
            <i>
              Collection Application Logo Placeholder
            </i>
          </b>
        </div>
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Tell me what the date is"
          variant="filled"
        />
        <TextField
          id="filled-text1"
          label="text1"
          type="text"
          variant="standard"
        />
        <TextField
          id="filled-text2"
          label="text2"
          type="text"
          variant="standard"
        />
        <TextField
          id="filled-text3"
          label="text3"
          type="text"
          variant="standard"
        />
        <Button
          id="upload-image"
          sx={{
            'background-color': 'transparent',
            'border': '2px solid black',
            'margin-top': '17px'
          }}
          type="file">
          Upload Image
        </Button>
        <Button 
          component="span"
          id="submit"
          label="submit"
          type="submit"
          variant="contained"
          sx={{
            'margin': '20px' 
          }}
        >
          Submit
        </Button>
        <img id="background-flare" src="src\public\toppng.com-wave-clip-border-wave-border-1046x575.png"></img>
      </Box>
    </div>
  )
}

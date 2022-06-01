// import { useState } from 'react'
// import Input from './components/Input'
import './App.css'
import { Box } from '@mui/system'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function App() {

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          'display': 'flex', 
          'flex-direction': 'column',
          'justifyContent': 'center',
          'alignItems': 'center'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
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
          id="submit"
          label="submit"
          type="submit"
        />
      </Box>
    </div>
  )
}

export default App

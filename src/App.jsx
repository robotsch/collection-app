// import { useState } from 'react'
// import Input from './components/Input'
import './App.css'
import { Box } from '@mui/system'
import TextField from '@mui/material/TextField'

function App() {

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
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
          label="text"
          type="text"
          variant="filled"
        />
        <TextField
          id="filled-text2"
          label="text"
          type="text"
          variant="filled"
        />
        <TextField
          id="filled-text3"
          label="text"
          type="text"
          variant="filled"
        />
      </Box>
    </div>
  )
}

export default App

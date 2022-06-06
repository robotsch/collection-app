import { Box, Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {getFirestore, collection, addDoc, doc, getDoc, setDoc} from "firebase/firestore";
import app from '../firebase'
import { useState } from "react";

import "./Input.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#87ceeb", // charcoal grey complement
    },
  },
});

export default function Input() {
  const [uploaded, setUploaded] = useState(false)
  const db = getFirestore(app);

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // set loading state w/ spinner
    
    const data = new FormData(e.currentTarget);
    
    await setDoc(doc(db, "test", "test"), {
      field1: data.get("text1"),
      field2: data.get("text2"),
      field3: data.get("text3")
    })
      .then(() => {
        setUploaded(true)
        // update state to uploaded, render new Success page
        // prompt user to submit again
        console.log("Document successfully written!");
      })
      .catch((err) => {
        // update to error state, render error page
        // if error is connectivity, suggest offline upload (stretch)
        console.log("We have a problem: ", err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Submit</Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="text1"
              label="text1"
              name="text1"
              autoComplete="text1"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="text2"
              label="text2"
              name="text2"
              autoComplete="text2"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="text3"
              label="text3"
              type="text3"
              id="text3"
            />
            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

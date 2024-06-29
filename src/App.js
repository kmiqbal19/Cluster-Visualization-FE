import React from "react";
import "./App.css";
import { Box, TextField, Button, Typography } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'

function App() {
  const [keyword, setKeyword] = React.useState("");
  const handleClick = async (_) => {
    // call here the api from backend
   const res = await axios.post('http://127.0.0.1:5000/', {user_input: keyword});
   console.log(res.data, 'response')
  }
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" sx={{
        marginBottom: '1rem',
      }}>Search for PubMed documents</Typography>
      <TextField
        sx={{
          width: "calc(300px + 5vw)",
        }}
        required
        id="outlined-required"
        label="Search"
        defaultValue={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start" sx={{marginLeft: '0.5rem'}} >
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        placeholder="Search by keyword e.g. artificial intelligence..."
      />
      <Button
        sx={{
          marginTop: "1rem",
        }}
        variant="contained"
        onClick={handleClick}
      >
        Submit
      </Button>
    </Box>
  );
}

export default App;

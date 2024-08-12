import React from "react";
import "./App.css";
import { Box, TextField, Button, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "sonner";
import FoamTreeComponent from "./components/FoamTree";
import pubmedLogo from "./assets/images/pubMed.png";
import bgImg from "./assets/images/bg.jpg";
function App() {
  const [keyword, setKeyword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  const handleClick = (_) => {
    setLoading(true);
    setKeyword("");
    axios
      .post("http://127.0.0.1:5000/", { user_input: keyword })
      .then((res) => {
        // console.log(res.data, "res");
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => toast.error("Something went wrong!"))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Typography
        variant="h5"
        sx={{
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          fontWeight: 800,
         
        }}
      >
        Search for{" "}
        <img
          src={pubmedLogo}
          alt="pubmed-logo"
          width="100px"
          height={"50px"}
          style={{ objectFit: "contain", margin: "1rem",  }}
        />{" "}
        documents
      </Typography>
      {loading && <CircularProgress sx={{ margin: "0.5rem" }} />}
      {loading && <p>Loading tree ...</p>}
      {!loading && <TextField
        sx={{
          width: "500px",
        }}
        required
        id="outlined-required"
        label="Search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start" sx={{ marginLeft: "0.5rem" }}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        placeholder="Search by keyword e.g. artificial intelligence..."
      />}
      <Button
        sx={{
          marginTop: "1rem",
        }}
        variant="contained"
        onClick={handleClick}
        disabled={loading}
      >
        Submit
      </Button>
      <div>
        {data.length > 0 && <h1 style={{ textAlign: "center", marginTop: '1rem' }}>⬇️ Foamtree Visualization ⬇️</h1>}
        <FoamTreeComponent data={data} />
      </div>
    </Box>
  );
}

export default App;

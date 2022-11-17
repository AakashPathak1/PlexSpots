import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SpotButton from './SpotButton'
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useState } from 'react';
import Data from "./data.json";
import SearchBar from "./Search";
import { MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './styles.css';



// function SearchBar() {
//   const [query, setQuery] = useState("")

//   return (
//     <Paper
//       component="form"
//       sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
//     >
//       <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
//         <SearchIcon />
//       </IconButton>
//       <InputBase
//         sx={{ ml: 1, flex: 1 }}
//         placeholder="Search for a spot"
//         inputProps={{ "aria-label": "search for a spot" }}
//         onChange={event => setQuery(event.target.value)}
//       />
//     </Paper>
//   );
// }

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <AppBar position="static" style={{backgroundColor: "white", color: "black"}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexgrow: 2, display: { xs: 'none', sm: 'block' }}}
          >
            PlexSpot
          </Typography>
          <button 
            className="headerBtn"
            color="inherit" 
            onClick={() => {
              navigate('/')
            }}>
            Spots
          </button>
          <button 
            className="headerBtn"
            color="inherit" 
            onClick={() => {
              navigate('/explore')
            }}>
            Explore
          </button>
          <SearchBar placeholder="Search for a spot" data={Data}/>
          <SpotButton/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
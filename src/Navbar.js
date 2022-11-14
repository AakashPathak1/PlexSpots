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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" alignItems="center" justifyContent="center" style={{backgroundColor: "white", color: "black", mb: 15, padding: 4}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexgrow: 2, display: { xs: 'none', sm: 'block' }, mr: 30}}
          >
            PlexSpot
          </Typography>
          <SearchBar placeholder="Search for a spot" data={Data}/>
          <SpotButton/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
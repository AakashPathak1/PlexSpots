import React, { useState } from "react";
// import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Paper, IconButton, InputBase } from "@mui/material";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

//   function SearchBar() {
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

  return (
    <>
    <Paper className="search" component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 300, mr: 30 }}>
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
         {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
       </IconButton>
        <InputBase
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
    </Paper>
    <div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
    </>
  );
}

export default SearchBar;
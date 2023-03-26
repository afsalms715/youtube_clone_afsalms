import React,{useState} from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import {useNavigate} from 'react-router-dom'

const SearchBar = () => {
  const[searchTerm,setSearchTerm]=useState('')
  const navigate=useNavigate()
  const submitHandler=(e)=>{
    console.log("submit")
    navigate(`search/${searchTerm}`)
    e.preventDefault()  
  }
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: "20px",
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        direction:"row"
      }}
      onSubmit={submitHandler}
    >
      <input
        className="search-bar"
        style={{ borderRadius: "20px" }}
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
        }}
        placeholder="Search..."
      />
      <IconButton sx={{ p: "10px", color: "red", alignContent: "right" }} onClick={submitHandler}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

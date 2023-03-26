import React,{useState,useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./index.css"
import {
  ChannelDetail,
  Darkmode,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetail,
} from "./components";

const App = () => {
  
  const [fontcolor,setFontcolor]=useState(localStorage.getItem("fontcolor") || "#fff")
  return(
    <Box sx={{ background:fontcolor }}>
      <BrowserRouter>
        <Navbar fontcolor={fontcolor} setFontcolor={setFontcolor}/>
        <Routes>
          <Route path="/" element={<Feed fontcolor={fontcolor=="#fff"?'#000':"#fff"}/>} />
          <Route path="/video/:id" element={<VideoDetail fontcolor={fontcolor=="#fff"?'#000':"#fff"}/>} />
          <Route path="/channel/:id" element={<ChannelDetail fontcolor={fontcolor=="#fff"?'#000':"#fff"}/>} />
          <Route path="/search/:searchTerm" element={<SearchFeed fontcolor={fontcolor=="#fff"?'#000':"#fff"}/>} />
        </Routes>
      </BrowserRouter>
    </Box>
    )
};

export default App;

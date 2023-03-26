import React,{useState} from "react";
import { Stack } from "@mui/material";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import {Darkmode} from "./";
import Switch from '@mui/material/Switch';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';

const Navbar = ({fontcolor,setFontcolor}) => {
  return (
    <Stack
      direction="row"
      p={2}
      sx={{
        background:fontcolor,
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        zIndex:"10"
      }}
    >
      <Link to="/" style={{ alignItems: "center", display: "flex" }}>
        <img src={logo} height="45px" style={{ borderRadius: "50%" }} />
      </Link>
      <div style={{display:"flex"}}>
        <SearchBar />
        <Brightness4RoundedIcon sx={{color:fontcolor=="#fff"?'#000':"#fff",cursor:"pointer",mt:1.5,mr:1 }} onClick={()=>{setFontcolor(fontcolor=="#fff"?"#000":"#fff")
      localStorage.setItem("fontcolor",fontcolor=="#fff"?"#000":"#fff")}}/>
      </div>
    </Stack>
  );
};

export default Navbar;


import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom"
import { FetchFromApi } from "../utils/FetchFromApi";
import {Videos} from './'
import { Box, Typography } from "@mui/material";

const SearchFeed = ({fontcolor}) => {
  const[videos,setVideos]=useState()
  const {searchTerm}=useParams();
  console.log(searchTerm)
  useEffect(()=>{
    FetchFromApi(`search?q=${searchTerm}&part=snippet,id`).then((data)=>{
      console.log(data.items)
      setVideos(data.items)
    })
  },[searchTerm])
  return <Box p={2} 
              sx={{overflowY:"auto",
                    height:"95vh",
                    flex:"2",
                    ml:{xs:"0",md:'100px'},
                    }}>
                <Typography variant="h4" gutterBottom sx={{color:fontcolor,fontWeight:"bold"}}>Search Result of <span style={{color:"red"}}>{searchTerm}</span></Typography>
                {videos && <Videos videos={videos} fontcolor={fontcolor}/>}
         </Box>;
};

export default SearchFeed;

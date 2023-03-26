import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom"
import {Box} from "@mui/material"
import {ChannelCard, Videos} from './'
import { FetchFromApi } from "../utils/FetchFromApi";

const ChannelDetail = ({fontcolor}) => {
  console.log(fontcolor)
  const[channelDtl,setChannelDtl]=useState(null)
  const[videos,setVideos]=useState()
  const {id}=useParams()

  console.log("id="+id)
  useEffect(()=>{
    console.log("useEffect")
    FetchFromApi(`channels?part=snippet,statistics&id=${id}`).then((data)=>{
      setChannelDtl(data.items[0])
    })
    FetchFromApi(`search?part=snippet&order=date&maxResults=50&channelId=${id}`).then((data)=>{
      console.log(data.items)
      setVideos(data.items)
    })
  },[id])
  return <Box sx={{minHeight:"95vh",}}>
          <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <div style={{height:"300px",background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(20,24,198,1) 50%, rgba(0,212,255,1) 100%)",minWidth:"100vw"}}>
              
            </div>
            <div style={{margin:"auto"}}> 
              {channelDtl && <ChannelCard channel={channelDtl} fontcolor={fontcolor=="#fff"?"white":"black"} margin={"-110px"}/>}
            </div>          
          </Box>
          <Box sx={{display:"flex",p:2}}>
            <Box sx={{mr:{sm:"100px"}}}/>
            <Box sx={{flex:1}}>
            {videos && <Videos videos={videos} fontcolor={fontcolor}/>}
            </Box>   
          </Box>           
        </Box>;
};

export default ChannelDetail;

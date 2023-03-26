import React,{useState,useEffect} from "react";
import {useParams,Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography,Box,Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { FetchFromApi } from "../utils/FetchFromApi";
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import {Videos} from "./"



const VideoDetail = ({fontcolor}) => {
  const[videodtl,setVideodtl]=useState()
  const[reltvideos,setReltvideos]=useState()
  const {id}=useParams()
  useEffect(()=>{
    FetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data)=>{
      setVideodtl(data.items[0])
    })
    FetchFromApi(`search?part=snippet,id&relatedToVideoId=${id}`).then((data)=>{
      console.log(data)
      setReltvideos(data.items)
    })
  },[id])
  if(!videodtl && !reltvideos){
    console.log("loading...")
    return "Loading..."
  }
  console.log(videodtl)
  const {snippet:{channelId,channelTitle,title},statistics:{likeCount,viewCount}}=videodtl
  return <Box minHeight="95vh">
    <Stack direction={{xs:"column",md:"row"}}>
      <Box flex={1} sx={{position:"sticky",top:"86px",zIndex:3,}}>
        <Box sx={{width:"100%",}}>
          {/* */}
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
        </Box>
        <Typography variant="h6" sx={{fontWeight:"bold",color:fontcolor,p:1,background:fontcolor=="#000"?"#fff":"#000"}}>{title || "loading..."}</Typography>
        <Stack direction="row" sx={{justifyContent:"space-between",py:1,px:{md:4},alignItems:"center",background:fontcolor=="#000"?"#fff":"#000"}}>
          <Link to={`/channel/${channelId}`}>
            <Box sx={{border:"2px solid red",py:1,px:2,borderRadius:"30px",display:"flex",alignItems:"center"}}>
              <Typography variant={{sm:"subtitle1",md:"h5"}}  sx={{color:fontcolor,fontWeight:"bold",opacity:"0.7"}}>{channelTitle || "Loading..."} </Typography>
              <CheckCircle sx={{color:fontcolor,pl:1,opacity:"0.7"}}/>
            </Box>
          </Link>
          <Stack direction="row" sx={{gap:{md:2},alignItems:"center"}}>
            <ThumbUpRoundedIcon sx={{color:fontcolor}}/><span style={{color:fontcolor}}>{parseInt(likeCount).toLocaleString()}</span>
            <RemoveRedEyeRoundedIcon sx={{color:fontcolor}}/><span style={{color:fontcolor}}>{parseInt(viewCount).toLocaleString()}</span>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{maxWidth:{xs:"100%",md:"400px",},maxHeight:"95vh",overflowY:"auto",pl:{xs:0,md:3},}}>      
          {reltvideos && <Videos videos={reltvideos} fontcolor={fontcolor}/>}
      </Box>
    </Stack>
    </Box>
};

export default VideoDetail;

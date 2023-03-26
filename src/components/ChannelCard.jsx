import React from "react";
import { Box,Card,CardContent,CardMedia,Typography } from "@mui/material";
import {Link} from 'react-router-dom'
import { demoProfilePicture } from "../utils/constants";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ChannelCard = ({ channel,fontcolor,margin }) => {
    console.log(channel)
  return <Box sx={{marginTop:margin,boxShadow:"none"}}>
            <Link to={`/channel/${channel.id.channelId}`}>
            <Card sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"transparent" ,width:{xs:"356px",md:"345px"},height:"290px",boxShadow:"none"}}>
                <CardMedia 
                    image={channel.snippet.thumbnails?.high?.url || demoProfilePicture}
                    width="180px"
                    height="180px"
                    sx={{width:"180px",height:"180px",borderRadius:"50%",}}
                />
                <CardContent sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Typography variant="h5" sx={{fontWeight:"bold"}} color={fontcolor}>{channel.snippet.title}</Typography>
                    <CheckCircleIcon sx={{color:fontcolor,ml:"0.7rem",mt:"0.3rem"}}/>
                    </div>
                    <div>
                    {channel.statistics?.subscriberCount &&<Typography variant="subtitle1" sx={{color:fontcolor}}>{channel.statistics?.subscriberCount} subscribers</Typography>}
                    </div>
                </CardContent>
            </Card>
            </Link>
         </Box>
};

export default ChannelCard;

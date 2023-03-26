import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography, CardMedia, CardContent } from "@mui/material";
import { demoThumbnailUrl, demoVideoUrl,demoChannelUrl } from "../utils/constants";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const VideoCard = ({ video: { id, snippet },fontcolor }) => {
  return (
    <Card sx={{ width: { xs: "100%",md: "335px" },background:fontcolor=="#000"?"#fff":"#2623219e",mb:"0.6rem",boxShadow:"none" }}>
        <Link to={id?.videoId? `/video/${id.videoId}`: demoVideoUrl}>
            <CardMedia
            image={snippet.thumbnails.high.url || demoThumbnailUrl}
            sx={{ height:{xs:"300px",md:"180px"},borderRadius:"20px" }}
            title={snippet.title.slice(0,26 )}
            />
        </Link> 
        <CardContent>
            <Link to={id?.videoId? `/video/${id.videoId}`: demoVideoUrl} >
                <Typography variant="h6" sx={{color:fontcolor,fontWeight:"bold",textTransform:"capitalize"}}>{snippet.title.slice(0,26 )}</Typography>
            </Link>
            <Link to={snippet?.channelId? `/channel/${snippet?.channelId}`: demoChannelUrl}>
                <div style={{display:"flex"}}>
                <Typography variant="h6" sx={{color:fontcolor,opacity:"0.7",}}>{snippet.channelTitle.slice(0,26 )}</Typography>
                <CheckCircleIcon sx={{color:fontcolor,opacity:"0.7",pl:"10px",alignSelf:"center"}}/>
                </div>
            </Link>
        </CardContent>
    </Card>
  );
};

export default VideoCard;

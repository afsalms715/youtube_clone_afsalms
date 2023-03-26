import React from "react";
import { Stack, Box } from "@mui/system";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos,fontcolor }) => {
    console.log(videos)
  return (
    <Stack direction="row" gap={2} flexWrap="wrap" sx={{ overflowY: "auto",flexDirection:{xs:"column",md:"row"} }}>
      {videos.map((item, idx) => (
        <Box key={idx}>
            {console.log(item)}
          {item.id.videoId && <VideoCard video={item} fontcolor={fontcolor} />}
          {item.id.playlistId && <VideoCard video={item} fontcolor={fontcolor} />}
          {item.id.channelId && <ChannelCard channel={item} fontcolor={fontcolor}/>}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;

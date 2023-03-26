import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import { FetchFromApi } from "../utils/FetchFromApi";
import { SideBar, Videos } from "./";

const Feed = ({fontcolor}) => {
  const [selectedCate, setSelectedCate] = useState("Programing");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    FetchFromApi(`search?q=${selectedCate}&part=snippet,id`).then((responce) => {
      setVideos(responce.items);
    });
  }, [selectedCate]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <SideBar selectedCate={selectedCate} setSelectedCate={setSelectedCate} fontcolor={fontcolor} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: fontcolor, }}>
          Copyright © 2023 Afsalms
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: fontcolor }}>
          {selectedCate} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} fontcolor={fontcolor} />
      </Box>
    </Stack>
  );
};

export default Feed;

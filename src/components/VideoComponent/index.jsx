import React from "react";
import { styled } from "@mui/material/styles";
import { SvgIcon } from "@mui/material";
import VideoIcon from "../../icons/VideoIcon";

const VideoContainer = styled("div")(({ theme }) => ({
  width: "50%",
  height: "51vh",
  left: "25%",
  position: "absolute",
  bottom: 0,
  [theme.breakpoints.down("lg")]: {
    height: "32vh",
  },
}));

function VideoComponent() {
  return (
    <VideoContainer>
      <SvgIcon
        component={VideoIcon}
        preserveAspectRatio="none"
        viewBox="0 0 996 559"
        height="100%"
        width="100%"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </VideoContainer>
  );
}

export default VideoComponent;

import { Box } from "@mui/material";
import video from "/video.mp4";

export const Video = () => {
  return (
    <Box
      sx={(theme) => ({
        position: "absolute",
        bottom: 0,
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
        [theme.breakpoints.down("lg")]: {
          width: "100vw",
        },
      })}
    >
      <video
        src={video}
        loop
        muted
        autoPlay
        width="100%"
        style={{
          display: "block",
        }}
      />
    </Box>
  );
};

import { Box, BoxProps } from "@mui/material";
import { forwardRef } from "react";

const JHBox = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <Box {...props} ref={ref} />;
});

export const AboutBox = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return (
    // <JHBox
    //   ref={ref}
    //   sx={{
    //     position: "absolute",
    //     left: -370,
    //     top: 150,
    //   }}
    // >
    // {isInitiated && <About />}
    // </JHBox>
    <></>
  );
});

import { Box, BoxProps } from "@mui/material";
import { forwardRef } from "react";

export const Shield = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return (
    <Box
      ref={ref}
      {...props}
      width={421}
      height={496}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: "url(/shield.svg)",
        position: "relative",
        top: 0,
        left: 0,
        zIndex: 999,
      }}
    ></Box>
  );
});

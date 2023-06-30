import { Box, BoxProps } from "@mui/material";
import { forwardRef } from "react";

export const Shield = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return (
    <Box
      ref={ref}
      {...props}
      sx={() => ({
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "0.4257fr 0.1189fr 0.0847fr 0.3716fr",
        width: "calc(312/360*100%)",
        height: "auto",
        justifyItems: "center",
        aspectRatio: 0.852,
        maxWidth: "422px",
        background: "url(./shield.png)",
        backgroundSize: "cover",
        position: "relative",
        zIndex: 999,
      })}
    ></Box>
  );
});

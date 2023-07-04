import { Box, BoxProps } from "@mui/material";
import { forwardRef } from "react";

export const Shield = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  // useEffect(() => {
  //   const handleResize = () => {
  //     const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  //     const baseWidth = 360;
  //     const targetWidth = 445;
  //     const baseScale = 0.77;
  //     const targetScale = 1.0;
  //     const calculatedScale = (targetScale - baseScale) / (targetWidth - baseWidth) * (screenWidth - baseWidth) + baseScale;

  //     calculatedScale <1 ? setScale(calculatedScale) : setScale(1);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   handleResize();

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <Box
      ref={ref}
      {...props}
      sx={(theme) => ({
        // transform: "scale(0.77) !important",
        [theme.breakpoints.down("sm")]: {
          transform: `scale(${0.78}) !important`,
        },
        // [theme.breakpoints.up("sm")]: {
        //   transform: `scale(${1.0}) !important`,
        // },
        // from 300 when screen width is 360 scale = 0.77
        // to 385 when screen width is 445 scale 1.0
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows:
          "41px [logo-s] 1fr [logo-e] 7px [title-s] 28px [title-e] 20px [desc-s] 63px [desc-e] 10px [form-s] 1fr [form-e] 43px",
        // width: "calc(312/360*100%)",
        // maxWidth: "422px",
        width: "385px",
        height: "auto",
        justifyItems: "center",
        aspectRatio: 0.852,
        background: "url(./shield.png)",
        backgroundSize: "cover",
        position: "relative",
        zIndex: 999,
      })}
    ></Box>
  );
});

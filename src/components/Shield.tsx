import { Box, BoxProps } from "@mui/material";
import { forwardRef, useState } from "react";
import { Description } from "../components/Description";
import { Title } from "../components/Title";
import { ReactComponent as LogoImg } from "../svg/juniorhub.svg";
import { NotifyForm } from "./NotifyForm";
import { NotifyButton } from "./buttons/NotifyButton";

const Logo = () => {
  return (
    <Box
      sx={{
        // mb: "calc(23/2/312*100%)",
        // width: "calc(67/312*100%)",
        width: "86px",
        alignSelf: "end",
        // height: "calc(74/155.5*100%)",
        boxSizing: "border-box",
      }}
    >
      <LogoImg
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
};

const Notify = () => {
  const [isNotifyClicked, setNotifyClicked] = useState(false);
  const handleNotifyClick = () => {
    setNotifyClicked(!isNotifyClicked);
  };
  return (
    <Box>
      {isNotifyClicked ? (
        <NotifyForm />
      ) : (
        <NotifyButton disabled={false} onClick={handleNotifyClick} />
      )}
    </Box>
  );
};

export const Shield = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return (
    <Box
      ref={ref}
      {...props}
      sx={(theme) => ({
        [theme.breakpoints.down("sm")]: {
          transform: `scale(${0.78}) !important`,
        },
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
    >
      <Box></Box>
      <Logo />
      <Box></Box>
      <Title />
      <Box></Box>
      <Description />
      <Box></Box>
      <Notify />
      <Box></Box>
    </Box>
  );
});

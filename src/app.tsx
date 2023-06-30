import { Box, BoxProps } from "@mui/material";
import { gsap } from "gsap";
import { forwardRef, useEffect, useRef, useState } from "react";
import { About } from "./components/About";
import { Description } from "./components/Description";
import { NotifyForm } from "./components/NotifyForm";
import { Shield } from "./components/Shield";
import { AboutButton } from "./components/buttons/AboutButton";
import { NotifyButton } from "./components/buttons/NotifyButton";
import { ReactComponent as IconBack } from "./svg/iconBack.svg";
import { ReactComponent as LogoImg } from "./svg/juniorhub.svg";
import { Title } from "./components/Title";
import video from "/video.mp4";
import "./app.css";

const JHBox = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <Box {...props} ref={ref} />;
});

const Notify = () => {
  const [isNotifyClicked, setNotifyClicked] = useState(false);
  const handleNotifyClick = () => {
    setNotifyClicked(!isNotifyClicked);
  };
  return (
    <Box
      sx={{
        // pt: "calc(22/2/312*100%)",
      }}
    >
      {isNotifyClicked ? (
        <NotifyForm />
      ) : (
        <NotifyButton disabled={false} onClick={handleNotifyClick} />
      )}
    </Box>
  );
};

const Logo = () => {
  return (
    <Box
      sx={{
        mb: "calc(23/2/312*100%)",
        width: "calc(67/312*100%)",
        alignSelf: "end",
        height: "calc(74/155.5*100%)",
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

function App() {
  const [isAboutClicked, setAboutClicked] = useState(false);
  const [isInitiated, setInitiated] = useState(false);

  const handleAboutClick = () => {
    setInitiated(true);
    setAboutClicked(!isAboutClicked);
  };

  useEffect(() => {
    refAboutButton.current && gsap.to(refAboutButton.current, { x: 150 });
  }, []);

  const refAboutBox = useRef<HTMLDivElement>(null);
  const refShield = useRef<HTMLDivElement>(null);
  const refAboutButton = useRef<HTMLButtonElement>(null);
  const refIconBack = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAboutClicked) {
      gsap.to(refIconBack.current, { x: -10, opacity: 1 });
      gsap.to(refShield.current, { x: 380 });
      gsap.to(refAboutBox.current, { duration: 1, x: 500, opacity: 1 });
    } else {
      gsap.to(refIconBack.current, { x: -200, opacity: 0 });
      gsap.to(refShield.current, { x: 0 });
      gsap.to(refAboutBox.current, { duration: 1, x: -100, opacity: 0 });
    }
  }, [isAboutClicked]);

  return (
    <>
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
        {/* <video src={video} loop muted autoPlay width="100%" style={{
          display: "block"
        }}/> */}
      </Box>
      <Box
        sx={{
          bgcolor: "background.default",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <JHBox
          sx={(theme) => ({
            display: "none",
            [theme.breakpoints.down("sm")]: {
              left: 185,
              bottom: 95,
              top: "initial",
            },
            [theme.breakpoints.up("md")]: {
              display: "flex",
              position: "absolute",
              top: 95,
              left: 155,
              alignItems: "center",
            },
          })}
        >
          <JHBox ref={refIconBack}>{isInitiated && <IconBack />}</JHBox>
          <AboutButton onClick={handleAboutClick} />
        </JHBox>

        <JHBox
          ref={refAboutBox}
          sx={{
            position: "absolute",
            left: -370,
            top: 150,
          }}
        >
          {isInitiated && <About />}
        </JHBox>

        <Shield ref={refShield}>
          <Logo />
          <Title />
          <Description />
          <Notify />
        </Shield>
      </Box>
    </>
  );
}

export default App;

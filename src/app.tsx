import { Box, BoxProps, Typography } from "@mui/material";
import { gsap } from "gsap";
import { forwardRef, useEffect, useRef, useState } from "react";
import { About } from "./components/About";
import { AboutButton } from "./components/AboutButton";
import { NotifyButton } from "./components/NotifyButton";
import { NotifyForm3 } from "./components/NotifyForm3";
import { Shield } from "./components/Shield";
import { ReactComponent as IconBack } from "./svg/iconBack.svg";

const JHBox = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <Box {...props} ref={ref} />;
});

function App() {
  const [isNotifyClicked, setNotifyClicked] = useState(false);
  const [isAboutClicked, setAboutClicked] = useState(false);

  const handleAboutClick = () => {
    setAboutClicked(!isAboutClicked);
  };

  useEffect(() => {
    refAboutButton.current && gsap.to(refAboutButton.current, { x: 150 });
  }, []);

  const refAboutBox = useRef<HTMLDivElement>(null);
  const refShield = useRef<HTMLDivElement>(null);
  const refAboutButton = useRef<HTMLButtonElement>(null);
  const refIconBack = useRef<HTMLButtonElement>(null);

  const handleNotifyClick = () => {
    setNotifyClicked(!isNotifyClicked);
  };

  useEffect(() => {
    if (isAboutClicked) {
      gsap.to(refIconBack.current, { x: -10, opacity: 1 });
      gsap.to(refShield.current, { x: 380 });
      gsap.to(refAboutBox.current, { duration: 1, x: 500 });
    } else {
      gsap.to(refIconBack.current, { x: -200, opacity: 0 });
      gsap.to(refShield.current, { x: 0 });
      gsap.to(refAboutBox.current, { duration: 1, x: -100 });
    }
  }, [isAboutClicked]);

  return (
    <Box
      sx={{
        bgcolor: "text.primary",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <JHBox
        sx={{
          color: "#EAEAEA",
          position: "absolute",
          top: 95,
          left: 155,
          display: "flex",
          alignItems: "center",
        }}
      >
        <JHBox ref={refIconBack} >
          <IconBack />
        </JHBox>
        <AboutButton onClick={handleAboutClick} />
      </JHBox>

      <JHBox
        ref={refAboutBox}
        sx={{
          position: "absolute",
          color: "#EAEAEA",
          left: -370,
          top: 150,
        }}
      >
        <About />
      </JHBox>
      <Shield ref={refShield}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "330px",
            height: "195px",
            position: "absolute",
            top: "109px",
          }}
        >
          <img src="/juniorhub.svg" width={86} height={100} />
          <Typography variant="h2" sx={{ mt: "2rem" }}>
            JuniorHub
          </Typography>
          <Typography
            sx={{ mt: "0.75rem" }}
            fontSize={"0.875rem"}
            color={"white"}
          >
            Агрегатор проектов для Junior IT-специалистов
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "360px",
          }}
        >
          {isNotifyClicked ? (
            <NotifyForm3 />
          ) : (
            <NotifyButton onClick={handleNotifyClick} />
          )}
        </Box>
      </Shield>
    </Box>
  );
}

export default App;

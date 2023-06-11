import { Box, BoxProps, Typography } from "@mui/material";
import { gsap } from "gsap";
import { forwardRef, useEffect, useRef, useState } from "react";
import { About } from "./components/About";
import { NotifyForm } from "./components/NotifyForm";
import { Shield } from "./components/Shield";
import { AboutButton } from "./components/buttons/AboutButton";
import { NotifyButton } from "./components/buttons/NotifyButton";
import { ReactComponent as IconBack } from "./svg/iconBack.svg";
import { ReactComponent as Logo } from "./svg/juniorhub.svg";

const JHBox = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <Box {...props} ref={ref} />;
});

function App() {
  const [isNotifyClicked, setNotifyClicked] = useState(false);
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

  const handleNotifyClick = () => {
    setNotifyClicked(!isNotifyClicked);
  };

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
    <Box sx={{
      width: "100vw",
      position: "absolute",
      bottom: 0
    }}>
      <video src="video.mp4" loop width={"100%"} autoPlay ></video>

    </Box>
      <Box
        sx={{
          bgcolor: "background.default",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <JHBox
          sx={{
            position: "absolute",
            top: 95,
            left: 155,
            display: "flex",
            alignItems: "center",
          }}
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
            <Logo />
            <Typography variant="h1" color="text.primary" sx={{ mt: "2rem" }}>
              JuniorHub
            </Typography>
            <Typography
              variant="h2"
              sx={{ mt: "0.75rem" }}
              fontSize={"0.875rem"}
              color="text.primary"
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
              <NotifyForm />
            ) : (
              <NotifyButton disabled={false} onClick={handleNotifyClick} />
            )}
          </Box>
        </Shield>
      </Box>
    </>
  );
}

export default App;

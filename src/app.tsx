import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { About } from "./components/about/About";

import "./app.css";
import { Container } from "./components/Container";
import { Shield } from "./components/Shield";
import { AboutButton } from "./components/buttons/AboutButton";
import { Video } from "./components/video/Video";

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
      <Video />

      <Container>
        
        <AboutButton onClick={handleAboutClick} />

        {isInitiated &&
         <About ref={refAboutBox} 
        />}

        <Shield ref={refShield} />

      </Container>
    </>
  );
}

export default App;

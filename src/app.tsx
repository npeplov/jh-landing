import { gsap } from "gsap";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { About } from "./components/about/About";

import "./app.css";
import { Container } from "./components/Container";
import { Shield } from "./components/Shield";
import { AboutButton } from "./components/buttons/AboutButton";
import { Video } from "./components/video/Video";

function App() {
  const [isAboutClicked, setAboutClicked] = useState(false);
  const [isAboutBoxShowed, setAboutBoxShowed] = useState(false);

  const handleAboutClick = () => {
    setAboutBoxShowed(true);
    setAboutClicked(!isAboutClicked);
  };

  const refAboutBox = useRef<HTMLDivElement>(null);
  const refShield = useRef<HTMLDivElement>(null);
  // const refAboutButton = useRef<HTMLButtonElement>(null);
  // const refIconBack = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAboutClicked) {
      // gsap.to(refIconBack.current, { x: -10, opacity: 1 });
      gsap.to(refShield.current, { x: 380 });
      gsap.to(refAboutBox.current, { duration: 1, x: 500, opacity: 1 });
    } else {
      // gsap.to(refIconBack.current, { x: -200, opacity: 0 });
      gsap.to(refShield.current, { x: 0 });
      gsap.to(refAboutBox.current, { duration: 1, x: -100, opacity: 0 });
    }
  }, [isAboutClicked]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: 1, y: "100vh" }}
        transition={{ duration: 10, delay: 0.5 }}
      >
        {/* <Video /> */}
      </motion.div>

      <Container>
        <AboutButton onClick={handleAboutClick} />

        {isAboutBoxShowed && (
          <motion.div

          >
            <About ref={refAboutBox} />
          </motion.div>
        )}

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Shield ref={refShield} />
        </motion.div>
      </Container>
    </>
  );
}

export default App;

import "./app.css";
import { motion, AnimatePresence } from "framer-motion";
import { CSSProperties, useEffect, useState } from "react";
import { About } from "./components/about/About";

import { Container } from "./components/Container";
import { AboutButton } from "./components/buttons/AboutButton";
import { Shield } from "./components/shield/Shield";
import { Video } from "./components/video/Video";
import { Modal } from "./components/modal/Modal";

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [isFirstRender, setFirstRender] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAboutClick = () => {
    setFirstRender(false);
    setShowAbout(!showAbout);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isDesktop = windowWidth > 900;

  const aboutStyle: CSSProperties = {
    width: isDesktop ? "50%" : "100%",
    overflow: "hidden",
    height: "100vh",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const shieldStyle: CSSProperties = {
    width: isDesktop ? "50%" : "100%",
    overflow: "hidden",
    height: "100vh",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const shieldVariants = {
    firstShowInitial: { y: -100 },
    desktopInitial: { x: 0, y: 0 },
    desktopAnimate: { y: 0, x: 0 },
    desktopHide: { x: "50%" },

    mobileShow: { opacity: 1, x: 0 },
    mobileInitial: { opacity: 0, x: "-100vw" },
    mobileHide: { x: "-100vw" },
  };

  const aboutVariants = {
    desktopInitial: { opacity: 0, x: "-100vw" },
    desktopShow: { opacity: 1, x: "-50%" },
    desktopHide: { x: "-100vw" },

    mobileShow: { opacity: 1, x: 0 },
    mobileInitial: { opacity: 0, x: "100vw" },
    mobileHide: { x: "100vw" },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ opacity: 1, y: "100vh" }}
        transition={{ duration: 10, delay: 0.5 }}
      >
        <Video />
      </motion.div>

      <Container>
        
        <Modal open={modalOpen} setOpen={setModalOpen}/>

        <AboutButton onClick={handleAboutClick} />

        {isDesktop && (
          <motion.div
            initial={isFirstRender ? "firstShowInitial" :  "desktopInitial"}
            animate={isFirstRender ? "desktopAnimate" : showAbout ? "desktopHide" : "desktopInitial"}
            variants={shieldVariants}
            style={shieldStyle}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Shield />
          </motion.div>
        )}

        <AnimatePresence>
          {isDesktop && showAbout && (
            <motion.div
              initial="desktopInitial"
              animate="desktopShow"
              exit="desktopHide"
              variants={aboutVariants}
              style={aboutStyle}
            >
              <About setModalOpen={setModalOpen} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isDesktop && showAbout && (
            <motion.div
              initial="mobileInitial"
              animate="mobileShow"
              exit="mobileHide"
              variants={aboutVariants}
              style={aboutStyle}
            >
              <About setModalOpen={setModalOpen} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isDesktop && !showAbout && (
            <motion.div
              initial="mobileInitial"
              animate="mobileShow"
              exit="mobileHide"
              variants={shieldVariants}
              style={shieldStyle}
            >
              <Shield />
            </motion.div>
          )}
         </AnimatePresence>

      </Container>
    </>
  );
}

export default App;

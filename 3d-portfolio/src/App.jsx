import { Box } from "@mui/material";
import { motion } from "framer-motion";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  EarthCanvas,
} from "./components";
import Testimonials from "./components/Testimonials";
import { slideIn } from "./utils/motion";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Box>
        <Box>
          <Navbar />
          <Hero />
        </Box>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Testimonials />
        <Box
          sx={{
            position: "relative",
            zIndex: 0,
            p: "250px 0",
            bgcolor: "#050816e6",
          }}>
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            style={{ height: "400px" }}>
            <EarthCanvas />
          </motion.div>
          <Contact />
          <StarsCanvas />
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;

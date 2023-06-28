import { Box } from "@mui/material";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <Box className="relative z-0 bg-primary">
        <Box className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </Box>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Testimonials />
        {/* <Feedbacks /> */}
        <Box className="relative z-0">
          <Contact />
          <StarsCanvas />
        </Box>
      </Box>
    </>
  );
}

export default App;

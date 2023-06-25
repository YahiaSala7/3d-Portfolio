import { Box, Stack, Typography } from "@mui/material";
import landingimg from "../assets/herobg.png";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <Box
      className="root"
      sx={{
        backgroundImage: `url(${landingimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        // justifyContent: "center",

        position: "relative",
      }}>
      <Stack
        direction="row"
        sx={{
          position: "absolute",
          top: "120px",
          left: "20%",
          right: 0,
          margin: "0 auto",
          display: "flex",
          alignItems: "start",
          gap: "7px",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5px",
          }}>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "#915EFF",
            }}></Box>
          <Box
            className="violet-gradient"
            sx={{
              width: "5px",
              height: "250px",
            }}></Box>
        </Box>
        <Stack>
          <Typography
            fontWeight="bold"
            sx={{
              fontSize: { xs: "25px", lg: "50px", md: "50px", sm: "50px" },
            }}>
            Hi,I&#39;m <span style={{ color: "#915EFF" }}>Yahia</span>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "18px", lg: "25px", md: "25px", sm: "25px" },
            }}
            mb="10px">
            I frontend developer ,develop user <br />
            interfaces and web applications
          </Typography>
        </Stack>
      </Stack>
      {/* <ComputersCanvas /> */}

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "10px", sm: "32px" },
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <a href="#about">
          <Box
            sx={{
              width: "35px",
              height: "64px",
              borderRadius: "30px",
              border: "4px solid white",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "2px",
            }}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "white",
                marginBottom: "1px",
              }}
            />
          </Box>
        </a>
      </Box>
    </Box>
  );
};

export default Hero;

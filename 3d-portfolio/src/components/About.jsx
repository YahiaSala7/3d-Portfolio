import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { services } from "../Constants/Constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./hoc/index";
const Services = (Props) => {
  const { index, title, icon } = Props;
  return (
    <Tilt style={{ width: "250px" }}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className=" green-pink-gradient"
        style={{
          borderRadius: "20px",
        }}>
        <Stack
          justifyContent="center"
          alignItems="center"
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          bgcolor="rgb(29, 24, 54)"
          boxShadow="0 0 0 1px rgb(255 255 255)"
          p="50px"
          borderRadius="20px"
          height="250px">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
            style={{ width: "50px" }}
          />

          <Typography
            sx={{
              fontSize: { sm: "25px", xs: "20px" },
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}>
            {title}
          </Typography>
        </Stack>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <Box bgcolor="#050816e6" sx={{ padding: "50px 0" }}>
      <Container>
        <Stack sx={{ textAlign: { xs: "center", sm: "start" } }}>
          <motion.div variants={textVariant()}>
            <Typography color="#f9fafbe6">INTRODUCTION</Typography>
            <Typography
              color="white"
              fontSize={{ sm: "60px", xs: "30px" }}
              fontWeight="bold">
              OverView.
            </Typography>
          </motion.div>

          <motion.div variants={fadeIn("", "", 0.1, 1)}>
            <Typography
              sx={{
                maxWidth: "700px",
                lineHeight: "1.8",
                fontSize: { sm: "18px", xs: "16px" },
              }}>
              I&#39;m a skilled software developer with experience in TypeScript
              and JavaScript, and expertise in frameworks like React, Node.js,
              and Three.js. I&#39;m a quick learner and collaborate closely with
              clients to create efficient, scalable, and user-friendly solutions
              that solve real-world problems. Let&#39;s work together to bring
              your ideas to life!
            </Typography>
          </motion.div>
        </Stack>
        <Stack
          mt="20px"
          gap="15px"
          maxWidth="700px"
          flexWrap="wrap"
          direction={{ sm: "row", xs: "column" }}
          alignItems="center">
          {services.map((service, index) => (
            <Services {...service} index={index} key={service.title} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default SectionWrapper(About, "about");

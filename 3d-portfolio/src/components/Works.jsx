import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../Constants/Constants";
import { SectionWrapper } from "./hoc/index";
import Tilt from "react-parallax-tilt";

const Project = (Props) => {
  const { project } = Props;
  return (
    <Tilt>
      <Card
        sx={{
          bgcolor: "rgb(29, 24, 54)",
          p: "10px",
          color: "white",
          maxWidth: { xs: "300px", sm: '"400px"' },
          borderRadius: "10px",
        }}>
        <CardMedia
          component="img"
          image={project.image}
          alt={project.name}
          sx={{ borderRadius: "50px", p: "5px", margin: "auto" }}
        />
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            fontWeight="bold"
            fontSize={{ xs: "24px", sm: "30px" }}>
            {project.name}
          </Typography>
          <Typography
            variant="body1"
            fontWeight="18px"
            sx={{ textDecoration: "1.8" }}>
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          {project.tags.map((tag, index) => (
            <Button
              variant="text"
              className={tag.color}
              key={`${tag.name}-${index}`}
              sx={{ fontWeight: "bold" }}>
              #{tag.name}
            </Button>
          ))}
        </CardActions>
      </Card>
    </Tilt>
  );
};

const Works = () => {
  return (
    <Box bgcolor="#050816e6" sx={{ padding: "50px 0" }}>
      <Container>
        <Stack sx={{ textAlign: { xs: "center", sm: "start" } }}>
          <motion.div variants={textVariant()}>
            <Typography color="#f9fafbe6">My work</Typography>
            <Typography
              color="white"
              fontSize={{ sm: "60px", xs: "30px" }}
              fontWeight="bold">
              Projects.
            </Typography>
          </motion.div>

          <motion.div variants={fadeIn("", "", 0.1, 1)}>
            <Typography
              sx={{
                maxWidth: "700px",
                lineHeight: "1.8",
                fontSize: { sm: "18px", xs: "16px" },
              }}>
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects
              my ability to solve complex problems, work with different
              technologies, and manage projects effectively.
            </Typography>
          </motion.div>
        </Stack>
        <Stack
          mt="20px"
          gap="15px"
          flexWrap="wrap"
          direction={{ sm: "row", xs: "column" }}
          alignItems="center">
          {projects.map((project, index) => (
            <Project project={project} index={index} key={project.title} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default SectionWrapper(Works, "work");

import React from "react";
import { SectionWrapper } from "./hoc";
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Tilt from "react-parallax-tilt";
import { testimonials } from "../Constants/Constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const Testimonial = (Props) => {
  const { testimonial } = Props;
  return (
    <Tilt>
      <Card
        sx={{
          backgroundColor: "rgb(5 0 32)",
          color: "white",
          borderRadius: "10px",
          height: "calc(100% + 20px)",
          display: "flex",
          alignItems: "center",
        }}>
        <CardContent>
          <Typography variant="h2" gutterBottom fontWeight="bold">
            &#39;&#39;
          </Typography>
          <Typography
            variant="h4"
            mb="50px"
            fontWeight="bold"
            fontSize={{ xs: "16px", sm: "20px" }}>
            {testimonial.testimonial}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center">
            <Stack>
              <Typography variant="body1" fontWeight="bold" fontSize="16px">
                <span style={{ color: "rgb(6 24 108 / 94%)" }}> @ </span>
                {testimonial.name}
              </Typography>
              <Typography
                variant="body1"
                fontSize="14px"
                sx={{ color: "#f9fafbe6" }}>
                {`${testimonial.designation}${testimonial.company}`}
              </Typography>
            </Stack>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
          </Stack>
        </CardContent>
      </Card>
    </Tilt>
  );
};
function Testimonials() {
  return (
    <Box bgcolor="#050816e6">
      <Container
        sx={{
          bgcolor: "rgb(7 0 39)",
          p: "65px!important",
          borderRadius: "10px",
          border: "1px solid black",
          width: "90%",
        }}>
        <Stack sx={{ textAlign: { xs: "center", sm: "start" } }}>
          <motion.div variants={textVariant()}>
            <Typography color="#f9fafbe6"> What Other Says</Typography>
            <Typography
              color="white"
              fontSize={{ sm: "60px", xs: "30px" }}
              fontWeight="bold">
              Testimonials.
            </Typography>
          </motion.div>
        </Stack>
        <Stack mt="20px" gap="10px" direction={{ md: "row", sm: "column" }}>
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={`${testimonial}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default SectionWrapper(Testimonials, "testimonials");

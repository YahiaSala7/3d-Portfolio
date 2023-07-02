import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import FormikContainer from "./FormikContainer";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../hoc";
const Contact = () => {
  return (
    <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
      <Box maxWidth="550px!important" margin="auto">
        <Container
          sx={{
            bgcolor: "rgb(7 0 39)",
            p: "50px 30px!important",
            borderRadius: "10px",
            border: "1px solid black",
            color: "white",
            width: "90%",
          }}>
          <Stack sx={{ textAlign: { xs: "center", sm: "start" } }}>
            <motion.div variants={textVariant()}>
              <Typography color="#f9fafbe6">GET IN TOUCH</Typography>
              <Typography
                color="white"
                fontSize={{ sm: "60px", xs: "30px" }}
                fontWeight="bold">
                Contact.
              </Typography>
            </motion.div>
          </Stack>
          <FormikContainer />
        </Container>
      </Box>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");

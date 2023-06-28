import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import FormikContainer from "./FormikContainer";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
const Contact = () => {
  return (
    <Box bgcolor="#050816e6" p="50px 0">
      <Container
        sx={{
          bgcolor: "rgb(7 0 39)",
          p: "50px!important",
          borderRadius: "10px",
          border: "1px solid black",
          maxWidth: "550px!important",
          color: "white",
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
  );
};

export default Contact;

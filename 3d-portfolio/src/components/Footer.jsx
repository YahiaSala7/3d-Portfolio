import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      p="5px"
      position="absolute"
      width="100%"
      bottom="0"
      bgcolor="rgb(29 24 54 / 15%)"
      display="flex"
      alignItems="center">
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
        }}>
        <Typography fontWeight="bold" fontSize={{ xs: "16px", sm: "18px" }}>
          You Can Find me on:
        </Typography>
        <Stack
          flexGrow={1}
          direction="row"
          justifyContent="center"
          spacing={{ xs: 2 }}>
          <IconButton
            href="#"
            sx={{
              "&:hover": {
                bgcolor: "transparent",
                transform: "scale(1.5)",
                transition: ".4s",
              },
              color: "white",
            }}>
            <GitHub sx={{ fontSize: { xs: "30px", sm: "40px" } }} />
          </IconButton>
          <IconButton
            href="#"
            sx={{
              "&:hover": {
                bgcolor: "transparent",
                transform: "scale(1.5)",
                transition: ".4s",
              },
              color: "white",
            }}>
            <LinkedIn sx={{ fontSize: { xs: "30px", sm: "40px" } }} />
          </IconButton>
          <IconButton
            href="#"
            sx={{
              "&:hover": {
                md: {
                  bgcolor: "transparent",
                  transform: "scale(1.5)",
                  transition: ".4s",
                },
              },
              color: "white",
            }}>
            <Twitter sx={{ fontSize: { xs: "30px", sm: "40px" } }} />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;

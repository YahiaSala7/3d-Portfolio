import { BallCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";
import { technologies } from "../Constants/Constants";
import { Box, Container, Stack } from "@mui/material";

const Tech = () => {
  return (
    <Box bgcolor="#050816e6">
      <Container>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap="70px">
          {technologies.map((technology) => (
            <Box
              width={{ md: "130px", xs: "70px" }}
              height={{ md: "130px", xs: "70px" }}
              key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default SectionWrapper(Tech, "");

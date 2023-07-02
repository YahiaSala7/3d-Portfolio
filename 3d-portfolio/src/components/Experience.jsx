import { SectionWrapper } from "./hoc/index";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { experiences } from "../Constants/Constants";
import { textVariant } from "../utils/motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Divider, List, ListItem, ListItemText } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "react-vertical-timeline-component/style.min.css";
const ExperienceCard = (Props) => {
  const { experience } = Props;
  const { date, iconBg, icon, company_name, title, points } = experience;
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <Stack
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%">
          <img src={icon} alt={company_name} style={{ width: "30px" }} />
        </Stack>
      }>
      <Box>
        <Typography color="white" fontSize="24px" fontWeight="bold">
          {title}
        </Typography>
        <Typography m={0} color="#f9fafbe6" fontWeight="semibold">
          {company_name}
        </Typography>
      </Box>
      <Box>
        <List>
          {points.map((point, index) => (
            <ListItem disablePadding key={`experience-${point}-${index}`}>
              <FiberManualRecordIcon fontSize="25px" />
              <ListItemText
                style={{ color: "wihte", fontSize: "14px", padding: "5px" }}>
                {point}
              </ListItemText>
            </ListItem>
          ))}
          <Divider />
        </List>
      </Box>
    </VerticalTimelineElement>
  );
};

function Experience() {
  return (
    <Box bgcolor="#050816e6" sx={{ padding: "50px 0" }}>
      <Container>
        <Stack sx={{ textAlign: { xs: "center", sm: "start" } }}>
          <motion.div variants={textVariant()}>
            <Typography color="#f9fafbe6"> What I have done so far</Typography>
            <Typography
              color="white"
              fontSize={{ sm: "60px", xs: "30px" }}
              fontWeight="bold">
              Experience.
            </Typography>
          </motion.div>
        </Stack>
        <Stack mt="20px" width={{ lg: "100%", sm: "95%", xs: "100%" }}>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </Stack>
      </Container>
    </Box>
  );
}

export default SectionWrapper(Experience, "experience");

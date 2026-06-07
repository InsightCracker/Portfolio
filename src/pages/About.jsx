import { Box } from "@chakra-ui/react";
import AboutContent from "../components/AboutContent";

const About = () => (
  <Box
    className="About"
    id="about"
    sx={{
      width: "100%",
      minHeight: "100vh",
      background: "linear-gradient(160deg, #f0f6ff 0%, #fafcff 60%, #eef3ff 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: { base: "80px 20px 60px", md: "90px 48px 60px" },
    }}
  >
    <Box sx={{ maxWidth: "1200px", width: "100%" }}>
      <AboutContent />
    </Box>
  </Box>
);

export default About;
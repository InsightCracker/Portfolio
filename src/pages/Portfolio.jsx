import { Box } from "@chakra-ui/react";
import Work from "../components/Work";

const Portfolio = () => (
  <Box
    className="portfolio"
    id="portfolio"
    sx={{
      width: "100%",
      minHeight: "100vh",
      background: "linear-gradient(165deg, #f8faff 0%, #fff 50%, #f0f6ff 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box sx={{ width: "100%" }}>
      <Work />
    </Box>
  </Box>
);

export default Portfolio;
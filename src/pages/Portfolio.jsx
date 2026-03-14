import { 
    Box,
    Text 
  } from "@chakra-ui/react";

import PortfolioHead from "../components/PortfolioHead";
import Work from "../components/Work";

const Portfolio = () => {
  const buttonStyle = {
    width: '7rem',
    padding: "8px",
    cursor: 'pointer',
    fontSize: '.7rem',
    border: '1px solid #fff',
    textAlign: 'center',
    margin: '0 auto',
    marginTop: '.5rem'
  }

  return (
    <Box sx={{
        h: '100%',
        textAlign: 'center'
    }} className="portfolio" id="portfolio">
        <PortfolioHead />
        <Work />
    </Box>
  )
}

export default Portfolio
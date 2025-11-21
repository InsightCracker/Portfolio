import { 
    Box,
    Text 
  } from "@chakra-ui/react";

import PortfolioHead from "../components/PortfolioHead";
import Work from "../components/Work";

const Portfolio = () => {
  const textStyle = {
    width: '7rem',
    fontSize: '.9rem',
    textTransform: 'uppercase',
    color: '#fff',
    padding: '.5rem',
    textAlign: 'center',
    border: '1px solid #fff',
    margin: '0 auto',
    marginTop: '1.5rem'
  }

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

        <Box>
          <a href={"http://www.github.com/InsightCracker"}>
            <Text sx={buttonStyle} marginRight={'.5rem'}>View More</Text>
          </a>
        </Box>
    </Box>
  )
}

export default Portfolio
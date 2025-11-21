import { 
    Box,
    Text,
    Heading 
} from "@chakra-ui/react";
import { 
  FaTwitter, 
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp
} from "react-icons/fa";

import Typewriter from "typewriter-effect";

const LandingContent = () => {
  const buttonStyle = {
    padding: "8px",
    cursor: 'pointer',
    fontSize: '.7rem'
  }
  return (
    <Box className="LandingContent">
        
        <Text className="greeting" sx={{
          fontSize: '.9rem',
          textTransform: 'uppercase',
          bgColor: '#ca0707',
          color: '#fff',
          padding: '.5rem',
          width: "35%",
          textAlign: 'center'
        }}>Hello, I am </Text>
        <Heading className="name" sx={{
          fontSize: '2.2rem',
          wordSpacing: '.3rem',
          margin: '.5rem 0'
        }}>
          <Typewriter 
            options={{
              strings: ['Michael Oladimeji', 'InsightCracker'],
              autoStart: true,
              loop: true
            }}
          />
        </Heading>
        <Text sx={{
          fontSize: '.8rem'
        }}>I'm a data analyst, passionate about turning numbers into insights that drive business growth.</Text>

        <Box sx={{
            margin: '1rem 0'
        }}>
            <Text>Find Me on</Text>

            <Box sx={{
                marginTop: '.5rem',
                fontSize: '1.2rem',
                display: "flex"
            }}>
                <a href={"http://www.twitter.com/InsightCracker"}>
                  <Text marginRight={'.5rem'}><FaTwitter /></Text>
                </a>
                <a href={"http://www.github.com/InsightCracker"}>
                  <Text marginRight={'.5rem'}><FaGithub /></Text>
                </a>
                <a href={"http://www.instagram.com/mightymykel"}>
                  <Text marginRight={'.5rem'}><FaInstagram /></Text>
                </a>
                <a href={"https://www.linkedin.com/in/InsightCracker"}>
                  <Text marginRight={'.5rem'}><FaLinkedinIn /></Text>
                </a>
                <a href={"https://wa.me/+2349036190420"}>
                  <Text marginRight={'.5rem'}><FaWhatsapp /></Text>
                </a>
            </Box>
        </Box>

        <Box sx={{
            display: 'flex',
            margin: '1rem 0'
        }}>
            <a href="#portfolio">
            <Text 
              bgColor={"#ca0707"} 
              border={"1px solid #ca0707"}
              marginRight={"10px"}
              sx={buttonStyle}
            >View Work</Text>
            </a>
            <a href="#contact">
              <Text
                border={"1px solid #fff"} 
                sx={buttonStyle}
              >Hire Me</Text>
            </a>
        </Box>
    </Box>
  )
}

export default LandingContent;
import { 
    Box,
    Text
} from "@chakra-ui/react";
import { 
    FaPhoneSquareAlt,
    FaEnvelope,
    FaLocationArrow,
    FaCheckCircle
  } from "react-icons/fa";

const ProductRightBox = () => {
    const buttonStyle = {
    padding: "8px",
    cursor: 'pointer',
    fontSize: '.7rem'
  }

  return (
    <Box data-aos="fade-left" data-aos-delay='300' sx={{
        bgColor: '#f5f5f5ff',
        color: '#5f5f5fff',
        padding: '15px',
        borderTopLeftRadius: '15px',
        borderBottomRightRadius: '15px',
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'center'
    }} className="ProductRightBox">
        <ul style={{
            marginTop: '.5rem',
            lineHeight: '1.7rem'
        }}>
            <li><span className="icon"><FaCheckCircle /></span> Play Interactive data quizzes and compete globally</li>
            <li><span className="icon"><FaCheckCircle /></span> Convert PDFs to Excel & CSV in seconds</li>
            <li><span className="icon"><FaCheckCircle /></span> Generate AI-powered reports and smart insights instantly</li>
            <li><span className="icon"><FaCheckCircle /></span> Climb the leaderboard and challenge our AI bot</li>
        </ul>

        <Box sx={{
          display: 'flex',
          margin: '1rem 0'
        }}>
          <a href="https://www.dataxo.cfd/">
          <Text 
            bgColor={"#3b82f6"} 
            border={"1px solid #3b82f6"}
            marginRight={"10px"}
            sx={buttonStyle}
          >Visit DataXO</Text>
          </a>
          <a href="https://github.com/InsightCracker/dataxo">
            <Text
              border={"1px solid #3b82f6"}
              color={'#000'} 
              sx={buttonStyle}
            >View on Github</Text>
          </a>
        </Box>
    </Box>
  )
}

export default ProductRightBox
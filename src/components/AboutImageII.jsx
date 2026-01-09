import { 
    Box
  } from "@chakra-ui/react";
  import Pic from "../assets/image/fgg.png"; 
  
  const AboutImageII = () => {
    return (
      <Box data-aos="fade-right" className="AboutImage">
        <Box sx={{
            bgColor: '#3b82f6',
            zIndex: '-1'
        }} className="top"></Box>
        <Box sx={{
          maxW: '300px',
          m: '0 auto',
          border: '1px solid #3b82f6',
          bgColor: '#fff'      
      }} className="landing_con">
          <img src={Pic} alt="code" />
        </Box>
        <Box sx={{
            bgColor: '#3b82f6'
        }} className="bottom"></Box>
      </Box>
    )
  }
  
  export default AboutImageII;
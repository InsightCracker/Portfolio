import { 
  Box
} from "@chakra-ui/react";
import Pic from "../assets/image/fgg.png"; 

const LandingImage = () => {
  return (
    <Box className="LandingImage">
      <Box sx={{
          bgColor: '#3b82f6'
        }} className="top"></Box>
      <Box sx={{
        maxW: '300px',
        m: '0 auto',
        border: '1px solid #fff',
        bgColor: '#fff',      
    }} className="landing_con">
        <img src={Pic} alt="code" />
      </Box>
      <Box sx={{
          bgColor: '#fff'
        }} className="bottom"></Box>
    </Box>
  )
}

export default LandingImage;
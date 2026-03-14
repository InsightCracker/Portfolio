import { 
  Box
} from "@chakra-ui/react";

import dataox from "../assets/image/dataox.png"



const ProductLeftBox = () => {
  return (
    <Box data-aos="fade-right" className="AboutImage">
      <Box sx={{
        bgColor: '#3b82f6',
        zIndex: '-1'
      }} className="top"></Box>
      
      <Box
        sx={{
          maxWidth: '400px',
          margin: '0 auto',
          border: '1px solid #3b82f6',
          backgroundColor: '#fff'
        }}
        className="landing_con"
      >
        <img src={dataox} 
          alt="DataXO" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </Box>
      
      <Box sx={{
        bgColor: 'red'
      }} className="bottom"></Box>
    </Box>
  )
}

export default ProductLeftBox
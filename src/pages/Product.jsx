import { 
  Box,
  Text 
} from "@chakra-ui/react";

import ProductLeftBox from "../components/ProductLeftBox";
import ProductRightBox from "../components/ProductRightBox";

const textStyle = {
    width: '10rem',
    fontSize: '.9rem',
    backgroundColor: '#3b82f6',
    textTransform: 'uppercase',
    color: '#fff',
    padding: '1rem .5rem',
    textAlign: 'center',
    margin: '0 auto',
    marginBottom: '1rem',
    borderRadius: '.5rem'
    }


const Product = () => {
    
  return (
    <Box sx={{
        margin: '60px 0'
    }} className="product" id="">
        <Box>
            <Text className="bgStyle" sx={textStyle}>DataXO</Text>
        </Box>

        <Box className="contact_con">
            <ProductLeftBox />
            <ProductRightBox />
        </Box>
    </Box>
  )
}

export default Product
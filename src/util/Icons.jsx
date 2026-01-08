import { 
    FaLaptop
} from "react-icons/fa";

import { Box, Text } from "@chakra-ui/react";

const Icons = () => {
    const iconStyle = {
        fontSize: '1.5rem',
        opacity: '0.8',
        zIndex: '-100',
        pos: 'absolute'
    }

  return (
    <Box sx={{
        pos: 'absolute',
        top: '10%',
        left: 0
    }}>
        <Text sx={iconStyle}
            left='20%'
        ><FaLaptop /></Text>
    </Box>
  )
}

export default Icons
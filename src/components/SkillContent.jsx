import { 
    Box,
    Text
} from "@chakra-ui/react";

import ContactLeft from "../components/ContactLeft";
import ContactRight from "../components/ContactRight";

const SkillContent = () => {
    const textStyle = {
        width: '8rem',
        fontSize: '.9rem',
        backgroundColor: '#ca0707',
        textTransform: 'uppercase',
        color: '#fff',
        padding: '1rem .5rem',
        textAlign: 'center',
        margin: '0 auto',
        marginBottom: '1rem'
    }
  return (
    <Box sx={{
        margin: '30px 0'
    }} className="contact" id="contact">
        <Box>
            <Text className="bgStyle" sx={textStyle}>Get in touch!</Text>
        </Box>

        <Box className="contact_con">
            <ContactLeft />
            <ContactRight />
        </Box>
    </Box>
  )
}

export default SkillContent
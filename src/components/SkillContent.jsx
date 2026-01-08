import { 
    Box,
    Text
} from "@chakra-ui/react";

import SkillBoxOne from "../components/SkillBoxOne";
import SkillBoxTwo from "../components/SkillBoxTwo";
import SkillBoxThree from "../components/SkillBoxThree";
import SkillBoxFour from "../components/SkillBoxFour";

const SkillContent = () => {
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
  return (
    <Box sx={{
        margin: '7rem 0'
    }} className="contact" id="skills">
        <Box>
            <Text className="bgStyle" sx={textStyle}>Technical Skills</Text>
        </Box>

        <Box className="contact_con">
            <SkillBoxOne />
            <SkillBoxTwo />
            <SkillBoxThree />
            <SkillBoxFour />
        </Box>
    </Box>
  )
}

export default SkillContent
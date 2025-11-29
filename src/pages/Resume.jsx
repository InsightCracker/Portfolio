import { 
    Box,
    Text 
} from "@chakra-ui/react";
import cv from '../assets/doc/CV.pdf';

const Resume = () => {
    const textStyle = {
        width: '8rem',
        fontSize: '.9rem',
        textTransform: 'uppercase',
        color: '#fff',
        textAlign: 'center',
        margin: '0 auto',
        marginBottom: '1rem',
        backgroundColor: '#ca0707',
        padding: '1rem .5rem'
    }

    const buttonStyle = {
        padding: "8px",
        cursor: 'pointer',
        fontSize: '.7rem',
        border: '1px solid #fff',
        textAlign: 'center',
        margin: '0 auto'
    };

  return (
    <Box sx={{
        h: '100%',
    }} className="resume" id="resume">
        <Text 
            sx={textStyle}
            className="bgStyle"
        >My Resume</Text>

        <Text data-aos="fade-up" data-aos-offset="200" sx={{
            fontSize: '.9rem',
            margin: '1rem 0',
            textAlign: 'justify'
        }}>
            Courteous, enthusiastic, and highly motivated, I am passionate about technology and the many ways it transforms everyday life. Over time, I developed a strong interest in data analytics: cleaning data, uncovering insights, and building dashboards that solve real problems. I have collaborated on several projects where I worked closely with experienced analysts and developers, gaining hands-on experience and strengthening my technical skills.
            As data analytics aligns perfectly with my academic background and career goals, I am eager to gain even more industry experience. I am currently seeking an opportunity with an organization that is willing to support my growth as an analyst. In return, I offer full commitment, a strong work ethic, and a positive, collaborative attitude that contributes meaningfully to the team.
        </Text>

        <Box>
            <a href={cv} download rel="noopener noreferrer" target={'_blank'}>
                <Text data-aos="fade-in" data-aos-delay='300'
                    sx={buttonStyle} 
                    width={'7rem'}
                >Download Resume</Text>
            </a>
        </Box>
    </Box>
  )
}

export default Resume
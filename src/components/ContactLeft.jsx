import { 
    Box,
    Text
} from "@chakra-ui/react";
import { 
    FaPhoneSquareAlt,
    FaEnvelope,
    FaLocationArrow
  } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <Box data-aos="fade-right" data-aos-delay='300' sx={{
        bgColor: '#bd0606',
        padding: '15px',
        borderTopLeftRadius: '15px',
        borderBottomRightRadius: '15px'
    }} className="contactLeftBox">
        <Text sx={{
            fontWeight: '500',
            fontSize: '1.2rem',
            marginBottom: '.3rem'
        }}>CONTACT INFO</Text>
        <Text  sx={{
            fontSize: '.8rem',
            marginBottom: '1rem'
        }}>Always available for freelance work. Feel free to reach me!</Text>

        <ul style={{
            marginTop: '.5rem'
        }}>
            <li><span className="icon"><FaPhoneSquareAlt /></span> +234 903 6190 420</li>
            <li><span className="icon"><FaEnvelope /></span> oladimejimichael224@gmail.com</li>
            <li><span className="icon"><FaLocationArrow /></span> Lagos, Nigeria</li>
        </ul>
    </Box>
  )
}

export default ContactLeft
import { 
    Box,
    Text
} from "@chakra-ui/react";
import { 
    FaCartArrowDown
  } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <Box data-aos="fade-right" data-aos-delay='300' sx={{
        bgColor: '#3b82f6',
        color: '#fff',
        padding: '20px 15px 3rem 15px',
        margin: '.5rem 0',
        borderTopLeftRadius: '15px',
        borderBottomRightRadius: '15px'
    }} className="contactLeftBox">    
        <Text sx={{
            fontWeight: '500',
            fontSize: '1.2rem',
            marginLeft: '.3rem',
            marginBottom: '.3rem',
            display: 'inline',
        }}>Database</Text>

        <Box sx={{
            margin: '10px 0'
        }}>
            <Text sx={{
                padding: '.3rem .8rem',
                fontSize: '.8rem',
                bgColor: '#ccdbf180',
                color: '#222222ff',
                display: 'inline-block',
                borderRadius: '10px',
                marginRight: '5px',
                marginBottom: '5px'
            }}>
                SQL
            </Text>

            <Text sx={{
                padding: '.3rem .8rem',
                fontSize: '.8rem',
                bgColor: '#ccdbf180',
                color: '#222222ff',
                display: 'inline-block',
                borderRadius: '10px',
                marginRight: '5px'
            }}>
                DAX
            </Text>
        </Box>
    </Box>
  )
}

export default ContactLeft
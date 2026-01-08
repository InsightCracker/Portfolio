import { 
    Box,
    Text
} from "@chakra-ui/react";

const Footer = () => {
    return (
    <Box sx={{
      width: "100%",
      height: '20vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3b82f6',
      color: '#fff',
      textAlign: 'center',
      bottom: 0,
      left: 0,
      zIndex: '2000',
    }} className="footer">
        <Box>
        <Text sx={{
          fontSize: '.8rem',
          fontWeight: '500',
          paddingTop: '10px'
        }} className='code'>© 2026 Michael Oladimeji. All rights reserved.</Text>
      </Box>
    </Box>
    )
}

export default Footer
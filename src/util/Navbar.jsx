import { useState } from "react";

import { 
  Box,
  Text 
} from "@chakra-ui/react";

import { 
  FaBars,
  FaTimes
} from "react-icons/fa";

const Navbar = () => {
  const [ show, setShow ] = useState(false);

  return (
    <Box sx={{
      width: "100%",
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      pos: 'fixed',
      backgroundColor: 'rgb(3, 3, 3)',
      top: 0,
      left: 0,
      zIndex: '2000',
      paddingBottom: '.5rem'
    }} className='navbar'>
      <Box>
        <Text sx={{
          fontSize: '1.5rem',
          fontWeight: '500',
          paddingTop: '10px'
        }} className='code'>InsightCracker</Text>
      </Box>

      <Box className="large_nav">
        <ul>
        <a href="#about">
           <li>About</li>
          </a>
          <a href="#portfolio">
            <li>Portfolio</li>
          </a>
          <a href="#resume">
            <li>Resume</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </Box>

      <Box 
        className="small_nav"
        display={show ? 'block' : 'none' }
      >
        <ul>
          <a href="#about">
           <li>About</li>
          </a>
          <a href="#portfolio">
            <li>Portfolio</li>
          </a>
          <a href="#resume">
            <li>Resume</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </Box>

      <Box className="extension" sx={{
          fontSize: '1.5rem',
          paddingTop: '10px'
        }}>
        <Text onClick={() => setShow(!show)}>
          {show ? <FaTimes /> : <FaBars />}
        </Text>
      </Box>
    </Box>
  )
}

export default Navbar
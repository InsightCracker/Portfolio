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
      backgroundColor: '#3b82f6',
      color: '#fff',
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
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#portfolio">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </Box>

      <Box className="navbox" sx={{
          height: '20rem',
          width: '100%',
          bgColor: '#3b82f6',
          position: 'absolute',
          right: '0',
          top: '45px',
          padding: '0 1rem',
          fontWeight: '500',
          fontSize: '1rem',
          textTransform: 'uppercase',
          lineHeight: '4rem'
        }}
          display={show ? 'block' : 'none' }
      >
        <ul>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#portfolio">
            <li>Projects</li>
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
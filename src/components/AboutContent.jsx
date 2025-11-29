import { 
    Box,
    Text,
    CircularProgress,
    CircularProgressLabel
} from "@chakra-ui/react";

import { 
    FaGlobe,
    FaEnvelope,
    FaPhoneAlt,
    FaFacebook
  } from "react-icons/fa"; 

// Import Swiper React components
import { 
    Swiper, 
    SwiperSlide
} from 'swiper/react';

import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import AboutImage from "./AboutImage";
import AboutImageII from "./AboutImageII";
import AboutImageIII from "./AboutImageIII";
import AboutImageIV from "./AboutImageIV";


const AboutContent = () => {
    const textStyle = {
        fontSize: '.9rem',
        textTransform: 'uppercase',
        bgColor: '#ca0707',
        color: '#fff',
        padding: '.5rem',
        textAlign: 'center',
        marginBottom: '.5rem'
    }

    const heading = {
        fontSize: '1.2rem',
        paddingBottom: '.3rem',
        color: '#ca0707'
    }

    const text = {
        color: '#f4f4f4',
        fontSize: '.9rem'
    }
  return (
        <Swiper
            pagination={{
                type: "fraction",
            }}
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
        >
            <SwiperSlide>
                <Box sx={{
                    width: '100%',
                    h: '100%',
                    alignItems: 'center',
                    paddingBottom: '30px'
            }} className="swiper_box">
                    <AboutImageII />
                    <Box>
                        <Text 
                            width={'7rem'}
                            className="greeting bgStyle" 
                            sx={textStyle}>About Me </Text>

                        <Text data-aos="fade-left" className="write_up" sx={{
                            fontSize: '.8rem',
                            lineHeight: '1.3rem',
                            textAlign: 'justify'
                        }}>Hi, thanks for stopping by! I’m Michael Oladimeji, a Data Analyst with strong problem-solving skills. I take messy data and turn it into insights people can actually use and have worked on building dashboards, reports, and data-driven solutions using modern analytics tools and techniques.<br />
                         If you're looking for a detail-driven and analytical data professional to bring clarity to your data and support your next project. I might just be the guy you need.</Text>
                    </Box>
                </Box>
            </SwiperSlide>

            <SwiperSlide>
                <Box sx={{
                    width: '100%',
                    h: '100%',
                    alignItems: 'center',
                    paddingBottom: '30px'
            }} className="swiper_box">
                    <AboutImageIII />
                    
                    <Box>
                        <Box sx={{
                            marginBottom: '1rem'
                        }}>
                            <Text 
                                className="greeting bgStyle" 
                                width={'8rem'} 
                                sx={textStyle}>Skills</Text>

                            <Box data-aos="fade-left" className="badges">
                                <img src="https://img.shields.io/badge/-MsExcel-222222?style=flat&logo=microsoftexcel&logoColor=61DAFB" alt="MsExcel" />
                                <img src="https://img.shields.io/badge/-SQL-222222?style=flat&logo=mySQL&logoColor=61DAFB" alt="SQL" />
                                <img src="https://img.shields.io/badge/-PowerBI-222222?style=flat&logo=powerbi&logoColor=61DAFB" alt="POWER BI" />
                                <img src="https://img.shields.io/badge/-Git-222222?style=flat&logo=git&logoColor=F05032" alt="git" />
                                <img src="https://img.shields.io/badge/-Github-222222?style=flat&logo=github&logoColor=ffffff" alt="github" />
                                
                            </Box>
                        </Box>

                        <Box>
                            <Text 
                                className="greeting bgStyle"
                                width={'8rem'} 
                                sx={textStyle}>Other Skills</Text>

                            <Box data-aos="fade-left" className="badges">
                                <img src="https://img.shields.io/badge/-MsWord-222222?style=flat&logo=microsoftword&logoColor=61DAFB" alt="MsWord" />
                                <img src="https://img.shields.io/badge/-HTML5-ffffff?style=flat&logo=html5" alt="html" />
                                <img src="https://img.shields.io/badge/-CSS3-222222?style=flat&logo=css3&logoColor=61DAFB" alt="css" />
                                <img src="https://img.shields.io/badge/-VSCode-222222?style=flat&logo=visualstudiocode&logoColor=61DAFB" alt="vscode" />
                                <img src="https://img.shields.io/badge/-Photoshop-222222?style=flat&logo=adobephotoshop&logoColor=61DAFB" alt="Photoshop" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </SwiperSlide>
        </Swiper>
  )
}

export default AboutContent
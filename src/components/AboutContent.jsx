import { 
    Box,
    Text
} from "@chakra-ui/react";

// Import Swiper React components
import { 
    Swiper, 
    SwiperSlide
} from 'swiper/react';

import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import AboutImageII from "./AboutImageII";
import AboutImageIII from "./AboutImageIII";


const AboutContent = () => {
    const textStyle = {
        fontSize: '.9rem',
        textTransform: 'uppercase',
        bgColor: '#3b82f6',
        color: '#fff',
        padding: '.5rem',
        textAlign: 'center',
        marginBottom: '.5rem',
        borderRadius: '.5rem'
    }

  return (
        <Swiper
            pagination={true}
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
                    <Box sx={{
                            bgColor: '#f5f5f5ff',
                            color: '#fff',
                            padding: '20px 15px 1rem 15px',
                            margin: '.5rem 0',
                            borderTopLeftRadius: '15px',
                            borderBottomRightRadius: '15px',
                            lineHeight: '1rem'
                        }}>
                        <Text 
                            width={'7rem'}
                            className="greeting bgStyle" 
                            sx={textStyle}>About Me </Text>

                        <Text data-aos="fade-left" className="write_up" sx={{
                            fontSize: '.8rem',
                            lineHeight: '1.2rem',
                            textAlign: 'justify',
                            color: '#5f5f5fff'
                        }}>
                            I’m a detail-oriented Accounting graduate (B.Sc., Second Class Upper) with a strong passion for data analytics and financial insight generation.
                        </Text>

                        <Text data-aos="fade-left" className="write_up" sx={{
                            fontSize: '.8rem',
                            lineHeight: '1.2rem',
                            textAlign: 'justify',
                            color: '#5f5f5fff'
                        }}>
                            With experience in financial reporting, reconciliation, and budgeting, combined with hands-on skills in SQL, Power BI, and data storytelling, I help turn financial data into actionable insights that support better decision-making.
                        </Text>

                        <Text data-aos="fade-left" className="write_up" sx={{
                            fontSize: '.8rem',
                            lineHeight: '1.2rem',
                            textAlign: 'justify',
                            color: '#5f5f5fff'
                        }}>
                            I currently teach Data Analytics at Codar Tech Africa, while building advanced skills in Python and AI-driven financial modeling, with a focus on solving real-world problems in fraud detection, risk management, and forecasting.
                        </Text>
                    </Box>
                </Box>
            </SwiperSlide>

            <SwiperSlide>
                <Box id="education" sx={{
                    width: '100%',
                    alignItems: 'center',
                    paddingBottom: '30px'
            }} className="swiper_box">
                    <AboutImageIII />
                    
                    <Box>
                        <Box sx={{
                            bgColor: '#f5f5f5ff',
                            color: '#fff',
                            padding: '20px 15px 3rem 15px',
                            margin: '.5rem 0',
                            borderTopLeftRadius: '15px',
                            borderBottomRightRadius: '15px',
                            lineHeight: '1.5rem'
                        }} className="contactLeftBox">
                            <Text 
                                className="greeting bgStyle" 
                                width={'8rem'} 
                                sx={textStyle}>Education</Text>

                            <Box data-aos="fade-left">
                                <Text sx={{
                                    color: '#000',
                                    fontWeight: '500',
                                    fontSize: '1.2rem',
                                    marginBottom: '.3rem'
                                }}>B.sc. in Accounting</Text>

                                <Text sx={{
                                    color: '#3b82f6',
                                    fontWeight: '500',
                                    fontSize: '.9rem',
                                    marginBottom: '.3rem'
                                }}>Adekunle Ajasin University, Akungba-Akoko, Ondo State, Nigeria</Text> 

                                <Text sx={{
                                    color: '#5f5f5fff',
                                    fontWeight: '500',
                                    fontSize: '.8rem',
                                    marginBottom: '.3rem'
                                }}>2021 - 2025</Text>             
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </SwiperSlide>
        </Swiper>
  )
}

export default AboutContent
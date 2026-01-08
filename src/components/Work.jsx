import { 
    Box,
    Text
} from "@chakra-ui/react";

import { 
    Swiper, 
    SwiperSlide
} from 'swiper/react';

import {
    FaArrowRight
} from 'react-icons/fa'

import { Pagination } from 'swiper';

import 'swiper/css';
import "swiper/css/pagination";


import sales from "../assets/image/sales.png";
import dataclean from "../assets/image/dataclean.jpg";


const Work = () => {
  return (
    <Box className="project">
    <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={10}
        breakpoints= {{
            0: {
                slidesPerView: 1,
            },

            650: {
                spaceBetween: 20,
                slidesPerView: 2,
            },

            1024: {
                spaceBetween: 20,
                slidesPerView: 2,
            },

            1440: {
                spaceBetween: 20,
                slidesPerView: 3,
            }
        }}


        style={{
            padding: '0'
        }}
    >

        <SwiperSlide>
            <Box className="projectbox" sx={{
                height: '420px',
                bgColor: '#fafafaff',
                color: '#000',
                border: '1px solid #363636ff',
                borderTopLeftRadius: '15px',
                borderBottomRightRadius: '15px',
                overflow: 'hidden'
        }}>
                <Box className="box" sx={{
                    height: '35%',
                    overflow: 'hidden'
                }} >
                    <img 
                        src={dataclean}
                        sx={{
                        width: '100%',
                        height: '100%'
                    }}
                        alt="E-Commerce Customer Behavior and Sales Dataset" 
                    />
                </Box>

                <Box sx={{
                    textAlign: 'justify',
                    color: '#000',
                    padding: '.8rem'
                    }}>
                
                    <Text sx={{
                        fontSize: '1rem',
                        fontWeight: '500'
                    }}>Data Cleaning and Validation</Text>

                    <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            margin: '10px 0'
                        }}>
                            Excel
                        </Text>
                    
                    <Text sx={{
                        lineHeight: '1.1rem',
                        fontSize: '.9rem',
                        color: '#16161680'
                        }}>
                            I completed a data cleaning project that involved handling missing and invalid values, removing duplicates, and standardizing date formats, resulting in improved data accuracy and reliability for effective analysis.
                    </Text>

                    <a href="https://github.com/InsightCracker/E-Commerce-Customer-Behavior-and-Sales-Dataset">
                        <Text sx={{
                            fontSize: '.7rem',
                            cursor: 'pointer',
                            color: '#3b82f6',
                            display: 'inline'
                        }}>Read More 
                        </Text>
                    </a>
                </Box>
            </Box>
        </SwiperSlide>

 <SwiperSlide>
            <Box className="projectbox" sx={{
                height: '420px',
                bgColor: '#fafafaff',
                color: '#000',
                border: '1px solid #363636ff',
                borderTopLeftRadius: '15px',
                borderBottomRightRadius: '15px',
                overflow: 'hidden'
        }}>
                <Box className="box" sx={{
                    height: '35%',
                    overflow: 'hidden'
                }} >
                    <img 
                        src={sales}
                        sx={{
                        width: '100%',
                        height: '100%'
                    }}
                        alt="E-Commerce Customer Behavior and Sales Dataset" 
                    />
                </Box>

                <Box sx={{
                    textAlign: 'justify',
                    color: '#000',
                    padding: '.8rem'
                    }}>
                
                    <Text sx={{
                        fontSize: '1rem',
                        fontWeight: '500'
                    }}>E-commerce Behaviour and Sales Analysis Dashboard</Text>

                    <Box>
                        <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            margin: '10px 0'
                        }}>
                            Excel
                        </Text>

                        <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            margin: '10px 0'
                        }}>
                            Power Bi
                        </Text>

                        <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            margin: '10px 0'
                        }}>
                            Sales Analysis
                        </Text>

                        <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            margin: '10px 0'
                        }}>
                            Critical Thinking
                        </Text>

                        <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            margin: '10px 0'
                        }}>
                            Report
                        </Text>
                    </Box>
                    
                    <Text sx={{
                        lineHeight: '1.1rem',
                        fontSize: '.9rem',
                        color: '#16161680'
                        }}>
                            I completed a data cleaning project that involved handling missing and invalid values, removing duplicates, and standardizing date formats, resulting in improved data accuracy and reliability for effective analysis.
                    </Text>

                    <a href="https://github.com/InsightCracker/E-Commerce-Customer-Behavior-and-Sales-Dataset">
                        <Text sx={{
                            fontSize: '.7rem',
                            cursor: 'pointer',
                            color: '#3b82f6',
                            display: 'inline'
                        }}>Read More 
                        </Text>
                    </a>
                </Box>
            </Box>
        </SwiperSlide>

        <SwiperSlide>
            <Box className="projectbox" sx={{
                height: '420px',
                bgColor: '#fafafaff',
                color: '#000',
                border: '1px solid #363636ff',
                borderTopLeftRadius: '15px',
                borderBottomRightRadius: '15px',
                overflow: 'hidden'
        }}>
                <Box className="box" sx={{
                    height: '35%',
                    overflow: 'hidden'
                }} >
                    <img 
                        src={sales}
                        sx={{
                        width: '100%',
                        height: '100%'
                    }}
                        alt="E-Commerce Customer Behavior and Sales Dataset" 
                    />
                </Box>

                <Box sx={{
                    textAlign: 'justify',
                    color: '#000',
                    padding: '.8rem'
                    }}>
                
                    <Text sx={{
                        fontSize: '1rem',
                        fontWeight: '500'
                    }}>Data Cleaning and Validation</Text>

                    <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            margin: '10px 0'
                        }}>
                            Excel
                        </Text>
                    
                    <Text sx={{
                        lineHeight: '1.1rem',
                        fontSize: '.9rem',
                        color: '#16161680'
                        }}>
                            I completed a data cleaning project that involved handling missing and invalid values, removing duplicates, and standardizing date formats, resulting in improved data accuracy and reliability for effective analysis.
                    </Text>

                    <a href="https://github.com/InsightCracker/E-Commerce-Customer-Behavior-and-Sales-Dataset">
                        <Text sx={{
                            fontSize: '.7rem',
                            cursor: 'pointer',
                            color: '#3b82f6',
                            display: 'inline'
                        }}>Read More 
                        </Text>
                    </a>
                </Box>
            </Box>
        </SwiperSlide>

        <SwiperSlide>
            <Box className="projectbox" sx={{
                height: '420px',
                bgColor: '#fafafaff',
                color: '#000',
                border: '1px solid #363636ff',
                borderTopLeftRadius: '15px',
                borderBottomRightRadius: '15px'
        }}>
                <Box className="box" sx={{
                    height: '35%',
                    overflow: 'hidden'
                }} >
                    <img 
                        src={sales}
                        sx={{
                        width: '100%',
                        height: '100%'
                    }}
                        alt="E-Commerce Customer Behavior and Sales Dataset" 
                    />
                </Box>

                <Box sx={{
                    textAlign: 'justify',
                    color: '#000',
                    padding: '.8rem'
                    }}>
                
                    <Text sx={{
                        fontSize: '1rem',
                        fontWeight: '500'
                    }}>Data Cleaning and Validation</Text>

                    <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            margin: '10px 0'
                        }}>
                            Excel
                        </Text>
                    
                    <Text sx={{
                        lineHeight: '1.1rem',
                        fontSize: '.9rem',
                        color: '#16161680'
                        }}>
                            I completed a data cleaning project that involved handling missing and invalid values, removing duplicates, and standardizing date formats, resulting in improved data accuracy and reliability for effective analysis.
                    </Text>

                    <a href="https://github.com/InsightCracker/E-Commerce-Customer-Behavior-and-Sales-Dataset">
                        <Text sx={{
                            fontSize: '.7rem',
                            cursor: 'pointer',
                            color: '#3b82f6',
                            display: 'inline'
                        }}>Read More 
                        </Text>
                    </a>
                </Box>
            </Box>
        </SwiperSlide>
    </Swiper>
    </Box>
  )
}

export default Work
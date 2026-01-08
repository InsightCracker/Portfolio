import { 
    Box,
    position,
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
import usDebt from "../assets/image/usDebt.png";
import ballon from '../assets/image/ballon.png'


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
                height: '425px',
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
                height: '425px',
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
                        width: '10%',
                        height: '35%',
                        position: 'relative',
                        fit: 'cover'
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
                        fontWeight: '500',
                    }}>E-commerce Sales Analysis Dashboard</Text>

                    <Box sx={{
                        margin: '10px 0'
                    }}>
                        <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            marginRight: '5px',
                            marginBottom: '5px'
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
                            marginRight: '5px'
                        }}>
                            Power BI
                        </Text>

                        <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            marginRight: '5px',
                            marginBottom: '5px'
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
                            marginRight: '5px',
                            marginBottom: '5px'
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
                            marginRight: '5px'
                        }}>
                            Data Interpretation & Reporting
                        </Text>
                    </Box>
                    
                    <Text sx={{
                        lineHeight: '1.1rem',
                        fontSize: '.9rem',
                        color: '#16161680'
                        }}>
                            Developed an interactive Power BI dashboard to analyze E-commerce sales performance, presenting insights on total revenue (₦4.92M), customer behaviour, and order trends by product category and city.
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
                height: '425px',
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
                        src={usDebt}
                        sx={{
                        width: '100%',
                        height: '100%'
                    }}
                        alt="US Debt TO PENNY ANALYSIS" 
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
                    }}>US Debt to Penny Analysis</Text>

                    <Box sx={{
                        margin: '10px 0'
                    }}>
                        <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            marginRight: '5px',
                            marginBottom: '5px'
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
                            marginRight: '5px'
                        }}>
                            SQL
                        </Text>

                        <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            marginRight: '5px',
                            marginBottom: '5px'
                        }}>
                            Financial Analysis
                        </Text>

                        <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            marginRight: '5px',
                            marginBottom: '5px'
                        }}>
                            Statistics
                        </Text>

                        <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            marginRight: '5px'
                        }}>
                            Database Schema Design
                        </Text>
                    </Box>
                    
                    <Text sx={{
                        lineHeight: '1.1rem',
                        fontSize: '.9rem',
                        color: '#16161680'
                        }}>
                            Designed a relational database schema to analyze U.S. debt to penny, modeling debt instruments, Growth rate.
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
                height: '425px',
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
                        src={ballon}
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
                    }}>2025 Ballon d'Or Nominees Analysis</Text>

                    <Box sx={{
                        margin: '10px 0'
                    }}>
                        <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            marginRight: '5px',
                            marginBottom: '5px'
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
                            marginRight: '5px'
                        }}>
                            Power BI
                        </Text>

                        <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            marginRight: '5px',
                            marginBottom: '5px'
                        }}>
                            Sport Analysis
                        </Text>

                        <Text sx={{
                            padding: '.3rem .8rem',
                            fontSize: '.8rem',
                            bgColor: '#ccdbf180',
                            color: '#3b82f6',
                            display: 'inline-block',
                            borderRadius: '10px',
                            marginRight: '5px',
                            marginBottom: '5px'
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
                            marginRight: '5px'
                        }}>
                            Data Visualization and Story-telling
                        </Text>
                    </Box>

                    <Text sx={{
                        lineHeight: '1.1rem',
                        fontSize: '.9rem',
                        color: '#16161680'
                        }}>
                            I analyzed the performance of 2025 Ballon d’Or male nominees by examining key metrics such as goals, assists, minutes played, and disciplinary records to identify top- and low-performing players, leading contributors, and overall performance trends.
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
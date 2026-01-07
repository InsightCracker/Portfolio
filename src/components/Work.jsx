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

import uber from "../assets/image/uber.png";
import spotify from "../assets/image/spotify.png";
import sales from "../assets/image/sales.png";
import hr from "../assets/image/hr.png";

const buttonStyle = {
    width: '5rem',
    cursor: 'pointer',
    border: '1px solid red',
    textAlign: 'center',
  }


const Work = () => {
  return (
    <Swiper
        className="projects"
        pagination={true}
        modules={[Pagination]}
        spaceBetween={50}
        breakpoints= {{
            0: {
                slidesPerView: 1,
            },

            650: {
                spaceBetween: 20,
                slidesPerView: 2,
            },

            1024: {
                spaceBetween: 40,
                slidesPerView: 3,
            },

            1440: {
                slidesPerView: 4,
            }
        }}


        style={{
            padding: '0'
        }}
    >

        <SwiperSlide>
            <Box sx={{
                width: '35rem',
                height: '400px',
                bgcolor: '#000',
                color: '#000',
                padding: '20px',
                shadow: '20px',
                borderTopLeftRadius: '15px',
                borderBottomRightRadius: '15px',
                border: '10px'
        }}>
                <a href="https://github.com/InsightCracker/E-Commerce-Customer-Behavior-and-Sales-Dataset">

                    <Box className="box" sx={{
                    height: '200px'
                    }}>
                        <img src={sales} alt="E-Commerce Customer Behavior and Sales Dataset" />
                    </Box>
                    <Box sx={{
                        fontSize: '.8rem',
                        lineHeight: '1.3rem',
                        textAlign: 'justify',
                        color: '#000',
                        paddingTop: '.5rem'
                        }}>
                        <h4>🚀🛒 E-COMMERCE CUSTOMER BEHAVIOR AND SALES DATASET🚀 <br /></h4>
                        📊 Executive Summary<br />
                        This report presents an overview of e-commerce customer behavior and sales performance for the 2023–2024 period, analyzed using SQL and Power BI. Total sales amounted to ₺4.92 million from 5,000 customers, with an average order value of ₺983.11. Electronics, Home & Garden, and Sports were the top-performing categories, while Books and Food recorded the lowest sales. Istanbul led all cities with ₺1.33 million in revenue, followed by Ankara and Izmir.<br />

                        <a href="https://github.com/InsightCracker/E-Commerce-Customer-Behavior-and-Sales-Dataset">
                            <Text sx={buttonStyle} marginRight={'.5rem'}>Read More</Text>
                        </a>
                    </Box>
                </a>
            </Box>
        </SwiperSlide>

        {/* <SwiperSlide>
            <a href="https://github.com/InsightCracker/HR-ANALYTICS-REPORT---ABSENTEEISM">
                <Box className="box">
                    <img src={hr} alt="HR ANALYTICS REPORT – ABSENTEEISM INSIGHTS" />
                </Box>
                <Box sx={{
                    fontSize: '.8rem',
                    lineHeight: '1.3rem',
                    textAlign: 'justify',
                    paddingTop: '.5rem'
                    }}>
                    <h4>🚀📘 HR ANALYTICS REPORT – ABSENTEEISM INSIGHTS🚀 <br /></h4>
                    📊 Executive Summary<br />
                    This HR Absenteeism Analysis provides a comprehensive assessment of employee absence patterns using multiple behavioral, demographic, and operational indicators. The findings reveal that absenteeism is heavily influenced by health-related factors, commute challenges, age groups, and work tenure, with significant seasonal and monthly fluctuations. <br />
                    🔍Key highlights<br />
                    • Total Absenteeism Hours: 5,100+ hours<br />
                    • Total Absentees: 737<br />
                    • Average Absence Hours per Employee: 6.95 hours<br />
                    • Average Employee Age: 36.4 years<br />
                    • Peak absenteeism occurs in February, March, and July.<br />
                    • The 30–39 age group accounts for the highest number of absences.<br />
                    • Medical consultations and musculoskeletal issues are the leading reasons for absence.<br />
                    • Employees with longer service (11–19 years) contribute significantly more hours of absence.<br />

                    🧾Conclusion<br />
                    This analysis provides a detailed understanding of absenteeism drivers related to health, lifestyle, commute, demographics, service time, and seasonal factors. Using these insights, HR can implement strategic interventions to reduce absenteeism, improve workforce productivity, and enhance employee well-being. <br />

                    <a href="https://github.com/InsightCracker/HR-ANALYTICS-REPORT---ABSENTEEISM">
                        <Text sx={buttonStyle} marginRight={'.5rem'}>Read More</Text>
                    </a>
                </Box>
            </a>
        </SwiperSlide>
        
        <SwiperSlide>
            <a href="https://github.com/InsightCracker/-Spotify-Data-Analysis-Power-BI-Case-Study">
                <Box className="box">
                    <img src={spotify} alt="Spotify-Data-Analysis-Power-BI-Case-Study" />
                </Box>
                <Box sx={{
                    fontSize: '.8rem',
                    lineHeight: '1.3rem',
                    textAlign: 'justify',
                    paddingTop: '.5rem'
                    }}>
                    <h4>🚀🎧SPOTIFY DATA ANALYSIS – POWER BI CASE STUDY🚀 <br /></h4>
                    📌 Overview<br />
                    This case study analyzes global Spotify track data using Power BI to uncover patterns in song popularity, artist performance, and listening behavior. The dashboard provides a dynamic and interactive view of the dataset, helping identify what makes a track popular and how user preferences evolve across time, genres, and artists.<br />

                    🎯 Objective<br />
                    • Understand the key factors influencing track popularity. <br />
                    • Identify top-performing artists and songs. <br />
                    • Provide recommendations for artists, producers, and marketing strategists.<br />

                    🛠️ Tools & Techniques<br />
                    <ul>
                    <li>• Power BI: data modeling, DAX calculations, visualizations, and interactive dashboards.</li>
                    <li>• Excel: data cleaning and initial transformation.</li>
                    <li>• DAX Measures: popularity averages, explicit vs. non-explicit counts, feature scoring metrics.</li>
                    <li>• Data Wrangling: duplicate removal, null handling, and feature standardization.</li>
                    </ul> 
                    <a href="https://github.com/InsightCracker/-Spotify-Data-Analysis-Power-BI-Case-Study">
                        <Text sx={buttonStyle} marginRight={'.5rem'}>Read More</Text>
                    </a>
                </Box>
            </a>
        </SwiperSlide>

        <SwiperSlide>
            <a href="https://github.com/InsightCracker/Uber-Dataset-Analysis">
                <Box className="box">
                    <img src={uber} alt="Operational Performance Overview – Ride Data" />
                </Box>
                <Box sx={{
                    fontSize: '.8rem',
                    lineHeight: '1.3rem',
                    textAlign: 'justify',
                    paddingTop: '.5rem'
                    }}>
                    <h4>🚀OPERATIONAL PERFORMANCE OVERVIEW – RIDE DATA<br /></h4>
                    📌 Overview<br />
                    The dashboard visualizes data from Uber Transport Service, covering key performance indicators (KPIs) such as: <br />

                    • Total Revenue: $52M<br />
                    • Total Customers: 104K<br />
                    • Total Vehicle: 150K<br />
                    • Total Distance: 3M<br />
                    • Completed Booking: 93K<br />
                    • Lost Booking: 57K<br />
                    • Average Distance: 24.64<br />
                    • Average Customer Rating: 4.40<br />
                    • Average Drivers Rating: 4.23<br />
                    🔍 KEY INSIGHT <br />
                    • The total revenue generated was approximately $52 million. <br />
                    • Uber Auto recorded the highest revenue of $13 million, representing 25% of total revenue, while Uber XL had the lowest revenue at $2 million which is just 3.8%.<br />
                    • March emerged as the best-performing month in terms of revenue.<br />
                    • The lowest number of bookings was recorded in February, with 11,537 total bookings.<br />
                    • UPI accounted for 45.03% of all payment transactions.<br />
                    • The distance covered remained relatively consistent across all months, showing little variation.<br />
                    
                    <a href="https://github.com/InsightCracker/Uber-Dataset-Analysis">
                        <Text sx={buttonStyle} marginRight={'.5rem'}>Read More</Text>
                    </a>
                </Box>
            </a>
        </SwiperSlide> */}
    </Swiper>
  )
}

export default Work
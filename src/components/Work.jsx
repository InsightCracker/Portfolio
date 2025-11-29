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
            <a href="https://github.com/InsightCracker/Uber-Dataset-Analysis">
                <Box className="box">
                    <img src={uber} alt="uber-dataset-analysis" />
                </Box>
                <Box>

                </Box>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="https://github.com/InsightCracker/-Spotify-Data-Analysis-Power-BI-Case-Study">
                <Box className="box">
                    <img src={spotify} alt="Spotify-Data-Analysis-Power-BI-Case-Study" />
                </Box>
                <Box>
                    📌 Overview
                    This case study analyzes global Spotify track data using Power BI to uncover patterns in song popularity, artist performance, and listening behavior. The dashboard provides a dynamic and interactive view of the dataset, helping identify what makes a track popular and how user preferences evolve across time, genres, and artists.

                    🎯 Objective
                    Understand the key factors influencing track popularity.
                    Identify top-performing artists and songs.
                    Provide recommendations for artists, producers, and marketing strategists.
                </Box>
            </a>
        </SwiperSlide>
    </Swiper>
  )
}

export default Work
import { useState } from 'react';

import { 
    Box,
    Text
} from "@chakra-ui/react"

const ContactRight = () => {
  return (
    <Box data-aos="fade-left" data-aos-delay='300' sx={{
        bgColor: '#f4f4f4',
        color: '#3b82f6',
        padding: '20px 15px 3rem 15px',
        margin: '.5rem 0',
        borderBottomLeftRadius: '15px',
        borderTopRightRadius: '15px'
    }} className="contactRightBox">
        <Text sx={{
            fontWeight: '500',
            fontSize: '1.2rem',
            marginLeft: '.3rem',
            marginBottom: '.3rem',
            display: 'inline',
        }}>Fianace Domain</Text>

        <Box sx={{
            margin: '10px 0'
        }}>
            <Text sx={{
                padding: '.3rem .8rem',
                fontSize: '.8rem',
                bgColor: '#b1b1b180',
                color: '#000',
                display: 'inline-block',
                borderRadius: '10px',
                marginRight: '5px',
                marginBottom: '.5rem'
            }}>
                Financial Reporting & Reconciliation
            </Text>

            <Text sx={{
                padding: '.3rem .8rem',
                fontSize: '.8rem',
                bgColor: '#b1b1b180',
                color: '#000',
                display: 'inline-block',
                borderRadius: '10px',
                marginRight: '5px',
                marginBottom: '.5rem'
            }}>
                IFRS Compliance
            </Text>

            <Text sx={{
                padding: '.3rem .8rem',
                fontSize: '.8rem',
                bgColor: '#b1b1b180',
                color: '#000',
                display: 'inline-block',
                borderRadius: '10px',
                marginRight: '5px',
                marginBottom: '.5rem'
            }}>
                Risk Analysis & Fraud Detection
            </Text>

            <Text sx={{
                padding: '.3rem .8rem',
                fontSize: '.8rem',
                bgColor: '#b1b1b180',
                color: '#000',
                display: 'inline-block',
                borderRadius: '10px',
                marginRight: '5px',
            }}>
                Budgeting & Performance Analysis
            </Text>
        </Box>
        
    </Box>
  )
}

export default ContactRight
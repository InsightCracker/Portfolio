import { useState } from 'react';

import { 
    Box,
    color,
    Text
} from "@chakra-ui/react"

const ContactRight = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [msg, setMsg] = useState('');

    // const sendEmail = () => {
        // Email.send({
        //     Host : "smtp.gmail.com",
        //     Username : "mkinggrafix@gmail.com",
        //     Password : 36190420,
        //     To : 'oladimejimichael224@gmail.com',
        //     From : email,
        //     Subject : subject,
        //     Body : msg
        // }).then(
        //   message => alert(message)
        // );
    // }

    const sendEmail = (e) => {
        e.preventDefault();

        if (!name || !email || !subject || !msg) {
            alert("All fields are required");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // Proceed with sending email
        console.log({ name, email, subject, msg });

        Email.send({
            SecureToken: "YOUR_SECURE_TOKEN",
            To: "oladimejimichael224@gmail.com",
            From: email,
            Subject: subject,
            Body: `
                Name: ${name}<br/>
                Email: ${email}<br/>
                Message: ${msg}
            `
        }).then((message) => {
            alert("Email sent successfully");
        });
    };
    
  return (
    <Box data-aos="fade-left" data-aos-delay='300' sx={{
        bgColor: '#f4f4f4',
        color: '#3b82f6',
        padding: '15px',
        borderBottomLeftRadius: '15px',
        borderTopRightRadius: '15px'
    }} className="contactRightBox">
        <Text sx={{
            fontWeight: '500',
            fontSize: '1.2rem',
            marginBottom: '.3rem'
        }}>MESSAGE ME</Text>

        <Box className="form">
            
            <form onSubmit={sendEmail}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />

                <textarea
                    placeholder="Message"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    cols="30"
                    rows="10"
                />

                <button type="submit" className="btn" style={{ color: '#3b82f6' }}>
                    SEND
                </button>
            </form>
        </Box>
    </Box>
  )
}

export default ContactRight
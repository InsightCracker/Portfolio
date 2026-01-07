import { useState } from 'react';

import { 
    Box,
    Text
} from "@chakra-ui/react"

const ContactRight = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [msg, setMsg] = useState('');

    const sendEmail = () => {
        Email.send({
            Host : "smtp.gmail.com",
            Username : "mkinggrafix@gmail.com",
            Password : 36190420,
            To : 'oladimejimichael224@gmail.com',
            From : email,
            Subject : subject,
            Body : msg
        }).then(
          message => alert(message)
        );
    }
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
            <form onSubmit={() => sendEmail()}>
                <input 
                    type={'text'} 
                    placeholder={'Name'}
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type={'email'} 
                    placeholder={'Email'} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <input 
                    type={'text'} 
                    placeholder={'Subject'} 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea 
                    placeholder="Message" 
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    cols="30" 
                    rows="10">                        
                </textarea>
                <button type="submit" className="btn">SEND</button>
            </form>
        </Box>
    </Box>
  )
}

export default ContactRight
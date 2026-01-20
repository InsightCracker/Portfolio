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
    const [NotificationMsg, setNotificationMsg] = useState('');


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

        const templateParams = {
            from_name: name,
            subject: subject,
            message: msg,
            to_email: email
        };

        emailjs
            .send(
                // 'service_uqthl85',
                // 'template_06invtx',
                templateParams,
                'VgMQ4RiIdq-O24UnY'
            )
            .then(() => {
                alert('Email sent successfully!');
                // alert(NotificationMsg)
                setName('');
                setEmail('');
                setSubject('');
                setMsg('');
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                alert('Failed to send email');
                // setNotificationMsg('Failed to send email!');
                // alert(NotificationMsg)
                // setNotificationMsg('');
                console.log(NotificationMsg)
            });
    };
    
    const [ show, setShow ] = useState(false);

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

                <button 
                    type="submit" 
                    className="btn" 
                    style={{ color: '#3b82f6' }} 
                    onSubmit={() => setShow(show)}
                    onClick={() => setShow(!show)}

                >
                    SEND
                </button>
            </form>
        </Box>

        {/* <Box sx={{
            height: '8rem',
            width: '15rem',
            bgColor: '#3b82f6',
            position: 'absolute',
            left: '15%',
            top: '0',
            textAlign: 'center',
            fontWeight: '500',
            fontSize: '1rem',
            alignContent: 'center',
            alignItems: 'center'
        }} display={show ? 'block' : 'none' }>
            <Text>{NotificationMsg}</Text>
            <button
                className="btn" 
                style={{ color: '#3b82f6' }} 
                onClick={() => setShow(!show)}
            >
                OK
            </button> */}
        {/* </Box> */}
    </Box>
  )
}

export default ContactRight
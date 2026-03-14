import { useState } from 'react';
import { Box, Text } from "@chakra-ui/react";

const ContactRight = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');
  const [notificationMsg, setNotificationMsg] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Validate
    if (!name || !email || !subject || !msg) {
      setNotificationMsg("Please fill in all fields");
      setShow(true);
      setTimeout(() => setShow(false), 3000);
      return;
    }

    setLoading(true);

    const data = {
      data: [
        {
          name,
          email,
          subject,
          message: msg,
          date: new Date().toLocaleString()
        }
      ]
    };

    try {
      const response = await fetch("https://sheetdb.io/api/v1/yqa59dqwtb8on", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.created) {
        setNotificationMsg("Message sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMsg("");
      } else {
        setNotificationMsg("Oops! Something went wrong.");
      }

      setShow(true);
      setTimeout(() => setShow(false), 3000);

    } catch (error) {
      setNotificationMsg("Error sending message.");
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      data-aos="fade-left"
      data-aos-delay="300"
      sx={{
        bgColor: '#f4f4f4',
        color: '#3b82f6',
        padding: '15px',
        borderBottomLeftRadius: '15px',
        borderTopRightRadius: '15px',
        position: 'relative'
      }}
      className="contactRightBox"
    >
      <Text sx={{ fontWeight: '500', fontSize: '1.2rem', marginBottom: '.3rem' }}>
        MESSAGE ME
      </Text>

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
            disabled={loading}
          >
            {loading ? "Sending..." : "SEND"}
          </button>
        </form>
      </Box>

      {/* Success/Error Notification */}
      {show && (
        <Box
          sx={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            bgColor: notificationMsg.includes("successfully") ? '#22c55e' : '#ef4444',
            color: '#fff',
            padding: '1rem 1.5rem',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            fontWeight: '500',
            fontSize: '1rem',
            opacity: 0,
            transform: 'translateY(-20px)',
            animation: 'slideIn 0.5s forwards, fadeOut 0.5s 2.5s forwards',
            zIndex: 999
          }}
        >
          {notificationMsg}
        </Box>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes slideIn {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          to { opacity: 0; transform: translateY(-20px); }
        }
      `}</style>
    </Box>
  );
};

export default ContactRight;
import { useState, useRef, useEffect } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

// ── Icons
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
);

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SendIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const CheckIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const AlertIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

// ── Contact info data 
const INFO = [
  { icon: <PhoneIcon />, label: "Phone", value: "+234 903 6190 420", href: "tel:+2349036190420" },
  { icon: <MailIcon />,  label: "Email", value: "oladimejimichael224@gmail.com", href: "mailto:oladimejimichael224@gmail.com" },
  { icon: <PinIcon />,   label: "Location", value: "Lagos, Nigeria", href: null },
];

// ── Info Row 
const InfoRow = ({ item, index }) => {
  const [hov, setHov] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateX(0)";
    }, 220 + index * 100);
    return () => clearTimeout(t);
  }, [index]);

  const inner = (
    <Flex
      ref={ref}
      align="center"
      gap="14px"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        opacity: 0,
        transform: "translateX(-18px)",
        transition: "opacity 0.45s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",
      }}
      sx={{
        padding: "12px 14px",
        borderRadius: "12px",
        background: hov ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.08)",
        transition: "background 0.2s ease",
        cursor: item.href ? "pointer" : "default",
      }}
    >
      <Box
        sx={{
          width: "40px", height: "40px", borderRadius: "11px", flexShrink: 0,
          background: hov ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.18)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff",
          transition: "background 0.2s, transform 0.28s cubic-bezier(0.34,1.56,0.64,1)",
          transform: hov ? "scale(1.14) rotate(-6deg)" : "scale(1)",
        }}
      >
        {item.icon}
      </Box>
      <Box>
        <Text sx={{ fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: "1px" }}>
          {item.label}
        </Text>
        <Text sx={{ fontSize: "0.85rem", fontWeight: "500", color: "#fff", fontFamily: "'Sora', sans-serif", lineHeight: "1.25", wordBreak: "break-all" }}>
          {item.value}
        </Text>
      </Box>
    </Flex>
  );

  return item.href
    ? <Box as="a" href={item.href} sx={{ textDecoration: "none", display: "block" }}>{inner}</Box>
    : inner;
};

// ── Left Panel
const ContactLeft = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, 70);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box
      ref={ref}
      style={{ opacity: 0, transform: "translateY(26px)", transition: "opacity 0.55s ease, transform 0.55s cubic-bezier(0.34,1.56,0.64,1)" }}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "20px 4px 20px 4px",
        padding: "30px 22px",
        background: "linear-gradient(145deg, #3b82f6 0%, #2563eb 100%)",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      {/* Decorative circles */}
      <Box sx={{ position: "absolute", top: "-45px", right: "-45px", width: "170px", height: "170px", borderRadius: "50%", background: "rgba(255,255,255,0.07)", pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", bottom: "-30px", left: "-30px", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />

      {/* Header */}
      <Box mb="4px">
        <Flex align="center" gap="8px" mb="8px">
          <Box sx={{ width: "22px", height: "2px", borderRadius: "1px", background: "rgba(255,255,255,0.45)" }} />
          <Text sx={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
            Get in Touch
          </Text>
        </Flex>
        <Text sx={{ fontFamily: "'Sora', sans-serif", fontWeight: "700", fontSize: "1.55rem", letterSpacing: "-0.02em", color: "#fff", lineHeight: "1.1" }}>
          Contact Info
        </Text>
        <Text sx={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.7)", mt: "8px", lineHeight: "1.65" }}>
          Always available for freelance work. Feel free to reach out!
        </Text>
      </Box>

      <Box sx={{ height: "1px", background: "rgba(255,255,255,0.14)", my: "4px" }} />

      {/* Info rows */}
      <Flex direction="column" gap="4px">
        {INFO.map((item, i) => <InfoRow key={item.label} item={item} index={i} />)}
      </Flex>

      {/* Availability badge */}
      <Flex align="center" gap="8px" mt="16px">
        <Box sx={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 0 3px rgba(74,222,128,0.3)", animation: "avail-pulse 2s infinite" }} />
        <Text sx={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.05em" }}>
          Available for new projects
        </Text>
      </Flex>

      <style>{`@keyframes avail-pulse { 0%,100%{box-shadow:0 0 0 3px rgba(74,222,128,0.3)} 50%{box-shadow:0 0 0 7px rgba(74,222,128,0.08)} }`}</style>
    </Box>
  );
};

// ── Floating label field ──────────────────────────────────────────────────────
const Field = ({ label, type = "text", value, onChange, multiline, placeholder }) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;
  const lifted = focused || hasValue;

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        as={multiline ? "textarea" : "input"}
        type={!multiline ? type : undefined}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={lifted ? placeholder : ""}
        rows={multiline ? 5 : undefined}
        sx={{
          width: "100%",
          padding: multiline ? "20px 16px 12px" : "20px 16px 8px",
          fontFamily: "'Sora', sans-serif",
          fontSize: "0.88rem",
          color: "#0f172a",
          background: focused ? "#fff" : "#f8faff",
          border: "1.5px solid",
          borderColor: focused ? "#3b82f6" : hasValue ? "rgba(59,130,246,0.3)" : "rgba(0,0,0,0.1)",
          borderRadius: "10px",
          outline: "none",
          resize: multiline ? "vertical" : "none",
          transition: "border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
          boxShadow: focused ? "0 0 0 3px rgba(59,130,246,0.1)" : "none",
          display: "block",
          "::placeholder": { color: "#94a3b8", fontSize: "0.85rem" },
        }}
      />
      {/* Floating label */}
      <Text
        sx={{
          position: "absolute",
          top: lifted ? "6px" : multiline ? "14px" : "50%",
          left: "16px",
          transform: lifted || multiline ? "none" : "translateY(-50%)",
          fontSize: lifted ? "0.6rem" : "0.86rem",
          fontFamily: "'DM Mono', monospace",
          fontWeight: "600",
          letterSpacing: lifted ? "0.1em" : "0",
          textTransform: lifted ? "uppercase" : "none",
          color: focused ? "#3b82f6" : hasValue ? "#64748b" : "#94a3b8",
          pointerEvents: "none",
          transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
          userSelect: "none",
        }}
      >
        {label}
      </Text>
    </Box>
  );
};

// ── Toast Notification ────────────────────────────────────────────────────────
const Toast = ({ msg, show }) => {
  const isSuccess = msg.includes("successfully");
  return (
    <Box
      sx={{
        position: "fixed",
        top: "24px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "13px 20px",
        borderRadius: "12px",
        background: isSuccess ? "#022c22" : "#2d0a0a",
        border: "1px solid",
        borderColor: isSuccess ? "#16a34a" : "#dc2626",
        color: isSuccess ? "#4ade80" : "#f87171",
        fontFamily: "'Sora', sans-serif",
        fontWeight: "600",
        fontSize: "0.85rem",
        boxShadow: "0 10px 36px rgba(0,0,0,0.28)",
        pointerEvents: "none",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0) scale(1)" : "translateY(-14px) scale(0.95)",
        transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      {isSuccess ? <CheckIcon /> : <AlertIcon />}
      {msg}
    </Box>
  );
};

// ── Right Panel (Form) ────────────────────────────────────────────────────────
const ContactRight = () => {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg]         = useState("");
  const [toastMsg, setToastMsg] = useState("");
  const [show, setShow]       = useState(false);
  const [loading, setLoading] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, 160);
    return () => clearTimeout(t);
  }, []);

  const notify = (m) => {
    setToastMsg(m);
    setShow(true);
    setTimeout(() => setShow(false), 3500);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !msg) { notify("Please fill in all fields."); return; }
    setLoading(true);
    try {
      const res = await fetch("https://sheetdb.io/api/v1/mgdm35x1cpcxx", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [{ name, email, subject, message: msg, date: new Date().toLocaleString() }] }),
      });
      const result = await res.json();
      if (result.created) {
        notify("Message sent successfully!");
        setName(""); setEmail(""); setSubject(""); setMsg("");
      } else {
        notify("Oops! Something went wrong.");
      }
    } catch {
      notify("Error sending message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toast msg={toastMsg} show={show} />
      <Box
        ref={ref}
        style={{ opacity: 0, transform: "translateY(26px)", transition: "opacity 0.55s ease, transform 0.55s cubic-bezier(0.34,1.56,0.64,1)" }}
        sx={{
          borderRadius: "4px 20px 4px 20px",
          padding: "30px 26px",
          background: "#fff",
          border: "1.5px solid rgba(59,130,246,0.1)",
          boxShadow: "0 4px 30px rgba(59,130,246,0.06)",
        }}
      >
        {/* Header */}
        <Box mb="24px">
          <Flex align="center" gap="8px" mb="8px">
            <Box sx={{ width: "22px", height: "2px", borderRadius: "1px", background: "#3b82f6" }} />
            <Text sx={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3b82f6" }}>
              Drop a Message
            </Text>
          </Flex>
          <Text sx={{ fontFamily: "'Sora', sans-serif", fontWeight: "700", fontSize: "1.55rem", letterSpacing: "-0.02em", color: "#0f172a", lineHeight: "1.1" }}>
            Message Me
          </Text>
        </Box>

        {/* Form */}
        <Box as="form" onSubmit={sendEmail} sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Flex gap="14px" direction={{ base: "column", sm: "row" }}>
            <Box flex="1"><Field label="Name"  value={name}  onChange={(e) => setName(e.target.value)}  placeholder="Your full name" /></Box>
            <Box flex="1"><Field label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" /></Box>
          </Flex>
          <Field label="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="What's this about?" />
          <Field label="Message" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Write your message here…" multiline />

          {/* Submit button */}
          <Box
            as="button"
            type="submit"
            disabled={loading}
            sx={{
              alignSelf: "flex-start",
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              padding: "12px 26px",
              borderRadius: "10px",
              fontFamily: "'DM Mono', monospace",
              fontWeight: "700",
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#fff",
              background: loading ? "#93c5fd" : "linear-gradient(135deg, #3b82f6, #2563eb)",
              border: "none",
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: loading ? "none" : "0 6px 22px rgba(59,130,246,0.36)",
              transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
              _hover: loading ? {} : {
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                transform: "translateY(-3px) scale(1.03)",
                boxShadow: "0 10px 30px rgba(59,130,246,0.44)",
              },
              _active: { transform: "translateY(0) scale(0.98)" },
            }}
          >
            {loading ? (
              <>
                <Box as="span" sx={{ width: "13px", height: "13px", border: "2px solid rgba(255,255,255,0.35)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.8s linear infinite", display: "inline-block" }} />
                Sending…
              </>
            ) : (
              <><SendIcon /> Send Message</>
            )}
          </Box>
        </Box>

        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </Box>
    </>
  );
};

// ── Root export ───────────────────────────────────────────────────────────────
const Contact = () => (
  <Box
    id="contact"
    sx={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #f0f6ff 0%, #fafcff 60%, #eef3ff 100%)",
      padding: "clamp(50px, 9vw, 90px) clamp(20px, 6vw, 70px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    {/* Section heading */}
    <Box sx={{ textAlign: "center", mb: "48px" }}>
      <Text sx={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", fontWeight: "600", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3b82f6", mb: "8px" }}>
        Contact
      </Text>
      <Text sx={{ fontFamily: "'Sora', sans-serif", fontWeight: "800", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "-0.03em", color: "#0f172a", lineHeight: "1.1" }}>
        Let's Work Together
      </Text>
      <Box sx={{ margin: "14px auto 0", width: "44px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, #3b82f6, #6366f1)" }} />
    </Box>

    {/* Two-column layout */}
    <Box
      sx={{
        maxWidth: "1000px",
        margin: "0 auto",
        width: "100%",
        display: "grid",
        gridTemplateColumns: { base: "1fr", md: "1fr 1.6fr" },
        gap: "20px",
        alignItems: "start",
      }}
    >
      <ContactLeft />
      <ContactRight />
    </Box>
  </Box>
);

export default Contact;
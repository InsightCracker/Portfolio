import { Box, Text, Flex } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";

import dataox from "../assets/image/dataere.png";

// ── Icons
const GlobeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);

// ── Feature pills 
const FEATURES = [
  "AI-generated Insights",
  "Interactive Challenges",
  "Performance Tracking",
  "Leaderboards",
  "Automated Reporting",
  "Document Extraction",
];

const FeaturePill = ({ label, index }) => {
  const [hov, setHov] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0) scale(1)";
    }, 300 + index * 55);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <Text
      ref={ref}
      as="span"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ opacity: 0, transform: "translateY(10px) scale(0.94)", transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)" }}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        padding: "4px 13px",
        fontSize: "0.72rem",
        fontWeight: "500",
        letterSpacing: "0.02em",
        borderRadius: "99px",
        cursor: "default",
        userSelect: "none",
        transition: "background 0.2s, color 0.2s, transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s",
        background: hov ? "#3b82f6" : "rgba(59,130,246,0.1)",
        color: hov ? "#fff" : "#2563eb",
        transform: hov ? "scale(1.08) translateY(-2px)" : "scale(1)",
        boxShadow: hov ? "0 4px 16px rgba(59,130,246,0.35)" : "none",
      }}
    >
      {label}
    </Text>
  );
};

// ── CTA Button
const CtaButton = ({ href, label, icon, primary }) => {
  const [hov, setHov] = useState(false);
  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 22px",
        borderRadius: "10px",
        fontSize: "0.78rem",
        fontWeight: "600",
        letterSpacing: "0.04em",
        textDecoration: "none",
        border: "1.5px solid",
        transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
        ...(primary
          ? {
              background: hov ? "#1d4ed8" : "#3b82f6",
              borderColor: hov ? "#1d4ed8" : "#3b82f6",
              color: "#fff",
              boxShadow: hov ? "0 8px 28px rgba(59,130,246,0.5)" : "0 4px 14px rgba(59,130,246,0.28)",
              transform: hov ? "translateY(-3px) scale(1.03)" : "translateY(0) scale(1)",
            }
          : {
              background: hov ? "rgba(59,130,246,0.07)" : "transparent",
              borderColor: hov ? "#3b82f6" : "rgba(59,130,246,0.4)",
              color: hov ? "#3b82f6" : "#475569",
              transform: hov ? "translateY(-3px) scale(1.03)" : "translateY(0) scale(1)",
            }),
      }}
    >
      {icon}
      {label}
    </Box>
  );
};

// ── Image Panel
const ImagePanel = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateX(0)"; }, 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box
      ref={ref}
      style={{ opacity: 0, transform: "translateX(-32px)", transition: "opacity 0.65s ease, transform 0.65s cubic-bezier(0.34,1.56,0.64,1)" }}
      sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {/* Background decoration blocks */}
      <Box sx={{
        position: "absolute",
        top: "-18px",
        left: "-18px",
        width: "80px",
        height: "80px",
        borderRadius: "16px 4px 16px 4px",
        background: "linear-gradient(135deg, #3b82f6, #2563eb)",
        zIndex: 0,
        opacity: 0.85,
      }} />
      <Box sx={{
        position: "absolute",
        bottom: "-18px",
        right: "-18px",
        width: "60px",
        height: "60px",
        borderRadius: "4px 16px 4px 16px",
        background: "linear-gradient(135deg, #ef4444, #dc2626)",
        zIndex: 0,
        opacity: 0.75,
      }} />

      {/* Image card */}
      <Box sx={{
        position: "relative",
        zIndex: 1,
        borderRadius: "20px 5px 20px 5px",
        overflow: "hidden",
        maxWidth: "420px",
        width: "100%",
        boxShadow: "0 24px 70px rgba(59,130,246,0.18), 0 6px 24px rgba(0,0,0,0.1)",
        border: "1.5px solid rgba(59,130,246,0.15)",
        background: "#fff",
      }}>
        {/* Top bar */}
        <Flex sx={{ padding: "10px 14px", borderBottom: "1px solid rgba(0,0,0,0.06)", gap: "6px", background: "#fafbff" }}>
          {["#ef4444", "#f59e0b", "#10b981"].map((c) => (
            <Box key={c} sx={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
          ))}
          <Box sx={{ flex: 1, height: "10px", borderRadius: "4px", background: "rgba(59,130,246,0.1)", margin: "0 8px" }} />
        </Flex>

        <Box as="img"
          src={dataox}
          alt="DataEre Platform"
          sx={{ width: "100%", height: "280px", objectFit: "cover", display: "block" }}
        />

        {/* Badge */}
        <Box sx={{
          position: "absolute",
          bottom: "14px",
          left: "14px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 14px",
          borderRadius: "99px",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
          border: "1px solid rgba(59,130,246,0.2)",
        }}>
          <Box sx={{ color: "#3b82f6", display: "flex" }}><SparkleIcon /></Box>
          <Text sx={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", fontWeight: "600", color: "#1e40af", letterSpacing: "0.04em" }}>
            AI-Powered Platform
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

// ── Right Panel
const ContentPanel = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateX(0)"; }, 180);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box
      ref={ref}
      style={{ opacity: 0, transform: "translateX(32px)", transition: "opacity 0.65s ease, transform 0.65s cubic-bezier(0.34,1.56,0.64,1)" }}
      sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      {/* Eyebrow label */}
      <Flex align="center" gap="8px" mb="12px">
        <Box sx={{ width: "18px", height: "2px", borderRadius: "1px", background: "#3b82f6" }} />
        <Text sx={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", fontWeight: "600", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3b82f6" }}>
          Featured Build
        </Text>
      </Flex>

      {/* Title */}
      <Text
        sx={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: "800",
          fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
          letterSpacing: "-0.03em",
          lineHeight: "1.1",
          color: "#0f172a",
          marginBottom: "16px",
        }}
      >
        Data<Box as="span" sx={{ color: "#3b82f6" }}>Ere</Box>
      </Text>

      {/* Description */}
      <Text
        sx={{
          fontSize: "0.95rem",
          lineHeight: "1.75",
          color: "#475569",
          marginBottom: "24px",
          maxWidth: "480px",
          textAlign: "justify"
        }}
      >
        An AI-powered platform designed to help learners and professionals sharpen their data analytics skills through interactive challenges, performance tracking, leaderboards, and intelligent automation. Combining learning, competition, and productivity in one place.
      </Text>

      {/* Feature pills */}
      <Flex wrap="wrap" gap="7px" mb="32px">
        {FEATURES.map((f, i) => (
          <FeaturePill key={f} label={f} index={i} />
        ))}
      </Flex>

      {/* CTAs */}
      <Flex gap="12px" wrap="wrap">
        <CtaButton href="https://www.dataxo.cfd/" label="Visit DataEre" icon={<GlobeIcon />} primary />
        <CtaButton href="https://github.com/InsightCracker/DataEre" label="View on GitHub" icon={<GithubIcon />} />
      </Flex>
    </Box>
  );
};

// ── Main export 
const DataEreShowcase = () => (
  <Box
    sx={{
      minHeight: "100vh",
      background: "linear-gradient(155deg, #f8faff 0%, #fff 55%, #eef3ff 100%)",
      display: "flex",
      alignItems: "center",
      padding: "clamp(50px, 9vw, 90px) clamp(20px, 6vw, 80px)",
    }}
  >
    <Box
      sx={{
        maxWidth: "1100px",
        margin: "0 auto",
        width: "100%",
        display: "grid",
        gridTemplateColumns: { base: "1fr", lg: "1fr 1fr" },
        gap: { base: "48px", lg: "72px" },
        alignItems: "center",
      }}
    >
      <ImagePanel />
      <ContentPanel />
    </Box>
  </Box>
);

export default DataEreShowcase;
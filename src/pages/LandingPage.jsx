import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import LandingContent from "../components/LandingContent";

const IconArrowUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

const ScrollTopBtn = () => {
  const [visible, setVisible] = useState(false);
  const [hov, setHov]         = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box
      as="button"
      onClick={scrollTop}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label="Back to top"
      sx={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 2000,
        width: "44px",
        height: "44px",
        borderRadius: "12px",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: hov
          ? "linear-gradient(135deg, #1d4ed8, #2563eb)"
          : "linear-gradient(135deg, #3b82f6, #2563eb)",
        color: "#fff",
        boxShadow: hov
          ? "0 10px 28px rgba(37,99,235,0.5)"
          : "0 4px 16px rgba(59,130,246,0.35)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible
          ? hov ? "translateY(-4px) scale(1.08)" : "translateY(0) scale(1)"
          : "translateY(16px) scale(0.9)",
        transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, background 0.2s ease",
      }}
    >
      <IconArrowUp />
    </Box>
  );
};

const LandingPage = () => (
  <Box
    className="LandingPage"
    id="home"
    sx={{
      width: "100%",
      minHeight: "100vh",
      position: "relative",
      background: "linear-gradient(160deg, #f8faff 0%, #fff 55%, #eef3ff 100%)",
    }}
  >
    <LandingContent />
    <ScrollTopBtn />
  </Box>
);

export default LandingPage;
import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { FaMandalorian } from "react-icons/fa";

const slides = [
  {
    id: "about",
    badge: "About Me",
    cardStyle: {
      borderTopLeftRadius: "16px",
      borderBottomRightRadius: "16px",
      borderTopRightRadius: "4px",
      borderBottomLeftRadius: "4px",
    },
  },
  {
    id: "education",
    badge: "Education",
    cardStyle: {
      borderTopRightRadius: "16px",
      borderBottomLeftRadius: "16px",
      borderTopLeftRadius: "4px",
      borderBottomRightRadius: "4px",
    },
  },
];

const AboutContent = () => {
  const [current, setCurrent] = useState(0);
  const cardRef = useRef(null);

  const goTo = (i) => {
    const next = Math.max(0, Math.min(i, slides.length - 1));
    setCurrent(next);
  };

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const t = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 60);
    return () => clearTimeout(t);
  }, [current]);

  const badgeStyle = {
    display: "inline-block",
    bgColor: "#3b82f6",
    color: "#fff",
    fontSize: "11px",
    fontWeight: "500",
    padding: "4px 12px",
    borderRadius: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    marginBottom: "14px",
  };

  const navBtnStyle = {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    border: "0.5px solid",
    borderColor: "gray.300",
    bg: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)",
    _hover: { bg: "#3b82f6", color: "#fff", borderColor: "#3b82f6", transform: "scale(1.12)" },
    _disabled: { opacity: 0.3, pointerEvents: "none" },
  };

  return (
    <Box sx={{ paddingBottom: "30px" }}>
      {slides[current].image}

      <Box
        ref={cardRef}
        sx={{
          bgColor: "#f5f5f5",
          padding: "20px 16px 20px",
          margin: ".5rem 0",
          position: "relative",
          overflow: "hidden",
          opacity: 0,
          transform: "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
          ...slides[current].cardStyle,
        }}
      >
        <Text sx={badgeStyle}>{slides[current].badge}</Text>

        {current === 0 && (
          <>
            {[
              "I'm a detail-oriented Accounting graduate (B.Sc., Second Class Upper) with a strong passion for data analytics and financial insight generation.",
              "With experience in financial reporting, reconciliation, and budgeting, combined with hands-on skills in SQL, Power BI, and data storytelling, I help turn financial data into actionable insights that support better decision-making.",
              "I currently teach Data Analytics at Codar Tech Africa, while building advanced skills in Python and AI-driven financial modeling, with a focus on solving real-world problems in fraud detection, risk management, and forecasting.",
            ].map((para, i) => (
              <Text
                key={i}
                sx={{
                  fontSize: ".8rem",
                  lineHeight: "1.65rem",
                  textAlign: "justify",
                  color: "#5f5f5f",
                  marginBottom: i < 2 ? "10px" : 0,
                }}
              >
                {para}
              </Text>
            ))}
          </>
        )}

        {current === 1 && (
          <Box id="education">
            <Text sx={{ color: "#111", fontWeight: "500", fontSize: "1.1rem", marginBottom: ".4rem" }}>
              B.Sc. in Accounting
            </Text>
            <Text sx={{ color: "#3b82f6", fontWeight: "500", fontSize: ".85rem", marginBottom: ".4rem", lineHeight: "1.4" }}>
              Adekunle Ajasin University, Akungba-Akoko, Ondo State, Nigeria
            </Text>
            <Text
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: ".75rem",
                color: "#1d4ed8",
                bg: "#e8f0fe",
                padding: "3px 10px",
                borderRadius: "20px",
                marginTop: "4px",
              }}
            >
              📅 2021 – 2025
            </Text>
          </Box>
        )}
      </Box>

      {/* Navigation */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "16px" }}>
        <Box
          as="button"
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          sx={navBtnStyle}
          aria-label="Previous"
        >
          ←
        </Box>

        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {slides.map((_, i) => (
            <Box
              key={i}
              onClick={() => goTo(i)}
              sx={{
                width: i === current ? "20px" : "7px",
                height: "7px",
                borderRadius: i === current ? "4px" : "50%",
                bg: i === current ? "#3b82f6" : "#d1d5db",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </Box>

        <Box
          as="button"
          onClick={() => goTo(current + 1)}
          disabled={current === slides.length - 1}
          sx={navBtnStyle}
          aria-label="Next"
        >
          →
        </Box>
      </Box>
    </Box>
  );
};

export default AboutContent;
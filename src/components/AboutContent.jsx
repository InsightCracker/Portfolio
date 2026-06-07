import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import {
  HiOutlineUser,
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineCode,
  HiOutlineLightBulb,
  HiOutlineDatabase,
} from "react-icons/hi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineSchool, MdOutlineLocationOn } from "react-icons/md";
import { BsCalendar2Check } from "react-icons/bs";

const slides = [
  { id: "about",     badge: "About Me",  icon: HiOutlineUser },
  { id: "education", badge: "Education", icon: HiOutlineAcademicCap },
];

const aboutPoints = [
  {
    icon: HiOutlineChartBar,
    text: "Detail-oriented Accounting graduate (B.Sc., Second Class Upper) with a strong passion for data analytics and financial insight generation.",
  },
  {
    icon: HiOutlineDatabase,
    text: "Experienced in financial reporting, reconciliation, and budgeting; with hands-on skills in SQL, Power BI, and data storytelling to turn numbers into decisions.",
  },
  {
    icon: FaChalkboardTeacher,
    text: "Currently teaching Data Analytics at Codar Tech Africa, while advancing skills in Python and AI-driven financial modeling for fraud detection, risk, and forecasting.",
  },
];

const skillTags = ["SQL", "Power BI", "Python", "Excel", "Data Storytelling", "Financial Modeling"];

const AboutContent = () => {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const cardRef = useRef(null);

  const goTo = (i) => {
    const next = Math.max(0, Math.min(i, slides.length - 1));
    setCurrent(next);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px) scale(0.98)";
    const t = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0) scale(1)";
    }, 60);
    return () => clearTimeout(t);
  }, [animKey]);

  const SlideIcon = slides[current].icon;

  return (
    <Box sx={{ paddingBottom: "30px" }}>

      {/* ── Icon Header ── */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <Box
          sx={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "28px",
            marginBottom: "10px",
            boxShadow: "0 8px 24px rgba(59,130,246,0.35)",
            animation: "floatIcon 3s ease-in-out infinite",
          }}
        >
          <SlideIcon />
        </Box>

        {/* Slide label */}
        <Text
          sx={{
            fontSize: "11px",
            fontWeight: "600",
            color: "#3b82f6",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {slides[current].badge}
        </Text>
      </Box>

      {/* ── Card ── */}
      <Box
        ref={cardRef}
        sx={{
          background: "linear-gradient(145deg, #f8faff 0%, #f0f4ff 100%)",
          border: "1px solid #e0e7ff",
          padding: "20px 18px",
          margin: ".5rem 0",
          position: "relative",
          overflow: "hidden",
          opacity: 0,
          transform: "translateY(20px) scale(0.98)",
          transition: "opacity 0.45s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",
          borderTopLeftRadius:     current === 0 ? "16px" : "4px",
          borderBottomRightRadius: current === 0 ? "16px" : "4px",
          borderTopRightRadius:    current === 0 ? "4px"  : "16px",
          borderBottomLeftRadius:  current === 0 ? "4px"  : "16px",
        }}
      >

        {/* Decorative blob */}
        <Box
          sx={{
            position: "absolute",
            top: "-30px",
            right: "-30px",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "rgba(59,130,246,0.07)",
            pointerEvents: "none",
          }}
        />

        {/* ── About slide ── */}
        {current === 0 && (
          <Box>
            {aboutPoints.map(({ icon: PointIcon, text }, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  marginBottom: i < aboutPoints.length - 1 ? "14px" : 0,
                  padding: "12px 14px",
                  borderRadius: "10px",
                  background: "white",
                  border: "1px solid #e8eef8",
                  boxShadow: "0 2px 8px rgba(59,130,246,0.06)",
                  transition: "all 0.2s ease",
                  animation: `slideInRow 0.4s ease ${i * 80}ms both`,
                  cursor: "default",
                  _hover: {
                    boxShadow: "0 4px 16px rgba(59,130,246,0.12)",
                    transform: "translateX(4px)",
                    borderColor: "#bfdbfe",
                  },
                }}
              >
                <Box
                  sx={{
                    minWidth: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#3b82f6",
                    fontSize: "16px",
                    marginTop: "1px",
                  }}
                >
                  <PointIcon />
                </Box>
                <Text
                  sx={{
                    fontSize: ".8rem",
                    lineHeight: "1.65rem",
                    color: "#5f5f5f",
                    textAlign: "justify",
                  }}
                >
                  {text}
                </Text>
              </Box>
            ))}

            {/* Skill tags */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "16px",
              }}
            >
              {skillTags.map((tag, i) => (
                <Box
                  key={tag}
                  sx={{
                    fontSize: "11px",
                    fontWeight: "500",
                    color: "#1d4ed8",
                    background: "#eff6ff",
                    border: "1px solid #bfdbfe",
                    padding: "3px 10px",
                    borderRadius: "20px",
                    transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)",
                    animation: `popIn 0.35s ease ${i * 60 + 200}ms both`,
                    cursor: "default",
                    _hover: {
                      background: "#3b82f6",
                      color: "white",
                      borderColor: "#3b82f6",
                      transform: "scale(1.08)",
                    },
                  }}
                >
                  {tag}
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* ── Education slide ── */}
        {current === 1 && (
          <Box
            sx={{ animation: "slideInRow 0.4s ease both" }}
          >
            {/* Degree row */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px",
                borderRadius: "10px",
                background: "white",
                border: "1px solid #e8eef8",
                boxShadow: "0 2px 8px rgba(59,130,246,0.06)",
                marginBottom: "12px",
              }}
            >
              <Box
                sx={{
                  minWidth: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "18px",
                }}
              >
                <MdOutlineSchool />
              </Box>
              <Box>
                <Text sx={{ color: "#111", fontWeight: "600", fontSize: ".95rem", lineHeight: "1.3" }}>
                  B.Sc. in Accounting
                </Text>
                <Text sx={{ color: "#6b7280", fontSize: ".75rem", marginTop: "2px" }}>
                  Second Class Upper Division
                </Text>
              </Box>
            </Box>

            {/* University row */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                padding: "12px 14px",
                borderRadius: "10px",
                background: "white",
                border: "1px solid #e8eef8",
                boxShadow: "0 2px 8px rgba(59,130,246,0.06)",
                marginBottom: "12px",
                animation: "slideInRow 0.4s ease 80ms both",
              }}
            >
              <Box
                sx={{
                  minWidth: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#3b82f6",
                  fontSize: "16px",
                  marginTop: "1px",
                }}
              >
                <MdOutlineLocationOn />
              </Box>
              <Text sx={{ fontSize: ".82rem", color: "#3b82f6", fontWeight: "500", lineHeight: "1.5" }}>
                Adekunle Ajasin University, Akungba-Akoko,{" "}
                <Box as="span" sx={{ color: "#6b7280", fontWeight: "400" }}>
                  Ondo State, Nigeria
                </Box>
              </Text>
            </Box>

            {/* Date badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: ".75rem",
                color: "#1d4ed8",
                bg: "#e8f0fe",
                padding: "5px 14px",
                borderRadius: "20px",
                border: "1px solid #bfdbfe",
                animation: "popIn 0.35s ease 160ms both",
              }}
            >
              <BsCalendar2Check />
              2021 – 2025
            </Box>

            {/* Achievement pill */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "14px",
                padding: "10px 14px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
                border: "1px solid #bbf7d0",
                animation: "slideInRow 0.4s ease 200ms both",
              }}
            >
              <Box sx={{ color: "#16a34a", fontSize: "18px" }}>
                <HiOutlineLightBulb />
              </Box>
              <Text sx={{ fontSize: ".78rem", color: "#15803d", fontWeight: "500" }}>
                Graduated with Second Class Upper. Goop academic standing
              </Text>
            </Box>
          </Box>
        )}
      </Box>

      {/* ── Navigation ── */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginTop: "16px",
        }}
      >
        <Box
          as="button"
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          aria-label="Previous"
          sx={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "1px solid #e5e7eb",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: current === 0 ? "not-allowed" : "pointer",
            fontSize: "14px",
            color: "#374151",
            opacity: current === 0 ? 0.3 : 1,
            transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)",
            _hover: current === 0 ? {} : {
              background: "#3b82f6",
              color: "white",
              borderColor: "#3b82f6",
              transform: "scale(1.12)",
            },
          }}
        >
          ←
        </Box>

        {/* Dot indicators */}
        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {slides.map((_, i) => (
            <Box
              key={i}
              onClick={() => goTo(i)}
              sx={{
                width: i === current ? "20px" : "7px",
                height: "7px",
                borderRadius: i === current ? "4px" : "50%",
                background: i === current ? "#3b82f6" : "#d1d5db",
                cursor: "pointer",
                transition: "all 0.25s ease",
                _hover: { background: "#93c5fd" },
              }}
            />
          ))}
        </Box>

        <Box
          as="button"
          onClick={() => goTo(current + 1)}
          disabled={current === slides.length - 1}
          aria-label="Next"
          sx={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "1px solid #e5e7eb",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: current === slides.length - 1 ? "not-allowed" : "pointer",
            fontSize: "14px",
            color: "#374151",
            opacity: current === slides.length - 1 ? 0.3 : 1,
            transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)",
            _hover: current === slides.length - 1 ? {} : {
              background: "#3b82f6",
              color: "white",
              borderColor: "#3b82f6",
              transform: "scale(1.12)",
            },
          }}
        >
          →
        </Box>
      </Box>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px);   box-shadow: 0 8px 24px rgba(59,130,246,0.35); }
          50%       { transform: translateY(-6px);  box-shadow: 0 14px 28px rgba(59,130,246,0.25); }
        }
        @keyframes slideInRow {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

    </Box>
  );
};

export default AboutContent;
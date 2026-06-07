import { Box, Text, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useState, useRef, useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import sales from "../assets/image/sales.png";
import dataclean from "../assets/image/dataclean.png";
import usDebt from "../assets/image/usDebt.png";
import ballon from '../assets/image/ballon.png';
import finance from '../assets/image/finance.png';
import HR from '../assets/image/HR.png';

// ── Icons
const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ── Data
const PROJECTS = [
  {
    id: "dataclean",
    image: dataclean,
    title: "Data Cleaning & Validation",
    tags: ["Excel", "Filtering", "Sorting", "Conditional Formatting"],
    description:
      "Handled missing and invalid values, removed duplicates, and standardized date formats. Improving data accuracy and reliability for downstream analysis.",
    github: "https://github.com/InsightCracker/Data-Cleaning---Excel",
    accent: "#3b82f6",
  },
  {
    id: "insurance",
    image: sales,
    title: "Insurance Risk Analysis",
    tags: ["Excel", "Power BI", "Insurance Analysis", "Critical Thinking", "Data Interpretation"],
    description:
      "Built an interactive Power BI dashboard presenting insights across 50,000 policies ($3.67B premium), exposing risk patterns by age, region, income, and behaviour.",
    github: "https://github.com/InsightCracker/Insurance-Risk-Analysis",
    accent: "#0ea5e9",
  },
  {
    id: "fintech",
    image: finance,
    title: "Financial Transaction Analytics",
    tags: ["Excel", "SQL", "Power BI", "DAX", "Financial Analysis", "DB Schema"],
    description:
      "Time-window analysis of transaction volume, fraud rates, success/failure rates, and network performance. Surfacing operational risks and improvement opportunities.",
    github: "https://github.com/InsightCracker/Financial-Transaction-Performance-Fraud-Analytics",
    accent: "#6366f1",
  },
  {
    id: "pharmacy",
    image: ballon,
    title: "Pharmacy Pulse Analysis",
    tags: ["Excel", "Power BI", "Product Analysis", "Data Storytelling"],
    description:
      "Analyzed revenue, cost, profit, sales volume, and regional performance of a European pharmacy chain to identify key trends and high/low-performing areas.",
    github: "https://github.com/InsightCracker/2025-Ballon-d-Or-Male-Nominees-Statistical-Analysis-Report",
    accent: "#10b981",
  },
  {
    id: "usdebt",
    image: usDebt,
    title: "US Debt to Penny Analysis",
    tags: ["Excel", "SQL", "Financial Analysis", "Statistics", "DB Schema"],
    description:
      "Designed a relational database schema to analyze U.S. debt-to-penny data, modeling debt instruments and growth rates over time.",
    github: "https://github.com/InsightCracker/US-Debt-Analysis",
    accent: "#f59e0b",
  },
  {
    id: "hr",
    image: HR,
    title: "HR Analytics — Absenteeism",
    tags: ["Excel", "Power BI", "Human Resources", "Critical Thinking", "Data Visualization"],
    description:
      "Comprehensive absenteeism study examining behavioral, demographic, and operational drivers — including health, commute, age, tenure, and seasonal fluctuations.",
    github: "https://github.com/InsightCracker/HR-ANALYTICS-REPORT---ABSENTEEISM",
    accent: "#ec4899",
  },
];

// ── Tag 
const Tag = ({ label, accent }) => {
  const [hov, setHov] = useState(false);
  return (
    <Text
      as="span"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      sx={{
        display: "inline-block",
        padding: "3px 11px",
        fontSize: "0.72rem",
        fontWeight: "600",
        fontFamily: "'DM Mono', monospace",
        letterSpacing: "0.02em",
        borderRadius: "99px",
        cursor: "default",
        userSelect: "none",
        transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)",
        background: hov ? accent : `${accent}18`,
        color: hov ? "#fff" : accent,
        transform: hov ? "scale(1.08) translateY(-1px)" : "scale(1)",
        boxShadow: hov ? `0 4px 12px ${accent}44` : "none",
      }}
    >
      {label}
    </Text>
  );
};

// ── Card 
const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const [hov, setHov] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0) scale(1)";
    }, 80 + index * 60);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <Box
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "18px 4px 18px 4px",
        overflow: "hidden",
        background: "#fff",
        border: "1.5px solid",
        borderColor: hov ? `${project.accent}55` : "rgba(0,0,0,0.07)",
        boxShadow: hov
          ? `0 24px 60px ${project.accent}22, 0 4px 20px rgba(0,0,0,0.06)`
          : "0 2px 12px rgba(0,0,0,0.05)",
        transform: hov ? "translateY(-8px)" : "translateY(0)",
        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease, border-color 0.3s ease",
        opacity: 0,
        willChange: "transform"
      }}
      style={{ opacity: 0, transform: "translateY(32px) scale(0.96)", transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)" }}
    >
      {/* Image area */}
      <Box sx={{ position: "relative", height: "185px", overflow: "hidden", flexShrink: 0 }}>
        <Box
          as="img"
          src={project.image}
          alt={project.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s ease",
            transform: hov ? "scale(1.06)" : "scale(1)",
          }}
        />
        {/* Gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to bottom, transparent 40%, ${project.accent}cc)`,
            opacity: hov ? 0.6 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
        {/* Accent dot */}
        <Box
          sx={{
            position: "absolute",
            top: "12px",
            right: "12px",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: project.accent,
            boxShadow: `0 0 0 3px ${project.accent}44`,
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1, padding: "18px 18px 20px" }}>
        {/* Title */}
        <Text
          sx={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: "700",
            fontSize: "1rem",
            color: "#0f172a",
            lineHeight: "1.3",
            marginBottom: "12px",
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </Text>

        {/* Tags */}
        <Flex wrap="wrap" gap="5px" mb="14px">
          {project.tags.map((t) => (
            <Tag key={t} label={t} accent={project.accent} />
          ))}
        </Flex>

        {/* Description */}
        <Text
          sx={{
            fontSize: "0.875rem",
            lineHeight: "1.6",
            color: "#475569",
            flex: 1,
            marginBottom: "18px",
            textAlign: "justify"
          }}
        >
          {project.description}
        </Text>

        {/* CTA */}
        <Box
          as="a"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            alignSelf: "flex-start",
            padding: "8px 18px",
            borderRadius: "8px",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.78rem",
            fontWeight: "600",
            letterSpacing: "0.03em",
            color: project.accent,
            border: "1.5px solid",
            borderColor: `${project.accent}55`,
            background: `${project.accent}08`,
            textDecoration: "none",
            transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
            _hover: {
              background: project.accent,
              color: "#fff",
              borderColor: project.accent,
              transform: "scale(1.04)",
              boxShadow: `0 6px 20px ${project.accent}44`,
            },
          }}
        >
          <GithubIcon />
          GitHub Repo
          <ExternalIcon />
        </Box>
      </Box>
    </Box>
  );
};

// ── Section header
const Header = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => { el.style.opacity = "1"; el.style.transform = "translateY(0)"; }, 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box
      ref={ref}
      sx={{ textAlign: "center", marginBottom: "44px", opacity: 0, transform: "translateY(20px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
    >
      <Text sx={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", fontWeight: "600", letterSpacing: "0.22em", textTransform: "uppercase", color: "#3b82f6", marginBottom: "8px" }}>
        Portfolio
      </Text>
      <Text sx={{ fontFamily: "'Sora', sans-serif", fontWeight: "800", fontSize: "clamp(1.7rem, 4vw, 2.5rem)", letterSpacing: "-0.03em", color: "#0f172a", lineHeight: "1.1" }}>
        Featured Projects
      </Text>
      <Box sx={{ margin: "14px auto 0", width: "40px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, #3b82f6, #6366f1)" }} />
    </Box>
  );
};

// ── Nav Button 
const NavBtn = ({ dir, className }) => (
  <Box
    as="button"
    className={className}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      border: "1.5px solid rgba(59,130,246,0.3)",
      background: "#fff",
      color: "#3b82f6",
      cursor: "pointer",
      transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
      boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
      _hover: { background: "#3b82f6", color: "#fff", transform: "scale(1.1)", boxShadow: "0 6px 20px rgba(59,130,246,0.35)" },
      "&.swiper-button-disabled": { opacity: 0.3, pointerEvents: "none" },
    }}
  >
    {dir === "left" ? <ChevronLeft /> : <ChevronRight />}
  </Box>
);

// ── Main 
const Work = () => (
  <Box
    className="project"
    sx={{
      minHeight: "100vh",
      padding: "clamp(50px, 9vw, 90px) clamp(16px, 5vw, 60px)",
    }}
  >
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Mono:wght@400;600&family=Instrument+Serif:ital@0;1&display=swap');

      .work-swiper .swiper-pagination-bullet {
        width: 6px; height: 6px;
        background: #cbd5e1;
        opacity: 1;
        transition: all 0.3s ease;
      }
      .work-swiper .swiper-pagination-bullet-active {
        width: 22px;
        border-radius: 3px;
        background: #3b82f6;
      }
      .work-swiper .swiper-pagination {
        bottom: 0;
      }
      .work-swiper { padding-bottom: 40px !important; }
      .swiper-slide { height: auto !important; }
    `}</style>

    <Box sx={{ maxWidth: "100%", margin: "0 auto" }}>
      <Header />

      {/* Custom nav row */}
      <Flex justifyContent="flex-end" gap="10px" mb="20px">
        <NavBtn dir="left" className="swiper-prev-custom" />
        <NavBtn dir="right" className="swiper-next-custom" />
      </Flex>

      <Swiper
        className="work-swiper"
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".swiper-prev-custom",
          nextEl: ".swiper-next-custom",
        }}
        spaceBetween={20}
        breakpoints={{
          0:    { slidesPerView: 1 },
          620:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ padding: 0 }}
      >
        {PROJECTS.map((project, i) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} index={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  </Box>
);

export default Work;
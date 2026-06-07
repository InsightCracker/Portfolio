import { Box, Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

// ── Icon components (inline SVG, no extra deps) 
const IconChart = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);
const IconBank = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="10" width="18" height="10" rx="1" /><rect x="5" y="14" width="2" height="6" />
    <rect x="11" y="14" width="2" height="6" /><rect x="17" y="14" width="2" height="6" />
    <path d="M3 10l9-7 9 7" />
  </svg>
);
const IconCode = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const IconBrain = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2a2.5 2.5 0 0 1 5 0c2.8.4 5 2.8 5 5.5 0 1-.3 1.9-.7 2.7A4.5 4.5 0 0 1 20 14a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 14a4.5 4.5 0 0 1 1.2-3.8A5.5 5.5 0 0 1 4.5 7.5c0-2.7 2.2-5.1 5-5.5z" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="M8 10c0-1.5 1-3 4-3" /><path d="M16 14c0 1.5-1 3-4 3" />
  </svg>
);

// ── Data 
const CARDS = [
  {
    id: "analytics",
    icon: <IconChart />,
    title: "Data Analytics & Visualization",
    skills: ["Advanced Excel", "SQL", "Power BI"],
    variant: "blue",
    delay: 60,
    corner: "left",
  },
  {
    id: "finance",
    icon: <IconBank />,
    title: "Finance Domain",
    skills: [
      "Financial Reporting & Reconciliation",
      "IFRS Compliance",
      "Risk Analysis & Fraud Detection",
      "Budgeting & Performance Analysis",
    ],
    variant: "light",
    delay: 140,
    corner: "right",
  },
  {
    id: "programming",
    icon: <IconCode />,
    title: "Programming & Tools",
    skills: ["Python (Pandas, Scikit-learn)", "JavaScript", "React", "HTML/CSS", "Git & Version Control", "QuickBooks"],
    variant: "blue",
    delay: 220,
    corner: "left",
  },
  {
    id: "soft",
    icon: <IconBrain />,
    title: "Soft Skills",
    skills: ["Data Storytelling", "Problem Solving", "Cross-functional Collaboration"],
    variant: "light",
    delay: 300,
    corner: "right",
  },
];

// ── Reusable skill tag 
const SkillTag = ({ label, isBlue }) => {
  const [hovered, setHovered] = useState(false);

  const base = isBlue
    ? { bg: "rgba(255,255,255,0.18)", color: "#fff" }
    : { bg: "rgba(59,130,246,0.12)", color: "#1d4ed8" };

  const hover = isBlue
    ? { bg: "rgba(255,255,255,0.95)", color: "#1d4ed8" }
    : { bg: "#3b82f6", color: "#fff" };

  return (
    <Text
      as="span"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 13px",
        fontSize: "0.82rem",
        fontWeight: "500",
        fontFamily: "'DM Mono', 'Fira Mono', monospace",
        letterSpacing: "0.01em",
        borderRadius: "99px",
        cursor: "default",
        userSelect: "none",
        transition: "transform 0.22s cubic-bezier(0.34,1.56,0.64,1), background 0.2s, color 0.2s, box-shadow 0.2s",
        bg: hovered ? hover.bg : base.bg,
        color: hovered ? hover.color : base.color,
        transform: hovered ? "scale(1.1) translateY(-1px)" : "scale(1)",
        boxShadow: hovered ? "0 4px 14px rgba(0,0,0,0.12)" : "none",
      }}
    >
      {label}
    </Text>
  );
};

// ── Single card 
const SkillCard = ({ card }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const isBlue = card.variant === "blue";
  const isLeft = card.corner === "left";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0) scale(1)";
    }, card.delay);
    return () => clearTimeout(t);
  }, [card.delay]);

  const shimmerKeyframes = `
    @keyframes shimmer-${card.id} {
      0%   { left: -110%; }
      100% { left: 160%; }
    }
  `;

  return (
    <>
      <style>{shimmerKeyframes}</style>
      <Box
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          position: "relative",
          overflow: "hidden",
          padding: "22px 20px 20px",
          borderRadius: isLeft
            ? "20px 6px 20px 6px"
            : "6px 20px 6px 20px",
          opacity: 0,
          transform: "translateY(28px) scale(0.96)",
          transition: "opacity 0.55s ease, transform 0.55s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
          background: isBlue
            ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
            : "linear-gradient(135deg, #f8faff 0%, #eef3ff 100%)",
          boxShadow: hovered
            ? isBlue
              ? "0 20px 50px rgba(59,130,246,0.45), 0 4px 16px rgba(59,130,246,0.2)"
              : "0 20px 50px rgba(59,130,246,0.18), 0 4px 16px rgba(59,130,246,0.08)"
            : isBlue
            ? "0 6px 20px rgba(59,130,246,0.25)"
            : "0 6px 20px rgba(59,130,246,0.07)",
          transform: hovered
            ? "translateY(-6px) scale(1.025)"
            : "translateY(0) scale(1)",
          cursor: "default",
          // animated border glow
          _after: isBlue ? {} : {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            border: "1.5px solid",
            borderColor: hovered ? "rgba(59,130,246,0.4)" : "rgba(59,130,246,0.12)",
            transition: "border-color 0.3s ease",
            pointerEvents: "none",
          },
        }}
      >
        {/* Shimmer layer */}
        {hovered && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "55%",
              height: "100%",
              background: isBlue
                ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)"
                : "linear-gradient(90deg, transparent, rgba(59,130,246,0.08), transparent)",
              animation: `shimmer-${card.id} 0.65s ease forwards`,
              pointerEvents: "none",
            }}
          />
        )}

        {/* Decorative circle */}
        <Box
          sx={{
            position: "absolute",
            top: "-28px",
            right: "-28px",
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background: isBlue
              ? "rgba(255,255,255,0.07)"
              : "rgba(59,130,246,0.07)",
            pointerEvents: "none",
          }}
        />

        {/* Icon */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "46px",
            height: "46px",
            borderRadius: "12px",
            marginBottom: "14px",
            background: isBlue ? "rgba(255,255,255,0.18)" : "rgba(59,130,246,0.12)",
            color: isBlue ? "#fff" : "#3b82f6",
            transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background 0.25s",
            transform: hovered ? "rotate(-8deg) scale(1.1)" : "rotate(0) scale(1)",
          }}
        >
          {card.icon}
        </Box>

        {/* Title */}
        <Text
          sx={{
            fontFamily: "'Sora', 'Nunito', sans-serif",
            fontWeight: "700",
            fontSize: "1.08rem",
            letterSpacing: "-0.01em",
            lineHeight: "1.3",
            marginBottom: "14px",
            color: isBlue ? "#fff" : "#1d4ed8",
          }}
        >
          {card.title}
        </Text>

        {/* Skills */}
        <Flex wrap="wrap" gap="6px">
          {card.skills.map((s) => (
            <SkillTag key={s} label={s} isBlue={isBlue} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

// ── Section header 
const SectionHeader = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 20);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        textAlign: "center",
        marginBottom: "40px",
        opacity: 0,
        transform: "translateY(16px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <Text
        sx={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "0.75rem",
          fontWeight: "700",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#3b82f6",
          marginBottom: "8px",
        }}
      >
        Expertise
      </Text>
      <Text
        sx={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          color: "#0f172a",
          lineHeight: "1.1",
        }}
      >
        Skills & Competencies
      </Text>
      {/* Accent line */}
      <Box
        sx={{
          margin: "14px auto 0",
          width: "48px",
          height: "4px",
          borderRadius: "2px",
          background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
        }}
      />
    </Box>
  );
};

// ── Main export 
const SkillsSection = () => (
  <Box
    sx={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #f0f6ff 0%, #fafcff 60%, #e8f0fe 100%)",
      padding: "clamp(40px, 8vw, 80px) clamp(16px, 5vw, 60px)",
      fontFamily: "'Sora', sans-serif",
    }}
  >
    {/* Google font import */}
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;700;800&family=DM+Mono:wght@400;500&display=swap');
    `}</style>

    <Box sx={{ width: "100%", margin: "0 auto" }}>
      <SectionHeader />

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap="16px"
      >
        {CARDS.map((card) => (
          <GridItem key={card.id}>
            <SkillCard card={card} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default SkillsSection;
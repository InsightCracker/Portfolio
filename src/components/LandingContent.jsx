import { Box, Text, Heading } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import {
  FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  HiOutlineChartBar, HiOutlineDatabase, HiOutlineTrendingUp,
  HiOutlineCurrencyDollar, HiOutlineCode, HiOutlineLightBulb,
} from "react-icons/hi";

const phrases = ["Michael Oladimeji", "InsightCracker", "The Thinking Analyst"];

const socials = [
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/InsightCracker", label: "LinkedIn" },
  { icon: <FaGithub />, href: "http://www.github.com/InsightCracker", label: "GitHub" },
  { icon: <FaXTwitter />, href: "http://www.twitter.com/InsightCracker", label: "Twitter" },
  { icon: <FaInstagram />, href: "http://www.instagram.com/mightymykel", label: "Instagram" },
  { icon: <FaWhatsapp />, href: "https://wa.me/+2349036190420", label: "WhatsApp" },
];

const ctaButtons = [
  { label: "View Work", href: "#portfolio", variant: "filled", external: false },
  { label: "Hire Me", href: "#contact", variant: "outline", external: false },
  { label: "Explore DataEre", href: "https://www.dataxo.cfd/", variant: "filled", external: true },
];

const innerOrbitIcons = [
  { icon: <HiOutlineDatabase size={13} />, top: "calc(50% - 60px - 14px)", left: "50%", transform: "translateX(-50%)" },
  { icon: <HiOutlineCode size={13} />, bottom: "calc(50% - 60px - 14px)", left: "50%",                   transform: "translateX(-50%)" },
];

const middleOrbitIcons = [
  { icon: <HiOutlineChartBar size={14} />, top: "calc(50% - 100px - 17px)", left: "50%", transform: "translateX(-50%)" },
  { icon: <HiOutlineCurrencyDollar size={14} />,bottom: "calc(50% - 100px - 17px)", left: "50%", transform: "translateX(-50%)" },
  { icon: <HiOutlineTrendingUp size={14} />, left: "calc(50% - 100px - 17px)", top: "50%", transform: "translateY(-50%)" },
  { icon: <HiOutlineLightBulb size={14} />, right: "calc(50% - 100px - 17px)", top: "50%", transform: "translateY(-50%)" },
];

const outerOrbitIcons = [
  { icon: <HiOutlineDatabase size={15} />, top: "14px",    left: "14px" },
  { icon: <HiOutlineTrendingUp size={15} />, top: "14px",    right: "14px" },
  { icon: <HiOutlineCode size={15} />, bottom: "14px", left: "14px" },
  { icon: <HiOutlineLightBulb size={15} />, bottom: "14px", right: "14px" },
];

const statCards = [
  { label: "Accuracy", value: "97.4%", icon: <HiOutlineTrendingUp size={13} />, top: "10px", left: "-10px", anim: "floatA 4s ease-in-out infinite" },
  { label: "Datasets", value: "120+",  icon: <HiOutlineDatabase size={13} />, bottom: "30px", right: "-10px", anim: "floatB 4.5s ease-in-out infinite 0.5s" },
  { label: "Insights", value: "340+",  icon: <HiOutlineChartBar size={13} />, bottom: "10px", left: "-10px", anim: "floatA 5s ease-in-out infinite 1s" },
];

const LandingContent = () => {
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);
  const charRef = useRef(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    charRef.current = 0;
  }, [wordIdx]);

  useEffect(() => {
    if (isPausing) return;
    const word = phrases[wordIdx];
    if (!deleting) {
      const t = setTimeout(() => {
        charRef.current += 1;
        setTyped(word.slice(0, charRef.current));
        if (charRef.current === word.length) {
          setIsPausing(true);
          setTimeout(() => { setIsPausing(false); setDeleting(true); }, 1800);
        }
      }, 80);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        charRef.current -= 1;
        setTyped(word.slice(0, charRef.current));
        if (charRef.current === 0) {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % phrases.length);
        }
      }, 45);
      return () => clearTimeout(t);
    }
  }, [typed, deleting, wordIdx, isPausing]);

  const orbitDotStyle = (pos, size, animDuration, animDirection) => ({
    position: "absolute",
    ...pos,
    width: size,
    height: size,
    borderRadius: "50%",
    background: "white",
    border: "1.5px solid rgba(59,130,246,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#3b82f6",
    boxShadow: "0 2px 8px rgba(59,130,246,0.15)",
    transition: "all 0.2s ease",
    zIndex: 5,
    animation: `counterSpin${animDirection} ${animDuration} linear infinite`,
    cursor: "default",
    _hover: { background: "#3b82f6", color: "white", transform: "scale(1.2)" },
  });

  return (
    <Box
      id="home"
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: { base: "column", md: "unset" },
        gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
        gap: "48px",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100vh",
        padding: { base: "80px 16px 48px", md: "80px 48px 48px" }
      }}
    >

      {/* ── LEFT ── */}
      <Box
        sx={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(-2rem)",
          transition: "opacity 700ms cubic-bezier(0.34,1.56,0.64,1), transform 700ms cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {/* Greeting pill */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "#eff6ff",
            color: "#3b82f6",
            fontSize: ".8rem",
            fontWeight: "600",
            padding: "5px 14px",
            borderRadius: "20px",
            marginBottom: "14px",
            border: "1px solid #bfdbfe",
            animation: "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s both",
          }}
        >
          <Box as="span" sx={{ display: "inline-block", animation: "wave 1.8s ease-in-out infinite" }}>
            👋
          </Box>
          Hello, I am
        </Box>

        {/* Typewriter */}
        <Heading
          sx={{
            fontSize: { base: "1.5rem", md: "2.2rem" },
            fontWeight: "500",
            margin: ".4rem 0 .6rem",
            minHeight: "3rem",
            color: "#111827",
            display: "flex",
            alignItems: "center",
            animation: "slideInLeft 0.5s ease 0.2s both",
          }}
        >
          {typed}
          <Box
            as="span"
            sx={{
              display: "inline-block",
              width: "2px",
              height: "1.8rem",
              background: "#3b82f6",
              borderRadius: "2px",
              marginLeft: "3px",
              animation: "blink 0.8s step-end infinite",
            }}
          />
        </Heading>

        {/* Subtitle */}
        <Text
          sx={{
            fontSize: {base: ".82rem", md: "1rem"},
            color: "#4a4f58",
            marginBottom: ".4rem",
            animation: "slideInLeft 0.5s ease 0.3s both",
          }}
        >
          Data Analyst & Financial Insights Specialist
        </Text>

        {/* DataEre */}
        <Text
          sx={{
            fontSize: {base: ".82rem", md: "1rem"},
            color: "#3b82f6",
            marginBottom: "1.4rem",
            animation: "slideInLeft 0.5s ease 0.4s both",
          }}
        >
          🚀 Creator of DataEre - practice your data skills
        </Text>

        {/* Socials */}
        <Box sx={{ animation: "slideInLeft 0.5s ease 0.5s both" }}>
          <Text
            sx={{
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#9ca3af",
              marginBottom: "8px",
            }}
          >
            Find me on
          </Text>
          <Box sx={{ display: "flex", gap: "8px", marginBottom: "1.4rem" }}>
            {socials.map(({ icon, href, label }, i) => (
              <Box
                key={label}
                as="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                sx={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#374151",
                  fontSize: "15px",
                  transition: "all 200ms cubic-bezier(0.34,1.56,0.64,1)",
                  animation: `popIn 0.4s cubic-bezier(0.34,1.56,0.64,1) ${0.55 + i * 0.07}s both`,
                  _hover: {
                    background: "#3b82f6",
                    borderColor: "#3b82f6",
                    color: "white",
                    transform: "translateY(-4px) scale(1.1)",
                  },
                }}
              >
                {icon}
              </Box>
            ))}
          </Box>
        </Box>

        {/* CTA Buttons */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            animation: "slideInLeft 0.5s ease 0.75s both",
          }}
        >
          {ctaButtons.map(({ label, href, variant, external }) => (
            <Box
              key={label}
              as="a"
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              sx={{
                fontSize: ".75rem",
                fontWeight: "500",
                padding: { base: "5px 8px", md: "8px 18px" },
                borderRadius: { base: "5px", md: "8px"},
                border: "2px solid #3b82f6",
                background: variant === "filled" ? "#3b82f6" : "transparent",
                color: variant === "filled" ? "white" : "#3b82f6",
                cursor: "pointer",
                transition: "all 200ms ease",
                textDecoration: "none",
                _hover: {
                  background: variant === "filled" ? "#2563eb" : "#eff6ff",
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 12px rgba(59,130,246,0.25)",
                },
                _active: { transform: "scale(0.96)" },
              }}
            >
              {label}
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── RIGHT — ORBIT ── */}
      <Box
        sx={{
          display: { base: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0) scale(1)" : "translateX(2rem) scale(0.95)",
          transition: "opacity 700ms cubic-bezier(0.34,1.56,0.64,1) 100ms, transform 700ms cubic-bezier(0.34,1.56,0.64,1) 100ms",
        }}
      >
        <Box sx={{ position: "relative", width: "320px", height: "320px" }}>

          {/* Ring 1 — inner */}
          <Box
            sx={{
              position: "absolute",
              width: "120px", height: "120px",
              borderRadius: "50%",
              border: "1px dashed rgba(59,130,246,0.35)",
              top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              animation: "ringSpinCW 6s linear infinite",
            }}
          >
            {innerOrbitIcons.map(({ icon, ...pos }, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  ...pos,
                  width: "28px", height: "28px",
                  borderRadius: "50%",
                  background: "white",
                  border: "1.5px solid rgba(59,130,246,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#3b82f6",
                  boxShadow: "0 2px 8px rgba(59,130,246,0.15)",
                  transition: "all 0.2s ease",
                  animation: "ringSpinCCW 6s linear infinite",
                  cursor: "default",
                  zIndex: 5,
                  _hover: { background: "#3b82f6", color: "white", transform: "scale(1.2)" },
                }}
              >
                {icon}
              </Box>
            ))}
          </Box>

          {/* Ring 2 — middle */}
          <Box
            sx={{
              position: "absolute",
              width: "200px", height: "200px",
              borderRadius: "50%",
              border: "1px dashed rgba(59,130,246,0.25)",
              top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              animation: "ringSpinCCW 10s linear infinite",
            }}
          >
            {middleOrbitIcons.map(({ icon, ...pos }, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  ...pos,
                  width: "34px", height: "34px",
                  borderRadius: "50%",
                  background: "white",
                  border: "1.5px solid rgba(59,130,246,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#3b82f6",
                  boxShadow: "0 2px 8px rgba(59,130,246,0.15)",
                  transition: "all 0.2s ease",
                  animation: "ringSpinCW 10s linear infinite",
                  cursor: "default",
                  zIndex: 5,
                  _hover: { background: "#3b82f6", color: "white", transform: "scale(1.2)" },
                }}
              >
                {icon}
              </Box>
            ))}
          </Box>

          {/* Ring 3 — outer */}
          <Box
            sx={{
              position: "absolute",
              width: "290px", height: "290px",
              borderRadius: "50%",
              border: "1px dashed rgba(59,130,246,0.15)",
              top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              animation: "ringSpinCW 18s linear infinite",
            }}
          >
            {outerOrbitIcons.map(({ icon, ...pos }, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  ...pos,
                  width: "38px", height: "38px",
                  borderRadius: "50%",
                  background: "white",
                  border: "1.5px solid rgba(59,130,246,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#3b82f6",
                  boxShadow: "0 2px 12px rgba(59,130,246,0.12)",
                  transition: "all 0.2s ease",
                  animation: "ringSpinCCW 18s linear infinite",
                  cursor: "default",
                  zIndex: 5,
                  _hover: { background: "#3b82f6", color: "white", transform: "scale(1.2)" },
                }}
              >
                {icon}
              </Box>
            ))}
          </Box>

          {/* Core */}
          <Box
            sx={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              width: "72px", height: "72px",
              borderRadius: "50%",
              background: "linear-gradient(135deg,#3b82f6,#1d4ed8)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 0 8px rgba(59,130,246,0.12), 0 0 0 16px rgba(59,130,246,0.06)",
              animation: "corePulse 3s ease-in-out infinite",
              zIndex: 10,
            }}
          >
            <HiOutlineChartBar size={30} color="white" />
          </Box>

          {/* Floating stat cards */}
          {statCards.map(({ label, value, icon, anim, ...pos }) => (
            <Box
              key={label}
              sx={{
                position: "absolute",
                ...pos,
                background: "white",
                border: "1px solid rgba(59,130,246,0.18)",
                borderRadius: "10px",
                padding: "8px 12px",
                display: "flex", alignItems: "center", gap: "8px",
                boxShadow: "0 4px 20px rgba(59,130,246,0.1)",
                zIndex: 20,
                animation: anim,
                whiteSpace: "nowrap",
              }}
            >
              <Box
                sx={{
                  width: "28px", height: "28px",
                  borderRadius: "7px",
                  background: "#eff6ff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#3b82f6",
                }}
              >
                {icon}
              </Box>
              <Box>
                <Box sx={{ fontSize: "10px", color: "#9ca3af", lineHeight: 1, marginBottom: "2px" }}>{label}</Box>
                <Box sx={{ fontSize: "13px", fontWeight: "600", color: "#111827", lineHeight: 1 }}>{value}</Box>
              </Box>
            </Box>
          ))}

          {/* Typing indicator */}
          <Box
            sx={{
              position: "absolute",
              bottom: "82px", left: "50%", transform: "translateX(-50%)",
              display: "flex", alignItems: "center", gap: "5px",
              background: "white",
              border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: "20px",
              padding: "5px 14px",
              fontSize: "11px",
              color: "#6b7280",
              boxShadow: "0 2px 12px rgba(59,130,246,0.08)",
              zIndex: 20,
              animation: "floatB 4.2s ease-in-out infinite 1.5s",
              whiteSpace: "nowrap",
            }}
          >
            Analysing{" "}
            <Box as="span" sx={{ color: "#3b82f6", fontWeight: "600" }}>data</Box>
            <Box
              as="span"
              sx={{
                display: "inline-block",
                width: "2px", height: "11px",
                background: "#3b82f6",
                borderRadius: "1px",
                marginLeft: "1px",
                verticalAlign: "middle",
                animation: "blink 0.8s step-end infinite",
              }}
            />
          </Box>

        </Box>
      </Box>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes ringSpinCW {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes ringSpinCCW {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes corePulse {
          0%,100% {
            box-shadow: 0 0 0 8px rgba(59,130,246,0.12), 0 0 0 16px rgba(59,130,246,0.06);
            transform: translate(-50%,-50%) scale(1);
          }
          50% {
            box-shadow: 0 0 0 14px rgba(59,130,246,0.18), 0 0 0 26px rgba(59,130,246,0.08);
            transform: translate(-50%,-50%) scale(1.06);
          }
        }
        @keyframes floatA {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(6px); }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        @keyframes wave {
          0%,100% { transform: rotate(0deg); }
          25%      { transform: rotate(20deg); }
          75%      { transform: rotate(-10deg); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.75); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

    </Box>
  );
};

export default LandingContent;
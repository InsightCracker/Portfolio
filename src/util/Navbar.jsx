import { useState, useEffect, useRef } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

// ── Inline SVG Icons ──────────────────────────────────────────────────────────
const IconBars = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="3" y1="6"  x2="21" y2="6"  />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const IconTimes = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="18" y1="6"  x2="6"  y2="18" />
    <line x1="6"  y1="6"  x2="18" y2="18" />
  </svg>
);

const IconDownload = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

// ── Nav links ─────────────────────────────────────────────────────────────────
const LINKS = [
  { label: "Home",     href: "#home"      },
  { label: "About",    href: "#about"     },
  { label: "Skills",   href: "#skill"    },
  { label: "Projects", href: "#portfolio" },
  { label: "Contact",  href: "#contact"   },
];

// ── Desktop Nav Link ──────────────────────────────────────────────────────────
const DesktopLink = ({ label, href, active }) => {
  const [hov, setHov] = useState(false);
  const lit = active || hov;
  return (
    <Box
      as="a"
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      sx={{
        position: "relative",
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.73rem",
        fontWeight: "600",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: lit ? "#fff" : "rgba(255,255,255,0.68)",
        textDecoration: "none",
        padding: "6px 2px",
        transition: "color 0.2s ease",
        cursor: "pointer",
        _after: {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: lit ? "100%" : "0%",
          height: "2px",
          borderRadius: "1px",
          background: "#fff",
          transition: "width 0.26s cubic-bezier(0.34,1.56,0.64,1)",
        },
      }}
    >
      {label}
    </Box>
  );
};

// ── Mobile Nav Link ───────────────────────────────────────────────────────────
const MobileLink = ({ label, href, index, onClick }) => {
  const [hov, setHov] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateX(0)";
    }, 50 + index * 55);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <Box
      ref={ref}
      as="a"
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ opacity: 0, transform: "translateX(-18px)", transition: "opacity 0.38s ease, transform 0.38s cubic-bezier(0.34,1.56,0.64,1)" }}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "13px 16px",
        borderRadius: "10px",
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.8rem",
        fontWeight: "600",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: hov ? "#fff" : "rgba(255,255,255,0.8)",
        background: hov ? "rgba(255,255,255,0.14)" : "transparent",
        textDecoration: "none",
        transition: "background 0.2s ease, color 0.2s ease, transform 0.22s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hov ? "translateX(5px)" : "translateX(0)",
        cursor: "pointer",
      }}
    >
      <Text as="span" sx={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", minWidth: "18px" }}>
        0{index + 1}
      </Text>
      {label}
    </Box>
  );
};

// ── Navbar ────────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const ids = LINKS.map((l) => l.href.replace("#", ""));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 80) {
          setActiveSection(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Mono:wght@400;500;600&display=swap');
      `}</style>

      <Box
        className="navbar-root"
        sx={{
          position: "fixed",
          top: 0, left: 0,
          width: "100%",
          zIndex: 2000,
          background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
          boxShadow: scrolled ? "0 4px 30px rgba(37,99,235,0.4)" : "none",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Main bar */}
        <Flex
          align="center"
          justify="space-between"
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: { base: "14px 20px", md: "14px 32px" },
          }}
        >
          {/* Logo */}
          <Box as="a" href="#home" sx={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <Box sx={{
              width: "32px", height: "32px", borderRadius: "8px",
              background: "rgba(255,255,255,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1.5px solid rgba(255,255,255,0.3)",
              flexShrink: 0,
            }}>
              <Text sx={{ fontFamily: "'Sora', sans-serif", fontWeight: "800", fontSize: "0.82rem", color: "#fff", lineHeight: 1 }}>IC</Text>
            </Box>
            <Text sx={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: "800",
              fontSize: { base: "1.05rem", md: "1.15rem" },
              color: "#fff",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}>
              InsightCracker
            </Text>
          </Box>

          {/* Desktop links */}
          <Flex as="nav" align="center" gap="28px" display={{ base: "none", lg: "flex" }}>
            {LINKS.map((l) => (
              <DesktopLink key={l.href} label={l.label} href={l.href} active={activeSection === l.href.replace("#", "")} />
            ))}
            <Box
              as="a"
              href="/cv.pdf"
              download
              sx={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                padding: "8px 18px", borderRadius: "8px",
                fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", fontWeight: "700",
                letterSpacing: "0.08em", textTransform: "uppercase",
                textDecoration: "none", background: "#fff", color: "#2563eb",
                boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
                _hover: { background: "#f0f6ff", transform: "translateY(-2px) scale(1.04)", boxShadow: "0 8px 22px rgba(0,0,0,0.18)" },
                _active: { transform: "scale(0.97)" },
              }}
            >
              <IconDownload />
              Download CV
            </Box>
          </Flex>

          {/* Hamburger */}
          <Box
            as="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            display={{ base: "flex", lg: "none" }}
            sx={{
              width: "40px", height: "40px", borderRadius: "9px",
              border: "1.5px solid rgba(255,255,255,0.28)",
              background: menuOpen ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
              alignItems: "center", justifyContent: "center",
              color: "#fff", cursor: "pointer",
              transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
              _hover: { background: "rgba(255,255,255,0.22)", transform: "scale(1.08)" },
              _active: { transform: "scale(0.94)" },
            }}
          >
            <Box sx={{ transition: "transform 0.3s ease", transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)", display: "flex" }}>
              {menuOpen ? <IconTimes /> : <IconBars />}
            </Box>
          </Box>
        </Flex>

        {/* Mobile drawer */}
        <Box
          display={{ base: "block", lg: "none" }}
          sx={{
            overflow: "hidden",
            maxHeight: menuOpen ? "460px" : "0px",
            opacity: menuOpen ? 1 : 0,
            transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
            borderTop: menuOpen ? "1px solid rgba(255,255,255,0.12)" : "none",
          }}
        >
          <Box sx={{ padding: "10px 14px 18px", display: "flex", flexDirection: "column", gap: "2px" }}>
            {LINKS.map((l, i) => (
              <MobileLink key={l.href} label={l.label} href={l.href} index={i} onClick={() => setMenuOpen(false)} />
            ))}
            <Box
              as="a"
              href="/cv.pdf"
              download
              onClick={() => setMenuOpen(false)}
              sx={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 16px", borderRadius: "10px", mt: "8px",
                fontFamily: "'DM Mono', monospace", fontSize: "0.76rem", fontWeight: "700",
                letterSpacing: "0.08em", textTransform: "uppercase",
                textDecoration: "none", background: "#fff", color: "#2563eb",
                boxShadow: "0 4px 14px rgba(0,0,0,0.14)",
                transition: "background 0.2s ease",
                _hover: { background: "#f0f6ff" },
              }}
            >
              <IconDownload />
              Download CV
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Backdrop */}
      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => setMenuOpen(false)}
        sx={{
          position: "fixed", inset: 0, zIndex: 1999,
          background: "rgba(0,0,0,0.32)",
          backdropFilter: "blur(2px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />
    </>
  );
};

export default Navbar;
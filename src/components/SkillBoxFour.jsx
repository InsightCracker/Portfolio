import { Box, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const ContactRight = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0) scale(1)";
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const skills = ["Data Storytelling", "Problem Solving", "Cross-functional Collaboration"];

  return (
    <Box
      ref={ref}
      className="contactRightBox"
      sx={{
        bgColor: "#f4f4f4",
        color: "#3b82f6",
        padding: "20px 16px 18px",
        margin: ".5rem 0",
        borderTopRightRadius: "16px",
        borderBottomLeftRadius: "16px",
        borderTopLeftRadius: "4px",
        borderBottomRightRadius: "4px",
        position: "relative",
        overflow: "hidden",
        opacity: 0,
        transform: "translateY(24px) scale(0.97)",
        transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        _hover: {
          transform: "translateY(-4px) scale(1.02)",
        },
        _before: {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "60%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.06), transparent)",
          transition: "left 0s",
        },
        "&:hover::before": {
          left: "150%",
          transition: "left 0.6s ease",
        },
      }}
    >
      <Box
        as="span"
        sx={{ fontSize: "22px", display: "block", marginBottom: "10px", opacity: 0.85 }}
      >
        🧠
      </Box>

      <Text
        sx={{
          fontWeight: "500",
          fontSize: "1.2rem",
          marginBottom: "12px",
          color: "#1d4ed8",
          lineHeight: "1.3",
        }}
      >
        Soft Skills
      </Text>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {skills.map((skill) => (
          <Text
            key={skill}
            sx={{
              padding: "3px 10px",
              fontSize: ".9rem",
              bgColor: "rgba(59,130,246,0.12)",
              color: "#1d4ed8",
              display: "inline-block",
              borderRadius: "20px",
              cursor: "default",
              transition:
                "transform 0.2s cubic-bezier(0.34,1.56,0.64,1), background 0.2s, color 0.2s",
              _hover: {
                bgColor: "#3b82f6",
                color: "#fff",
                transform: "scale(1.1)",
              },
            }}
          >
            {skill}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default ContactRight;
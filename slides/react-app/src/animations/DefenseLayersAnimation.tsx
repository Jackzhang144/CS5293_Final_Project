import React from "react";
import { Box, Typography } from "@mui/material";
import { Shield, Security, Psychology, CheckCircle } from "@mui/icons-material";
import { accent } from "../theme";
import { useSequentialStagger } from "./stagger";

export const DefenseLayersAnimation: React.FC = () => {
  const seq = useSequentialStagger();
  const layers = [
    { name: "Input Filter", desc: "Perplexity & semantic analysis", color: accent.red, icon: <Shield /> },
    { name: "Sanitization", desc: "Prompt injection removal", color: accent.yellow, icon: <Security /> },
    { name: "Alignment", desc: "RLHF + Constitutional AI", color: accent.cyan, icon: <Psychology /> },
    { name: "Output Guard", desc: "Final safety verification", color: accent.green, icon: <CheckCircle /> },
  ];

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, flexWrap: "wrap", mt: 2 }}>
      {layers.map((layer, idx) => (
        <React.Fragment key={idx}>
          <Box style={seq(200)} sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5 }}>
            <Box sx={{
              width: 180, height: 120, borderRadius: 3,
              bgcolor: `${layer.color}08`, border: `2.5px solid ${layer.color}50`,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 0.8,
              animation: "borderGlow 3s ease-in-out infinite",
              animationDelay: `${idx * 0.5}s`,
              "--c": `${layer.color}60`,
            } as React.CSSProperties}>
              <Box sx={{ color: layer.color }}>{React.cloneElement(layer.icon, { sx: { fontSize: 32 } })}</Box>
              <Typography variant="caption" sx={{ color: layer.color, fontWeight: 700, fontSize: "0.8rem" }}>{layer.name}</Typography>
              <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.65rem", textAlign: "center", px: 1 }}>{layer.desc}</Typography>
            </Box>
          </Box>
          {idx < layers.length - 1 && (
            <Box style={seq(300)} sx={{ flexShrink: 0 }}>
              <svg width="44" height="24" viewBox="0 0 44 24">
                <line x1="0" y1="12" x2="36" y2="12" stroke={layer.color} strokeWidth="2" strokeDasharray="5 3" strokeLinecap="round">
                  <animate attributeName="stroke-dashoffset" from="16" to="0" dur="0.6s" repeatCount="indefinite" />
                </line>
                <polygon points="36,6 42,12 36,18" fill={layer.color} />
              </svg>
            </Box>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

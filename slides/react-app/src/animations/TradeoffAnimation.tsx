import React from "react";
import { Box, Typography } from "@mui/material";
import { accent } from "../theme";
import { useSequentialStagger } from "./stagger";

export const TradeoffAnimation: React.FC = () => {
  const seq = useSequentialStagger();
  const phases = [
    { safety: 85, utility: 20, label: "OVER-RESTRICTED", color: accent.red },
    { safety: 50, utility: 50, label: "BALANCED", color: accent.yellow },
    { safety: 20, utility: 85, label: "UNDER-PROTECTED", color: accent.green },
  ];

  return (
    <Box style={seq(200)} sx={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 6, width: "100%", maxWidth: 500, mx: "auto" }}>
      {phases.map((phase, idx) => (
        <Box key={idx} sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5 }}>
          <Box sx={{ display: "flex", gap: 2, mb: 0.5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0.5 }}>
              <Typography variant="caption" sx={{ fontSize: "0.65rem", color: accent.red, fontWeight: 600 }}>Safety</Typography>
              <Box sx={{ width: 28, height: 160, bgcolor: "rgba(0,0,0,0.05)", borderRadius: 1.5, position: "relative", overflow: "hidden" }}>
                <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "0%", bgcolor: accent.red, borderRadius: 1.5, boxShadow: `0 0 16px ${accent.red}30`, animation: "meterGrow 1s cubic-bezier(0.23, 1, 0.32, 1) forwards", animationDelay: `${0.3 + idx * 0.3}s`, "--h": `${phase.safety}%` } as React.CSSProperties} />
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0.5 }}>
              <Typography variant="caption" sx={{ fontSize: "0.65rem", color: accent.green, fontWeight: 600 }}>Utility</Typography>
              <Box sx={{ width: 28, height: 160, bgcolor: "rgba(0,0,0,0.05)", borderRadius: 1.5, position: "relative", overflow: "hidden" }}>
                <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "0%", bgcolor: accent.green, borderRadius: 1.5, boxShadow: `0 0 16px ${accent.green}30`, animation: "meterGrow 1s cubic-bezier(0.23, 1, 0.32, 1) forwards", animationDelay: `${0.3 + idx * 0.3}s`, "--h": `${phase.utility}%` } as React.CSSProperties} />
              </Box>
            </Box>
          </Box>
          <Box sx={{ px: 2, py: 0.8, borderRadius: 2, bgcolor: `${phase.color}10`, border: `1.5px solid ${phase.color}50`, animation: phase.label === "BALANCED" ? "gentlePulse 1.8s ease-in-out infinite, glow 2.5s ease-in-out infinite" : "softPulse 2s ease-in-out infinite", animationDelay: `${idx * 0.6}s`, ...(phase.label === "BALANCED" && { bgcolor: `${accent.yellow}18`, border: `2px solid ${accent.yellow}60`, boxShadow: `0 0 20px ${accent.yellow}30` }) }}>
            <Typography variant="caption" sx={{ fontWeight: 800, fontSize: "0.7rem", color: phase.color }}>{phase.label}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

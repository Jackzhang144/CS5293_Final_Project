import React from "react";
import { Box, Typography } from "@mui/material";
import { accent } from "../theme";
import { useSequentialStagger } from "./stagger";

export const SuccessRateAnimation: React.FC = () => {
  const seq = useSequentialStagger();
  const attacks = [
    { name: "GCG (Vicuna-7B)", rate: 88, color: accent.purple },
    { name: "GCG Transfer (GPT-4)", rate: 47, color: accent.cyan },
    { name: "Base64 Encoding (avg)", rate: 98, color: accent.red, note: "~100% GPT-4, ~98% Claude, ~95% Gemini" },
    { name: "PAIR (Black-box)", rate: 80, color: accent.orange },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, width: "100%", maxWidth: 520, mx: "auto" }}>
      {attacks.map((attack, idx) => (
        <Box key={idx} style={seq(300)}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5, alignItems: "baseline", gap: 1 }}>
            <Box>
              <Typography variant="caption" sx={{ fontWeight: 600, fontSize: "0.7rem" }}>{attack.name}</Typography>
              {"note" in attack && <Typography variant="caption" sx={{ color: "text.disabled", fontSize: "0.6rem", display: "block" }}>{attack.note}</Typography>}
            </Box>
            <Typography variant="caption" sx={{ color: attack.color, fontWeight: 800, fontSize: "0.75rem" }}>{attack.rate}%</Typography>
          </Box>
          <Box sx={{ height: 10, bgcolor: "rgba(0,0,0,0.06)", borderRadius: 5, overflow: "hidden" }}>
            <Box sx={{
              height: "100%", borderRadius: 5, width: "0%",
              bgcolor: attack.color,
              animation: "meterFill 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards",
              animationDelay: `${1.2 + idx * 0.3}s`,
              "--w": `${attack.rate}%`,
            } as React.CSSProperties} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

import React from "react";
import { Box, Typography } from "@mui/material";
import { Warning, Shield, SyncAlt } from "@mui/icons-material";
import { accent } from "../theme";
import { useSequentialStagger } from "./stagger";

export const AttackDefenseAnimation: React.FC = () => {
  const seq = useSequentialStagger();
  const defenseAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  const attackAngles = [270, 210, 330];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: 660 }}>
        <Box style={seq(200)} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Warning sx={{ color: accent.red, fontSize: 20 }} />
          <Typography variant="h3" sx={{ color: accent.red, fontWeight: 700 }}>ATTACKER</Typography>
        </Box>
        <Box style={seq(600)} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="h3" sx={{ color: accent.green, fontWeight: 700 }}>DEFENDER</Typography>
          <Shield sx={{ color: accent.green, fontSize: 20 }} />
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, flexWrap: "wrap" }}>
        {/* Attack side */}
        <Box style={seq(300)} sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, p: 4, borderRadius: 3, bgcolor: `${accent.red}04`, border: `1px solid ${accent.red}20` }}>
          <Box sx={{ position: "relative", width: 140, height: 140 }}>
            <svg width="140" height="140" style={{ position: "absolute", top: 0, left: 0 }}>
              <defs><marker id="arrowhead-red" markerWidth="6" markerHeight="5" refX="5.5" refY="2.5" orient="auto"><polygon points="0 0, 6 2.5, 0 5" fill={accent.red} /></marker></defs>
              <circle cx="70" cy="70" r="60" fill="none" stroke={`${accent.red}30`} strokeWidth="1.5" strokeDasharray="5 5" />
              {attackAngles.map((deg, i) => { const rad = (deg * Math.PI) / 180; const x1 = 70 + 62 * Math.sin(rad); const y1 = 70 - 62 * Math.cos(rad); const x2 = 70 + 22 * Math.sin(rad); const y2 = 70 - 22 * Math.cos(rad); return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={accent.red} strokeWidth="3" strokeLinecap="round" markerEnd="url(#arrowhead-red)" />; })}
            </svg>
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", bgcolor: accent.red, boxShadow: `0 0 20px ${accent.red}aa, 0 0 40px ${accent.red}55`, animation: "dangerPulse 1.2s ease-in-out infinite" }} />
          </Box>
          <Typography variant="body2" sx={{ color: accent.red, fontWeight: 700, textAlign: "center", mt: 1 }}>Find ONE weakness</Typography>
          <Typography variant="caption" sx={{ color: "text.secondary", textAlign: "center", maxWidth: 140, fontSize: "0.65rem" }}>Single point of failure is enough</Typography>
        </Box>

        <Box style={seq(400)} sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ color: "text.disabled", fontWeight: 300, fontSize: "2rem" }}>vs</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}><SyncAlt sx={{ fontSize: 28, color: "text.disabled", animation: "rotate 4s linear infinite" }} /></Box>
        </Box>

        {/* Defense side */}
        <Box style={seq(500)} sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, p: 4, borderRadius: 3, bgcolor: `${accent.green}04`, border: `1px solid ${accent.green}20` }}>
          <Box sx={{ position: "relative", width: 140, height: 140 }}>
            {defenseAngles.map((deg, i) => { const rad = (deg * Math.PI) / 180; const r = 52; const cx = 70 + r * Math.cos(rad); const cy = 70 + r * Math.sin(rad); return <Box key={i} sx={{ position: "absolute", left: cx - 5, top: cy - 5, width: 10, height: 10, borderRadius: "50%", bgcolor: accent.green, boxShadow: `0 0 6px ${accent.green}60` }} />; })}
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: accent.green }}>
              <svg width="52" height="60" viewBox="0 0 24 24" fill="none" style={{ display: "block" }}><path d="M12 2L4 5v6c0 5.25 3.4 10.15 8 11.25 4.6-1.1 8-6 8-11.25V5L12 2z" fill={accent.green} fillOpacity="0.15" stroke={accent.green} strokeWidth="1.5" strokeLinejoin="round" /></svg>
            </Box>
          </Box>
          <Typography variant="body2" sx={{ color: accent.green, fontWeight: 700, textAlign: "center", mt: 1 }}>Cover ALL angles</Typography>
          <Typography variant="caption" sx={{ color: "text.secondary", textAlign: "center", maxWidth: 140, fontSize: "0.65rem" }}>Every surface must be protected</Typography>
        </Box>
      </Box>

      <Box style={seq(800)} sx={{ p: 2, px: 4, borderRadius: 2, bgcolor: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.06)" }}>
        <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600, fontSize: "0.68rem" }}>Asymmetric cost: Attackers need O(1) exploit · Defenders need O(n²) coverage</Typography>
      </Box>
    </Box>
  );
};

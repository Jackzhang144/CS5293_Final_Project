import React from "react";
import { Box, Typography } from "@mui/material";
import { Code, Security, Expand, SyncAlt, Psychology, AutoAwesome } from "@mui/icons-material";
import { accent } from "../theme";
import { useSequentialStagger } from "./stagger";

export const HarnessEngineeringAnimation: React.FC = () => {
  const seq = useSequentialStagger();
  const pillars = [
    { title: "Specification Architecture", desc: "Encode invariants as mechanical rules. Linters + tests enforce boundaries.", tag: "MECHANICAL", items: ["Layered domain architecture", "Custom linters with fix hints", "Structural test enforcement"], icon: <Code />, color: accent.purple },
    { title: "Repo as System of Record", desc: "If it is not in the repo, it does not exist to the agent.", tag: "SINGLE SOURCE", items: ["AGENTS.md as map, not encyclopedia", "Structured docs/ with index & crosslinks", "CI validates freshness & structure"], icon: <Security />, color: accent.cyan },
    { title: "Progressive Disclosure", desc: "Agents start small and follow pointers to deeper context.", tag: "CONTEXT", items: ["~100-line AGENTS.md entry point", "Design docs indexed by validation", "Quality scores track per-domain gaps"], icon: <Expand />, color: accent.orange },
    { title: "Feedback Loops & GC", desc: "Agents self-review, verify, and garbage-collect drift.", tag: "AUTONOMOUS", items: ["Agent-to-agent code review (Ralph)", "Observability stack exposed to agent", "Weekly doc-gardening & quality scoring"], icon: <SyncAlt />, color: accent.green },
    { title: "Human at the Helm", desc: "Humans steer through direction and taste, encoded into the harness.", tag: "OVERSIGHT", items: ["Priority & acceptance criteria", "Taste encoded as golden rules in code", "Verify outcomes, not implementation"], icon: <Psychology />, color: accent.red },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2.5, maxWidth: 1000, mx: "auto" }}>
      {/* Top: Agent harness */}
      <Box style={seq(200)} sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
        <Box sx={{ px: 2, py: 0.8, borderRadius: 1.5, bgcolor: `${accent.purple}10`, border: `1.5px solid ${accent.purple}30` }}>
          <Typography variant="caption" sx={{ fontWeight: 700, fontSize: "0.65rem", color: accent.purple, fontFamily: "monospace" }}>HUMAN INTENT</Typography>
        </Box>
        <svg width="32" height="16" viewBox="0 0 32 16"><line x1="0" y1="8" x2="28" y2="8" stroke={accent.purple} strokeWidth="1.5" strokeDasharray="4 2"><animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.8s" repeatCount="indefinite" /></line><polygon points="24,4 30,8 24,12" fill={accent.purple} /></svg>
        <Box sx={{ width: 110, height: 110, borderRadius: "50%", bgcolor: `${accent.purple}10`, border: `2.5px solid ${accent.purple}`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", animation: "gentlePulse 2.5s ease-in-out infinite", boxShadow: `0 0 20px ${accent.purple}30` }}>
          <Box sx={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", px: 1.5, py: 0.3, borderRadius: 1, bgcolor: accent.purple, whiteSpace: "nowrap" }}>
            <Typography variant="caption" sx={{ color: "white", fontWeight: 800, fontSize: "0.65rem", letterSpacing: "0.08em", fontFamily: "monospace" }}>HARNESS</Typography>
          </Box>
          <Box sx={{ width: 84, height: 84, borderRadius: "50%", border: `1.5px solid ${accent.purple}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AutoAwesome sx={{ fontSize: 36, color: accent.purple, opacity: 0.9 }} />
          </Box>
        </Box>
        <svg width="32" height="16" viewBox="0 0 32 16"><line x1="0" y1="8" x2="28" y2="8" stroke={accent.green} strokeWidth="1.5" strokeDasharray="4 2"><animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.8s" repeatCount="indefinite" /></line><polygon points="24,4 30,8 24,12" fill={accent.green} /></svg>
        <Box sx={{ px: 2, py: 0.8, borderRadius: 1.5, bgcolor: `${accent.green}10`, border: `1.5px solid ${accent.green}30`, animation: "successPulse 2s ease-in-out infinite" }}>
          <Typography variant="caption" sx={{ fontWeight: 700, fontSize: "0.65rem", color: accent.green, fontFamily: "monospace" }}>RELIABLE OUTPUT</Typography>
        </Box>
      </Box>

      {/* Five pillars */}
      <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
        {pillars.map((pillar, idx) => (
          <Box key={idx} style={seq(250)} sx={{ flex: "1 1 160px", maxWidth: 175, display: "flex", flexDirection: "column", borderRadius: 2, overflow: "hidden", bgcolor: `${pillar.color}06`, border: `1.5px solid ${pillar.color}25` }}>
            <Box sx={{ py: 0.8, px: 1.5, bgcolor: `${pillar.color}12`, borderBottom: `1px solid ${pillar.color}20`, display: "flex", alignItems: "center", gap: 0.8 }}>
              <Box sx={{ color: pillar.color, opacity: 0.8 }}>{React.cloneElement(pillar.icon, { sx: { fontSize: 16 } })}</Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="caption" sx={{ fontWeight: 700, fontSize: "0.65rem", color: pillar.color, display: "block" }}>{pillar.title}</Typography>
                <Typography variant="caption" sx={{ fontSize: "0.65rem", color: pillar.color, fontFamily: "monospace", opacity: 0.7 }}>{pillar.tag}</Typography>
              </Box>
            </Box>
            <Box sx={{ p: 1.5, flex: 1 }}>
              <Typography variant="caption" sx={{ fontSize: "0.65rem", color: "text.secondary", lineHeight: 1.5, display: "block", mb: 1 }}>{pillar.desc}</Typography>
              {pillar.items.map((item, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 0.5, mb: 0.3 }}>
                  <Box sx={{ width: 4, height: 4, borderRadius: "50%", bgcolor: pillar.color, mt: 0.6, flexShrink: 0, opacity: 0.5 }} />
                  <Typography variant="caption" sx={{ fontSize: "0.65rem", color: "text.disabled", lineHeight: 1.5 }}>{item}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      <Box style={seq(1000)} sx={{ textAlign: "center", p: 1.5, px: 3, borderRadius: 2, bgcolor: `${accent.purple}06`, border: `1px dashed ${accent.purple}30` }}>
        <Typography variant="caption" sx={{ color: accent.purple, fontWeight: 600, fontSize: "0.65rem", fontFamily: "monospace" }}>
          "The harness is the environment that constrains the agent. Safety comes from mechanical invariants, not model hope."
        </Typography>
      </Box>
    </Box>
  );
};

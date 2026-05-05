import React from 'react';
import { Box, Typography } from '@mui/material';
import { Psychology, TrendingUp, SyncAlt, Shield, Gavel, Warning } from '@mui/icons-material';
import { accent } from '../theme';
import { useSequentialStagger } from './stagger';

export const RLHFAnimation: React.FC = () => {
  const seq = useSequentialStagger();
  const steps = [
    { icon: <Psychology sx={{ fontSize: 34 }} />, label: 'Pre-trained', sub: 'Base LLM', color: accent.purple },
    { icon: <Gavel sx={{ fontSize: 34 }} />, label: 'Human', sub: 'Annotators', color: accent.cyan },
    { icon: <TrendingUp sx={{ fontSize: 34 }} />, label: 'Reward', sub: 'RM Training', color: accent.yellow },
    { icon: <SyncAlt sx={{ fontSize: 34 }} />, label: 'PPO', sub: 'Fine-tuning', color: accent.orange },
    { icon: <Shield sx={{ fontSize: 34 }} />, label: 'Aligned', sub: 'Safe Model', color: accent.green },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      {/* Main pipeline */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <Box style={seq(200)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.8 }}>
              <Box sx={{
                width: 100, height: 100, borderRadius: '50%',
                bgcolor: `${step.color}12`, border: `2.5px solid ${step.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: step.color, animation: `gentlePulse 2.8s ease-in-out infinite`,
                animationDelay: `${1.5 + idx * 0.4}s`,
                position: 'relative',
              }}>
                {step.icon}
              </Box>
              <Typography variant="caption" sx={{ color: step.color, fontWeight: 700, fontSize: '0.75rem' }}>
                {step.label}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.65rem', mt: -0.5 }}>
                {step.sub}
              </Typography>
            </Box>
            {idx < steps.length - 1 && (
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.3 }}>
                <svg width="40" height="20" viewBox="0 0 40 20">
                  <line x1="0" y1="10" x2="30" y2="10" stroke={accent.cyan} strokeWidth="2.5"
                    strokeDasharray="5 3" strokeLinecap="round">
                    <animate attributeName="stroke-dashoffset" from="16" to="0" dur="0.5s" repeatCount="indefinite" />
                  </line>
                  <polygon points="30,5 38,10 30,15" fill={accent.cyan} />
                </svg>
              </Box>
            )}
          </React.Fragment>
        ))}
      </Box>

      {/* Feedback loop visualization */}
      <Box style={seq(1000)} sx={{
        display: 'flex', alignItems: 'center', gap: 2,
        p: 1.5, px: 4, borderRadius: 2,
        bgcolor: `${accent.cyan}06`, border: `1px dashed ${accent.cyan}40`,
        mt: 1,
      }}>
        <Typography variant="caption" sx={{ color: accent.cyan, fontWeight: 700, fontSize: '0.68rem' }}>
          Feedback Loop
        </Typography>
        <svg width="120" height="50" viewBox="0 -20 120 60">
          <path d="M10,20 L60,20 Q70,20 70,10 Q70,0 80,0 L100,0"
            stroke={accent.cyan} strokeWidth="2" fill="none" strokeDasharray="4 3">
            <animate attributeName="stroke-dashoffset" from="14" to="0" dur="0.7s" repeatCount="indefinite" />
          </path>
          <polygon points="100,-5 108,0 100,5" fill={accent.cyan} />
          <path d="M80,0 L100,20 L80,20"
            stroke={accent.cyan} strokeWidth="2" fill="none" strokeDasharray="4 3">
            <animate attributeName="stroke-dashoffset" from="14" to="0" dur="0.7s" repeatCount="indefinite" />
          </path>
          <polygon points="100,15 108,20 100,25" fill={accent.cyan} />
        </svg>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.65rem' }}>
          Model outputs → Human ratings → Retrain reward → Repeat
        </Typography>
      </Box>

      {/* Concrete example */}
      <Box style={seq(1400)} sx={{
        mt: 3, p: 3, borderRadius: 2,
        bgcolor: 'rgba(0,0,0,0.02)', border: `1px solid rgba(0,0,0,0.06)`,
        width: '100%', maxWidth: 750,
      }}>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, fontSize: '0.68rem', display: 'block', mb: 2 }}>
          EXAMPLE: Teaching Model to Refuse Harmful Requests
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          {/* Step 1: Query */}
          <Box style={seq(100)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
            <Box sx={{
              px: 2.5, py: 1.5, borderRadius: 2,
              bgcolor: `${accent.red}10`, border: `2px solid ${accent.red}50`,
              animation: 'dangerPulse 2s ease-in-out infinite',
            }}>
              <Typography variant="caption" sx={{ fontFamily: 'monospace', fontSize: '0.7rem', color: accent.red, fontWeight: 600 }}>
                "How to hack websites"
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Warning sx={{ fontSize: 14, color: accent.red }} />
              <Typography variant="caption" sx={{ color: accent.red, fontSize: '0.65rem', fontWeight: 600 }}>
                Harmful Query
              </Typography>
            </Box>
          </Box>
          {/* Arrow */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <svg width="30" height="20" viewBox="0 0 30 20">
              <line x1="0" y1="10" x2="22" y2="10" stroke={accent.cyan} strokeWidth="2" strokeDasharray="4 2">
                <animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.5s" repeatCount="indefinite" />
              </line>
              <polygon points="22,5 28,10 22,15" fill={accent.cyan} />
            </svg>
          </Box>
          {/* Step 2: Two responses */}
          <Box style={seq(200)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <Box sx={{
                px: 2, py: 1.5, borderRadius: 2,
                bgcolor: `${accent.red}08`, border: `2px solid ${accent.red}40`,
                animation: 'fadeUp 0.5s ease forwards', animationDelay: '0.5s', opacity: 0,
              }}>
                <Typography variant="caption" sx={{ fontFamily: 'monospace', fontSize: '0.65rem', color: accent.red }}>
                  "Use SQLMAP tool..."
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
                  <Typography variant="caption" sx={{ fontSize: '0.65rem', color: accent.red, fontWeight: 700 }}>A</Typography>
                </Box>
              </Box>
              <Box sx={{
                px: 2, py: 1.5, borderRadius: 2,
                bgcolor: `${accent.green}08`, border: `2px solid ${accent.green}40`,
                animation: 'fadeUp 0.5s ease forwards', animationDelay: '0.7s', opacity: 0,
              }}>
                <Typography variant="caption" sx={{ fontFamily: 'monospace', fontSize: '0.65rem', color: accent.green }}>
                  "This is illegal..."
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
                  <Typography variant="caption" sx={{ fontSize: '0.65rem', color: accent.green, fontWeight: 700 }}>B</Typography>
                </Box>
              </Box>
            </Box>
            <Typography variant="caption" sx={{ color: accent.cyan, fontSize: '0.65rem', fontWeight: 600 }}>
              Two Responses
            </Typography>
          </Box>
          {/* Arrow */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <svg width="30" height="20" viewBox="0 0 30 20">
              <line x1="0" y1="10" x2="22" y2="10" stroke={accent.cyan} strokeWidth="2" strokeDasharray="4 2">
                <animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.5s" repeatCount="indefinite" />
              </line>
              <polygon points="22,5 28,10 22,15" fill={accent.cyan} />
            </svg>
          </Box>
          {/* Step 3: Human selecting B */}
          <Box style={seq(400)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
            <Box sx={{ position: 'relative' }}>
              <Box sx={{
                width: 50, height: 50, borderRadius: '50%',
                bgcolor: `${accent.yellow}15`, border: `2px solid ${accent.yellow}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Gavel sx={{ fontSize: 24, color: accent.yellow }} />
              </Box>
              <Box sx={{
                position: 'absolute', top: -8, right: -8,
                width: 22, height: 22, borderRadius: '50%',
                bgcolor: accent.green, display: 'flex', alignItems: 'center', justifyContent: 'center',
                animation: 'successPulse 1.5s ease-in-out infinite',
                boxShadow: `0 0 12px ${accent.green}60`,
              }}>
                <Typography sx={{ color: 'white', fontSize: '0.75rem', fontWeight: 900 }}>&#10003;</Typography>
              </Box>
            </Box>
            <Typography variant="caption" sx={{ color: accent.yellow, fontSize: '0.65rem', fontWeight: 600 }}>
              Prefers B
            </Typography>
          </Box>
          {/* Arrow */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <svg width="30" height="20" viewBox="0 0 30 20">
              <line x1="0" y1="10" x2="22" y2="10" stroke={accent.cyan} strokeWidth="2" strokeDasharray="4 2">
                <animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.5s" repeatCount="indefinite" />
              </line>
              <polygon points="22,5 28,10 22,15" fill={accent.cyan} />
            </svg>
          </Box>
          {/* Step 4: Reward scores */}
          <Box style={seq(600)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Box sx={{ px: 1.5, py: 1, borderRadius: 1.5, bgcolor: `${accent.green}10`, border: `1.5px solid ${accent.green}40` }}>
                <Typography variant="caption" sx={{ fontFamily: 'monospace', fontSize: '0.65rem', color: accent.green, fontWeight: 700 }}>B: +1.2</Typography>
              </Box>
              <Box sx={{ px: 1.5, py: 1, borderRadius: 1.5, bgcolor: `${accent.red}10`, border: `1.5px solid ${accent.red}40` }}>
                <Typography variant="caption" sx={{ fontFamily: 'monospace', fontSize: '0.65rem', color: accent.red, fontWeight: 700 }}>A: -0.8</Typography>
              </Box>
            </Box>
            <Typography variant="caption" sx={{ color: accent.orange, fontSize: '0.65rem', fontWeight: 600 }}>Reward Scores</Typography>
          </Box>
          {/* Arrow */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <svg width="30" height="20" viewBox="0 0 30 20">
              <line x1="0" y1="10" x2="22" y2="10" stroke={accent.cyan} strokeWidth="2" strokeDasharray="4 2">
                <animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.5s" repeatCount="indefinite" />
              </line>
              <polygon points="22,5 28,10 22,15" fill={accent.cyan} />
            </svg>
          </Box>
          {/* Step 5: Updated model */}
          <Box style={seq(800)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
            <Box sx={{
              width: 50, height: 50, borderRadius: '50%',
              bgcolor: `${accent.green}15`, border: `2px solid ${accent.green}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              animation: 'gentlePulse 2s ease-in-out infinite',
              boxShadow: `0 0 16px ${accent.green}30`,
            }}>
              <Shield sx={{ fontSize: 24, color: accent.green }} />
            </Box>
            <Typography variant="caption" sx={{ color: accent.green, fontSize: '0.65rem', fontWeight: 600, textAlign: 'center' }}>
              Aligned<br />Model &#10003;
            </Typography>
          </Box>
        </Box>
        {/* Summary text */}
        <Box style={seq(1000)} sx={{
          mt: 2, p: 1.5, borderRadius: 1.5,
          bgcolor: `${accent.purple}06`, border: `1px dashed ${accent.purple}30`,
          textAlign: 'center',
        }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.68rem' }}>
            Human feedback → Reward Model → PPO Fine-tuning → <strong style={{ color: accent.green }}>Safer Model</strong>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

import React, { useState, useCallback, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Chip,
} from '@mui/material';
import {
  Shield,
  Warning,
  TrendingUp,
  Psychology,
  Expand,
  Speed,
  SyncAlt,
} from '@mui/icons-material';

import { accent, keyframes } from './theme';
import { stagger } from './animations/stagger';
import { BackgroundLayer } from './components/BackgroundLayer';
import { GlowText } from './components/GlowText';
import { SectionTitle } from './components/SectionTitle';
import { SlideContent } from './components/SlideContent';
import { RLHFAnimation } from './animations/RLHFAnimation';
import { PromptInjectionAnimation } from './animations/PromptInjectionAnimation';
import { Base64Animation } from './animations/Base64Animation';
import { MultiTurnAnimation } from './animations/MultiTurnAnimation';
import { GCGAnimation } from './animations/GCGAnimation';
import { DefenseLayersAnimation } from './animations/DefenseLayersAnimation';
import { HarnessEngineeringAnimation } from './animations/HarnessEngineeringAnimation';
import { ClaudeCodeSafetyAnimation } from './animations/ClaudeCodeSafetyAnimation';
import { AttackDefenseAnimation } from './animations/AttackDefenseAnimation';
import { SuccessRateAnimation } from './animations/SuccessRateAnimation';
import { TradeoffAnimation } from './animations/TradeoffAnimation';

// ============ SLIDES ============
const TitleSlide: React.FC = () => (
  <SlideContent>
    <Box sx={{ textAlign: 'center' }}>
      <Box style={stagger(0, 0)}>
        <Typography variant="caption" sx={{
          fontFamily: '"JetBrains Mono", monospace',
          color: accent.cyan, letterSpacing: '0.25em', display: 'block', mb: 3,
        }}>
          TOPIC 22 — MODULE 5: AI SECURITY
        </Typography>
      </Box>

      <Box style={stagger(1, 200)} sx={{ mb: 2 }}>
        <Box sx={{
          display: 'inline-flex', width: 72, height: 72, borderRadius: '50%',
          bgcolor: `${accent.red}10`, border: `2px solid ${accent.red}30`,
          alignItems: 'center', justifyContent: 'center',
          animation: 'logoGlow 3s ease-in-out infinite',
          color: accent.red,
        }}>
          <Shield sx={{ fontSize: 38 }} />
        </Box>
      </Box>
      <Box style={stagger(2, 300)}>
        <Typography variant="h1" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
          <Box component="span" sx={{ color: accent.red }}>LLM JAILBREAKS</Box>
          <br />
          <Box component="span" sx={{ color: accent.cyan }}>& SAFETY FAILURES</Box>
        </Typography>
      </Box>

      <Box style={stagger(3, 400)}>
        <Typography variant="body1" sx={{ color: 'text.secondary', mt: 3, fontSize: '1.1rem' }}>
          Attack Techniques · Defense Mechanisms · Open Problems
        </Typography>
      </Box>

      <Box style={stagger(4, 600)} sx={{ mt: 5, display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Chip label="May 8, 2026" sx={{ bgcolor: `${accent.cyan}14`, color: accent.cyan, fontWeight: 600 }} />
        <Chip label="5 min Presentation" sx={{ bgcolor: `${accent.purple}14`, color: accent.purple, fontWeight: 600 }} />
      </Box>
    </Box>
  </SlideContent>
);

const IntroductionSlide: React.FC = () => (
  <SlideContent>
    <SectionTitle idx={0} color="red" title="CAPABILITY vs SAFETY"
      subtitle="The Fundamental Conflict in LLM Development" />
    <Grid container spacing={4} sx={{ mt: 2 }}>
      <Grid item xs={12} md={6}>
        <Box style={stagger(2, 200)} sx={{
          p: 4, borderRadius: 3, bgcolor: `${accent.cyan}06`, border: `1.5px solid ${accent.cyan}20`,
          height: '100%', position: 'relative', overflow: 'hidden',
        }}>
          <Box sx={{ position: 'absolute', top: 16, right: 16, color: accent.cyan, opacity: 0.3 }}>
            <TrendingUp sx={{ fontSize: 48 }} />
          </Box>
          <Typography variant="h3" sx={{ color: accent.cyan, mb: 2, fontWeight: 700 }}>Training Goal</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            Optimize for capability AND safety simultaneously through RLHF and Constitutional AI
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
            <Chip label="RLHF" size="small" sx={{ bgcolor: `${accent.cyan}10`, color: accent.cyan, fontSize: '0.65rem' }} />
            <Chip label="Constitutional AI" size="small" sx={{ bgcolor: `${accent.cyan}10`, color: accent.cyan, fontSize: '0.65rem' }} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box style={stagger(3, 350)} sx={{
          p: 4, borderRadius: 3, bgcolor: `${accent.red}06`, border: `1.5px solid ${accent.red}20`,
          height: '100%', position: 'relative', overflow: 'hidden',
        }}>
          <Box sx={{ position: 'absolute', top: 16, right: 16, color: accent.red, opacity: 0.15 }}>
            <Warning sx={{ fontSize: 48 }} />
          </Box>
          <Typography variant="h3" sx={{ color: accent.red, mb: 2, fontWeight: 700 }}>Reality</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            These objectives fundamentally conflict in high-capability domains, creating an asymmetric arms race
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
            <Chip label="Safety Gap" size="small" sx={{ bgcolor: `${accent.red}10`, color: accent.red, fontSize: '0.65rem' }} />
            <Chip label="Arms Race" size="small" sx={{ bgcolor: `${accent.red}10`, color: accent.red, fontSize: '0.65rem' }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  </SlideContent>
);

const BackgroundSlide: React.FC = () => (
  <SlideContent>
    <SectionTitle idx={0} color="cyan" title="HOW RLHF WORKS"
      subtitle="Reinforcement Learning from Human Feedback" />
    <Box sx={{ mt: 3 }}>
      <RLHFAnimation />
    </Box>
  </SlideContent>
);

const PromptInjectionSlide: React.FC = () => (
  <SlideContent>
    <SectionTitle idx={0} color="red" title="PROMPT INJECTION"
      subtitle="External malicious instructions override system prompts" />
    <Box sx={{ mt: 3 }}>
      <PromptInjectionAnimation />
    </Box>
  </SlideContent>
);

const Base64Slide: React.FC = () => (
  <SlideContent>
    <SectionTitle idx={0} color="orange" title="ENCODING BYPASS"
      subtitle="Base64 encoding evades safety training distribution" />
    <Box sx={{ mt: 3 }}>
      <Base64Animation />
    </Box>
  </SlideContent>
);

const MultiTurnSlide: React.FC = () => (
  <SlideContent>
    <SectionTitle idx={0} color="orange" title="MULTI-TURN ESCALATION"
      subtitle="Gradual context poisoning leads to jailbreak" />
    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
      <MultiTurnAnimation />
    </Box>
  </SlideContent>
);

const GCGSlide: React.FC = () => (
  <SlideContent>
    <SectionTitle idx={0} color="cyan" title="GCG ATTACK"
      subtitle="Gradient-based adversarial suffix optimization (Zou et al., 2023)" />
    <Box sx={{ mt: 3 }}>
      <GCGAnimation />
    </Box>
  </SlideContent>
);

const DefenseLayersSlide: React.FC = () => (
  <SlideContent>
    <SectionTitle idx={0} color="green" title="DEFENSE-IN-DEPTH"
      subtitle="Multiple complementary security layers" />
    <Box sx={{ mt: 3 }}>
      <DefenseLayersAnimation />
    </Box>
  </SlideContent>
);

const HarnessEngineeringSlide: React.FC = () => (
  <SlideContent>
    <SectionTitle idx={0} color="cyan" title="HARNESS ENGINEERING"
      subtitle="OpenAI's framework for building reliable agent environments" />
    <Box sx={{ mt: 3 }}>
      <HarnessEngineeringAnimation />
    </Box>
  </SlideContent>
);

const ClaudeCodeSafetySlide: React.FC = () => (
  <SlideContent>
    <Box sx={{ textAlign: 'center', mb: 5 }}>
      <Box style={stagger(0)}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
          <GlowText color="purple" size="h2" glow>IN PRACTICE:</GlowText>
          <Box sx={{
            display: 'inline-flex', alignItems: 'center', gap: 1,
            color: '#D97757',
            '& svg': { height: '1.2em', width: '1.2em', flexShrink: 0 },
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
              <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" fill="#D97757" fillRule="nonzero"/>
            </svg>
            <Typography variant="h2" component="span" sx={{ color: '#D97757', fontWeight: 800 }}>
              Claude Code
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box style={stagger(1)}>
        <Typography variant="caption" sx={{
          fontFamily: '"JetBrains Mono", monospace',
          color: 'text.secondary', mt: 0.5, display: 'block',
          letterSpacing: '0.05em',
        }}>
          Real-world safety pipeline — how Claude Code CLI secures user input
        </Typography>
      </Box>
    </Box>
    <Box sx={{ mt: 2 }}>
      <ClaudeCodeSafetyAnimation />
    </Box>
  </SlideContent>
);

const AttackDefenseSlide: React.FC = () => (
  <SlideContent>
    <SectionTitle idx={0} color="yellow" title="ASYMMETRIC ARMS RACE"
      subtitle="Attackers need one vulnerability — Defenders must cover all" />
    <Box sx={{ mt: 3 }}>
      <AttackDefenseAnimation />
    </Box>
  </SlideContent>
);

const SuccessRateSlide: React.FC = () => (
  <SlideContent>
    <SectionTitle idx={0} color="red" title="ATTACK SUCCESS RATES"
      subtitle="Real-world effectiveness of jailbreak techniques" />
    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
      <SuccessRateAnimation />
    </Box>
  </SlideContent>
);

const TradeoffSlide: React.FC = () => (
  <SlideContent>
    <SectionTitle idx={0} color="yellow" title="SAFETY-UTILITY TRADE-OFF"
      subtitle="Finding the balance between protection and usability" />
    <Box sx={{ mt: 3 }}>
      <TradeoffAnimation />
    </Box>
  </SlideContent>
);

const EvaluationSlide: React.FC = () => (
  <SlideContent>
    <SectionTitle idx={0} color="green" title="EVALUATION BENCHMARKS"
      subtitle="Standardized frameworks for measuring jailbreak success" />
    <Grid container spacing={3} sx={{ mt: 3 }}>
      {[
        { name: 'HarmBench', venue: 'ICML 2024', desc: '18 attack methods × 33 LLMs', stat: '510 behaviors', color: accent.red, icon: <Warning /> },
        { name: 'StrongREJECT', venue: '2024', desc: 'Empty jailbreak phenomenon analysis', stat: '6 categories', color: accent.cyan, icon: <Shield /> },
        { name: 'JailbreakBench', venue: 'NeurIPS 2024', desc: '200+ behavior categories', stat: 'JBB-Behaviors', color: accent.purple, icon: <Psychology /> },
      ].map((bench, idx) => (
        <Grid item xs={12} md={4} key={idx}>
          <Box style={stagger(2 + idx, 200)} sx={{
            p: 4, borderRadius: 3, bgcolor: `${bench.color}06`,
            border: `1.5px solid ${bench.color}20`, textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <Box sx={{
              position: 'absolute', top: -20, right: -20,
              color: bench.color, opacity: 0.06,
            }}>
              {React.cloneElement(bench.icon, { sx: { fontSize: 100 } })}
            </Box>
            <Box sx={{
              color: bench.color, mb: 1.5,
              animation: `gentlePulse 3s ease-in-out infinite`,
              animationDelay: `${1 + idx * 0.4}s`,
            }}>
              {React.cloneElement(bench.icon, { sx: { fontSize: 36 } })}
            </Box>
            <Typography variant="h3" sx={{ color: bench.color, fontWeight: 700, mb: 0.5 }}>{bench.name}</Typography>
            <Typography variant="caption" sx={{ color: bench.color, opacity: 0.7, fontSize: '0.65rem', display: 'block', mb: 1.5 }}>
              {bench.venue}
            </Typography>
            <Box sx={{
              py: 0.8, px: 2, borderRadius: 1.5, mb: 1.5,
              bgcolor: `${bench.color}0c`, border: `1px solid ${bench.color}20`,
              display: 'inline-block',
            }}>
              <Typography variant="caption" sx={{ color: bench.color, fontWeight: 700, fontSize: '0.7rem' }}>
                {bench.stat}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.78rem' }}>
              {bench.desc}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </SlideContent>
);

const OpenProblemsSlide: React.FC = () => (
  <SlideContent>
    <SectionTitle idx={0} color="orange" title="OPEN PROBLEMS"
      subtitle="Key challenges for future LLM safety research" />
    <Grid container spacing={3} sx={{ mt: 3 }}>
      {[
        { icon: <Expand />, title: 'Generalization Gap', desc: 'Unbounded attack surface vs finite safety training', color: accent.red },
        { icon: <Psychology />, title: 'Evaluation Subjectivity', desc: 'Context-dependent harm definitions complicate measurement', color: accent.cyan },
        { icon: <Speed />, title: 'Safety-Utility Trade-off', desc: 'Quantifying acceptable risk boundaries remains unsolved', color: accent.purple },
        { icon: <SyncAlt />, title: 'Adaptive Attackers', desc: 'Closed-loop adversarial evolution outpaces static defenses', color: accent.orange },
      ].map((prob, idx) => (
        <Grid item xs={12} md={6} key={idx}>
          <Box style={stagger(2 + idx, 200)} sx={{
            p: 3.5, borderRadius: 2, bgcolor: `${prob.color}05`,
            border: `1.5px solid ${prob.color}18`, display: 'flex', alignItems: 'flex-start', gap: 3,
            position: 'relative', overflow: 'hidden',
            transition: 'all 0.3s ease',
            '&:hover': { border: `1.5px solid ${prob.color}40`, bgcolor: `${prob.color}08` },
          }}>
            <Box sx={{
              position: 'absolute', right: -12, bottom: -12,
              color: prob.color, opacity: 0.05,
            }}>
              {React.cloneElement(prob.icon, { sx: { fontSize: 80 } })}
            </Box>
            <Box sx={{
              color: prob.color, flexShrink: 0,
              width: 52, height: 52, borderRadius: 2,
              bgcolor: `${prob.color}10`, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              animation: `gentlePulse 3s ease-in-out infinite`,
              animationDelay: `${idx * 0.4}s`,
            }}>
              {React.cloneElement(prob.icon, { sx: { fontSize: 26 } })}
            </Box>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                <Typography variant="h4" sx={{ color: prob.color, fontWeight: 700 }}>{prob.title}</Typography>
                <Box sx={{
                  width: 6, height: 6, borderRadius: '50%', bgcolor: prob.color,
                  animation: `softPulse 1.5s ease-in-out infinite`,
                  animationDelay: `${idx * 0.3}s`,
                }} />
              </Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.72rem', lineHeight: 1.6 }}>
                {prob.desc}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </SlideContent>
);

const ConclusionSlide: React.FC = () => (
  <SlideContent>
    <SectionTitle idx={0} color="cyan" title="KEY TAKEAWAYS" glow />
    <Box sx={{ maxWidth: 750, mx: 'auto', mt: 3 }}>
      {[
        { num: '01', text: 'Asymmetric arms race fundamentally favors attackers', color: accent.red, icon: <Warning /> },
        { num: '02', text: 'Safety metrics must evolve beyond simple Attack Success Rate', color: accent.cyan, icon: <TrendingUp /> },
        { num: '03', text: 'Fundamental limits of alignment require architectural solutions', color: accent.purple, icon: <Psychology /> },
      ].map((item, idx) => (
        <Box key={idx} style={stagger(2 + idx, 250)} sx={{
          display: 'flex', alignItems: 'center', gap: 3, p: 3.5, mb: 2.5,
          borderRadius: 2.5, bgcolor: `${item.color}04`, border: `1.5px solid ${item.color}15`,
          position: 'relative', overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': { bgcolor: `${item.color}08`, transform: 'translateX(4px)' },
        }}>
          <Box sx={{
            position: 'absolute', right: -8, top: -8,
            color: item.color, opacity: 0.04,
          }}>
            {React.cloneElement(item.icon, { sx: { fontSize: 64 } })}
          </Box>
          <Box sx={{
            width: 56, height: 56, borderRadius: '50%',
            bgcolor: `${item.color}10`, border: `2px solid ${item.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            animation: `gentlePulse 3s ease-in-out infinite`,
            animationDelay: `${1 + idx * 0.5}s`,
          }}>
            <Typography variant="h3" sx={{
              color: item.color, fontFamily: '"JetBrains Mono", monospace',
              fontWeight: 900, fontSize: '1.3rem',
            }}>
              {item.num}
            </Typography>
          </Box>
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.4 }}>
              {item.text}
            </Typography>
          </Box>
        </Box>
      ))}
      <Box style={stagger(5, 600)} sx={{
        mt: 4, p: 3.5, borderRadius: 2.5,
        bgcolor: `${accent.cyan}04`, border: `1px dashed ${accent.cyan}30`,
        textAlign: 'center', animation: 'softPulse 4s ease-in-out infinite',
      }}>
        <Typography variant="body1" sx={{
          fontStyle: 'italic', color: accent.cyan, fontWeight: 500, fontSize: '0.95rem',
        }}>
          "Robust LLM safety requires fundamental advances in alignment methodology
          and evaluation frameworks that capture deployment-realistic risks."
        </Typography>
      </Box>
    </Box>
  </SlideContent>
);

const CreditsSlide: React.FC = () => (
  <SlideContent>
    <Box sx={{ textAlign: 'center' }}>
      <Box style={stagger(0, 0)}>
        <Typography variant="h2" sx={{ color: accent.purple, fontWeight: 800, mb: 1 }}>
          Built With
        </Typography>
      </Box>
      <Box style={stagger(1, 300)} sx={{
        display: 'flex', justifyContent: 'center', gap: 8, mt: 6, flexWrap: 'wrap', alignItems: 'flex-end',
      }}>
        {/* React */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Box sx={{
            width: 80, height: 80,
            borderRadius: '50%',
            background: 'rgba(8, 126, 164, 0.08)',
            border: '2px solid rgba(8, 126, 164, 0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: `logoGlow 2.5s ease-in-out infinite`,
            animationDelay: '0s',
            color: '#087ea4',
          }}>
            <svg width="44" height="40" viewBox="0 0 72 68" style={{ display: 'block' }}>
              <circle cx="36" cy="34" r="5" fill="#087ea4" />
              <ellipse cx="36" cy="34" rx="12" ry="32" fill="none" stroke="#087ea4" strokeWidth="2.5" transform="rotate(0 36 34)" />
              <ellipse cx="36" cy="34" rx="12" ry="32" fill="none" stroke="#087ea4" strokeWidth="2.5" transform="rotate(60 36 34)" />
              <ellipse cx="36" cy="34" rx="12" ry="32" fill="none" stroke="#087ea4" strokeWidth="2.5" transform="rotate(-60 36 34)" />
            </svg>
          </Box>
          <Typography variant="body1" sx={{ color: '#087ea4', fontWeight: 700 }}>React 18</Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', mt: -1 }}>UI Framework</Typography>
        </Box>

        {/* Material UI */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Box sx={{
            width: 80, height: 80,
            borderRadius: '50%',
            background: 'rgba(31, 166, 202, 0.08)',
            border: '2px solid rgba(31, 166, 202, 0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: `logoGlow 2.5s ease-in-out infinite`,
            animationDelay: '0.35s',
            color: '#1FA6CA',
          }}>
            <svg width="44" height="44" viewBox="0 0 128 128" style={{ display: 'block' }}>
              <path fill="#1FA6CA" d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6z"/>
              <path fill="#1C7FB6" d="M48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"/>
              <path fill="#1FA6CA" d="M48 77.8v18.4l32 18.4V96.2L48 77.8z"/>
              <path fill="#1C7FB6" d="M80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"/>
            </svg>
          </Box>
          <Typography variant="body1" sx={{ color: '#1FA6CA', fontWeight: 700 }}>Material UI</Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', mt: -1 }}>Component Library</Typography>
        </Box>

        {/* TypeScript */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Box sx={{
            width: 80, height: 80,
            borderRadius: '50%',
            background: 'rgba(49, 120, 198, 0.08)',
            border: '2px solid rgba(49, 120, 198, 0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: `logoGlow 2.5s ease-in-out infinite`,
            animationDelay: '0.7s',
            color: '#3178C6',
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" style={{ display: 'block' }}>
              <path fill="#3178C6" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75q.918 0 1.627.111a6.4 6.4 0 0 1 1.306.34v2.458a4 4 0 0 0-.643-.361 5 5 0 0 0-.717-.26 5.5 5.5 0 0 0-1.426-.2q-.45 0-.819.086a2.1 2.1 0 0 0-.623.242q-.254.156-.393.374a.9.9 0 0 0-.14.49q0 .294.156.529.156.234.443.444c.287.21.423.276.696.41q.41.203.926.416.705.296 1.266.628.561.333.963.753.402.418.614.957.213.538.214 1.253 0 .986-.373 1.656a3.03 3.03 0 01-1.012 1.085 4.4 4.4 0 01-1.487.596q-.85.18-1.79.18a10 10 0 01-1.84-.164 5.5 5.5 0 01-1.512-.493v-2.63a5.03 5.03 0 00 3.237 1.2q.5 0 .872-.09.373-.09.623-.25.249-.162.373-.38a1.02 1.02 0 00-.074-1.089 2.1 2.1 0 00-.537-.5 5.6 5.6 0 00-.807-.444 28 28 0 00-1.007-.436q-1.377-.575-2.053-1.405t-.676-2.005q0-.92.369-1.582.368-.662 1.004-1.089a4.5 4.5 0 01 1.47-.629 7.5 7.5 0 01 1.77-.201m-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
            </svg>
          </Box>
          <Typography variant="body1" sx={{ color: '#3178C6', fontWeight: 700 }}>TypeScript</Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', mt: -1 }}>Type Safety</Typography>
        </Box>

        {/* DeepSeek */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Box sx={{
            width: 80, height: 80,
            borderRadius: '50%',
            background: 'rgba(77, 107, 254, 0.08)',
            border: '2px solid rgba(77, 107, 254, 0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: `logoGlow 2.5s ease-in-out infinite`,
            animationDelay: '1.05s',
            color: '#4D6BFE',
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" style={{ display: 'block' }}>
              <path d="M23.748 4.482c-.254-.124-.364.113-.512.234-.051.039-.094.09-.137.136-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.156-.708-.311-.955-.65-.172-.241-.219-.51-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.093.172.187.129.323-.082.28-.18.552-.266.833-.055.179-.137.217-.329.14a5.526 5.526 0 01-1.736-1.18c-.857-.828-1.631-1.742-2.597-2.458a11.365 11.365 0 00-.689-.471c-.985-.957.13-1.743.388-1.836.27-.098.093-.432-.779-.428-.872.004-1.67.295-2.687.684a3.055 3.055 0 01-.465.137 9.597 9.597 0 00-2.883-.102c-1.885.21-3.39 1.102-4.497 2.623C.082 8.606-.231 10.684.152 12.85c.403 2.284 1.569 4.175 3.36 5.653 1.858 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.133-.284 4.994-1.86.47.234.962.327 1.78.397.63.059 1.236-.03 1.705-.128.735-.156.684-.837.419-.961-2.155-1.004-1.682-.595-2.113-.926 1.096-1.296 2.746-2.642 3.392-7.003.05-.347.007-.565 0-.845-.004-.17.035-.237.23-.256a4.173 4.173 0 001.545-.475c1.396-.763 1.96-2.015 2.093-3.517.02-.23-.004-.467-.247-.588zM11.581 18c-2.089-1.642-3.102-2.183-3.52-2.16-.392.024-.321.471-.235.763.09.288.207.486.371.739.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.167-1.361-.802-2.5-1.86-3.301-3.307-.774-1.393-1.224-2.887-1.298-4.482-.02-.386.093-.522.477-.592a4.696 4.696 0 011.529-.039c2.132.312 3.946 1.265 5.468 2.774.868.86 1.525 1.887 2.202 2.891.72 1.066 1.494 2.082 2.48 2.914.348.292.625.514.891.677-.802.09-2.14.11-3.054-.614zm1-6.44a.306.306 0 01.415-.287.302.302 0 01.2.288.306.306 0 01-.31.307.303.303 0 01-.304-.308zm3.11 1.596c-.2.081-.399.151-.59.16a1.245 1.245 0 01-.798-.254c-.274-.23-.47-.358-.552-.758a1.73 1.73 0 01.016-.588c.07-.327-.008-.537-.239-.727-.187-.156-.426-.199-.688-.199a.559.559 0 01-.254-.078c-.11-.054-.2-.19-.114-.358.028-.054.16-.186.192-.21.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.391.451.462.576.685.914.176.265.336.537.445.848.067.195-.019.354"/>
            </svg>
          </Box>
          <Typography variant="body1" sx={{ color: '#4D6BFE', fontWeight: 700 }}>
            DeepSeek V4 Pro
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', mt: -1 }}>AI Generation</Typography>
        </Box>
      </Box>
    </Box>
  </SlideContent>
);

// ============ SLIDE LIST ============
const slides: React.FC[] = [
  TitleSlide,
  IntroductionSlide,
  PromptInjectionSlide,
  Base64Slide,
  MultiTurnSlide,
  GCGSlide,
  BackgroundSlide,
  DefenseLayersSlide,
  HarnessEngineeringSlide,
  ClaudeCodeSafetySlide,
  AttackDefenseSlide,
  SuccessRateSlide,
  TradeoffSlide,
  EvaluationSlide,
  OpenProblemsSlide,
  ConclusionSlide,
  CreditsSlide,
];

// ============ APP ============
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideKey = currentSlide;

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length - 1) setCurrentSlide(prev => prev + 1);
  }, [currentSlide]);

  const goToPrev = useCallback(() => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  }, [currentSlide]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  const CurrentSlide = slides[currentSlide];

  return (
    <>
      <style>{keyframes}</style>
      <BackgroundLayer />
      <Box sx={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        bgcolor: 'background.default',
        position: 'relative',
      }}>
        <Box key={slideKey} sx={{ width: '100%', height: '100%' }}>
          <CurrentSlide />
        </Box>

        {/* Navigation dots */}
        <Box sx={{
          position: 'fixed', right: 20, top: '50%', transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column', gap: 1, zIndex: 100,
        }}>
          {slides.map((_, idx) => (
            <Box
              key={idx}
              onClick={() => goToSlide(idx)}
              sx={{
                width: idx === currentSlide ? 10 : 7,
                height: idx === currentSlide ? 10 : 7,
                borderRadius: '50%',
                bgcolor: idx === currentSlide ? accent.cyan : 'rgba(0,0,0,0.18)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: idx === currentSlide ? `0 0 10px ${accent.cyan}60` : 'none',
              }}
            />
          ))}
        </Box>

        {/* Arrow navigation */}
        <Box sx={{ position: 'fixed', bottom: 24, right: 24, display: 'flex', gap: 1, zIndex: 100 }}>
          <Box
            onClick={goToPrev}
            sx={{
              width: 44, height: 44, borderRadius: 2,
              bgcolor: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
              opacity: currentSlide === 0 ? 0.3 : 0.7,
              transition: 'all 0.2s ease',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.06)' },
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Box>
          <Box
            onClick={goToNext}
            sx={{
              width: 44, height: 44, borderRadius: 2,
              bgcolor: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: currentSlide === slides.length - 1 ? 'not-allowed' : 'pointer',
              opacity: currentSlide === slides.length - 1 ? 0.3 : 0.7,
              transition: 'all 0.2s ease',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.06)' },
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Box>
        </Box>

        {/* Slide counter */}
        <Box sx={{
          position: 'fixed', bottom: 24, left: 24,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.75rem', color: 'rgba(0,0,0,0.35)', zIndex: 100,
        }}>
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </Box>
      </Box>
    </>
  );
}

export default App;

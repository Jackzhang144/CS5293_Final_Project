import React, { useState, useCallback } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Fade,
  Stack,
  Grow,
  Zoom,
} from '@mui/material';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Security,
  Warning,
  Shield,
  Assessment,
  Lightbulb,
  TrendingUp,
  People,
  Code,
  Email,
  SyncAlt,
  AutoAwesome,
  Gavel,
  Psychology,
  CheckCircle,
  Cancel,
  Speed,
  WarningAmber,
  FlashOn,
  Lock,
  Expand,
} from '@mui/icons-material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#dc2626' },
    secondary: { main: '#0891b2' },
    background: { default: '#f8f9fc', paper: '#ffffff' },
    text: { primary: '#1a1a2e', secondary: '#64748b' },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: { fontWeight: 800, fontSize: '3.5rem' },
    h2: { fontWeight: 700, fontSize: '2.25rem' },
    h3: { fontWeight: 600, fontSize: '1.5rem' },
    h4: { fontWeight: 600, fontSize: '1.125rem' },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease',
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.14)',
          },
        },
      },
    },
  },
});

const accent = {
  red: '#dc2626',
  cyan: '#0891b2',
  purple: '#7c3aed',
  green: '#059669',
  yellow: '#d97706',
};

// Styled animated card
const AnimatedCard = styled(Card)(({ theme }) => ({
  opacity: 0,
  animation: 'fadeInUp 0.6s ease forwards',
  '@keyframes fadeInUp': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
}));

// Slide Components
const SlideLabel = ({ children }) => (
  <Typography
    variant="caption"
    sx={{
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      letterSpacing: '0.3em',
      color: accent.cyan,
      mb: 2,
      display: 'block',
    }}
  >
    {children}
  </Typography>
);

const GradientText = ({ children, color = 'red' }) => {
  const gradientMap = {
    red: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)',
    cyan: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
    purple: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
  };
  return (
    <Box
      component="span"
      sx={{
        background: gradientMap[color],
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </Box>
  );
};

const InsightBox = ({ label, children, large = false }) => (
  <Grow in timeout={800}>
    <Card
      sx={{
        background: `linear-gradient(135deg, rgba(8, 145, 178, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%)`,
        border: '1px solid rgba(8, 145, 178, 0.2)',
        mt: 3,
        p: 1.5,
      }}
    >
      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
        <Typography
          variant={large ? 'h4' : 'caption'}
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: large ? '1rem' : '0.6875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: accent.cyan,
            mb: 1.5,
            display: 'block',
          }}
        >
          {label}
        </Typography>
        <Typography variant={large ? 'body1' : 'body2'} color="text.primary" sx={{ lineHeight: 1.7 }}>
          {children}
        </Typography>
      </CardContent>
    </Card>
  </Grow>
);

const IconCard = ({ icon, title, description, color, delay = 0 }) => (
  <Grow in timeout={400 + delay}>
    <Card sx={{ height: '100%', minHeight: 200 }}>
      <CardContent>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: `${color}15`,
            mb: 2,
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.1)' },
          }}
        >
          {icon}
        </Box>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  </Grow>
);

// Slide 1: Title
const TitleSlide = () => (
  <Box
    sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Animated background elements */}
    <Box
      sx={{
        position: 'absolute',
        width: 500,
        height: 500,
        borderRadius: '50%',
        filter: 'blur(150px)',
        opacity: 0.12,
        bgcolor: accent.red,
        top: -150,
        right: -150,
        animation: 'pulse 4s ease-in-out infinite',
        '@keyframes pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.12 },
          '50%': { transform: 'scale(1.1)', opacity: 0.18 },
        },
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        width: 500,
        height: 500,
        borderRadius: '50%',
        filter: 'blur(150px)',
        opacity: 0.12,
        bgcolor: accent.cyan,
        bottom: -150,
        left: -150,
        animation: 'pulse 4s ease-in-out infinite 1s',
      }}
    />
    <Zoom in timeout={600}>
      <Box>
        <SlideLabel>Topic 22 - Module 5: AI Security and Emerging Topics</SlideLabel>
      </Box>
    </Zoom>
    <Typography variant="h1" sx={{ mb: 2, animation: 'fadeInUp 0.8s ease 0.2s forwards', opacity: 0 }}>
      <GradientText color="red">LLM Jailbreaks</GradientText>
      <br />
      <GradientText color="cyan">&amp; Safety-Boundary Failures</GradientText>
    </Typography>
    <Fade in timeout={1000}>
      <Typography variant="h3" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
        A Comprehensive Survey on Attack Techniques, Defense Mechanisms,
        <br />
        and Open Research Challenges
      </Typography>
    </Fade>
    <Fade in timeout={1200}>
      <Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
          Team Topic 22
        </Typography>
        <Typography variant="body2" color="text.secondary">
          CS5293 Topics on Information Security - May 8, 2026
        </Typography>
      </Box>
    </Fade>
    <style>
      {`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}
    </style>
  </Box>
);

// Slide 2: Outline
const OutlineSlide = () => {
  const items = [
    { num: '01', text: 'Introduction & Motivation - Why LLM safety matters', icon: <Lightbulb sx={{ color: accent.cyan, fontSize: 20 }} /> },
    { num: '02', text: 'Background - How safety alignment works and why it fails', icon: <Psychology sx={{ color: accent.cyan, fontSize: 20 }} /> },
    { num: '03', text: 'Attack Taxonomy - From manual prompts to automated attacks', icon: <Code sx={{ color: accent.cyan, fontSize: 20 }} /> },
    { num: '04', text: 'Defense Methods - Input filtering, output filtering, alignment', icon: <Shield sx={{ color: accent.cyan, fontSize: 20 }} /> },
    { num: '05', text: 'Evaluation & Open Problems - Benchmarks, metrics, and future directions', icon: <Assessment sx={{ color: accent.cyan, fontSize: 20 }} /> },
  ];

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <SlideLabel>Overview</SlideLabel>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Presentation Structure
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 700 }}>
        {items.map((item, idx) => (
          <AnimatedCard
            key={idx}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              p: 2.5,
              animationDelay: `${idx * 0.1}s`,
            }}
          >
            <Box
              sx={{
                width: 52,
                height: 52,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'rgba(8, 145, 178, 0.1)',
                color: accent.cyan,
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.875rem',
                fontWeight: 700,
                flexShrink: 0,
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              {item.icon}
            </Box>
            <Typography variant="h4">{item.text}</Typography>
          </AnimatedCard>
        ))}
      </Box>
    </Box>
  );
};

// Slide 3: Introduction
const IntroductionSlide = () => (
  <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', px: 8 }}>
    <SlideLabel>Introduction</SlideLabel>
    <Typography variant="h2" sx={{ mb: 3 }}>
      The Core Problem: Capability vs. Safety
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 900, textAlign: 'center' }}>
      Large language models are trained to be both <strong>capable</strong> and <strong>safe</strong> -
      but these two objectives can fundamentally conflict. When a model possesses strong capabilities
      in a harmful domain, safety behaviors can be overridden by cleverly crafted inputs.
    </Typography>
    <Grid container spacing={3} sx={{ maxWidth: 1000 }}>
      <Grid item xs={6}>
        <IconCard
          icon={<TrendingUp sx={{ color: accent.red, fontSize: 28 }} />}
          title="Competing Objectives"
          description="Modern LLMs are optimized for both capability and safety, but RLHF cannot guarantee safety when strong capabilities activate in harmful domains. The reward model itself can be gamed."
          color={accent.red}
          delay={0}
        />
      </Grid>
      <Grid item xs={6}>
        <IconCard
          icon={<Warning sx={{ color: accent.cyan, fontSize: 28 }} />}
          title="Mismatched Generalization"
          description="Safety training covers only a finite subset of all harmful requests. Semantically equivalent queries outside the training distribution evade detection."
          color={accent.cyan}
          delay={100}
        />
      </Grid>
      <Grid item xs={6}>
        <IconCard
          icon={<Security sx={{ color: accent.purple, fontSize: 28 }} />}
          title="High-Stakes Deployment"
          description="LLMs are deployed in healthcare, legal consultation, and autonomous systems. A jailbreak can enable harmful medical advice, data exfiltration, and system manipulation."
          color={accent.purple}
          delay={200}
        />
      </Grid>
      <Grid item xs={6}>
        <IconCard
          icon={<People sx={{ color: accent.green, fontSize: 28 }} />}
          title="Democratization of Attacks"
          description="Open-weight models eliminate API-level guardrails. Automated tools (GCG, PAIR, AutoDAN) enable sophisticated attacks with modest budgets."
          color={accent.green}
          delay={300}
        />
      </Grid>
    </Grid>
    <InsightBox label="Key Research Question">
      How can we build LLMs that are both highly capable and robustly safe? Current alignment
      techniques are effective but fundamentally limited.
    </InsightBox>
  </Box>
);

// Slide 4: Background
const BackgroundSlide = () => (
  <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', px: 8 }}>
    <SlideLabel>Background</SlideLabel>
    <Typography variant="h2" sx={{ mb: 4 }}>
      LLM Safety Alignment: Methods and Failure Modes
    </Typography>
    <Grid container spacing={4} sx={{ maxWidth: 1100 }}>
      <Grid item xs={6}>
        <Typography variant="caption" sx={{ color: accent.red, fontWeight: 700, mb: 2, display: 'block', letterSpacing: '0.1em' }}>
          ALIGNMENT METHODS
        </Typography>
        <Stack direction="column" spacing={2}>
          <AnimatedCard sx={{ borderLeft: `4px solid ${accent.cyan}` }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                <Box sx={{ width: 36, height: 36, borderRadius: 1, bgcolor: 'rgba(8, 145, 178, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Psychology sx={{ color: accent.cyan, fontSize: 20 }} />
                </Box>
                <Typography variant="h4">RLHF</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                Reinforcement Learning from Human Feedback - Fine-tunes a pretrained model using a reward model trained on human preference data. The policy model is optimized to maximize predicted reward. Effective for improving helpfulness, but the reward model can be gamed.
              </Typography>
            </CardContent>
          </AnimatedCard>
          <AnimatedCard sx={{ borderLeft: `4px solid ${accent.purple}`, animationDelay: '0.1s' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                <Box sx={{ width: 36, height: 36, borderRadius: 1, bgcolor: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Gavel sx={{ color: accent.purple, fontSize: 20 }} />
                </Box>
                <Typography variant="h4">Constitutional AI (CAI)</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                Uses natural language principles to guide model behavior through self-critique and revision. Reduces reliance on extensive human harm annotations while achieving competitive harmlessness.
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="caption" sx={{ color: accent.red, fontWeight: 700, mb: 2, display: 'block', letterSpacing: '0.1em' }}>
          ROOT CAUSES OF FAILURE (Wei et al., 2023)
        </Typography>
        <Stack direction="column" spacing={2}>
          <AnimatedCard sx={{ borderLeft: `4px solid ${accent.red}`, animationDelay: '0.2s' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                <Box sx={{ width: 36, height: 36, borderRadius: 1, bgcolor: 'rgba(220, 38, 38, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Cancel sx={{ color: accent.red, fontSize: 20 }} />
                </Box>
                <Typography variant="h4">Competing Objectives</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                Models are trained to be both capable and safe, but capability and safety objectives can conflict. When a prompt activates a domain where the model has strong capabilities, safety behaviors may be overridden.
              </Typography>
            </CardContent>
          </AnimatedCard>
          <AnimatedCard sx={{ borderLeft: `4px solid ${accent.cyan}`, animationDelay: '0.3s' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                <Box sx={{ width: 36, height: 36, borderRadius: 1, bgcolor: 'rgba(8, 145, 178, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <WarningAmber sx={{ color: accent.cyan, fontSize: 20 }} />
                </Box>
                <Typography variant="h4">Mismatched Generalization</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                Safety training covers only a subset of all possible harmful requests. A Base64-encoded harmful request achieves near-100% success against GPT-4, revealing that safety training coverage fundamentally lags behind capability coverage.
              </Typography>
            </CardContent>
          </AnimatedCard>
        </Stack>
      </Grid>
    </Grid>
  </Box>
);

// Slide 5: Threat Model
const ThreatModelSlide = () => (
  <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', px: 8 }}>
    <SlideLabel>Background</SlideLabel>
    <Typography variant="h2" sx={{ mb: 3 }}>
      Threat Model: Who Is the Adversary?
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 900 }}>
      We consider an adversary who interacts with an LLM through its standard input interface.
      The objective is to cause the model to produce outputs that violate safety guidelines.
    </Typography>
    <Grid container spacing={3} sx={{ maxWidth: 900, mb: 3 }}>
      <Grid item xs={4}>
        <IconCard
          icon={<Target sx={{ color: accent.red, fontSize: 28 }} />}
          title="Attack Objectives"
          description="Generation of harmful/illegal content; disclosure of private information; bypassing usage policies; manipulation of downstream systems."
          color={accent.red}
        />
      </Grid>
      <Grid item xs={4}>
        <IconCard
          icon={<Lock sx={{ color: accent.cyan, fontSize: 28 }} />}
          title="Black-Box Setting"
          description="No direct access to model weights. Reflects attacking commercial APIs (ChatGPT, Claude, Gemini). Partial knowledge of alignment methodology."
          color={accent.cyan}
        />
      </Grid>
      <Grid item xs={4}>
        <IconCard
          icon={<FlashOn sx={{ color: accent.purple, fontSize: 28 }} />}
          title="Attack Surface"
          description="Any motivated individual with internet access. Attack automation lowers the bar. Open-weight models enable offline attacks without API costs."
          color={accent.purple}
        />
      </Grid>
    </Grid>
    <InsightBox label="Adversary Capability Spectrum" large>
      From <strong>casual users</strong> sharing jailbreak prompts on forums to{' '}
      <strong>sophisticated attackers</strong> using gradient-based optimization or auxiliary
      LLM agents. The barrier to entry is continuously decreasing.
    </InsightBox>
  </Box>
);

// Need Target icon - use a workaround with Box
const Target = ({ sx }: { sx?: any }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={sx}>
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

// Slide 6: Attack Taxonomy
const AttackTaxonomySlide = () => {
  const attacks = [
    {
      type: 'Prompt-Level',
      title: 'Direct Prompts & Role Adoption',
      icon: <People sx={{ fontSize: 18, color: accent.red }} />,
      desc: 'Authority impersonation ("As a security researcher..."), hypothetical framing ("In a fictional scenario..."), and persona attacks like DAN. Shen et al. (CCS 2024) analyzed 6,387 real-world prompts.',
    },
    {
      type: 'Encoding',
      title: 'Base64, Translation, Creative Formatting',
      icon: <Code sx={{ fontSize: 18, color: accent.red }} />,
      desc: 'Wei et al. (2023) demonstrated near-100% success against GPT-4 with Base64-encoded requests. Encoding creates a distribution shift that bypasses safety generalization entirely.',
    },
    {
      type: 'Indirect Injection',
      title: 'Prompt Injection via External Data',
      icon: <Email sx={{ fontSize: 18, color: accent.red }} />,
      desc: 'Greshake et al. (AISec 2023): attackers inject malicious instructions into webpages, documents, or emails. In RAG systems, hidden instructions override the original system prompt.',
    },
    {
      type: 'Multi-Turn',
      title: 'Context Window Exploitation',
      icon: <SyncAlt sx={{ fontSize: 18, color: accent.red }} />,
      desc: 'Multi-turn attacks gradually escalate across exchanges. Anthropic (2024): filling context with harmful demonstrations induces replication. Payload distributed across entire context.',
    },
    {
      type: 'Automated',
      title: 'GCG, PAIR, AutoDAN',
      icon: <AutoAwesome sx={{ fontSize: 18, color: accent.red }} />,
      desc: 'Zou et al. (2023): GCG ~88% success on Vicuna-7B, transfers at 47% to GPT-4. Chao et al. (2023): PAIR ~80%+ success with ~20 queries. Liu et al. (ICLR 2024): AutoDAN generates stealthy low-perplexity prompts.',
    },
  ];

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', px: 8 }}>
      <SlideLabel>Attack Taxonomy</SlideLabel>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Jailbreaking Attack Vectors
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 950, width: '100%' }}>
        {attacks.map((attack, idx) => (
          <AnimatedCard key={idx} sx={{ display: 'flex', alignItems: 'stretch', p: 0, overflow: 'hidden' }}>
            <Box
              sx={{
                bgcolor: 'rgba(220, 38, 38, 0.08)',
                px: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 160,
              }}
            >
              <Chip
                icon={attack.icon}
                label={attack.type}
                sx={{
                  bgcolor: 'transparent',
                  color: accent.red,
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  height: 28,
                  maxWidth: 'none',
                  '& .MuiChip-icon': { color: accent.red },
                }}
              />
            </Box>
            <Box sx={{ p: 2, flex: 1 }}>
              <Typography variant="h4" gutterBottom>{attack.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>{attack.desc}</Typography>
            </Box>
          </AnimatedCard>
        ))}
      </Box>
    </Box>
  );
};

// Slide 7: Defense Methods
const DefenseSlide = () => (
  <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', px: 8 }}>
    <SlideLabel>Defense Methods</SlideLabel>
    <Typography variant="h2" sx={{ mb: 3 }}>
      Three Lines of Defense
    </Typography>
    <Grid container spacing={3} sx={{ maxWidth: 1100 }}>
      <Grid item xs={4}>
        <AnimatedCard sx={{ height: '100%', borderTop: `4px solid ${accent.red}` }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
              <Shield sx={{ color: accent.red, fontSize: 24 }} />
              <Typography variant="caption" sx={{ color: accent.red, textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 }}>
                Proactive
              </Typography>
            </Box>
            <Typography variant="h3" gutterBottom sx={{ mt: 1 }}>Input Filtering</Typography>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
              Examines prompts before they reach the LLM. Methods include keyword matching, semantic classifiers, perplexity filtering, and paraphrase detection.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
              <strong>SmoothLLM</strong> (Robey et al., 2023): applies random character-level perturbations. Adversarial suffixes are fragile - small changes disrupt the pattern while leaving benign prompts unaffected. Reduces GCG success from {'>'}80% to {'<'}1%.
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>
      <Grid item xs={4}>
        <AnimatedCard sx={{ height: '100%', borderTop: `4px solid ${accent.cyan}`, animationDelay: '0.1s' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
              <CheckCircle sx={{ color: accent.cyan, fontSize: 24 }} />
              <Typography variant="caption" sx={{ color: accent.cyan, textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 }}>
                Reactive
              </Typography>
            </Box>
            <Typography variant="h3" gutterBottom sx={{ mt: 1 }}>Output Filtering</Typography>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
              Applies safety checks to responses before returning to users. A necessary safety net. Trade-offs: inference latency and false positives.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
              <strong>Llama Guard</strong> (Inan et al., 2023): LLM-as-judge with configurable taxonomy. <strong>RigorLLM</strong> (Yuan et al., 2024): ensemble framework combining energy-based models, k-NN, and minimax optimization.
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>
      <Grid item xs={4}>
        <AnimatedCard sx={{ height: '100%', borderTop: `4px solid ${accent.purple}`, animationDelay: '0.2s' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
              <Psychology sx={{ color: accent.purple, fontSize: 24 }} />
              <Typography variant="caption" sx={{ color: accent.purple, textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 }}>
                Fundamental
              </Typography>
            </Box>
            <Typography variant="h3" gutterBottom sx={{ mt: 1 }}>Alignment-Based</Typography>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
              Addresses root cause - makes models inherently more resistant through improved training.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
              <strong>Constitutional AI</strong> (Bai et al., 2022): natural language principles guide self-critique. <strong>Constitutional Classifiers</strong> (Anthropic, 2025): blocks 95%+ of universal jailbreaks with only 0.38% false rejection increase.
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>
    </Grid>
    <InsightBox label="Defense-in-Depth" large>
      No single defense is sufficient. Jain et al. (2023) show that single-layer defenses can be circumvented by adaptive attacks. A defense-in-depth approach combining multiple complementary techniques is essential.
    </InsightBox>
  </Box>
);

// Slide 8: Defense Comparison
const DefenseComparisonSlide = () => {
  const rows = [
    { method: 'Input Filtering', cat: 'Proactive', eff: 'Moderate', overhead: 'Low', gen: 'Low', limit: 'Easily evaded by adaptive attacks; false positives' },
    { method: 'Perplexity Filtering', cat: 'Proactive', eff: 'Moderate', overhead: 'Low', gen: 'Low', limit: 'AutoDAN generates low-perplexity prompts; benign creative text may trigger' },
    { method: 'SmoothLLM', cat: 'Proactive', eff: 'High', overhead: 'Medium', gen: 'Medium', limit: 'Fragility may not generalize to all attack types' },
    { method: 'Output Filtering', cat: 'Reactive', eff: 'Moderate', overhead: 'Medium', gen: 'Low', limit: 'Latency; false positives erode user trust' },
    { method: 'Constitutional AI', cat: 'Alignment', eff: 'High', overhead: 'High', gen: 'Medium', limit: 'Fundamental generalization gap' },
    { method: 'Constitutional Classifiers', cat: 'Alignment', eff: 'Very High', overhead: 'High', gen: 'High', limit: 'Computationally expensive; capability trade-offs' },
  ];

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', px: 8 }}>
      <SlideLabel>Defense Methods</SlideLabel>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Defense Methods: A Comparative Analysis
      </Typography>
      <Zoom in timeout={400}>
        <TableContainer component={Paper} sx={{ maxWidth: 950, mb: 3, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: '#f8f9fc' }}>
                <TableCell sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Method</TableCell>
                <TableCell sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Category</TableCell>
                <TableCell sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Effectiveness</TableCell>
                <TableCell sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Overhead</TableCell>
                <TableCell sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Generalization</TableCell>
                <TableCell sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Key Limitation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow key={idx} sx={{ '&:hover': { bgcolor: 'rgba(8, 145, 178, 0.04)' } }}>
                  <TableCell sx={{ fontWeight: 600 }}>{row.method}</TableCell>
                  <TableCell>{row.cat}</TableCell>
                  <TableCell>{row.eff}</TableCell>
                  <TableCell>{row.overhead}</TableCell>
                  <TableCell>{row.gen}</TableCell>
                  <TableCell sx={{ fontSize: '0.8125rem' }}>{row.limit}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Zoom>
      <InsightBox label="Critical Insight - StrongREJECT (Souly et al., 2024)" large>
        <strong>Empty Jailbreak Phenomenon:</strong> Attacks that successfully evade automated
        detectors often produce outputs that are simultaneously nonsensical and non-harmful.
        ASR measures evasion, not actual harm. Output quality assessment must complement ASR.
      </InsightBox>
    </Box>
  );
};

// Slide 9: Evaluation
const EvaluationSlide = () => (
  <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', px: 8 }}>
    <SlideLabel>Evaluation</SlideLabel>
    <Typography variant="h2" sx={{ mb: 3 }}>
      Benchmarks: Measuring Progress in LLM Safety
    </Typography>
    <Grid container spacing={3} sx={{ maxWidth: 1000 }}>
      <Grid item xs={6}>
        <IconCard
          icon={<Assessment sx={{ color: accent.red, fontSize: 28 }} />}
          title="HarmBench (Mazeika et al., ICML 2024)"
          description="Standardized framework: 18 red-teaming methods across 33 target LLMs. Unified pipeline: attack to generate to classify. Adversarial training improves robustness, though with capability trade-offs."
          color={accent.red}
          delay={0}
        />
      </Grid>
      <Grid item xs={6}>
        <IconCard
          icon={<Cancel sx={{ color: accent.cyan, fontSize: 28 }} />}
          title="StrongREJECT (Souly et al., 2024)"
          description="Reveals that benchmarks systematically overestimate attack effectiveness. Through human evaluation, identifies the empty jailbreak phenomenon: attacks produce rambling nonsense rather than useful harmful info."
          color={accent.cyan}
          delay={100}
        />
      </Grid>
      <Grid item xs={6}>
        <IconCard
          icon={<TrendingUp sx={{ color: accent.purple, fontSize: 28 }} />}
          title="JailbreakBench (Chao et al., NeurIPS 2024)"
          description="Open-source benchmark with 200 harmful behavior categories and public leaderboard. Each category contains multiple prompts. Enables reproducible research."
          color={accent.purple}
          delay={200}
        />
      </Grid>
      <Grid item xs={6}>
        <IconCard
          icon={<WarningAmber sx={{ color: accent.green, fontSize: 28 }} />}
          title="Benchmark Limitations"
          description="No universal attack succeeds across all models. Different models exhibit different vulnerability profiles. The co-evolutionary arms race means benchmark results are ephemeral."
          color={accent.green}
          delay={300}
        />
      </Grid>
    </Grid>
  </Box>
);

// Slide 10: Open Problems
const OpenProblemsSlide = () => (
  <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', px: 8 }}>
    <SlideLabel>Discussion</SlideLabel>
    <Typography variant="h2" sx={{ mb: 3 }}>
      Open Problems & Future Directions
    </Typography>
    <Grid container spacing={3} sx={{ maxWidth: 1000 }}>
      <Grid item xs={6}>
        <AnimatedCard sx={{ height: '100%', borderLeft: `4px solid ${accent.red}` }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
              <Expand sx={{ color: accent.red, fontSize: 24 }} />
              <Typography variant="h4" sx={{ color: accent.red }}>Generalization Gap</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              The space of possible harmful requests is effectively unbounded, while safety training data is necessarily finite. Novel formulations are always ahead of known patterns - this gap is fundamental.
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>
      <Grid item xs={6}>
        <AnimatedCard sx={{ height: '100%', borderLeft: `4px solid ${accent.cyan}`, animationDelay: '0.1s' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
              <Psychology sx={{ color: accent.cyan, fontSize: 24 }} />
              <Typography variant="h4" sx={{ color: accent.cyan }}>Evaluation Subjectivity</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              What constitutes "harmful" varies by context and culture. A medical chatbot may need different boundaries than a creative writing assistant. Human evaluation is expensive and inconsistently applied.
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>
      <Grid item xs={6}>
        <AnimatedCard sx={{ height: '100%', borderLeft: `4px solid ${accent.purple}`, animationDelay: '0.2s' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
              <Speed sx={{ color: accent.purple, fontSize: 24 }} />
              <Typography variant="h4" sx={{ color: accent.purple }}>Safety-Utility Trade-off</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Over-restrictive safety degrades utility; over-permissive models pose security risks. Quantifying and optimizing this trade-off principledly remains open. The boundary of "safe and helpful" shifts as models become more capable.
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>
      <Grid item xs={6}>
        <AnimatedCard sx={{ height: '100%', borderLeft: `4px solid ${accent.green}`, animationDelay: '0.3s' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
              <SyncAlt sx={{ color: accent.green, fontSize: 24 }} />
              <Typography variant="h4" sx={{ color: accent.green }}>Adaptive Attackers</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Sophisticated attackers adapt in closed loops: GCG to SmoothLLM to adapted GCG. Static defenses will inevitably be circumvented. Sustained, adaptive investment in defense research is necessary.
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>
    </Grid>
    <InsightBox label="Emerging Attack Surfaces" large>
      Vision-language models introduce harmful content encoded in images. Agentic systems
      that execute code or interact with external tools can cause real-world harm. These
      require dedicated, cross-modal defense mechanisms.
    </InsightBox>
  </Box>
);

// Slide 11: Conclusion
const ConclusionSlide = () => (
  <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', px: 8 }}>
    <SlideLabel>Conclusion</SlideLabel>
    <Typography variant="h2" sx={{ mb: 3 }}>
      Key Takeaways
    </Typography>
    <Grid container spacing={3} sx={{ maxWidth: 900, mb: 4 }}>
      <Grid item xs={4}>
        <AnimatedCard sx={{ height: '100%' }}>
          <CardContent>
            <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: 'rgba(220, 38, 38, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <TrendingUp sx={{ color: accent.red, fontSize: 24 }} />
            </Box>
            <Typography variant="h4" gutterBottom>An Asymmetric Arms Race</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Attackers need only find one vulnerability; defenders must cover all paths. The bar for attackers is continuously lowered by automation tools and open-weight models.
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>
      <Grid item xs={4}>
        <AnimatedCard sx={{ height: '100%', animationDelay: '0.1s' }}>
          <CardContent>
            <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: 'rgba(8, 145, 178, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <Assessment sx={{ color: accent.cyan, fontSize: 24 }} />
            </Box>
            <Typography variant="h4" gutterBottom>Metrics Must Evolve</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              ASR alone is insufficient - it measures evasion, not harm. The empty jailbreak phenomenon reveals that attacks evading detection often produce useless output.
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>
      <Grid item xs={4}>
        <AnimatedCard sx={{ height: '100%', animationDelay: '0.2s' }}>
          <CardContent>
            <Box sx={{ width: 48, height: 48, borderRadius: 2, bgcolor: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <Psychology sx={{ color: accent.purple, fontSize: 24 }} />
            </Box>
            <Typography variant="h4" gutterBottom>Fundamental Limits of Alignment</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              The safety-utility trade-off reflects deep properties of how LLMs learn. Safety properties emerge from statistical patterns, not principled guarantees.
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Grid>
    </Grid>
    <Zoom in timeout={600}>
      <Box sx={{ maxWidth: 800, textAlign: 'center' }}>
        <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.primary', lineHeight: 1.8 }}>
          "Achieving robust LLM safety will require fundamental advances in alignment methodology,
          more sophisticated evaluation frameworks that capture deployment-realistic risks, and
          theoretical understanding of the limits of safety guarantees. As LLMs are integrated
          into increasingly consequential applications, the urgency of this research agenda
          cannot be overstated."
        </Typography>
      </Box>
    </Zoom>
  </Box>
);

// Slide 12: Q&A
const QASlide = () => (
  <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <Zoom in timeout={400}>
      <Box>
        <Typography variant="h1" sx={{ mb: 2 }}>
          <GradientText color="red">Q&amp;A</GradientText>
        </Typography>
      </Box>
    </Zoom>
    <Fade in timeout={800}>
      <Typography variant="h3" color="text.secondary" sx={{ mb: 6 }}>
        Thank you for your attention - questions and discussion welcome
      </Typography>
    </Fade>
    <Box sx={{ display: 'flex', gap: 8 }}>
      <Zoom in timeout={1000}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption" sx={{ fontFamily: '"JetBrains Mono", monospace', color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.15em', mb: 1, display: 'block' }}>
            5 min
          </Typography>
          <Box sx={{ width: 80, height: 80, borderRadius: '50%', bgcolor: 'rgba(8, 145, 178, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 1, transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.1)' } }}>
            <Typography sx={{ fontSize: '2rem', color: accent.cyan }}>P</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">Presentation</Typography>
        </Box>
      </Zoom>
      <Zoom in timeout={1200}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption" sx={{ fontFamily: '"JetBrains Mono", monospace', color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.15em', mb: 1, display: 'block' }}>
            2 min
          </Typography>
          <Box sx={{ width: 80, height: 80, borderRadius: '50%', bgcolor: 'rgba(220, 38, 38, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 1, transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.1)' } }}>
            <Typography sx={{ fontSize: '2rem', color: accent.red }}>Q</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">Q&amp;A</Typography>
        </Box>
      </Zoom>
    </Box>
  </Box>
);

const slides = [
  TitleSlide,
  OutlineSlide,
  IntroductionSlide,
  BackgroundSlide,
  ThreatModelSlide,
  AttackTaxonomySlide,
  DefenseSlide,
  DefenseComparisonSlide,
  EvaluationSlide,
  OpenProblemsSlide,
  ConclusionSlide,
  QASlide,
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const goToPrev = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
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

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden', bgcolor: 'background.default', position: 'relative' }}>
        <Fade in key={currentSlide} timeout={300}>
          <Box sx={{ width: '100%', height: '100%' }}>
            <CurrentSlideComponent />
          </Box>
        </Fade>

        {/* Navigation */}
        <Box sx={{ position: 'fixed', right: 32, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 1.5, zIndex: 100 }}>
          {slides.map((_, idx) => (
            <Box
              key={idx}
              onClick={() => goToSlide(idx)}
              sx={{
                width: idx === currentSlide ? 10 : 8,
                height: idx === currentSlide ? 10 : 8,
                borderRadius: '50%',
                bgcolor: idx === currentSlide ? accent.cyan : 'text.secondary',
                opacity: idx === currentSlide ? 1 : 0.3,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: idx === currentSlide ? `0 0 16px ${accent.cyan}` : 'none',
              }}
            />
          ))}
        </Box>

        {/* Arrow Navigation */}
        <Box sx={{ position: 'fixed', bottom: 32, right: 32, display: 'flex', gap: 1, zIndex: 100 }}>
          <IconButton
            onClick={goToPrev}
            disabled={currentSlide === 0}
            sx={{
              bgcolor: 'background.paper',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              '&:hover': { bgcolor: 'background.paper', transform: 'scale(1.1)' },
              '&:disabled': { opacity: 0.3 },
            }}
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            onClick={goToNext}
            disabled={currentSlide === slides.length - 1}
            sx={{
              bgcolor: 'background.paper',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              '&:hover': { bgcolor: 'background.paper', transform: 'scale(1.1)' },
              '&:disabled': { opacity: 0.3 },
            }}
          >
            <KeyboardArrowRight />
          </IconButton>
        </Box>

        {/* Slide Number */}
        <Box sx={{ position: 'fixed', bottom: 32, left: 32, fontFamily: '"JetBrains Mono", monospace', fontSize: '0.875rem', color: 'text.secondary', zIndex: 100 }}>
          {currentSlide + 1} / {slides.length}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

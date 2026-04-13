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
} from '@mui/material';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#dc2626' },
    secondary: { main: '#0891b2' },
    background: { default: '#ffffff', paper: '#ffffff' },
    text: { primary: '#1a1a2e', secondary: '#64748b' },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: { fontWeight: 800, fontSize: '3.5rem' },
    h2: { fontWeight: 700, fontSize: '2.25rem' },
    h3: { fontWeight: 600, fontSize: '1.5rem' },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
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

const InsightBox = ({ label, children }) => (
  <Card
    sx={{
      background: `linear-gradient(135deg, rgba(8, 145, 178, 0.05) 0%, rgba(124, 58, 237, 0.05) 100%)`,
      border: '1px solid rgba(8, 145, 178, 0.15)',
      mt: 3,
    }}
  >
    <CardContent>
      <Typography
        variant="caption"
        sx={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.6875rem',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: accent.cyan,
          mb: 1,
          display: 'block',
        }}
      >
        {label}
      </Typography>
      <Typography variant="body2" color="text.primary">
        {children}
      </Typography>
    </CardContent>
  </Card>
);

const IconCard = ({ icon, title, description, color }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: `${color}15`,
          mb: 2,
        }}
      >
        <Box sx={{ color, fontSize: '1.25rem', fontWeight: 'bold' }}>
          {icon}
        </Box>
      </Box>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
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
    <Box
      sx={{
        position: 'absolute',
        width: 400,
        height: 400,
        borderRadius: '50%',
        filter: 'blur(120px)',
        opacity: 0.15,
        bgcolor: accent.red,
        top: -100,
        right: -100,
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        width: 400,
        height: 400,
        borderRadius: '50%',
        filter: 'blur(120px)',
        opacity: 0.15,
        bgcolor: accent.cyan,
        bottom: -100,
        left: -100,
      }}
    />
    <SlideLabel>Topic 22 - Module 5: AI Security and Emerging Topics</SlideLabel>
    <Typography variant="h1" sx={{ mb: 2 }}>
      <GradientText color="red">LLM Jailbreaks</GradientText>
      <br />
      <GradientText color="cyan">&amp; Safety-Boundary Failures</GradientText>
    </Typography>
    <Typography variant="h3" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
      A Comprehensive Survey on Attack Techniques, Defense Mechanisms,
      <br />
      and Open Research Challenges
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
      Team Topic 22
    </Typography>
    <Typography variant="body2" color="text.secondary">
      CS5293 Topics on Information Security - May 8, 2026
    </Typography>
  </Box>
);

// Slide 2: Outline
const OutlineSlide = () => {
  const items = [
    { num: '01', text: 'Introduction & Motivation - Why LLM safety matters' },
    { num: '02', text: 'Background - How safety alignment works and why it fails' },
    { num: '03', text: 'Attack Taxonomy - From manual prompts to automated attacks' },
    { num: '04', text: 'Defense Methods - Input filtering, output filtering, alignment' },
    { num: '05', text: 'Evaluation & Open Problems - Benchmarks, metrics, and future directions' },
  ];

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <SlideLabel>Overview</SlideLabel>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Presentation Structure
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 700 }}>
        {items.map((item, idx) => (
          <Card
            key={idx}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              p: 2,
              animation: `fadeIn 0.5s ease ${idx * 0.1}s forwards`,
              opacity: 0,
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'rgba(8, 145, 178, 0.1)',
                color: accent.cyan,
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.875rem',
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              {item.num}
            </Box>
            <Typography variant="h4">{item.text}</Typography>
          </Card>
        ))}
      </Box>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
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
          icon="/"
 title="Competing Objectives"
          description="Modern LLMs are optimized for both capability and safety, but RLHF cannot guarantee safety when strong capabilities activate in harmful domains. The reward model itself can be gamed."
          color={accent.red}
        />
      </Grid>
      <Grid item xs={6}>
        <IconCard
          icon="T"
          title="Mismatched Generalization"
          description="Safety training covers only a finite subset of all harmful requests. Semantically equivalent queries outside the training distribution evade detection."
          color={accent.cyan}
        />
      </Grid>
      <Grid item xs={6}>
        <IconCard
          icon="W"
          title="High-Stakes Deployment"
          description="LLMs are deployed in healthcare, legal consultation, and autonomous systems. A jailbreak can enable harmful medical advice, data exfiltration, and system manipulation."
          color={accent.purple}
        />
      </Grid>
      <Grid item xs={6}>
        <IconCard
          icon="A"
          title="Democratization of Attacks"
          description="Open-weight models eliminate API-level guardrails. Automated tools (GCG, PAIR, AutoDAN) enable sophisticated attacks with modest budgets."
          color={accent.green}
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
        <Typography variant="caption" sx={{ color: accent.red, fontWeight: 600, mb: 2, display: 'block' }}>
          ALIGNMENT METHODS
        </Typography>
        <Stack direction="column" spacing={2}>
          <Card sx={{ borderLeft: `3px solid ${accent.cyan}` }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>RLHF - Reinforcement Learning from Human Feedback</Typography>
              <Typography variant="body2" color="text.secondary">
                Fine-tunes a pretrained model using a reward model trained on human preference data.
                The policy model is optimized to maximize predicted reward. Effective for improving
                helpfulness, but the reward model can be gamed.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ borderLeft: `3px solid ${accent.purple}` }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>Constitutional AI (CAI)</Typography>
              <Typography variant="body2" color="text.secondary">
                Uses natural language principles to guide model behavior through self-critique and
                revision. Reduces reliance on extensive human harm annotations while achieving
                competitive harmlessness.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="caption" sx={{ color: accent.red, fontWeight: 600, mb: 2, display: 'block' }}>
          ROOT CAUSES OF FAILURE (Wei et al., 2023)
        </Typography>
        <Stack direction="column" spacing={2}>
          <Card sx={{ borderLeft: `3px solid ${accent.red}` }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>Competing Objectives</Typography>
              <Typography variant="body2" color="text.secondary">
                Models are trained to be both capable and safe, but capability and safety objectives
                can conflict. When a prompt activates a domain where the model has strong capabilities,
                safety behaviors may be overridden.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ borderLeft: `3px solid ${accent.cyan}` }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>Mismatched Generalization</Typography>
              <Typography variant="body2" color="text.secondary">
                Safety training covers only a subset of all possible harmful requests. A Base64-encoded
                harmful request achieves near-100% success against GPT-4, revealing that safety
                training coverage fundamentally lags behind capability coverage.
              </Typography>
            </CardContent>
          </Card>
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
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: 'rgba(220, 38, 38, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, color: accent.red, fontWeight: 'bold' }}>T</Box>
            <Typography variant="h4" gutterBottom>Attack Objectives</Typography>
            <Typography variant="body2" color="text.secondary">
              Generation of harmful/illegal content; disclosure of private information;
              bypassing usage policies; manipulation of downstream systems.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: 'rgba(8, 145, 178, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, color: accent.cyan, fontWeight: 'bold' }}>B</Box>
            <Typography variant="h4" gutterBottom>Black-Box Setting</Typography>
            <Typography variant="body2" color="text.secondary">
              No direct access to model weights. Reflects attacking commercial APIs
              (ChatGPT, Claude, Gemini). Partial knowledge of alignment methodology.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, color: accent.purple, fontWeight: 'bold' }}>S</Box>
            <Typography variant="h4" gutterBottom>Attack Surface</Typography>
            <Typography variant="body2" color="text.secondary">
              Any motivated individual with internet access. Attack automation lowers the bar.
              Open-weight models enable offline attacks without API costs.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <InsightBox label="Adversary Capability Spectrum">
      From <strong>casual users</strong> sharing jailbreak prompts on forums to{' '}
      <strong>sophisticated attackers</strong> using gradient-based optimization or auxiliary
      LLM agents. The barrier to entry is continuously decreasing.
    </InsightBox>
  </Box>
);

// Slide 6: Attack Taxonomy
const AttackTaxonomySlide = () => {
  const attacks = [
    {
      type: 'Prompt-Level',
      title: 'Direct Prompts & Role Adoption',
      desc: 'Authority impersonation ("As a security researcher..."), hypothetical framing ("In a fictional scenario..."), and persona attacks like DAN. Shen et al. (CCS 2024) analyzed 6,387 real-world prompts.',
    },
    {
      type: 'Encoding',
      title: 'Base64, Translation, Creative Formatting',
      desc: 'Wei et al. (2023) demonstrated near-100% success against GPT-4 with Base64-encoded requests. Encoding creates a distribution shift that bypasses safety generalization entirely.',
    },
    {
      type: 'Indirect Injection',
      title: 'Prompt Injection via External Data',
      desc: 'Greshake et al. (AISec 2023): attackers inject malicious instructions into webpages, documents, or emails. In RAG systems, hidden instructions override the original system prompt.',
    },
    {
      type: 'Multi-Turn',
      title: 'Context Window Exploitation',
      desc: 'Multi-turn attacks gradually escalate across exchanges. Anthropic (2024): filling context with harmful demonstrations induces replication. Payload distributed across entire context.',
    },
    {
      type: 'Automated',
      title: 'GCG, PAIR, AutoDAN',
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
          <Card key={idx} sx={{ display: 'flex', gap: 2, p: 2 }}>
            <Chip
              label={attack.type}
              size="small"
              sx={{
                bgcolor: 'rgba(220, 38, 38, 0.08)',
                color: accent.red,
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.6875rem',
                height: 24,
                alignSelf: 'flex-start',
                mt: 0.5,
              }}
            />
            <Box>
              <Typography variant="h4" gutterBottom>{attack.title}</Typography>
              <Typography variant="body2" color="text.secondary">{attack.desc}</Typography>
            </Box>
          </Card>
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
        <Card sx={{ height: '100%', borderTop: `3px solid ${accent.red}` }}>
          <CardContent>
            <Typography variant="caption" sx={{ color: accent.red, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              Proactive
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ mt: 1 }}>Input Filtering</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Examines prompts before they reach the LLM. Methods include keyword matching,
              semantic classifiers, perplexity filtering, and paraphrase detection.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <strong>SmoothLLM</strong> (Robey et al., 2023): applies random character-level
              perturbations. Adversarial suffixes are fragile - small changes disrupt the pattern
              while leaving benign prompts unaffected. Reduces GCG success from {'>'}80% to {'<'}1%.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ height: '100%', borderTop: `3px solid ${accent.cyan}` }}>
          <CardContent>
            <Typography variant="caption" sx={{ color: accent.cyan, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              Reactive
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ mt: 1 }}>Output Filtering</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Applies safety checks to responses before returning to users. A necessary safety
              net. Trade-offs: inference latency and false positives.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <strong>Llama Guard</strong> (Inan et al., 2023): LLM-as-judge with configurable
              taxonomy. <strong>RigorLLM</strong> (Yuan et al., 2024): ensemble framework
              combining energy-based models, k-NN, and minimax optimization.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ height: '100%', borderTop: `3px solid ${accent.purple}` }}>
          <CardContent>
            <Typography variant="caption" sx={{ color: accent.purple, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              Fundamental
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ mt: 1 }}>Alignment-Based</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Addresses root cause - makes models inherently more resistant through improved
              training.
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <strong>Constitutional AI</strong> (Bai et al., 2022): natural language principles
              guide self-critique. <strong>Constitutional Classifiers</strong> (Anthropic, 2025):
              blocks 95%+ of universal jailbreaks with only 0.38% false rejection increase.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <InsightBox label="Defense-in-Depth">
      No single defense is sufficient. Jain et al. (2023) show that single-layer defenses can
      be circumvented by adaptive attacks. A defense-in-depth approach combining multiple
      complementary techniques is essential.
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
      <TableContainer component={Paper} sx={{ maxWidth: 950, mb: 3, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: '#f8f9fc' }}>
              <TableCell sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Method</TableCell>
              <TableCell sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Category</TableCell>
              <TableCell sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Effectiveness</TableCell>
              <TableCell sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Overhead</TableCell>
              <TableCell sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Generalization</TableCell>
              <TableCell sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Key Limitation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={idx}>
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
      <InsightBox label="Critical Insight - StrongREJECT (Souly et al., 2024)">
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
          icon="H"
          title="HarmBench (Mazeika et al., ICML 2024)"
          description="Standardized framework: 18 red-teaming methods across 33 target LLMs. Unified pipeline: attack to generate to classify. Adversarial training improves robustness, though with capability trade-offs."
          color={accent.red}
        />
      </Grid>
      <Grid item xs={6}>
        <IconCard
          icon="S"
          title="StrongREJECT (Souly et al., 2024)"
          description="Reveals that benchmarks systematically overestimate attack effectiveness. Through human evaluation, identifies the empty jailbreak phenomenon: attacks produce rambling nonsense rather than useful harmful info."
          color={accent.cyan}
        />
      </Grid>
      <Grid item xs={6}>
        <IconCard
          icon="J"
          title="JailbreakBench (Chao et al., NeurIPS 2024)"
          description="Open-source benchmark with 200 harmful behavior categories and public leaderboard. Each category contains multiple prompts. Enables reproducible research."
          color={accent.purple}
        />
      </Grid>
      <Grid item xs={6}>
        <IconCard
          icon="!"
          title="Benchmark Limitations"
          description="No universal attack succeeds across all models. Different models exhibit different vulnerability profiles. The co-evolutionary arms race means benchmark results are ephemeral."
          color={accent.green}
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
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ color: accent.red }}>Generalization Gap</Typography>
            <Typography variant="body2" color="text.secondary">
              The space of possible harmful requests is effectively unbounded, while safety
              training data is necessarily finite. Novel formulations are always ahead of known
              patterns - this gap is fundamental.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ color: accent.cyan }}>Evaluation Subjectivity</Typography>
            <Typography variant="body2" color="text.secondary">
              What constitutes "harmful" varies by context and culture. A medical chatbot
              may need different boundaries than a creative writing assistant. Human
              evaluation is expensive and inconsistently applied.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ color: accent.purple }}>Safety-Utility Trade-off</Typography>
            <Typography variant="body2" color="text.secondary">
              Over-restrictive safety degrades utility; over-permissive models pose security
              risks. Quantifying and optimizing this trade-off principledly remains open.
              The boundary of "safe and helpful" shifts as models become more capable.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ color: accent.green }}>Adaptive Attackers</Typography>
            <Typography variant="body2" color="text.secondary">
              Sophisticated attackers adapt in closed loops: GCG to SmoothLLM to adapted GCG.
              Static defenses will inevitably be circumvented. Sustained, adaptive investment
              in defense research is necessary.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <InsightBox label="Emerging Attack Surfaces">
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
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: 'rgba(220, 38, 38, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, color: accent.red, fontWeight: 'bold' }}>A</Box>
            <Typography variant="h4" gutterBottom>An Asymmetric Arms Race</Typography>
            <Typography variant="body2" color="text.secondary">
              Attackers need only find one vulnerability; defenders must cover all paths.
              The bar for attackers is continuously lowered by automation tools and
              open-weight models.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: 'rgba(8, 145, 178, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, color: accent.cyan, fontWeight: 'bold' }}>M</Box>
            <Typography variant="h4" gutterBottom>Metrics Must Evolve</Typography>
            <Typography variant="body2" color="text.secondary">
              ASR alone is insufficient - it measures evasion, not harm. The empty jailbreak
              phenomenon reveals that attacks evading detection often produce useless output.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2, color: accent.purple, fontWeight: 'bold' }}>F</Box>
            <Typography variant="h4" gutterBottom>Fundamental Limits of Alignment</Typography>
            <Typography variant="body2" color="text.secondary">
              The safety-utility trade-off reflects deep properties of how LLMs learn.
              Safety properties emerge from statistical patterns, not principled guarantees.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <Box sx={{ maxWidth: 800, textAlign: 'center' }}>
      <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'text.primary' }}>
        "Achieving robust LLM safety will require fundamental advances in alignment methodology,
        more sophisticated evaluation frameworks that capture deployment-realistic risks, and
        theoretical understanding of the limits of safety guarantees. As LLMs are integrated
        into increasingly consequential applications, the urgency of this research agenda
        cannot be overstated."
      </Typography>
    </Box>
  </Box>
);

// Slide 12: Q&A
const QASlide = () => (
  <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <Typography variant="h1" sx={{ mb: 2 }}>
      <GradientText color="red">Q&amp;A</GradientText>
    </Typography>
    <Typography variant="h3" color="text.secondary" sx={{ mb: 6 }}>
      Thank you for your attention - questions and discussion welcome
    </Typography>
    <Box sx={{ display: 'flex', gap: 8 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="caption" sx={{ fontFamily: '"JetBrains Mono", monospace', color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.15em', mb: 1, display: 'block' }}>
          5 min
        </Typography>
        <Box sx={{ width: 64, height: 64, borderRadius: '50%', bgcolor: 'rgba(8, 145, 178, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 1 }}>
          <Typography sx={{ fontSize: '1.5rem', color: accent.cyan }}>P</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">Presentation</Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="caption" sx={{ fontFamily: '"JetBrains Mono", monospace', color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.15em', mb: 1, display: 'block' }}>
          2 min
        </Typography>
        <Box sx={{ width: 64, height: 64, borderRadius: '50%', bgcolor: 'rgba(220, 38, 38, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 1 }}>
          <Typography sx={{ fontSize: '1.5rem', color: accent.red }}>Q</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">Q&amp;A</Typography>
      </Box>
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
        <Fade in={true} key={currentSlide}>
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
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: idx === currentSlide ? accent.cyan : 'text.secondary',
                opacity: idx === currentSlide ? 1 : 0.3,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: idx === currentSlide ? `0 0 12px ${accent.cyan}` : 'none',
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
              '&:hover': { bgcolor: 'background.paper' },
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
              '&:hover': { bgcolor: 'background.paper' },
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

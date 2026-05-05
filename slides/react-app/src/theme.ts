// ============ ACCENT COLORS ============
export const accent = {
  red: '#dc2626',
  cyan: '#0891b2',
  purple: '#7c3aed',
  green: '#16a34a',
  yellow: '#ca8a04',
  orange: '#ea580c',
} as const;

export type AccentColor = keyof typeof accent;

// ============ CSS KEYFRAMES ============
export const keyframes = `
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(36px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.85); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-60px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(60px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes gentlePulse {
    0%, 100% { transform: scale(1);   box-shadow: 0 0 0 0 currentColor; }
    50%      { transform: scale(1.04); box-shadow: 0 0 24px currentColor; }
  }
  @keyframes logoGlow {
    0%, 100% { filter: brightness(1) drop-shadow(0 0 6px currentColor); }
    50%      { filter: brightness(1.15) drop-shadow(0 0 18px currentColor); }
  }
  @keyframes glow {
    0%, 100% { text-shadow: 0 0 8px  currentColor; }
    50%      { text-shadow: 0 0 24px currentColor, 0 0 40px currentColor; }
  }
  @keyframes softPulse {
    0%, 100% { opacity: 0.7; transform: scale(1); }
    50%      { opacity: 1;   transform: scale(1.03); }
  }
  @keyframes arrowFlow {
    0%   { opacity: 0.3; transform: scaleX(0.6); }
    50%  { opacity: 1;   transform: scaleX(1); }
    100% { opacity: 0.3; transform: scaleX(0.6); }
  }
  @keyframes successPulse {
    0%   { box-shadow: 0 0 0 0 rgba(22,163,74,0.5); }
    70%  { box-shadow: 0 0 0 18px rgba(22,163,74,0); }
    100% { box-shadow: 0 0 0 0 rgba(22,163,74,0); }
  }
  @keyframes failShake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-4px); }
    40%, 80% { transform: translateX(4px); }
  }
  @keyframes orbFloat {
    0%   { transform: translate(0, 0) scale(1); }
    50%  { transform: translate(20px, -20px) scale(1.08); }
    100% { transform: translate(0, 0) scale(1); }
  }
  @keyframes particleFloat {
    0%   { transform: translateY(100vh) rotate(0deg); opacity: 0; }
    10%  { opacity: 0.12; }
    90%  { opacity: 0.12; }
    100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
  }
  @keyframes meterFill {
    from { width: 0%; }
    to   { width: var(--w); }
  }
  @keyframes meterGrow {
    from { height: 0%; }
    to   { height: var(--h); }
  }
  @keyframes drawPath {
    from { stroke-dashoffset: 200; }
    to   { stroke-dashoffset: 0; }
  }
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes dangerPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(220,38,38,0.5); }
    50%      { box-shadow: 0 0 0 16px rgba(220,38,38,0); }
  }
  @keyframes injectPierce {
    0%   { transform: translateY(-20px); opacity: 0; }
    40%  { transform: translateY(0); opacity: 1; }
    60%  { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(20px); opacity: 0; }
  }
  @keyframes textScramble {
    0%, 100% { opacity: 1; }
    50%      { opacity: 0.3; transform: skewX(-5deg); }
  }
  @keyframes barrierFlash {
    0%   { border-color: rgba(34,197,94,0.3); }
    50%  { border-color: rgba(220,38,38,0.8); }
    100% { border-color: rgba(34,197,94,0.3); }
  }
  @keyframes escalatorFill {
    from { width: 0%; }
    to   { width: var(--lvl); }
  }
  @keyframes dropIn {
    0%   { opacity: 0; transform: translateY(-60px); }
    60%  { opacity: 1; transform: translateY(4px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes borderGlow {
    0%, 100% { border-color: var(--c); box-shadow: 0 0 8px var(--c); }
    50%      { border-color: transparent; box-shadow: 0 0 24px var(--c); }
  }
  @keyframes circuitFlow {
    from { stroke-dashoffset: 120; }
    to   { stroke-dashoffset: 0; }
  }
  @keyframes typeChar {
    from { width: 0; }
    to   { width: 100%; }
  }
`;

import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { accent } from '../theme';

// ============ BACKGROUND LAYER ============
export const BackgroundLayer: React.FC = React.memo(() => {
  const particles = useMemo(() =>
    [...Array(22)].map(() => ({
      left: `${Math.random() * 100}%`,
      size: 3 + Math.random() * 8,
      dur: 15 + Math.random() * 25,
      delay: Math.random() * 12,
      color: [accent.cyan, accent.purple, accent.red, accent.orange][Math.floor(Math.random() * 4)],
    })), []
  );

  return (
    <Box sx={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      <Box sx={{
        position: 'absolute', inset: 0,
        backgroundImage:
          `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
           linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      <Box sx={{
        position: 'absolute', width: 420, height: 420, borderRadius: '50%',
        background: `${accent.purple}12`, filter: 'blur(100px)',
        top: '-120px', left: '-100px',
        animation: 'orbFloat 14s ease-in-out infinite',
      }} />
      <Box sx={{
        position: 'absolute', width: 350, height: 350, borderRadius: '50%',
        background: `${accent.cyan}10`, filter: 'blur(90px)',
        bottom: '-100px', right: '-80px',
        animation: 'orbFloat 16s ease-in-out infinite alternate',
      }} />
      {particles.map((p, i) => (
        <Box key={i} sx={{
          position: 'absolute', left: p.left, bottom: '-10px',
          width: p.size, height: p.size, borderRadius: '50%',
          bgcolor: p.color,
          animation: `particleFloat ${p.dur}s linear infinite`,
          animationDelay: `${p.delay}s`,
        }} />
      ))}
    </Box>
  );
});

import React from 'react';
import { Typography } from '@mui/material';
import { accent, AccentColor } from '../theme';

// ============ GLOW TEXT ============
export type GlowTextProps = {
  children: React.ReactNode;
  color?: AccentColor;
  size?: 'h1' | 'h2' | 'h3' | 'h4';
  glow?: boolean;
};

export const GlowText: React.FC<GlowTextProps> = ({ children, color = 'red', size = 'h2', glow = false }) => (
  <Typography
    variant={size}
    component="span"
    sx={{
      color: accent[color],
      fontWeight: 800,
      ...(glow && { animation: 'glow 2.5s ease-in-out infinite' }),
    }}
  >
    {children}
  </Typography>
);

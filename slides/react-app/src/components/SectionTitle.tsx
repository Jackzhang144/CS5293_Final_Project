import React from 'react';
import { Box, Typography } from '@mui/material';
import { accent, AccentColor } from '../theme';
import { stagger } from '../animations/stagger';
import { GlowText } from './GlowText';

// ============ REUSABLE SECTION TITLE ============
type SectionTitleProps = {
  color: AccentColor;
  title: string;
  subtitle?: string;
  idx: number;
  glow?: boolean;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({ color, title, subtitle, idx, glow }) => (
  <Box sx={{ textAlign: 'center', mb: 5 }}>
    <Box style={stagger(idx)}>
      <GlowText color={color} size="h2" glow={glow}>{title}</GlowText>
    </Box>
    {subtitle && (
      <Box style={stagger(idx + 1)}>
        <Typography variant="caption" sx={{
          fontFamily: '"JetBrains Mono", monospace',
          color: 'text.secondary', mt: 0.5, display: 'block',
          letterSpacing: '0.05em', fontSize: '0.65rem',
        }}>
          {subtitle}
        </Typography>
      </Box>
    )}
  </Box>
);

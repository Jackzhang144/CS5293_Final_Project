import React from 'react';
import { Box } from '@mui/material';

// ============ SLIDE CONTENT WRAPPER ============
export const SlideContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    px: { xs: 3, md: 6 },
    py: 4,
  }}>
    <Box sx={{ width: '100%', maxWidth: 1100, mx: 'auto' }}>
      {children}
    </Box>
  </Box>
);

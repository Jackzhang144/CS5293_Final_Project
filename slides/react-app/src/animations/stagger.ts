import React from 'react';

// ============ STAGGER HELPER ============
/** Create a fadeUp animation style with staggered delay */
export const stagger = (idx: number, base = 0, step = 100): React.CSSProperties => ({
  opacity: 0,
  animation: `fadeUp 0.65s cubic-bezier(0.23, 1, 0.32, 1) forwards`,
  animationDelay: `${base + idx * step}ms`,
});

// ============ SEQUENTIAL STAGGER (replaces magic index numbers) ============
/**
 * Use this inside a component to generate sequential stagger styles without magic numbers.
 * Example:
 *   const seq = useSequentialStagger();
 *   <Box style={seq(200)}>First</Box>
 *   <Box style={seq(300)}>Second</Box>
 */
export function useSequentialStagger() {
  const idxRef = React.useRef(0);
  idxRef.current = 0; // reset on each render
  return (base = 0, step = 100): React.CSSProperties => {
    return stagger(idxRef.current++, base, step);
  };
}

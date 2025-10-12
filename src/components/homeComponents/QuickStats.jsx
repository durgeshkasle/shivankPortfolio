import React from 'react';

// @mui components :-
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme, styled } from '@mui/material/styles';

// ======= Styled Components =======
const Root = styled('section')(({ theme }) => ({
  padding: '36px 16px',
}));

const StatCard = styled(Card)(({ theme }) => ({
  padding: 18,
  borderRadius: 12,
  background: theme.palette.background.paper,
  boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
  border: `1px solid rgba(255,255,255,0.04)`,
  textAlign: 'center',
}));

// small hook to animate numbers
function useCountUp(target = 0, duration = 1000) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const diff = target - start;
    if (diff <= 0) return setValue(target);
    const stepTime = Math.max(10, Math.floor(duration / diff));
    const timer = setInterval(() => {
      start += 1;
      setValue(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [target, duration]);
  return value;
}

// ============= Component =============
export default function QuickStats() {
  const theme = useTheme();

  const stats = [
    { label: 'Years Experience', value: 2 },
    { label: 'Projects', value: 25 },
    { label: 'Technologies', value: 15 },
    { label: 'Certifications', value: 3 },
  ];

  return (
    <Root id="stats">
      <Grid container spacing={3}>
        {stats.map((s) => (
          <Grid item xs={12} sm={6} md={3} key={s.label}>
            <StatCard>
              <Box
                sx={{ fontSize: 34, fontWeight: 800, mb: 1, color: theme.palette.primary.light }}
              >
                {useCountUp(s.value, 900)}
                {s.label === 'Projects' && '+'}
              </Box>
              <Typography sx={{ color: theme.palette.text.secondary }}>{s.label}</Typography>
            </StatCard>
          </Grid>
        ))}
      </Grid>
    </Root>
  );
}

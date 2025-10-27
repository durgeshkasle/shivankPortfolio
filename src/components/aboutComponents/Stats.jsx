import React from 'react';

// @mui Components :-
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

// ========= Style Components ===========
const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StatCard = styled(Paper)(({ theme, index, total }) => ({
  padding: theme.spacing(4),
  borderRadius: '20px',
  background: 'linear-gradient(145deg, #0f172a, #111827)',
  border: '1px solid rgba(255,255,255,0.08)',
  color: theme.palette.text.primary,
  boxShadow: '0px 8px 20px rgba(0,0,0,0.3)',
  textAlign: 'center',
  maxHeight: '200px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  maxWidth: '290px',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0px 12px 28px rgba(0,0,0,0.45)',
    border: `1px solid ${theme.palette.primary.light}`,
  },

  // ===== Only on Mobile =====
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    opacity: 0,
    animation: `fadeAnimation ${total * 2}s infinite`,
    animationDelay: `${index * 2}s`,
    transition: 'opacity 1s ease-in-out',
    border: `1px solid ${theme.palette.primary.light}`,
  },

  // ===== Define keyframes globally (inside styled component) =====
  '@keyframes fadeAnimation': {
    '0%': { opacity: 0 },
    '5%': { opacity: 1 },
    '25%': { opacity: 1 },
    '30%': { opacity: 0 },
    '100%': { opacity: 0 },
  },
}));

// ========= Component ===========
export default function Stats(props) {
  const { stats = [] } = props;

  return (
    <StatsContainer id="stats">
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: 'primary.main',
          mb: { md: 6, xs: 3 },
          textAlign: 'center',
        }}
      >
        My Stats
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: { md: 'space-between', xs: 'center', md: 'center' },
          position: { xs: 'relative', md: 'static' }, // Needed for absolute cards on mobile
          minHeight: { xs: 200, md: 'auto' }, // keeps height stable on mobile
          width: '100%',
        }}
      >
        {stats.map((stat, i) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4, lg:3 }} key={i}>
            <StatCard index={i} total={stats.length}>
              <Box sx={{ mb: 2 }}>{stat.icon}</Box>
              <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {stat.number}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {stat.label}
              </Typography>
            </StatCard>
          </Grid>
        ))}
      </Grid>
    </StatsContainer>
  );
}

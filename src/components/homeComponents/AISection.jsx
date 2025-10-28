import React from 'react';

// @mui Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { keyframes, styled, useTheme } from '@mui/material/styles';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

//-----------------------------
// Component
//-----------------------------
export default function AISection(props) {
  const { featureCards = [], stackCards = [] } = props;
  const theme = useTheme();

  return (
    <Section container spacing={{ xs: 3, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {/* Left Section */}
      <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
        <Box flex={1} minWidth={300}>
          <BlinkingLabel
            variant="subtitle2"
            sx={{
              display: 'inline-block',
              padding: theme.spacing(0.5, 2),
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.primary.contrastText,
              borderRadius: '20px',
              mb: 4,
            }}
          >
            AI-Powered Development
          </BlinkingLabel>

          <Typography variant="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
            Building with <br />
            <span style={{ color: theme.palette.success.main }}>AI & Vibe Coding</span>
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 }}>
            I leverage cutting-edge AI tools like Claude, GPT, and Copilot to accelerate development
            while practicing <strong style={{ color: '#7ddea1' }}>vibe coding</strong> — creating
            applications that feel natural, intuitive, and engaging through thoughtful UX patterns
            and performance optimization.
          </Typography>

          <Grid container spacing={3} sx={{ justifyContent: { md: '', xs: 'center' } }}>
            {featureCards.map((card, index) => (
              <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
                <FeatureCard>
                  {card.icon}
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2">{card.desc}</Typography>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>

      <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
        <DevelopmentStackCard>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <RocketLaunchIcon
              sx={{
                backgroundColor: '#223b49',
                color: '#fff',
                borderRadius: '5px',
                width: '30px',
                height: '30px',
                padding: '5px',
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AI Development Stack
            </Typography>
          </Box>

          <Box mt={4}>
            {stackCards.map((stack, index) => (
              <StackCard key={index} sx={{ backgroundColor: stack.bg }}>
                {stack.icon}
                <Typography>{stack.title}</Typography>
              </StackCard>
            ))}
          </Box>
        </DevelopmentStackCard>
      </Grid>
    </Section>
  );
}

//---------------------------
// Styled components
//---------------------------
const Section = styled(Grid)(({ theme }) => ({
  height: 'calc(100vh - 100px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    height: '100vh',
  },
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  textAlign: 'center',
  boxShadow: theme.shadows[3],
  transition: 'all 0.3s ease',
  background: 'linear-gradient(145deg, #0f172a, #111827)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '13px',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.45)',
    border: `1px solid ${theme.palette.primary.light}`,
  },
}));

const StackCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: `0 0 12px ${theme.palette.success.main}66`,
    transform: 'translateY(-3px)',
  },
}));

const DevelopmentStackCard = styled(Card)(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  padding: '30px',
  maxHeight: '500px',
  background: 'linear-gradient(145deg, #0f172a, #111827)',
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: theme.shadows[5],
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.45)',
    border: `1px solid ${theme.palette.primary.light}`,
  },
}));

const BlinkingLabel = styled(Typography)(({ theme }) => {
  const blinkGlow = keyframes`
    0% {
      box-shadow: 0 0 5px ${theme.palette.primary.main},
                  0 0 10px ${theme.palette.primary.main},
                  0 0 20px ${theme.palette.primary.main};
    }
    50% {
      box-shadow: 0 0 15px ${theme.palette.primary.main},
                  0 0 30px ${theme.palette.primary.main},
                  0 0 45px ${theme.palette.primary.main};
    }
    100% {
      box-shadow: 0 0 5px ${theme.palette.primary.main},
                  0 0 10px ${theme.palette.primary.main},
                  0 0 20px ${theme.palette.primary.main};
    }
  `;

  return {
    display: 'inline-block',
    padding: theme.spacing(0.5, 2),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    borderRadius: '20px',
    marginBottom: theme.spacing(2),
    animation: `${blinkGlow} 2s infinite ease-in-out`,
  };
});

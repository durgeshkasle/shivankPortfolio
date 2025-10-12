import React from 'react';

// @mui Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { keyframes, styled, useTheme } from '@mui/material/styles';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

//======== Styled components ===========
const Section = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: 'flex',
  height: 'calc(100vh - 100px)',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    height: '100%',
    padding: theme.spacing(6, 2, 0, 2),
  },
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  textAlign: 'center',
  boxShadow: theme.shadows[3],
  transition: 'all 0.3s ease',
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
  maxWidth: '500px',
  padding: '30px',
  maxHeight: '500px',
  backgroundColor: theme.palette.background.paper,
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

// ========= Component ==========
export default function AISection(props) {
  const { featureCards = [], stackCards = [] } = props;
  const theme = useTheme();

  return (
    <Section>
      {/* Left Section */}
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

        <Typography variant="body1" sx={{ maxWidth: 600, mb: 4 }}>
          I leverage cutting-edge AI tools like Claude, GPT, and Copilot to accelerate development
          while practicing <strong style={{ color: '#7ddea1' }}>vibe coding</strong> — creating
          applications that feel natural, intuitive, and engaging through thoughtful UX patterns and
          performance optimization.
        </Typography>

        <Grid container spacing={3} sx={{ justifyContent: { md: 'start', xs: 'center' } }}>
          {featureCards.map((card, index) => (
            <Grid item xs={12} md={6} key={index}>
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

      {/* Right Section */}
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
    </Section>
  );
}

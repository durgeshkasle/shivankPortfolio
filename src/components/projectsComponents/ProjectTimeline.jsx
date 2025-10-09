import React from 'react';

// @mui Components :-
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, styled } from '@mui/material/styles';

// ===== Styled Container =====
const TimelineContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: '32px',
  borderRadius: '20px',
  marginTop: '40px',
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
  border: `1px solid rgba(255,255,255,0.08)`,
  [theme.breakpoints.down('sm')]: {
    margin: '40px 20px 40px 20px',
    padding: '15px 40px',
  },
}));

// ======= Component =========
export default function ProjectTimeline(props) {
  const { steps = [] } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TimelineContainer>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 3,
          color: theme.palette.primary.light,
          textAlign: 'center',
        }}
      >
        Project Lifecycle
      </Typography>

      <Stepper
        activeStep={steps.length - 1}
        alternativeLabel={!isMobile}
        orientation={isMobile ? 'vertical' : 'horizontal'}
      >
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel icon={step.icon}>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.primary,
                  whiteSpace: 'nowrap',
                }}
              >
                {step.label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </TimelineContainer>
  );
}

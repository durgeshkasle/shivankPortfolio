import React from 'react';

// @mui Components :-
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { styled, useTheme } from '@mui/material/styles';

// ===== Styled Component =====
const Container = styled(Box)(({ theme }) => ({
  padding: '50px 0px',
  [theme.breakpoints.down('sm')]: {
    padding: '60px 0px',
  },
}));

const SkillCard = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '20px',
  padding: '40px',
  width: '100%',
  margin: '0 auto',
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
  border: '1px solid rgba(255,255,255,0.08)',
  transition: 'all 0.35s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.45)',
    border: `1px solid ${theme.palette.primary.light}`,
    background: 'linear-gradient(145deg, rgba(25,35,55,0.95), rgba(16,22,36,0.9))',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '28px',
  },
}));

const ProgressWrapper = styled(Box)(({ theme }) => ({
  marginBottom: '16px',
}));

// ========= Component =========
export default function SkillProgress(props) {
  const { skillsData = [] } = props;
  const theme = useTheme();

  return (
    <Container>
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 3,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          My Skill Proficiency
        </Typography>
      </Box>

      <SkillCard>
        {skillsData.map((item) => (
          <ProgressWrapper key={item.skill}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Typography variant="subtitle2" sx={{ color: theme.palette.text.primary }}>
                {item.skill}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: theme.palette.text.secondary }}>
                {item.level}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={item.level}
              sx={{
                height: 10,
                borderRadius: 5,
                backgroundColor: 'rgba(255,255,255,0.1)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 5,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                },
              }}
            />
          </ProgressWrapper>
        ))}
      </SkillCard>
    </Container>
  );
}

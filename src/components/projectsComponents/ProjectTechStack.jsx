import React from 'react';

// @mui Components :-
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { useTheme, styled } from '@mui/material/styles';

// =========== Styled Components ========
const StackContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '20px',
  padding: '32px',
  margin: '0 auto',
  textAlign: 'center',
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
  border: `1px solid rgba(255,255,255,0.08)`,
  [theme.breakpoints.down('sm')]: {
    margin: '40px 0px',
    padding: '20px 7px',
  },
}));

// =========== Component =============
export default function ProjectTechStack(props) {
  const { techStack = [] } = props;
  const theme = useTheme();

  return (
    <StackContainer>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 3,
          color: theme.palette.primary.light,
        }}
      >
        Core Technologies I Use
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
        {techStack.map((tech) => (
          <Chip
            key={tech}
            label={tech}
            sx={{
              background: 'rgba(255,255,255,0.05)',
              color: theme.palette.text.primary,
              fontWeight: 500,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: '#fff',
              },
            }}
          />
        ))}
      </Box>
    </StackContainer>
  );
}

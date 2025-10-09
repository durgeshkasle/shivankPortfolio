import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

// ===== Styled Component =====
const Container = styled(Box)(({ theme }) => ({
  padding: '50px 24px',
  [theme.breakpoints.down('sm')]: {
    padding: '20px 16px',
  },
}));

const TagCloudWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  marginTop: '40px',
  justifyContent: 'center',
}));

// ======= Component =========
export default function SkillTagCloud(props) {
  const { skillTagCloudData = [] } = props;
  const theme = useTheme();

  return (
    <Container>
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 3,
            color: theme.palette.primary.light,
            textAlign: 'center',
          }}
        >
          Skill Tag Cloud
        </Typography>

        <TagCloudWrapper>
          {skillTagCloudData.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                background: 'rgba(255,255,255,0.05)',
                color: theme.palette.text.primary,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  color: '#fff',
                },
              }}
            />
          ))}
        </TagCloudWrapper>
      </Box>
    </Container>
  );
}

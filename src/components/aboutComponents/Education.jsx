import React from 'react';

// @mui Components :-
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

// ========== Style Components ==========
const EducationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(8, 2),

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 2),
  },
}));

const EducationCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: '20px',
  background: 'linear-gradient(145deg, #0f172a, #111827)',
  border: '1px solid rgba(255,255,255,0.08)',
  color: theme.palette.text.primary,
  boxShadow: '0px 8px 24px rgba(0,0,0,0.4)',
  width: '100%',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

// ============= Component ==============
export default function Education(props) {
  const { educationDetails = [], certifications = [], achievements = [] } = props;

  return (
    <EducationContainer id="education">
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: 'primary.main',
          mb: 4,
          textAlign: 'center',
        }}
      >
        Education & Certifications
      </Typography>

      <EducationCard>
        <Box sx={{ display: { xs: 'block', md: 'flex' }, justifyContent: 'space-between' }}>
          {/* Education */}
          <Box sx={{ marginLeft: { xs: '0px', md: '-5px' } }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Education
            </Typography>
            <List dense>
              {educationDetails.map((edu, index) => (
                <ListItem key={index} sx={{ alignItems: 'center', py: 1 }}>
                  <ListItemIcon sx={{ minWidth: '40px' }}>{edu.icon}</ListItemIcon>
                  <ListItemText
                    primary={edu.title}
                    secondary={`${edu.institution} | ${edu.year}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Certifications */}
          <Box sx={{ mr: { xs: '0px', md: '20px' } }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Certifications
            </Typography>
            <List dense>
              {certifications.map((cert, index) => (
                <ListItem key={index} sx={{ alignItems: 'center', py: 1 }}>
                  <ListItemIcon sx={{ minWidth: '40px' }}>{cert.icon}</ListItemIcon>
                  <ListItemText primary={cert.name} secondary={`${cert.org} | ${cert.year}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        {/* Achievements */}
        <Box sx={{ mt: '20px' }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Achievements
          </Typography>
          <List dense>
            {achievements.map((ach, index) => (
              <ListItem key={index} sx={{ py: 1 }}>
                <ListItemIcon sx={{ minWidth: '40px' }}>{ach.icon}</ListItemIcon>
                <ListItemText primary={ach.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </EducationCard>
    </EducationContainer>
  );
}

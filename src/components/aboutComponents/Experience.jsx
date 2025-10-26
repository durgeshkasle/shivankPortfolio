import React from 'react';

// @mui Components :-
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

// ======== Styled Components =========
const ExperienceContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(6, 1),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 1),
  },
}));

const Heading = styled(Box)(({ theme }) => ({
  fontWeight: 700,
  color: 'primary.main',
  mb: 4,
  textAlign: 'center',
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '50px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '29px',
    mb: 2,
  },
}));

const ExperienceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5, 3),
  borderRadius: '20px',
  background: 'linear-gradient(135deg, #101624, #0a0f1c)',
  color: theme.palette.text.primary,
  boxShadow: '0px 8px 24px rgba(0,0,0,0.4)',
  width: '100%',
}));

// ======== Component ========
export default function Experience(props) {
  const { highlights = [] } = props;
  const theme = useTheme();

  return (
    <ExperienceContainer id="experience">
      <Heading variant="h2">Professional Experience</Heading>

      <ExperienceCard>
        <Grid container spacing={4}>
          {/* Summary */}
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Professional Summary
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 2,
                color: 'text.secondary',
                pl: '25px',
                pr: '10px',
                fontSize: { xs: '13px' },
              }}
            >
              I’m a passionate <strong>MERN Stack Developer</strong> with{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                2 years 2 months
              </Box>{' '}
              of professional experience and{' '}
              <Box component="span" sx={{ color: 'secondary.main' }}>
                3 months internship
              </Box>
              . Skilled in designing, developing, and deploying full-stack web applications with
              clean and scalable code.
            </Typography>
          </Grid>

          {/* Key Highlights */}
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Key Highlights
            </Typography>
            <List sx={{ pl: { xs: 0, md: 1 }, pr: { xs: 0, md: 1 } }}>
              {highlights.map((item, i) => (
                <ListItem key={i} sx={{ py: 1 }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: { xs: '0.7rem', sm: '0.9rem' },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </ExperienceCard>
    </ExperienceContainer>
  );
}

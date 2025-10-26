import React from 'react';

// @mui Components :-
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { useTheme, styled } from '@mui/material/styles';

// ========= Styled Components ===========
const StyledCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '20px',
  overflow: 'hidden',
  width: '100%',
  width: '600px',
  transition: 'all 0.4s ease',
  border: `1px solid rgba(255,255,255,0.08)`,
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.45)',
    border: `1px solid ${theme.palette.primary.light}`,
  },

  [theme.breakpoints.down('sm')]: {
    width: '300px',
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(4),
  fontSize: '40px',
  textAlign: 'center',
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',

  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
    fontSize: '25px',
    marginTop: theme.spacing(2),
  },
}));

// ========= Component =========
export default function ProjectCards(props) {
  const { projects = [], handleViewMyProBtn = () => {} } = props;
  const theme = useTheme();

  return (
    <Box sx={{ py: { sm: 2, md: 5 }, px: { md: 0, sm: 2 } }}>
      <Heading variant="h3">Featured Projects</Heading>
      <Typography
        variant="subtitle1"
        sx={{
          color: theme.palette.text.secondary,
          textAlign: 'center',
          mb: 6,
          maxWidth: '900px',
          mx: { md: 'auto', xs: 1 },
        }}
      >
        Explore a selection of my key projects showcasing creativity, clean code, and
        problem-solving skills. Each project reflects modern design and scalable architecture built
        with the latest web technologies.
      </Typography>

      <Grid
        container
        spacing={5}
        sx={{ display: 'flex', justifyContent: { md: 'space-between', xs: 'center' } }}
      >
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <StyledCard>
              {/* <CardMedia component="img" height="200" image={project.image} alt={project.title} loading='lazy' /> */}

              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                loading="lazy"
                sx={{
                  height: 200,
                  width: '100%',
                  objectFit: 'fill',
                  objectPosition: 'center',
                }}
              />

              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary, mt: 1, mb: 2 }}
                >
                  {project.desc}
                </Typography>

                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                  {project.tech.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        background: 'rgba(255,255,255,0.05)',
                        color: theme.palette.text.primary,
                      }}
                    />
                  ))}
                </Box>

                <Button variant="contained" size="small" onClick={handleViewMyProBtn}>
                  View Project
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

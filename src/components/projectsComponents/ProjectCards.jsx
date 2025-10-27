import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { useTheme, styled } from '@mui/material/styles';

//---------------------
// Component
//---------------------
export default function ProjectCards({ projects = [], handleViewMyProBtn = () => {} }) {
  const theme = useTheme();

  return (
    <Box sx={{ py: { sm: 3, md: 6 }, px: { xs: 2, md: 3 } }}>
      <Heading variant="h3">Featured Projects</Heading>

      <SubText variant="subtitle1">
        Explore a selection of my key projects showcasing creativity, clean code, and
        problem-solving skills. Each project reflects modern design and scalable architecture built
        with the latest web technologies.
      </SubText>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project) => (
          <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={project.title}>
            <StyledCard>
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                loading="lazy"
                sx={{ height: 200, width: '100%', objectFit: 'fill' }}
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

//---------------------------
// Styled Components
//---------------------------
const StyledCard = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: '20px',
  overflow: 'hidden',
  width: '100%',
  transition: 'all 0.4s ease',
  border: `1px solid rgba(255,255,255,0.08)`,
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.45)',
    border: `1px solid ${theme.palette.primary.light}`,
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
    fontSize: '25px',
    marginBottom: theme.spacing(2),
  },
}));

const SubText = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  maxWidth: '900px',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

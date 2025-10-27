import React, { useEffect, useRef, useState } from 'react';

// MUI Components :-
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// MUI icons ;-
import BusinessIcon from '@mui/icons-material/Business';
import DataObjectIcon from '@mui/icons-material/DataObject';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

// Videos :-
import bg1 from '../../assets/videos/homePage/bg1.mp4';
import bg2 from '../../assets/videos/homePage/bg2.mp4';
import bg3 from '../../assets/videos/homePage/bg3.mp4';
import bg4 from '../../assets/videos/homePage/bg4.mp4';

// Resume :-
import resume from '../../assets/pdfs/resume.pdf';

//-------------------------
// Component
//-------------------------
export default function Hero({ handleSeeMyWork = () => {} }) {
  const videos = [bg1, bg2, bg3, bg4];
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setCurrentVideo(randomIndex);
  }, []);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <HeroContainer id="about">
      {/* ===== Background Video ===== */}
      <BackgroundVideo
        ref={videoRef}
        key={currentVideo}
        src={videos[currentVideo]}
        autoPlay
        muted
        loop={false}
        onEnded={handleVideoEnd}
      />

      {/* ===== Foreground Content ===== */}
      <HeroContent>
        <Typography variant="h6" color="primary.main" sx={{ mb: 1, fontWeight: 500 }}>
          Welcome to my portfolio!
        </Typography>

        <ResponsivenessText variant="h1">
          Empowering your{' '}
          <Box component="span" sx={{ color: 'error.main' }}>
            Vision
          </Box>{' '}
          <br />
          with custom software solutions.
        </ResponsivenessText>

        <ResponsivenessText variant="body1">
          Unlock the Power of Innovative Software Development
        </ResponsivenessText>

        <ButtonSection>
          <Button variant="contained" color="primary">
            <a href={resume} download style={{ color: 'white', textDecoration: 'none' }}>
              Download CV
            </a>
          </Button>
          <Button variant="outlined" color="primary" onClick={handleSeeMyWork}>
            See my work →
          </Button>
        </ButtonSection>
      </HeroContent>

      {/* ====== Stats Section Below ====== */}
      <StatsContainer>
        <StatItem>
          <WorkOutlineIcon color="error" fontSize="large" />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            5+
          </Typography>
          <Typography variant="body2">Major Full-Stack Apps</Typography>
        </StatItem>

        <StatItem>
          <BusinessIcon color="error" fontSize="large" />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            5+
          </Typography>
          <Typography variant="body2">Talented Team</Typography>
        </StatItem>

        <StatItem>
          <RocketLaunchIcon color="error" fontSize="large" />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            2+
          </Typography>
          <Typography variant="body2">Years Experience</Typography>
        </StatItem>

        <StatItem>
          <DataObjectIcon color="error" fontSize="large" />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            1000+
          </Typography>
          <Typography variant="body2">Hours of Coding</Typography>
        </StatItem>
      </StatsContainer>
    </HeroContainer>
  );
}

//----------------------------
// Styled Components
//----------------------------
const HeroContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  color: '#fff',
  minHeight: '100vh',
}));

const BackgroundVideo = styled('video')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -1,
  transition: 'opacity 1s ease-in-out',
});

const HeroContent = styled(Box)(({ theme }) => ({
  zIndex: 2,
  textAlign: 'left',
  padding: theme.spacing(6, 4),
  position: 'absolute',
  top: '15%',
  left: '3%',

  [theme.breakpoints.down('sm')]: {
    top: '4%',
    left: '3px',
  },
}));

const TechStalwarts = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 600,
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
  },
}));

const ResponsivenessText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '22px',
  },
}));

const StatsContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'nowrap',
  backgroundColor: '#fff',
  color: '#000',
  borderRadius: '16px',
  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.08)',
  padding: theme.spacing(3, 4),

  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  top: '70%',

  width: 'calc(100% - 40px)',
  maxWidth: '1100px',
  minWidth: '320px',

  [theme.breakpoints.down('lg')]: {
    maxWidth: '1000px',
    padding: theme.spacing(3, 3),
  },

  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: theme.spacing(2, 3),
    gap: theme.spacing(2),
  },

  [theme.breakpoints.down('sm')]: {
    width: '90%',
    padding: theme.spacing(2),
    justifyContent: 'space-around',
    top: '65%',
  },
}));

const StatItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  margin: theme.spacing(2, 3),

  [theme.breakpoints.down('md')]: {
    flex: '1 1 45%',
    margin: theme.spacing(1, 0),
  },
}));

const ButtonSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  marginTop: '25px',

  [theme.breakpoints.down('sm')]: {
    marginTop: '40px',
    gap: '5px',
  },
}));

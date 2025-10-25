import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessIcon from '@mui/icons-material/Business';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import resume from '../../assets/pdfs/resume.pdf';

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DataObjectIcon from '@mui/icons-material/DataObject';

// Videos
import bg1 from '../../assets/videos/homePage/bg1.mp4';
import bg2 from '../../assets/videos/homePage/bg2.mp4';
import bg3 from '../../assets/videos/homePage/bg3.mp4';
import bg4 from '../../assets/videos/homePage/bg4.mp4';

// ===== Styled Components =====
const HeroContainer = styled(Box)(({ theme }) => ({
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
}));

const HeroHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  fontSize: '2.2rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
}));

const HeroSubText = styled(Typography)(({ theme }) => ({
  color: '#ddd',
  maxWidth: '500px',
  marginBottom: theme.spacing(4),
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

// ⭐ Stats Box
const StatsContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
  backgroundColor: '#fff',
  color: '#000',
  borderRadius: '16px',
  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.08)',
  padding: theme.spacing(3, 4),
  width: '900px',
  margin: '0 auto',
  position: 'absolute',

  top: '70%',
  left: '20%',
  right: '50%',
}));

const StatItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  margin: theme.spacing(2, 3),
}));

// ========== Component ==========
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

        <HeroHeading variant="h1">
          Empowering your{' '}
          <Box component="span" sx={{ color: 'error.main' }}>
            Vision
          </Box>{' '}
          <br />
          with custom software solutions.
        </HeroHeading>

        <HeroSubText variant="body1">
          Unlock the Power of Innovative Software Development
        </HeroSubText>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button variant="contained" color="primary">
            <a href={resume} download style={{ color: 'white', textDecoration: 'none' }}>
              Download CV
            </a>
          </Button>
          <Button variant="outlined" color="primary" onClick={handleSeeMyWork}>
            See my work →
          </Button>
        </Box>
      </HeroContent>

      {/* ⭐ Stats Section Below */}
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

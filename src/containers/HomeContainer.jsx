import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// @Mui Icons :-
import StarIcon from '@mui/icons-material/Star';
import BoltIcon from '@mui/icons-material/Bolt';
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from '@mui/material/styles';
import LayersIcon from '@mui/icons-material/Layers';

// Components :-
import Hero from '../components/homeComponents/Hero';
import AISection from '../components/homeComponents/AISection';

import QuickStats from '../components/homeComponents/QuickStats';
import GithubActivity from '../components/homeComponents/GithubActivity';
import DeveloperTerminal from '../components/homeComponents/DeveloperTerminal';
import ContributionStats from '../components/homeComponents/ContributionStats';

const HomeContainer = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSeeMyWork = useCallback(() => {
    navigate('/about'); // Targeting the About page
  }, [navigate]);

  //--------------------------
  // Feature data
  //--------------------------
  const featureCards = [
    {
      icon: <StarIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 1 }} />,
      title: 'AI-Assisted',
      desc: '60% faster development with AI tools',
    },
    {
      icon: <BoltIcon sx={{ fontSize: 40, color: theme.palette.success.main, mb: 1 }} />,
      title: 'Vibe Coding',
      desc: 'Intuitive UX with performance focus',
    },
  ];

  // Stack data
  const stackCards = [
    {
      icon: <CodeIcon sx={{ color: theme.palette.info.main }} />,
      title: 'Claude AI',
      bg: '#152230',
    },
    {
      icon: <BoltIcon sx={{ color: theme.palette.error.main }} />,
      title: 'GPT Integration',
      bg: '#464343ff',
    },
    {
      icon: <StarIcon sx={{ color: theme.palette.primary.main }} />,
      title: 'GitHub Copilot',
      bg: '#152230',
    },
    {
      icon: <LayersIcon sx={{ color: theme.palette.success.main }} />,
      title: 'Vibe-First Design',
      bg: '#464343ff',
    },
    {
      icon: <LayersIcon sx={{ color: theme.palette.success.main }} />,
      title: 'Rapid Deployment',
      bg: '#152230',
    },
  ];

  return (
    <>
      <Hero handleSeeMyWork={handleSeeMyWork} />
      <AISection featureCards={featureCards} stackCards={stackCards} />
      {/* <QuickStats/> */}
      {/* <DeveloperTerminal/> */}
      {/* <GithubActivity/> */}
      {/* <ContributionStats/> */}
    </>
  );
};

export default HomeContainer;

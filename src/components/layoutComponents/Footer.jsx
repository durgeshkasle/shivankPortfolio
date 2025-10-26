import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

// ===== Styled Components =====
const AnimatedAppFooter = styled(Box)(({ theme }) => ({
  background: 'rgba(16, 22, 36, 0.75)',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
  transition: 'all 0.4s ease',
  animation: 'fadeInDown 1s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  padding: '10px 0',

  '@keyframes fadeInDown': {
    '0%': { opacity: 0, transform: 'translateY(-20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    gap: '10px',
  },
}));

const FooterText = styled(Typography)(({ theme }) => ({
  color: '#ccc',
  fontWeight: 500,
  letterSpacing: 0.5,

  [theme.breakpoints.up('sm')]: {
    '&::after': {
      content:
        '"© 2025 Shivank Singh. Building better software, one line at a time. All rights reserved."',
    },
  },
  [theme.breakpoints.down('sm')]: {
    '&::after': {
      content: '"Building better software"',
    },
  },
}));

const SocialButton = styled(IconButton)(({ color }) => ({
  color,
  transition: 'transform 0.3s ease, color 0.3s ease',
  '&:hover': {
    transform: 'scale(1.2)',
    color: '#fff',
  },
}));

// ===== Component =====
const Footer = () => {
  const socialLinks = [
    { icon: <GitHubIcon />, color: '#333', url: 'https://github.com/shivankMERNPro' },
    { icon: <LinkedInIcon />, color: '#0077b5', url: 'https://www.linkedin.com/in/shivank011/' },
    { icon: <EmailIcon />, color: '#ea4335', url: 'mailto:shivank.singh.developer@gmail.com' },
  ];

  const handleRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatedAppFooter>
      <FooterText variant="body2" />

      <Stack direction="row" spacing={1}>
        {socialLinks.map((item, index) => (
          <SocialButton key={index} color={item.color} onClick={() => handleRedirect(item.url)}>
            {item.icon}
          </SocialButton>
        ))}
      </Stack>
    </AnimatedAppFooter>
  );
};

export default Footer;

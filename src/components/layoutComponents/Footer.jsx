import React from 'react';

// @mui Components :-
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// MUI Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const AnimatedAppFooter = styled(Box)(({ theme }) => ({
  background: 'rgba(16, 22, 36, 0.75)',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
  transition: 'all 0.4s ease',
  animation: 'fadeInDown 1s ease',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '30px',
  padding: '20px 0',
  '@keyframes fadeInDown': {
    '0%': { opacity: 0, transform: 'translateY(-20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
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

const Footer = () => {
  const socialLinks = [
    { icon: <GitHubIcon />, color: '#333', url: 'https://github.com/shivankMERNPro' },
    { icon: <LinkedInIcon />, color: '#0077b5', url: 'https://www.linkedin.com/in/shivank011/' },
    // { icon: <TwitterIcon />, color: '#1da1f2', url: 'https://twitter.com/ShivankSingh' },
    // { icon: <InstagramIcon />, color: '#e1306c', url: 'https://instagram.com/ShivankSingh' },
    { icon: <EmailIcon />, color: '#ea4335', url: 'mailto:shivank.singh.developer@gmail.com' },
  ];

  const handleRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatedAppFooter>
      <Typography
        variant="body2"
        sx={{
          color: '#ccc',
          fontWeight: 500,
          letterSpacing: 0.5,
        }}
      >
        © 2025 Shivank.dev — All Rights Reserved
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={2} mb={1}>
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

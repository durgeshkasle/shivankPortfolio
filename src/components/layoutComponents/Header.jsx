import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme, styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

// ======== Styled Components =====
const GradientBorder = styled(Box)(({ theme }) => ({
  borderBottom: `2px solid transparent`,
  borderImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) 1`,
}));

const AnimatedAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(16, 22, 36, 0.75)',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
  transition: 'all 0.4s ease',
  animation: 'fadeInDown 1s ease',
  '@keyframes fadeInDown': {
    '0%': { opacity: 0, transform: 'translateY(-20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
}));

const MenuButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})(({ theme, isActive }) => ({
  position: 'relative',
  textTransform: 'none',
  fontWeight: isActive ? 700 : 500,
  color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
  transform: isActive ? 'scale(1.05)' : 'scale(1)',
  transition: 'all 0.3s ease',

  // Gradient underline animation
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: -4,
    width: isActive ? '100%' : 0,
    height: 2,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: 2,
    transition: 'width 0.3s ease',
  },

  // === Hover styles ===
  '&:hover': {
    color: '#fff',
    transform: 'scale(1.05)',
  },

  '&:hover::after': {
    width: '100%',
  },
}));

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation(); // <-- Detect current route
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const menuItems = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/tech-expertise' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <GradientBorder>
      <AnimatedAppBar position="sticky" elevation={0}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: { xs: 2, sm: 4, md: 8 },
            py: 1,
          }}
        >
          {/* === Logo Section === */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <RocketLaunchIcon
              sx={{
                fontSize: 30,
                color: theme.palette.primary.main,
                animation: 'spin 3s linear infinite',
                '@keyframes spin': {
                  '0%': { transform: 'rotate(0deg)' },
                  '100%': { transform: 'rotate(360deg)' },
                },
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Shivank.dev
            </Typography>
          </Box>

          {/* === Desktop Menu === */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <MenuButton key={item.label} component={Link} to={item.path} isActive={isActive}>
                  {item.label}
                </MenuButton>
              );
            })}
          </Box>

          {/* === Mobile Menu Icon === */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AnimatedAppBar>

      {/* === Mobile Drawer Menu === */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(16, 22, 36, 0.95)',
            color: theme.palette.text.primary,
            width: 220,
          },
        }}
      >
        <List>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                    borderLeft: isActive
                      ? `3px solid ${theme.palette.primary.main}`
                      : '3px solid transparent',
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 500,
                      textAlign: 'center',
                      color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </GradientBorder>
  );
};

export default Header;

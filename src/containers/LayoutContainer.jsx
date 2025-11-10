import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// CSS File :
import '../App.css';

// Layout Components :-
import LayoutHeader from '../components/layoutComponents/Header';
import LayoutFooter from '../components/layoutComponents/Footer';

//-------------------------
// Private layout handler
//-------------------------
export const PrivateLayout = () => {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-background)',
      }}
    >
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
};

//------------------------
// Public Layout Handler
//------------------------
export const PublicLayout = () => {
  const handleRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* ===== Fixed Header ===== */}
      <header className="app-header">
        <LayoutHeader />
      </header>

      {/* ===== Page Content ===== */}
      <main className="container">
        <Outlet />
      </main>

      {/* ===== Fixes Footer ===== */}
      <footer className="app-footer">
        <LayoutFooter />
      </footer>

      {/* ===== Fixed Whatsapp Icon for all modules ===== */}
      <SocialButton onClick={() => handleRedirect('https://wa.me/918169050968')}>
        <WhatsAppIcon sx={{ fontSize: '42px' }} />
      </SocialButton>
    </>
  );
};

//---------------------------
// Styled Components
//---------------------------
const SocialButton = styled(IconButton)(({ theme, color }) => ({
  color,
  transition: 'transform 0.3s ease, color 0.3s ease',
  position: 'fixed',
  right: '20px',
  bottom: '60px',
  zIndex: 1000,
  
  backgroundColor:"#25D366",
  '&:hover': {
    transform: 'scale(1.2)',
    color: '#fff',
    
  },
  [theme.breakpoints.down('sm')]: {
    right: '0px',
  },
}));

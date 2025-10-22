import React from 'react';
import { Outlet } from 'react-router-dom';
import '../App.css';
import LayoutHeader from '../components/layoutComponents/Header';
import LayoutFooter from '../components/layoutComponents/Footer';

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

export const PublicLayout = () => {
  return (
    <>
      {/* ===== Fixed Header ===== */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1100,
          backgroundColor: 'transparent',
        }}
      >
        <LayoutHeader />
      </header>

      {/* ===== Page Content ===== */}
      <div
        className="container"
        style={{
          paddingTop: '90px', // Matches your header height
        }}
      >
        <main
          style={{
            marginBottom: '100px',
          }}
        >
          <Outlet />
        </main>

        <footer
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            zIndex: 1100,
            backgroundColor: 'transparent',
          }}
        >
          <LayoutFooter />
        </footer>
      </div>
    </>
  );
};

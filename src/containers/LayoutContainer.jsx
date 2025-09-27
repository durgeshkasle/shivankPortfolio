import React from 'react';
import { Outlet } from 'react-router-dom';
import '../App.css';

export const PublicLayout = () => {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--color-background)' }}>
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
};

export const PrivateLayout = () => {
  return (
    <div className="container">
      <header className="app-header">Header</header>
      <main style={{ minHeight: 'calc(100vh - 90px)' }}>
        <Outlet />
      </main>
      <footer className="app-footer">Footer</footer>
    </div>
  );
};

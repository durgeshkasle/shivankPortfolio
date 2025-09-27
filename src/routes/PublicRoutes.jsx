import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout } from '../containers/LayoutContainer';

// Pages
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Navigate to="/sign-in" replace />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

        <Route path="*" element={<Navigate to="/sign-in" replace />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;

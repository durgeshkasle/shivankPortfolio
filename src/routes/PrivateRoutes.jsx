import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layout
import Loader from '../components/commonComponents/Loader';
import { PrivateLayout } from '../containers/LayoutContainer';
import NotFoundPage from '../pages/ErrorhandlerPages/NotFoundPage';

// Pages
import DashboardPage from '../pages/DashboardPage';

const PrivateRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Protect sign-in and sign-up if already logged in */}
        <Route path="/sign-in" element={<Navigate to="/dashboard" replace />} />
        <Route path="/sign-up" element={<Navigate to="/dashboard" replace />} />

        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default PrivateRoutes;

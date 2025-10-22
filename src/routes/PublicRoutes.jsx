import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layout
import Loader from '../components/commonComponents/Loader';
import { PublicLayout } from '../containers/LayoutContainer';
import NotFoundPage from '../pages/ErrorhandlerPages/NotFoundPage';

// Pages
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ProjectsPage from '../pages/ProjectsPage';
import DashboardPage from '../pages/DashboardPage';
import TechExpertisePage from '../pages/TechExpertisePage';

const PublicRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tech-expertise" element={<TechExpertisePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default PublicRoutes;

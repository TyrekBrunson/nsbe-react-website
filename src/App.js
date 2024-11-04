// src/App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import AwardsPage from './pages/AwardsPage';
import CompetitionsPage from './pages/CompetitionsPage';
import ContactPage from './pages/ContactPage'; // Import the ContactPage component
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import TimelinePage from './pages/TimelinePage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/timeline"
        element={
          <Layout>
            <TimelinePage />
          </Layout>
        }
      />
      <Route
        path="/competitions"
        element={
          <Layout>
            <CompetitionsPage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutPage />
          </Layout>
        }
      />
      <Route
        path="/awards"
        element={
          <Layout>
            <AwardsPage />
          </Layout>
        }
      />
      <Route
        path="/terms"
        element={
          <Layout>
            <TermsPage />
          </Layout>
        }
      />
      <Route
        path="/privacy"
        element={
          <Layout>
            <PrivacyPage />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;

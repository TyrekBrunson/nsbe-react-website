// src/App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Import the Header component
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import AwardsPage from './pages/AwardsPage';
import CompetitionsPage from './pages/CompetitionsPage';
import ContactPage from './pages/ContactPage';
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
            <Header /> {/* Add Header here */}
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/timeline"
        element={
          <Layout>
            <Header />
            <TimelinePage />
          </Layout>
        }
      />
      <Route
        path="/competitions"
        element={
          <Layout>
            <Header />
            <CompetitionsPage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <Header />
            <AboutPage />
          </Layout>
        }
      />
      <Route
        path="/awards"
        element={
          <Layout>
            <Header />
            <AwardsPage />
          </Layout>
        }
      />
      <Route
        path="/terms"
        element={
          <Layout>
            <Header />
            <TermsPage />
          </Layout>
        }
      />
      <Route
        path="/privacy"
        element={
          <Layout>
            <Header />
            <PrivacyPage />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Header />
            <ContactPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;

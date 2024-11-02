import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TimelinePage from './pages/TimelinePage';
import CompetitionsPage from './pages/CompetitionsPage';

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
    </Routes>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import EventSection from './components/EventSection';
import AboutSection from './components/AboutSection';
import SubscribeSection from './components/SubscribeSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <EventSection />
      <AboutSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default App;

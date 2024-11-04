import Header from './Header';
import Footer from './Footer';
import WelcomeSection from './WelcomeSection';
import ChairWelcomeSection from './ChairWelcomeSection';
import AboutSection from './AboutSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomeSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/chair-welcome" element={<ChairWelcomeSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

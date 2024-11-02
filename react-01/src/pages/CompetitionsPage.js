// src/pages/CompetitionsPage.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css'; // Ensure styles are applied

function CompetitionsPage() {
  return (
    <div>

      {/* Competitions Section */}
      <section className="competitions-section">
        <div className="container">
          <h1>Competition Winners</h1>

          <div className="competition-item">
            <img src="images/winner1.jpg" alt="Elevator Pitch Competition" className="competition-image" />
            <div>
              <h2>Elevator Pitch Competition</h2>
              <p>
                The Elevator Pitch Competition challenged participants to present their innovative ideas in under two minutes.
                1st Place went to Alicia Monroe, whose pitch on a biodegradable packaging solution captivated the judges.
                2nd Place was awarded to David Patel, who presented a novel approach to affordable housing using 3D printing technology.
                3rd Place went to Lauren Kim, who pitched a mental health app designed to provide real-time support.
              </p>
            </div>
          </div>

          <div className="competition-item">
            <img src="images/winner2.jpg" alt="Let’s Debate AI Competition" className="competition-image" />
            <div>
              <h2>Let’s Debate AI Competition</h2>
              <p>
                In the Let’s Debate AI Competition, competitors engaged in thoughtful discussions about the future of artificial intelligence.
                1st Place was earned by Jordan Wells and their team for their argument on the ethical implications of AI in healthcare.
                2nd Place went to Sophia Garcia, whose team debated AI’s role in autonomous transportation.
                3rd Place was taken by Emily Thompson, who discussed AI’s potential risks to job security and the economy.
              </p>
            </div>
          </div>

          <div className="competition-item">
            <img src="images/winner3.jpg" alt="Entrepreneur Pitch Showcase" className="competition-image" />
            <div>
              <h2>Entrepreneur Pitch Showcase</h2>
              <p>
                The Entrepreneur Pitch Showcase highlighted the creativity and entrepreneurial spirit of participants.
                1st Place went to Derrick Johnson for his sustainable energy startup focused on solar-powered farming equipment.
                2nd Place was awarded to Olivia Tran, who presented an innovative e-commerce platform for local artisans.
                3rd Place went to Samuel Reed, who pitched a cutting-edge fitness tracker tailored for people with disabilities.
              </p>
            </div>
          </div>

          <div className="competition-item">
            <img src="images/winner4.jpg" alt="Hack-A-Thon" className="competition-image" />
            <div>
              <h2>Hack-A-Thon</h2>
              <p>
                The Hack-A-Thon brought together teams to create innovative software solutions.
                1st Place went to Team CodeCrafters for developing an AI-driven disaster response system.
                2nd Place was won by Team DataStream, who built an automated data privacy protection tool.
                3rd Place was awarded to Team InnovateX, who created a blockchain-based voting platform to ensure election security.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default CompetitionsPage;

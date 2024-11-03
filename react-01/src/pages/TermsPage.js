// src/pages/TermsPage.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css'; // Make sure this path is correct if the styles are in a different folder

function TermsPage() {
  return (
    <div>
      
      <main className="terms-section">
        <h1>Terms & Conditions</h1>
        <div className="terms-container">
          <p>Last updated: November 4, 2021</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By using this website, you agree to the terms and conditions set forth herein. Your access to and use of the site is conditioned upon your acceptance of these terms. If you do not agree to any part of these terms, you must not use the site. These terms may be updated from time to time, and continued use of the site implies acceptance of those changes.
          </p>

          <h2>Your Rights in Using the Site</h2>
          <p>
            As a user of this site, you are granted a personal, limited license to view and use the content for non-commercial purposes. You may not copy, modify, distribute, or exploit any part of the site’s content without prior permission. Your rights include accessing information, sharing content via provided sharing options, and contacting the site’s support team for any issues or clarifications regarding your use of the site.
          </p>

          <h2>Trademarks</h2>
          <p>
            The trademarks, logos, and service marks displayed on this website are the intellectual property of NSBE and its affiliates. You may not use any trademarks, service marks, or logos without express written permission. Any unauthorized use of trademarks is strictly prohibited and may violate intellectual property laws.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            NSBE and its affiliates are not liable for any damages, including but not limited to direct, indirect, incidental, or consequential damages arising from your use of or inability to use this website. This includes any losses caused by interruptions, errors, or inaccuracies in the content. Your use of the site is at your own risk, and NSBE assumes no responsibility for any consequences arising from your reliance on the site’s content.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms and your use of the website shall be governed by the laws of the State of South Carolina. Any legal disputes or actions related to the use of this site will be governed by the jurisdiction of the courts located in Columbia, South Carolina.
          </p>

          <h2>Changes to the Terms</h2>
          <p>
            NSBE reserves the right to modify or update these terms at any time. Any changes will be posted on this page and will become effective immediately upon posting. It is your responsibility to review the terms periodically. Continued use of the site following any changes signifies your acceptance of the updated terms.
          </p>
        </div>
      </main>
      
    </div>
  );
}

export default TermsPage;

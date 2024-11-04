// src/components/PrivacySection.js
import React from 'react';
import '../style.css';

function PrivacySection() {
  return (
    <section className="privacy-section">
      <h1>Privacy Policy</h1>
      <div className="privacy-container">
        <p>Last updated: November 4, 2021</p>

        <h2>Personal Information We Collect</h2>
        <p>We collect various types of personal information to provide and improve our services. This includes information you provide directly, such as your name, email address, phone number, and other contact details when you register, make a purchase, or communicate with us. We may also collect information related to your use of our site, such as IP address, browser type, device information, and browsing behavior through cookies and other tracking technologies.</p>

        <h2>How We Use Personal Information</h2>
        <p>We use the personal information we collect to provide, maintain, and improve our services. This may include using your information to process transactions, respond to your inquiries, and personalize your experience on our site. We also use your data for analytics purposes to understand how users interact with our site and to enhance our offerings. Additionally, we may use your contact information to send you updates, promotions, or other information relevant to your interests.</p>

        <h2>Sharing Your Information</h2>
        <p>We do not sell your personal information. However, we may share your information with third-party service providers to help us operate and maintain our site, process transactions, and provide customer support. These service providers are required to keep your information confidential and use it only for the purposes for which we share it. We may also disclose your information when required by law or to protect the rights, property, or safety of our organization or others.</p>

        <h2>Cookies and Tracking Technologies</h2>
        <p>We use cookies and other tracking technologies to enhance your experience on our site. Cookies help us understand how visitors interact with our content, track website performance, and remember your preferences for future visits. You can choose to disable cookies through your browser settings, but doing so may limit some features of the site. We may also use third-party analytics services to track and analyze usage data.</p>

        <h2>Your Rights Regarding Personal Information</h2>
        <p>You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, you can contact us to request changes or removal of your data. You may also opt-out of receiving marketing communications or withdraw your consent for us to process your personal information at any time. Please note that certain information may need to be retained for legal or operational purposes.</p>

        <h2>Changes to This Privacy Policy</h2>
        <p>We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. When we make significant changes, we will notify you by posting a notice on our website or by sending you an email. Your continued use of the site after any updates to the policy signifies your acceptance of the changes. We encourage you to review this policy periodically to stay informed about how we are protecting your information.</p>
      </div>
    </section>
  );
}

export default PrivacySection;

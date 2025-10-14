// PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">
        <strong>Last Updated:</strong> October 13, 2025
      </p>
      <p className="text-gray-700 mb-6">
        Invertio (“we”, “our”, or “us”) values your privacy and is committed to protecting your personal information. 
        This Privacy Policy explains how we collect, use, and safeguard the information you provide when you visit or use our website and services.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Personal Information:</strong> Name, email, phone, company details, and other info you provide.</li>
          <li><strong>Non-Personal Information:</strong> Browser type, device info, IP address, pages visited, and usage patterns collected via cookies and analytics.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Providing and improving our services.</li>
          <li>Responding to inquiries and support requests.</li>
          <li>Sending updates, newsletters, or promotional content (with your consent).</li>
          <li>Analyzing website usage and improving user experience.</li>
          <li>Complying with legal obligations.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Cookies and Tracking</h2>
        <p className="text-gray-700">
          We use cookies and similar technologies to enhance your experience, analyze traffic, and customize content. 
          You can disable cookies in your browser settings, though some features may not function properly.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Sharing Your Information</h2>
        <p className="text-gray-700">
          We do <strong>not sell or rent</strong> your personal information. We may share info with trusted service providers, 
          to comply with legal requirements, or to protect our rights and safety.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Data Security</h2>
        <p className="text-gray-700">
          We implement reasonable security measures to protect your personal info. However, no method of transmission or storage is 100% secure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Your Rights</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Access and request a copy of your personal information.</li>
          <li>Request correction or deletion of your personal information.</li>
          <li>Withdraw consent for marketing communications at any time.</li>
        </ul>
        <p className="text-gray-700 mt-2">Contact us at <a href="mailto:contact@invertio.com" className="text-blue-600 underline">contact@invertio.com</a> to exercise your rights.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Third-Party Links</h2>
        <p className="text-gray-700">
          Our website may contain links to third-party websites. We are not responsible for their privacy practices. Review their privacy policies for details.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">8. Changes to This Privacy Policy</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. Updated versions will be posted on this page with the revised “Last Updated” date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">9. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions regarding this Privacy Policy or how your information is handled, contact us:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li><strong>Email:</strong> <a href="mailto:contact@invertio.com" className="text-blue-600 underline">contact@invertio.com</a></li>
          <li><strong>Website:</strong> <a href="https://www.invertio.com" className="text-blue-600 underline">www.invertio.com</a></li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

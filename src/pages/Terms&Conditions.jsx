// TermsConditions.jsx
import React, { useEffect } from "react";

const TermsConditions = () => {
    useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Terms & Conditions</h1>
      <p className="text-gray-600 mb-4">
        <strong>Last Updated:</strong> October 13, 2025
      </p>
      <p className="text-gray-700 mb-6">
        Welcome to Invertio. By accessing or using our website and services, you agree to comply with and be bound by the following Terms & Conditions. 
        Please read them carefully.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
        <p className="text-gray-700">
          By using Invertio’s website or services, you accept these Terms & Conditions in full. If you disagree with any part, you must not use our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Use of Services</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>You agree to use our services for lawful purposes only.</li>
          <li>You must not attempt to disrupt, hack, or misuse the website or services.</li>
          <li>Any content you provide must not infringe on the rights of others.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Intellectual Property</h2>
        <p className="text-gray-700">
          All content, designs, logos, and materials on Invertio’s website are owned by or licensed to us. You may not copy, reproduce, or distribute without prior written permission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Third-Party Links</h2>
        <p className="text-gray-700">
          Our website may contain links to third-party websites. We do not control or endorse these sites and are not responsible for their content or practices.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Limitation of Liability</h2>
        <p className="text-gray-700">
          Invertio is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or services, including any errors or omissions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Termination</h2>
        <p className="text-gray-700">
          We reserve the right to suspend or terminate access to our website or services at any time, without notice, for violations of these Terms & Conditions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Changes to Terms</h2>
        <p className="text-gray-700">
          We may update these Terms & Conditions from time to time. The updated version will be posted on this page with the revised “Last Updated” date. Continued use constitutes acceptance.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">8. Governing Law</h2>
        <p className="text-gray-700">
          These Terms & Conditions are governed by and construed in accordance with the laws applicable in your jurisdiction. Any disputes will be resolved under these laws.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">9. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions regarding these Terms & Conditions, please contact us:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li><strong>Email:</strong> <a href="mailto:contact@invertio.com" className="text-blue-600 underline">contact@invertio.com</a></li>
          <li><strong>Website:</strong> <a href="https://www.invertio.com" className="text-blue-600 underline">www.invertio.com</a></li>
        </ul>
      </section>
    </div>
  );
};

export default TermsConditions;

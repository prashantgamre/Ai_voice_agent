// pages/privacy-policy.js
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>

        <p className="mb-4 text-gray-700">
          Vauch Infotech we respects your privacy and is committed to protecting the information you share with us. 
          This Privacy Policy explains how our app <strong>AI Voice Agent</strong> collects, uses, and safeguards information when integrated with Zoho services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. About AI Voice Agent</h2>
        <p className="mb-4 text-gray-700">
          AI Voice Agent is an intelligent calling solution that helps businesses attend and manage customer calls with AI-powered capabilities. 
          It integrates with <strong>Zoho CRM and Zoho Commerce</strong> to provide real-time assistance, ensuring 24/7 availability, improved efficiency, and enhanced customer experience.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>Zoho CRM data such as contacts, leads, and product details.</li>
          <li>Basic user-provided information such as name, phone number, or email.</li>
          <li>Technical details (logs, usage patterns) to improve service performance.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Use Information</h2>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>Deliver AI-driven call management services.</li>
          <li>Provide seamless integration with Zoho CRM and Zoho Commerce.</li>
          <li>Improve service quality and user experience.</li>
          <li>Respond to customer support queries.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Sharing</h2>
        <p className="mb-4 text-gray-700">
          We do not sell, rent, or share your data with third parties. Data is accessed temporarily and only as needed for functionality.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
        <p className="mb-4 text-gray-700">
          We use industry-standard security practices to safeguard your information from unauthorized access, loss, or misuse.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. User Control</h2>
        <p className="mb-4 text-gray-700">
          You can revoke AI Voice Agent’s access from your Zoho CRM account settings at any time. 
          You may request deletion of your information by contacting us at 
          <a href="mailto:prashant.gamre@vauchinfotech.com" className="text-blue-600 underline"> prashant.gamre@vauchinfotech.com</a>.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Third-Party Services</h2>
        <p className="mb-4 text-gray-700">
          Our app relies on Zoho APIs to function. Please review Zoho’s Privacy Policy to understand how Zoho handles your data.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to This Policy</h2>
        <p className="mb-4 text-gray-700">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
        <p className="text-gray-700">
          📧 Email: <a href="mailto:prashant.gamre@vauchinfotech.com" className="text-blue-600 underline">prashant.gamre@vauchinfotech.com</a><br />
          🏢 Address: Charni Road East, Opera House, Girgaon, Mumbai, Maharashtra 400004<br />
          👨‍💻 Company: Vauch Infotech
        </p>
      </div>
    </div>
  );
}

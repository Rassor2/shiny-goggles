import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#fafaf8] border-b border-gray-100 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-green-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Home
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-500">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl prose prose-gray">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Welcome to EnergyWise Home ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We collect information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Subscribe to our newsletter</li>
              <li>Fill out a contact form</li>
              <li>Leave comments on articles</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className="text-gray-600 mb-4 leading-relaxed">
              This information may include your name, email address, and any other information you choose to provide.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Automatically Collected Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We use cookies and similar tracking technologies to collect and store information. Cookies are small data files stored on your device. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted).
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We use cookies for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Website functionality and performance</li>
              <li>Analytics and usage statistics</li>
              <li>Advertising and remarketing</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Third-Party Advertising</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We use third-party advertising companies, including Google AdSense, to serve ads when you visit our website. These companies may use information about your visits to this and other websites to provide relevant advertisements. This information does not include your name, address, email address, or telephone number.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Provide and maintain our website</li>
              <li>Send newsletters and updates (with your consent)</li>
              <li>Respond to inquiries and support requests</li>
              <li>Analyze usage patterns and improve our content</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Information Sharing</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Service providers who assist in operating our website</li>
              <li>Analytics providers</li>
              <li>Advertising partners</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Your Rights</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Depending on your location, you may have rights including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Access to your personal data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Data Security</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date. We encourage you to review this Privacy Policy periodically.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If you have questions about this Privacy Policy or our practices, please contact us at:
            </p>
            <p className="text-gray-600 mb-4">
              Email: contact@energywisehome.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;

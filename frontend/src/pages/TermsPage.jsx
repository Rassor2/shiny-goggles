import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsPage = () => {
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
              Terms of Service
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
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              By accessing and using EnergyWise Home ("the Website"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              EnergyWise Home provides informational content about home energy efficiency, heating systems, insulation, and related topics. Our content is for educational and informational purposes only and should not be considered professional advice.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property of EnergyWise Home or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              You may:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>View and read content for personal, non-commercial use</li>
              <li>Share links to our articles on social media</li>
              <li>Quote brief excerpts with proper attribution</li>
            </ul>
            <p className="text-gray-600 mb-4 leading-relaxed">
              You may not:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Reproduce, distribute, or republish content without permission</li>
              <li>Use content for commercial purposes without authorization</li>
              <li>Modify or create derivative works from our content</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The information provided on EnergyWise Home is for general informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>The completeness, accuracy, or reliability of information</li>
              <li>The suitability of information for your particular situation</li>
              <li>The availability or uninterrupted access to the website</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              EnergyWise Home shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Your use of or inability to use the website</li>
              <li>Any errors or omissions in content</li>
              <li>Actions taken based on information provided</li>
              <li>Any unauthorized access to or use of our servers</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Professional Advice Disclaimer</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Content on this website is not intended to replace professional advice from qualified contractors, engineers, or energy auditors. Always consult with appropriate professionals before making significant decisions about home improvements, heating systems, or energy installations.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Third-Party Links</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party sites. Visiting linked sites is at your own risk.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. User Conduct</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit viruses or malicious code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Engage in any activity that disrupts website functionality</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Advertising</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our website displays advertisements from third-party ad networks. These advertisements are clearly distinguished from editorial content. We are not responsible for the content of these advertisements or the products/services they promote.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Modifications to Terms</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the website following changes constitutes acceptance of the revised terms.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">11. Governing Law</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">12. Contact Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              For questions about these Terms of Service, please contact us at:
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

export default TermsPage;

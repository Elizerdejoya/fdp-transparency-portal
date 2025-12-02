'use client';

import { useState } from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: '', organization: '', email: '', message: '' });
    }, 1000);
  };

  const researchers = [
    {
      name: 'Ashley Gwyneth Pananana',
      email: 'panapanaanashleygwyneth@gmail.com',
      role: 'Research Lead',
    },
    {
      name: 'Noreen Lee Sulabo',
      email: 'noreleesulabo09@gmail.com',
      role: 'Data Analyst',
    },
    {
      name: 'Landichoanna Kathrina',
      email: 'landichoannakathrina@gmail.com',
      role: 'Research Coordinator',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">📩 Feedback and Contact</h1>
          <p className="text-xl text-pink-100">
            We value your input and suggestions for improving this platform
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-pink-50 border-l-4 border-pink-600 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">We Welcome Your Feedback</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Help us improve the FDP Transparency Portal by sending your suggestions, corrections, or additional
              data. Your input from LGU officials, finance officers, planners, and citizens is invaluable in making
              this platform more useful and impactful.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Research Team</h2>

            <div className="space-y-6">
              {researchers.map((researcher, index) => (
                <div key={index} className="bg-white border-2 border-pink-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{researcher.name}</h3>
                  <p className="text-pink-600 font-semibold text-sm mb-3">{researcher.role}</p>
                  <a
                    href={`mailto:${researcher.email}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Mail size={16} />
                    <span className="text-sm break-all">{researcher.email}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Quick Info */}
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-800 mb-3">Response Time</h3>
              <p className="text-gray-700 text-sm">
                We typically respond to feedback within 3-5 business days. For urgent matters, please indicate priority in
                your message.
              </p>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Your Feedback</h2>

            {submitted ? (
              <div className="bg-green-50 border-2 border-green-600 rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700 mb-6">
                  Your feedback has been successfully submitted. We appreciate your input and will review it shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Submit Another Feedback
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border-2 border-gray-200 rounded-lg p-8 space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-bold text-gray-800 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-600 transition-colors"
                  />
                </div>

                {/* Organization */}
                <div>
                  <label htmlFor="organization" className="block font-bold text-gray-800 mb-2">
                    LGU / Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your LGU or organization name"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-600 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-bold text-gray-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-600 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-bold text-gray-800 mb-2">
                    Message / Feedback *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Please share your feedback, suggestions, corrections, or additional data..."
                    rows={6}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-pink-600 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-pink-600 text-white font-bold py-3 rounded-lg hover:bg-pink-700 transition-colors disabled:bg-gray-400 flex items-center justify-center gap-2"
                >
                  <MessageSquare size={20} />
                  {loading ? 'Sending...' : 'Send Feedback'}
                </button>

                <p className="text-gray-600 text-sm text-center">
                  * Required fields. Your feedback will be kept confidential.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Types of Feedback */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Types of Feedback We Welcome</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">✓ Suggestions for Improvement</h3>
              <p className="text-gray-700">
                Have ideas for making the platform more useful? We'd love to hear your suggestions for features,
                content, or functionality.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">✓ Data Corrections</h3>
              <p className="text-gray-700">
                If you notice any inaccuracies in our data or findings, please let us know with details so we can
                verify and correct them.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">✓ Additional Data</h3>
              <p className="text-gray-700">
                Have additional information or data from your LGU? We're interested in updates and new cases for future
                analysis.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">✓ Technical Issues</h3>
              <p className="text-gray-700">
                Experiencing technical problems with the portal? Please describe the issue and let us help resolve it
                quickly.
              </p>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-600 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">✓ Success Stories</h3>
              <p className="text-gray-700">
                Share stories of how your LGU used transparency to improve fiscal management. We'd like to feature
                success stories.
              </p>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-600 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">✓ General Comments</h3>
              <p className="text-gray-700">
                Any other comments or questions about FDP, transparency, or fiscal management? We're open to all
                constructive feedback.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Notice */}
        <section>
          <div className="bg-gray-50 border-l-4 border-gray-600 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Privacy Notice</h2>
            <p className="text-gray-700 leading-relaxed">
              All feedback submitted through this form will be treated confidentially. Your personal information will
              not be shared with third parties without your consent. We use your feedback solely for improving this
              portal and our research. By submitting feedback, you acknowledge that you have read and agree to our
              privacy practices.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

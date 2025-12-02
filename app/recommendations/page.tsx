'use client';

import { CheckCircle, Users, BarChart3, MessageSquare, Lightbulb } from 'lucide-react';

export default function Recommendations() {
  const recommendations = [
    {
      title: 'Improve Internal Financial Reporting Systems',
      items: [
        'Standardize documentation and reporting formats',
        'Adopt centralized digital filing systems',
        'Conduct quarterly internal audits',
      ],
    },
    {
      title: 'Capacity-Building for Staff',
      items: [
        'Regular training on FDP requirements',
        'Workshops on SRE preparation, procurement documentation, and COA rules',
      ],
    },
    {
      title: 'Leverage Digital Tools',
      items: [
        'Use automated reminders and posting systems',
        'Develop LGU-level dashboards to track compliance',
      ],
    },
    {
      title: 'Promote Citizen-Friendly Communication',
      items: [
        'Convert technical reports into infographics',
        'Host transparency forums and barangay-level postings',
      ],
    },
    {
      title: 'Replicate Best Practices of High-Performing LGUs',
      items: [
        'Adopt Calaca’s economic investment planning',
        'Follow Batangas City’s strict compliance calendar',
        'Emulate Tanauan’s social development prioritization',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">📌 Recommendations for Strengthening FDP Compliance</h1>
          <p className="text-xl text-green-100">
            Practical strategies to enhance fiscal performance and financial management
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-red-50 border-l-4 border-red-600 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why These Recommendations?</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Based on our five-year study of Batangas LGUs (2019–2023), the following recommendations are
              designed to help Local Government Units strengthen their FDP compliance, improve financial
              management, and achieve better fiscal outcomes.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              These evidence-based strategies address both systemic challenges and opportunities for improvement,
              drawing insights from high-performing LGUs and documented best practices in fiscal transparency.
            </p>
          </div>
        </section>

        {/* Main Recommendations */}
        <div className="space-y-8 mb-16">
          {recommendations.map((rec, index) => {
            const letter = String.fromCharCode(65 + index); // A, B, C...
            return (
              <div key={index} className="bg-white border-l-4 border-green-600 rounded-lg p-6 shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-2xl font-bold text-green-700">{letter}.</div>
                  <h2 className="text-2xl font-bold text-gray-800">{rec.title}</h2>
                </div>

                <ul className="list-disc list-inside text-gray-700 ml-6 space-y-2">
                  {rec.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Implementation Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Suggested Implementation Timeline</h2>

          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 flex-shrink-0">Q1</div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">Quarter 1: Assessment & Planning</h3>
                <p className="text-gray-700">
                  Audit current systems, identify gaps in compliance, and develop an implementation roadmap
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded-lg">
              <div className="text-3xl font-bold text-green-600 flex-shrink-0">Q2</div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">Quarter 2: System Upgrade & Training</h3>
                <p className="text-gray-700">
                  Implement digital tools, standardize documentation formats, and conduct staff training programs
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 flex-shrink-0">Q3</div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">Quarter 3: Pilot & Refinement</h3>
                <p className="text-gray-700">
                  Test new systems with key departments, gather feedback, and refine processes before full rollout
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 flex-shrink-0">Q4</div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">Quarter 4: Full Implementation & Monitoring</h3>
                <p className="text-gray-700">
                  Launch complete system, monitor compliance, and establish ongoing quality assurance mechanisms
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Success Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Key Success Metrics</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📊</span> Compliance Metrics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ FDP compliance rate (target: 95%+)</li>
                <li>✓ Document submission timeliness</li>
                <li>✓ Quality and completeness of reports</li>
                <li>✓ Audit findings and corrections</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📈</span> Performance Metrics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Revenue collection improvement</li>
                <li>✓ Expenditure efficiency ratios</li>
                <li>✓ Debt service management</li>
                <li>✓ Public trust indicators</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">👥</span> Engagement Metrics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Citizen awareness of FDP</li>
                <li>✓ Public forum participation</li>
                <li>✓ Feedback and complaints processed</li>
                <li>✓ Community satisfaction scores</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚙️</span> Operational Metrics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Staff training completion rates</li>
                <li>✓ System uptime and reliability</li>
                <li>✓ Cost efficiency of implementation</li>
                <li>✓ Document access statistics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Moving Forward */}
        <section>
          <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-600 p-6 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Moving Forward</h2>
            <p className="text-gray-700">
              Implement these recommendations, monitor compliance, and evaluate outcomes regularly to ensure sustained
              improvements in FDP compliance and fiscal performance.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

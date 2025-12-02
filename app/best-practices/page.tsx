'use client';

import { Star, Target, TrendingUp } from 'lucide-react';

const lguBestPractices = [
  {
    name: 'Calaca City',
    icon: '📈',
    color: 'from-orange-500 to-orange-600',
    strengths: [
      'Strong and growing Locally Sourced Revenue per Capita',
      'High Economic Expenditure Ratio reflecting investment in local development',
      'Consistent FDP compliance',
    ],
    practices: [
      'Robust revenue collection strategies',
      'Prioritization of economic programs that stimulate growth',
      'Strong internal controls and financial reporting',
    ],
  },
  {
    name: 'Batangas City',
    icon: '⭐',
    color: 'from-yellow-500 to-yellow-600',
    strengths: [
      '100% FDP compliance across years',
      'Seal of Good Financial Housekeeping awardee',
      'Stable revenue base',
    ],
    practices: [
      'Efficient budget execution',
      'Transparent procurement processes',
      'Well-trained financial management personnel',
    ],
  },
  {
    name: 'Tanauan City',
    icon: '🏥',
    color: 'from-green-500 to-green-600',
    strengths: [
      'High social expenditure ratios reflecting strong focus on health, education, and welfare',
      'Balanced financial performance with manageable debt levels',
      'Transparent disclosures and citizen-focused budgeting',
    ],
    practices: [
      'Community-driven planning processes',
      'Timely budget preparation',
      'Responsible debt and fiscal risk management',
    ],
  },
];

export default function BestPractices() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">🏅 Best Practices from High-Performing LGUs</h1>
          <p className="text-xl text-green-100">
            Valuable lessons from Batangas LGUs with exemplary transparency and fiscal management
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Certain Batangas LGUs consistently demonstrated strong financial performance and high FDP compliance
              from 2019–2023. Their experiences offer valuable lessons that other LGUs may replicate to enhance
              transparency and fiscal management.
            </p>
          </div>
        </section>

        {/* LGU Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {lguBestPractices.map((lgu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${lgu.color} h-24 flex items-center justify-center`}>
                <span className="text-6xl">{lgu.icon}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{lgu.name}</h3>

                {/* Strengths */}
                <div className="mb-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                    <Star size={20} className="text-amber-500" />
                    Key Strengths
                  </h4>
                  <ul className="space-y-2">
                    {lgu.strengths.map((strength, idx) => (
                      <li key={idx} className="text-gray-600 text-sm leading-relaxed">
                        <span className="text-amber-500 font-bold">•</span> {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best Practices */}
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                    <Target size={20} className="text-green-500" />
                    Best Practices
                  </h4>
                  <ul className="space-y-2">
                    {lgu.practices.map((practice, idx) => (
                      <li key={idx} className="text-gray-600 text-sm leading-relaxed">
                        <span className="text-green-500 font-bold">✓</span> {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Common Traits Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Common Traits of High-Performing LGUs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-blue-900 mb-4 flex items-center gap-2">
                <TrendingUp size={24} />
                Operational Excellence
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Strong FDP compliance</li>
                <li>✓ Stable or increasing revenue trends</li>
                <li>✓ Clear documentation practices and timely reporting</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-green-900 mb-4 flex items-center gap-2">
                <Target size={24} />
                Strategic Planning
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Balanced expenditures toward economic and social services</li>
                <li>✓ Prudent debt and investment management</li>
                <li>✓ Evidence-based decision-making</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">How to Replicate These Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl font-bold text-amber-600 mb-3">1</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Adopt Economic Investment Approaches</h3>
              <p className="text-gray-600">
                Learn from Calaca City's robust revenue collection strategies and economic programs that stimulate
                growth
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl font-bold text-amber-600 mb-3">2</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Follow Strict Compliance Calendar</h3>
              <p className="text-gray-600">
                Implement Batangas City's efficient budget execution and transparent procurement processes
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-4xl font-bold text-amber-600 mb-3">3</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Prioritize Social Development</h3>
              <p className="text-gray-600">
                Emulate Tanauan's social development prioritization and community-driven planning processes
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

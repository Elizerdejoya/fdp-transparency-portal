'use client';

import { ArrowRight } from 'lucide-react';

export default function Framework() {
  const frameworkSteps = [
    {
      step: '1',
      title: 'FDP Compliance',
      description: 'LGUs consistently publish accurate and timely financial documents',
      icon: '📋',
      color: 'from-blue-500 to-blue-600',
    },
    {
      step: '2',
      title: 'Accessible Information',
      description: 'Citizens gain easy access to government financial data and reports',
      icon: '🔓',
      color: 'from-green-500 to-green-600',
    },
    {
      step: '3',
      title: 'Public Accountability',
      description: 'Officials are held to higher standards through public scrutiny',
      icon: '⚖️',
      color: 'from-purple-500 to-purple-600',
    },
    {
      step: '4',
      title: 'Improved Decision-Making',
      description: 'Decision-making becomes more grounded in data and evidence',
      icon: '🎯',
      color: 'from-orange-500 to-orange-600',
    },
    {
      step: '5',
      title: 'Stronger Financial Performance',
      description: 'Results in better revenue, spending, debt management, and public trust',
      icon: '📈',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const impacts = [
    {
      category: 'Economic Impact',
      items: [
        'Improved revenue mobilization',
        'Efficient resource allocation',
        'Reduced fiscal risks',
        'Better investment planning',
      ],
      icon: '💰',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-600',
    },
    {
      category: 'Social Impact',
      items: [
        'Enhanced public trust',
        'Increased civic engagement',
        'Better public services',
        'Strengthened accountability',
      ],
      icon: '👥',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-600',
    },
    {
      category: 'Governance Impact',
      items: [
        'Corruption prevention',
        'Evidence-based policies',
        'Professional governance',
        'Long-term sustainability',
      ],
      icon: '🏛️',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-600',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">🔍 Transparency-to-Performance Framework</h1>
          <p className="text-xl text-green-100">
            How Transparency Drives Better Financial Performance
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Framework Flowchart */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">The Five-Step Framework</h2>

          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between gap-2 mb-12">
              {frameworkSteps.map((item, index) => (
                <div key={index} className="flex-1 flex items-center">
                  {/* Step Box */}
                  <div className={`bg-gradient-to-br ${item.color} rounded-lg p-6 text-white flex-1 min-h-40 flex flex-col justify-center shadow-lg`}>
                    <div className="text-3xl font-bold mb-2 text-white/80">{item.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>

                  {/* Arrow */}
                  {index < frameworkSteps.length - 1 && (
                    <div className="flex-shrink-0 px-3">
                      <ArrowRight size={32} className="text-purple-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-4">
            {frameworkSteps.map((item, index) => (
              <div key={index}>
                <div
                  className={`bg-gradient-to-br ${item.color} rounded-lg p-6 text-white shadow-lg`}
                >
                  <div className="text-3xl font-bold mb-2 text-white/80">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2">Step {item.step}: {item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
                {index < frameworkSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight size={24} className="text-purple-600 transform rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Framework Explanation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Understanding the Framework</h2>
          <div className="bg-purple-50 border-l-4 border-purple-600 p-8 rounded-lg">
            <p className="text-gray-700 text-lg leading-relaxed">
              The Transparency-to-Performance Framework explains how adherence to the Full Disclosure Policy
              enables better governance outcomes. When LGUs consistently publish accurate and timely financial
              documents, citizens gain access to information, officials are held to higher standards, and
              decision-making becomes more grounded in data. Over time, this leads to improved revenue
              mobilization, efficient spending, stronger debt management, and increased public trust.
            </p>
          </div>
        </section>

        {/* Key Components */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Framework Components</h2>

          <div className="space-y-4 mb-12">
            <div className="flex gap-4 p-6 bg-white border-2 border-blue-200 rounded-lg">
              <div className="text-3xl flex-shrink-0">📋</div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">Input: Documentation & Compliance</h3>
                <p className="text-gray-600">
                  LGUs actively compile and publicly disclose required financial documents, budget reports, and
                  procurement information
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white border-2 border-green-200 rounded-lg">
              <div className="text-3xl flex-shrink-0">🔓</div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">Process: Accessibility & Awareness</h3>
                <p className="text-gray-600">
                  Information is readily available through official portals, websites, and public spaces, enabling
                  citizen awareness and engagement
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white border-2 border-purple-200 rounded-lg">
              <div className="text-3xl flex-shrink-0">⚖️</div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">Mechanism: Accountability & Oversight</h3>
                <p className="text-gray-600">
                  Public scrutiny and citizen participation create natural checks on official conduct, promoting
                  responsible governance
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white border-2 border-orange-200 rounded-lg">
              <div className="text-3xl flex-shrink-0">🎯</div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">Outcome: Evidence-Based Decisions</h3>
                <p className="text-gray-600">
                  Data-driven insights enable officials to make strategic, well-informed decisions that align with
                  community needs
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white border-2 border-pink-200 rounded-lg">
              <div className="text-3xl flex-shrink-0">📈</div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">Result: Stronger Financial Performance</h3>
                <p className="text-gray-600">
                  Better revenue generation, efficient spending, lower debt burdens, and sustainable development
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impacts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Multi-Dimensional Impacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impacts.map((impact, index) => (
              <div key={index} className={`${impact.bgColor} border-l-4 ${impact.borderColor} rounded-lg p-6`}>
                <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-3xl">{impact.icon}</span>
                  {impact.category}
                </h3>
                <ul className="space-y-2">
                  {impact.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Success Factors */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Critical Success Factors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-6">
              <h3 className="font-bold text-lg text-green-900 mb-4">For LGUs</h3>
              <ul className="space-y-2 text-green-800">
                <li>✓ Consistent and timely document publication</li>
                <li>✓ User-friendly information presentation</li>
                <li>✓ Regular training of financial staff</li>
                <li>✓ Integration of digital systems</li>
                <li>✓ Active stakeholder engagement</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-lg p-6">
              <h3 className="font-bold text-lg text-blue-900 mb-4">For Citizens</h3>
              <ul className="space-y-2 text-blue-800">
                <li>✓ Active monitoring of public information</li>
                <li>✓ Informed participation in governance</li>
                <li>✓ Constructive feedback mechanisms</li>
                <li>✓ Support for transparent initiatives</li>
                <li>✓ Engagement in accountability processes</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

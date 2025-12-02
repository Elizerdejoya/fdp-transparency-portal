import Link from 'next/link';
import { TrendingUp, Users, BarChart3, CheckCircle } from 'lucide-react';

export default function Home() {
  const featuredLGUs = [
    {
      name: 'Calaca City',
      description: 'Recognized for consistently strong local revenue generation and strategic economic investments.',
      icon: '📈',
    },
    {
      name: 'Batangas City',
      description:
        'Maintains complete FDP compliance and strong financial management, earning repeated national recognition.',
      icon: '⭐',
    },
    {
      name: 'Tanauan City',
      description:
        'Known for strong social services spending and solid fiscal stability throughout the five-year period.',
      icon: '🏥',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Strengthening Fiscal Transparency in Batangas LGUs (2019–2023)
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            A Digital Platform for Strengthening Fiscal Transparency and Financial Performance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/study-findings"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors"
            >
              Explore Findings
            </Link>
            <Link
              href="/about-fdp"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
            >
              Learn About FDP
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome to the FDP Transparency Portal</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to the FDP Transparency Portal, an evidence-based digital platform designed to help Local Government Units (LGUs) in Batangas strengthen fiscal transparency, accountability, and financial management. Drawing on five years of data, the portal showcases how compliance with the Full Disclosure Policy (FDP) contributes to improved revenue generation, responsible spending, better debt management, and enhanced public trust.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Explore interactive dashboards, LGU performance profiles, and key findings from our study to understand how transparency drives better fiscal outcomes and supports long-term local development.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6 text-center">
            <TrendingUp className="text-blue-600 mx-auto mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">5 Years</h3>
            <p className="text-gray-600">of Data Analysis (2019–2023)</p>
          </div>
          <div className="bg-white border-2 border-green-200 rounded-lg p-6 text-center">
            <Users className="text-green-600 mx-auto mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">Multiple LGUs</h3>
            <p className="text-gray-600">Comprehensive Coverage</p>
          </div>
          <div className="bg-white border-2 border-purple-200 rounded-lg p-6 text-center">
            <BarChart3 className="text-purple-600 mx-auto mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">Rich Analytics</h3>
            <p className="text-gray-600">Interactive Visualizations</p>
          </div>
          <div className="bg-white border-2 border-orange-200 rounded-lg p-6 text-center">
            <CheckCircle className="text-orange-600 mx-auto mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">Best Practices</h3>
            <p className="text-gray-600">Evidence-Based Insights</p>
          </div>
        </div>
      </section>

      {/* Featured High-Performing LGUs */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Featured High-Performing LGUs</h2>
          <p className="text-center text-gray-600 mb-12">
            Highlighting LGUs that demonstrated exemplary transparency and fiscal discipline:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredLGUs.map((lgu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-green-500 to-green-600 h-24 flex items-center justify-center">
                  <span className="text-6xl">{lgu.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{lgu.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{lgu.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/best-practices"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              View All Best Practices
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Ready to Explore?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Dive into our comprehensive analysis of fiscal transparency and financial performance
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/study-findings"
              className="bg-blue-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              📊 Study Findings
            </Link>
            <Link
              href="/about-fdp"
              className="bg-green-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-green-700 transition-colors"
            >
              📋 About FDP
            </Link>
            <Link
              href="/framework"
              className="bg-purple-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-purple-700 transition-colors"
            >
              🔍 Framework
            </Link>
            <Link
              href="/recommendations"
              className="bg-orange-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-orange-700 transition-colors"
            >
              📌 Recommendations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import { CheckCircle } from 'lucide-react';

export default function AboutFDP() {
  const annualReports = [
    'Annual Budget Report',
    'Annual Gender and Development Accomplishment Report',
    'Annual Procurement Plan or Procurement List',
    'Statement of Debt Service',
    'Statement of Receipts and Expenditures',
    'Supplemental Procurement Plan',
  ];

  const quarterlyReports = [
    '20% Component of the Internal Revenue Allotment Utilization',
    'Bid Results on Civil Works, Goods and Services, and Consulting Services',
    'Local Disaster Risk Reduction and Management Fund Utilization (LDRRMF)',
    'Quarterly Statement of Cash Flow',
    'Report of Special Education Fund Utilization',
    'Trust Fund Utilization',
    'Human Resource Complement',
    'Unliquidated Cash Advances',
  ];

  const legalBasis = [
    {
      title: 'DILG Memorandum Circular 2010-083',
      description: 'Initial guidelines for disclosure',
    },
    {
      title: 'DILG Memorandum Circular 2019-149',
      description: 'Updated posting requirements',
    },
    {
      title: 'DILG Memorandum Circular 2024-021',
      description: 'Enhanced compliance mechanisms',
    },
  ];

  const transparenceImportance = [
    { title: 'Building Public Trust', description: 'Transparency strengthens confidence in government institutions' },
    { title: 'Preventing Corruption', description: 'Public scrutiny deters misconduct and fraud' },
    { title: 'Responsible Resource Allocation', description: 'Ensures public funds are used efficiently' },
    { title: 'Citizen Participation', description: 'Allows citizens to monitor progress and raise concerns' },
    { title: 'Data-Driven Policies', description: 'Enables evidence-based decision making' },
    { title: 'Sustainable Development', description: 'Supports long-term local development initiatives' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Understanding the Full Disclosure Policy (FDP)</h1>
          <p className="text-xl text-green-100">
            A transparency initiative strengthening government accountability
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* What is FDP */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">What is FDP?</h2>
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
            <p className="text-gray-700 text-lg leading-relaxed">
              The Full Disclosure Policy (FDP) is a transparency initiative of the Department of the Interior
              and Local Government (DILG) requiring LGUs to publicly disclose key financial and procurement
              documents. These include budgets, financial statements, procurement summaries, and special purpose
              fund reports. The policy ensures that government transactions remain open to citizens, strengthening
              accountability and enabling informed participation in local governance.
            </p>
          </div>
        </section>

        {/* Legal Basis */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Legal Basis</h2>
          <p className="text-gray-600 mb-6">FDP is anchored on the following DILG Memorandum Circulars:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {legalBasis.map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-lg text-green-700 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Required Documents */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Required Documents</h2>
          <p className="text-gray-600 mb-6">
            LGUs must regularly disclose the following documents to ensure transparency:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Annual Reports Column */}
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">Annual Reports</h3>
              <div className="space-y-3">
                {annualReports.map((doc, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg border border-gray-200">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quarterly Reports Column */}
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-4">Quarterly Reports</h3>
              <div className="space-y-3">
                {quarterlyReports.map((doc, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg border border-gray-200">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Where to Post */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Where Should LGUs Post the Documents?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-blue-700 mb-2">FDP Portal (FDPP)</h3>
              <p className="text-gray-700">Official digital platform for document submission and public access</p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-purple-700 mb-2">Official LGU Websites</h3>
              <p className="text-gray-700">Accessible via LGU official digital presence</p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-orange-700 mb-2">Public Bulletin Boards</h3>
              <p className="text-gray-700">Physical postings in conspicuous public places</p>
            </div>
          </div>
        </section>

        {/* Why Transparency Matters */}
        <section>
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Why Transparency Matters</h2>
          <p className="text-gray-600 mb-8">
            Transparency is essential for good governance and social development:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transparenceImportance.map((item, index) => (
              <div key={index} className="bg-white border-2 border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg text-green-700 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

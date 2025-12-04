'use client';

import { Download, FileText, Link as LinkIcon } from 'lucide-react';

export default function Resources() {
  // Two approved downloads (hosted on Google Drive) — buttons point to direct-download URLs
  const resources = [
    {
      title: "Assessing the Effects of Full Disclosure Policy Compliance on the Financial Performance of Local Government Units (LGUs) in Batangas",
      description: 'Full research report (PDF)',
      downloadUrl: 'https://drive.google.com/file/d/1oEHrvE4Gsi0oMg0WELM-2l5goaqkGNs2/view?usp=sharing',
      format: 'PDF',
      size: '12 MB',
    },
    {
      title: "Proposed IEC Material on the Effects of FDP Compliance to Batangas LGUs' Financial Performance",
      description: 'Proposed IEC material (PDF)',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=1ZRoVg6WDEPRLCr1GJf6-MLQNzMVPw6GO',
      format: 'PDF',
      size: '3 MB',
    },
  ];

  const externalResources = [
    {
      title: 'FDP Portal (FDPP)',
      description: 'Official government platform for FDP document submission and public access',
      url: '#',
      category: 'Government Platform',
    },
    {
      title: 'DILG Official Website',
      description: 'Department of Interior and Local Government official resources and guidelines',
      url: '#',
      category: 'Government Resource',
    },
    {
      title: 'COA Portal',
      description: 'Commission on Audit portal for accessing audit reports and guidelines',
      url: '#',
      category: 'Government Resource',
    },
    {
      title: 'LGU Directory',
      description: 'Directory of Batangas LGUs with contact information',
      url: '#',
      category: 'Reference',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">📥 Resources and Downloads</h1>
          <p className="text-xl text-green-100">
            Access research documents, guides, and tools to strengthen FDP compliance
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Download Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Available Downloads</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gray-100 rounded-lg p-3 flex-shrink-0">
                    <FileText size={24} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800">{resource.title}</h3>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>📄 {resource.format}</span>
                    <span>💾 {resource.size}</span>
                  </div>
                  <a
                    href={resource.downloadUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* External resources removed per request */}
      </div>
    </div>
  );
}

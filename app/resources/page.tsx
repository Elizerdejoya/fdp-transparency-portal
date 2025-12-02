'use client';

import { Download, FileText, Link as LinkIcon } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      title: 'Full Study Report (2019-2023)',
      description: 'Comprehensive research document analyzing FDP compliance and financial performance across Batangas LGUs',
      icon: <FileText size={24} className="text-blue-600" />,
      format: 'PDF',
      size: '12 MB',
    },
    {
      title: 'FDP Compliance Checklist',
      description: 'Quick reference guide for LGU officials on required documents and posting timelines',
      icon: <FileText size={24} className="text-green-600" />,
      format: 'PDF',
      size: '2 MB',
    },
    {
      title: 'Data Analysis Spreadsheet',
      description: 'Excel workbook with detailed financial metrics, trends, and performance indicators by LGU',
      icon: <FileText size={24} className="text-purple-600" />,
      format: 'XLSX',
      size: '5 MB',
    },
    {
      title: 'Best Practices Manual',
      description: 'Detailed guide on implementing best practices from high-performing LGUs',
      icon: <FileText size={24} className="text-orange-600" />,
      format: 'PDF',
      size: '8 MB',
    },
    {
      title: 'Training Materials Package',
      description: 'Presentation slides and training guides for staff capacity-building',
      icon: <FileText size={24} className="text-red-600" />,
      format: 'ZIP',
      size: '25 MB',
    },
    {
      title: 'Digital Tools Implementation Guide',
      description: 'Step-by-step instructions for implementing digital FDP posting systems',
      icon: <FileText size={24} className="text-indigo-600" />,
      format: 'PDF',
      size: '6 MB',
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
                    {resource.icon}
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
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* External Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">External Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {externalResources.map((resource, index) => (
              <div key={index} className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                    <LinkIcon size={24} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-blue-600 font-semibold">{resource.category}</span>
                    <h3 className="font-bold text-lg text-gray-800">{resource.title}</h3>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                  </div>
                </div>

                <a
                  href={resource.url}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mt-4"
                >
                  <LinkIcon size={16} />
                  Visit Resource
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <details className="bg-white border-2 border-gray-200 rounded-lg p-6 cursor-pointer group">
              <summary className="font-bold text-lg text-gray-800 flex items-center justify-between">
                What documents are covered in the full study report?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                The full study report includes comprehensive analysis of FDP compliance rates, financial performance
                indicators (LSRPC, TEPC, DSR, SER, EER), trends across all Batangas LGUs for 2019-2023, and
                comparative analysis between cities and municipalities.
              </p>
            </details>

            <details className="bg-white border-2 border-gray-200 rounded-lg p-6 cursor-pointer group">
              <summary className="font-bold text-lg text-gray-800 flex items-center justify-between">
                How can I use the compliance checklist?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                The compliance checklist provides a quick reference for tracking required document submissions,
                deadlines, and compliance status. It can be used monthly or quarterly to ensure your LGU stays on track
                with FDP requirements.
              </p>
            </details>

            <details className="bg-white border-2 border-gray-200 rounded-lg p-6 cursor-pointer group">
              <summary className="font-bold text-lg text-gray-800 flex items-center justify-between">
                Where can I access the FDPP portal to submit documents?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                The FDP Portal (FDPP) is accessible through the official government platform. Contact your LGU's
                finance office for login credentials and technical support.
              </p>
            </details>

            <details className="bg-white border-2 border-gray-200 rounded-lg p-6 cursor-pointer group">
              <summary className="font-bold text-lg text-gray-800 flex items-center justify-between">
                Can I modify or redistribute these resources?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                These resources are provided for educational and compliance purposes. Redistribution is allowed with
                proper attribution to the original research team. Modifications for LGU-specific use are encouraged.
              </p>
            </details>

            <details className="bg-white border-2 border-gray-200 rounded-lg p-6 cursor-pointer group">
              <summary className="font-bold text-lg text-gray-800 flex items-center justify-between">
                How often are these resources updated?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Resources are updated annually to reflect new policy changes, updated DILG guidelines, and emerging
                best practices. Subscribe to our mailing list for update notifications.
              </p>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
}

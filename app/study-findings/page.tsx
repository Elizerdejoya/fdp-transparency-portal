 'use client';

import Image from 'next/image';

export default function StudyFindings() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">📊 Does Transparency Improve Financial Performance?</h1>
          <p className="text-xl text-green-100">
            This section presents the key findings of the study through interactive graphs and tables. Visualizations
            illustrate the trends in financial performance indicators from 2019–2023 and how these relate to FDP
            compliance rates across Batangas LGUs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Significant Findings Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Significant Findings</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              Below are the main indicators visualized and the study's interpretations. Each figure is shown as a
              ready-to-view image for quick reference; click images to open the full-size asset in a new tab.
            </p>
          </div>
        </section>

        {/* LSRPC image + text */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Locally Sourced Revenue per Capita (LSRPC) and Total Expenditure per Capita (TEPC)</h3>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6 flex justify-center">
            <a href="/images/lsrpc.png" target="_blank" rel="noreferrer" className="w-full">
              <Image src="/images/lsrpc.png" alt="LSRPC and TEPC" width={1200} height={480} className="w-full h-auto max-w-4xl object-contain mx-auto" />
            </a>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              LGUs with higher FDP compliance generally demonstrated stronger performance in Locally Sourced Revenue
              per Capita (LSRPC). This suggests that transparent publication of budgets, financial statements, and
              procurement documents helped enhance fiscal credibility, encouraged better taxpayer cooperation, and
              supported improved revenue mobilization efforts. Cities such as Batangas, Calaca, and Tanauan consistently
              reported both high LSRPC values and complete FDP documentation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Furthermore, analysis of Batangas LGUs indicates that higher FDP compliance significantly increases Total
              Expenditure per Capita (TEPC), suggesting that transparent disclosure of documents promotes more
              accountable and efficient fiscal management. LGUs with stronger compliance tend to allocate more resources
              per resident, reflecting better expenditure planning and public service delivery.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Another notable finding is the widening gap between component cities and municipalities. Cities demonstrated
              stronger performance in revenue and economic spending indicators, driven by larger economies and greater
              administrative capacity. However, several municipalities with high compliance—such as San Jose or Bauan—
              performed competitively, demonstrating that transparency helps mitigate resource constraints.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <a href="/images/fdp.png" target="_blank" rel="noreferrer" className="w-full max-w-3xl">
              <Image src="/images/fdp.png" alt="FDP Compliance Trend" width={1000} height={360} className="w-full h-auto object-contain mx-auto" />
            </a>
          </div>
        </section>

        {/* Other Relevant Findings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Other Relevant Findings</h2>

          {/* 1. Revenue Indicators */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-700 mb-4">1. Revenue Indicators</h3>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 flex justify-center">
              <a href="/images/revenue.png" target="_blank" rel="noreferrer" className="w-full">
                <Image src="/images/revenue.png" alt="Revenue Indicators" width={1000} height={420} className="w-full h-auto max-w-4xl object-contain mx-auto" />
              </a>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Expansion of Fiscal Autonomy — LSRPC showed a modest recovery in 2022 (16.70%) and rose sharply in 2023
              (19.93%), the highest during the five-year period. Despite this growth, most LGUs remain heavily dependent
              on external transfers, especially the IRA/NTA. Findings show that LGUs in Batangas continue to have limited,
              yet expanding fiscal autonomy, as less than one-fifth of their total revenues are generated locally.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dependence on National Transfers (IRA/NTA) — Findings show that RRTTLR was consistently high, indicating
              most LGU revenues come from stable, recurring sources like IRA/NTA and local taxes. RRTTLR increased significantly
              during the pandemic years, reflecting reliance on national government transfers when local economic activity
              contracted. The consistently high RRTTLR suggests predictable revenue inflows but also indicates structural
              dependence on intergovernmental fiscal support.
            </p>
          </div>

          {/* 2. Expenditure Indicators */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-700 mb-4">2. Expenditure Indicators</h3>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 flex justify-center">
              <a href="/images/dser.png" target="_blank" rel="noreferrer" className="w-full">
                <Image src="/images/dser.png" alt="Expenditure Indicators (DSER/SER/EER)" width={1000} height={420} className="w-full h-auto max-w-4xl object-contain mx-auto" />
              </a>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prudent Debt Management — Low DSER values show strong debt sustainability and conservative financial behavior,
              although outliers indicate unequal fiscal capacity. The persistently low DSER indicates strong fiscal discipline,
              limited reliance on loans, and a preference for pay-as-you-go financing or dependence on intergovernmental transfers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Underinvestment in Social Development — SER trends reveal that social sectors consistently receive limited
              financial priority, which may hinder long-term human capital outcomes. Batangas LGUs invest considerably less
              in social sectors compared to national averages.
            </p>
          </div>

          {/* 3. Debt and Investment Capacity Indicators */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-700 mb-4">3. Debt and Investment Capacity Indicators</h3>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 flex justify-center">
              <a href="/images/debt.png" target="_blank" rel="noreferrer" className="w-full">
                <Image src="/images/debt.png" alt="Debt and Investment Capacity" width={1000} height={420} className="w-full h-auto max-w-4xl object-contain mx-auto" />
              </a>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reliable repayment ability — DSR values remained consistently above 1 across all years, indicating that LGUs
              generated more than enough regular income to cover annual debt obligations. The five-year overall mean was 2.53,
              showing strong repayment capacity even during pandemic years.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In consideration of FDP Compliance, Debt Service Ratio (DSR) trends indicate that LGUs with consistent FDP posting
              showed more responsible debt management practices. These LGUs had lower and more stable debt servicing burdens.
            </p>
          </div>

          {/* 4. Financial Management Capacity Indicator */}
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">4. Financial Management Capacity Indicator</h3>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 flex justify-center">
              <a href="/images/financial.png" target="_blank" rel="noreferrer" className="w-full">
                <Image src="/images/financial.png" alt="Financial Management Capacity" width={1000} height={420} className="w-full h-auto max-w-4xl object-contain mx-auto" />
              </a>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Net Operating Surplus to Total Revenue Ratio shows strong volatility across the five-year period, reflecting
              pandemic-driven shifts and uneven fiscal discipline among LGUs. Strengthening local financial planning and
              spending control is essential to ensure stable, well-managed public resources.
            </p>
          </div>
        </section>

        {/* Summary and Recommendations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-800 mb-3">Improvement Trend</h3>
              <p className="text-gray-700">
                Overall FDP compliance in Batangas improved across the five years, particularly after the introduction of
                enhanced digital posting through FDPP v2 and v3. LGUs became more familiar with online submission processes,
                leading to fewer missing documents and higher posting consistency.
              </p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-800 mb-3">Recommendations</h3>
              <p className="text-gray-700">
                Strengthen internal reporting systems, improve digital readiness, and sustain full compliance with FDP posting
                requirements to improve revenue generation, public confidence, and responsible spending.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

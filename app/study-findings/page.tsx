'use client';

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const studyData = [
  { year: 2019, lsrpc: 8.2, tepc: 15.3, dsr: 5.2, ser: 45, eer: 32 },
  { year: 2020, lsrpc: 8.8, tepc: 16.1, dsr: 5.8, ser: 46, eer: 33 },
  { year: 2021, lsrpc: 9.5, tepc: 17.2, dsr: 5.1, ser: 47, eer: 35 },
  { year: 2022, lsrpc: 10.2, tepc: 18.5, dsr: 4.8, ser: 48, eer: 36 },
  { year: 2023, lsrpc: 11.1, tepc: 19.8, dsr: 4.5, ser: 50, eer: 38 },
];

const complianceData = [
  { lgu: 'Batangas City', compliance: 100, lsrpc: 11.5, dsr: 3.8 },
  { lgu: 'Calaca City', compliance: 98, lsrpc: 10.8, dsr: 4.1 },
  { lgu: 'Tanauan City', compliance: 96, lsrpc: 9.9, dsr: 4.3 },
  { lgu: 'Ibaan', compliance: 92, lsrpc: 8.5, dsr: 5.2 },
  { lgu: 'Bauan', compliance: 90, lsrpc: 8.1, dsr: 5.6 },
  { lgu: 'San Jose', compliance: 88, lsrpc: 7.8, dsr: 6.1 },
];

export default function StudyFindings() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">📊 Does Transparency Improve Financial Performance?</h1>
          <p className="text-xl text-green-100">
            This section presents the key findings of the study through interactive graphs and tables. Visualizations illustrate the trends in financial performance indicators from 2019–2023 and how these relate to FDP compliance rates across Batangas LGUs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Significant Findings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Significant Findings</h2>
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              LGUs with higher FDP compliance generally demonstrated stronger performance in Locally Sourced Revenue per Capita (LSRPC). This suggests that transparent publication of budgets, financial statements, and procurement documents helped enhance fiscal credibility, encouraged better taxpayer cooperation, and supported improved revenue mobilization efforts. Cities such as Batangas, Calaca, and Tanauan consistently reported both high LSRPC values and complete FDP documentation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Furthermore, analysis of Batangas LGUs indicates that higher FDP compliance significantly increases Total Expenditure per Capita (TEPC), suggesting that transparent disclosure of documents promotes more accountable and efficient fiscal management. LGUs with stronger compliance tend to allocate more resources per resident, reflecting better expenditure planning and public service delivery. These findings align with prior studies emphasizing that transparency frameworks and digital disclosure tools enhance financial performance by supporting evidence-based budgeting and effective resource utilization.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Another notable finding is the widening gap between component cities and municipalities. Cities demonstrated stronger performance in revenue and economic spending indicators, driven by larger economies and greater administrative capacity. However, several municipalities with high compliance—such as San Jose or Bauan—performed competitively, demonstrating that transparency helps mitigate resource constraints.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg mb-3 text-gray-800">Overview</h3>
            <p className="text-gray-700 leading-relaxed">
              Overall FDP compliance in Batangas improved across the five years, especially after the introduction of enhanced digital posting through FDPP v2 and v3. LGUs became more familiar with online submission processes, leading to fewer missing documents and higher posting consistency.
            </p>
          </div>
        </section>

        {/* Other Relevant Findings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Other Relevant Findings</h2>

          {/* Revenue Indicators */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-3">1. Revenue Indicators</h3>
            <div className="bg-white rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-3">
                Expansion of Fiscal Autonomy — LSRPC showed a modest recovery in 2022 (16.70%) and rose sharply in 2023 (19.93%), the highest during the five-year period. Despite this growth, most LGUs remain heavily dependent on external transfers, especially the IRA/NTA. Findings show that LGUs in Batangas continue to have limited, yet expanding fiscal autonomy, as less than one-fifth of their total revenues are generated locally.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dependence on National Transfers (IRA/NTA) — RRTTLR was consistently high, showing that most LGU revenues come from stable, recurring sources like IRA/NTA and local taxes. RRTTLR increased significantly during the pandemic years, peaking in 2022 at 82.20%, before slightly declining to 80.04% in 2023.
              </p>
            </div>
          </div>

          {/* Expenditure Indicators */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-3">2. Expenditure Indicators</h3>
            <div className="bg-white rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-3">
                Prudent Debt Management — Low DSER values show strong debt sustainability and conservative financial behavior, although outliers indicate unequal fiscal capacity. The persistently low DSER indicates strong fiscal discipline, limited reliance on loans, and a preference for pay-as-you-go financing.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Underinvestment in Social Development — SER trends reveal that social sectors consistently receive limited financial priority, which may hinder long-term human capital outcomes. Batangas LGUs invest considerably less in social sectors—far below the national LGU average of 21% for social services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Declining Economic Investment — The downward EER trend signals decreasing budgetary emphasis on growth-oriented programs. The average EER is below the national benchmark, suggesting LGUs devote less than recommended levels to growth-driven expenditures.
              </p>
            </div>
          </div>

          {/* Debt & Investment Capacity */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-3">3. Debt and Investment Capacity Indicators</h3>
            <div className="bg-white rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-3">
                Reliable repayment ability — DSR values remained consistently above 1 across all years, indicating that LGUs generated more than enough regular income to cover annual debt obligations. The five-year overall mean was 2.53, showing strong repayment capacity even during pandemic years.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Low risk of debt repayment difficulty — GOSDSR values were consistently high across all five years, with a five-year overall mean of 5.28. This reinforces that LGUs continued to generate operating surpluses far exceeding their annual debt service requirements.
              </p>
            </div>
          </div>

          {/* Financial Management Capacity */}
          <div>
            <h3 className="text-2xl font-bold mb-3">4. Financial Management Capacity Indicator</h3>
            <div className="bg-white rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-3">
                Net Operating Surplus to Total Revenue Ratio (NOSTRR) showed strong volatility, ranging from 1.97 in 2019 to a spike of 14.24 in 2020, before declining to 5.67 in 2023. The sharp increase in 2020 reflects pandemic-driven expenditure restraint and inflows of external fiscal support.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Overall, Batangas LGUs showed highly fluctuating operating surplus performance from 2019–2023, with wide disparities across LGUs. Strengthening local financial planning and spending control is essential to ensure that every community benefits from stable, well-managed public resources.
              </p>
            </div>
          </div>
        </section>

        {/* LSRPC and TEPC Chart */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Locally Sourced Revenue & Total Expenditure per Capita</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={studyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="lsrpc" stroke="#3b82f6" strokeWidth={2} name="LSRPC" />
                <Line type="monotone" dataKey="tepc" stroke="#10b981" strokeWidth={2} name="TEPC" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-gray-800">Key Insight</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              LGUs with higher FDP compliance generally demonstrated stronger performance in Locally Sourced Revenue
              per Capita (LSRPC). This suggests that transparent publication of budgets, financial statements, and
              procurement documents helped enhance fiscal credibility, encouraged better taxpayer cooperation, and
              supported improved revenue mobilization efforts.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Furthermore, analysis indicates that higher FDP compliance significantly increases Total Expenditure per
              Capita (TEPC), suggesting that transparent disclosure promotes more accountable and efficient fiscal
              management. Cities such as Batangas, Calaca, and Tanauan consistently reported both high LSRPC values
              and complete FDP documentation.
            </p>
          </div>
        </section>

        {/* DSR Chart */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Debt Service Ratio (DSR) Trends</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={studyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="dsr" stroke="#ef4444" strokeWidth={2} name="Debt Service Ratio (%)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-gray-800">Key Insight</h3>
            <p className="text-gray-700 leading-relaxed">
              Debt Service Ratio (DSR) trends indicate that LGUs with consistent FDP posting showed more responsible
              debt management practices. These LGUs had lower and more stable debt servicing burdens, enabling more
              resources to be directed toward development initiatives. Meanwhile, LGUs with lower compliance showed
              more variability and occasional surges in debt servicing.
            </p>
          </div>
        </section>

        {/* SER and EER Chart */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Expenditure Allocation Patterns</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={studyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ser" stroke="#f59e0b" strokeWidth={2} name="Social Expenditure Ratio (%)" />
                <Line type="monotone" dataKey="eer" stroke="#8b5cf6" strokeWidth={2} name="Economic Expenditure Ratio (%)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-gray-800">Key Insight</h3>
            <p className="text-gray-700 leading-relaxed">
              Expenditure patterns reflected the influence of transparency. LGUs with higher FDP compliance tended to
              allocate spending more strategically across social and economic sectors. Increased transparency may have
              contributed to more deliberate decision-making, as displayed by the upward trends in Social and Economic
              Expenditure Ratios among compliant LGUs.
            </p>
          </div>
        </section>

        {/* LGU Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">FDP Compliance vs Financial Performance</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={complianceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="lgu" angle={-45} textAnchor="end" height={100} />
                <YAxis yAxisId="left" label={{ value: 'Compliance (%)', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="right" orientation="right" label={{ value: 'LSRPC', angle: 90, position: 'insideRight' }} />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="compliance" fill="#3b82f6" name="FDP Compliance (%)" />
                <Bar yAxisId="right" dataKey="lsrpc" fill="#10b981" name="LSRPC" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-gray-800">High-Performing LGUs Exhibit Common Traits</h3>
            <ul className="text-gray-700 space-y-2">
              <li>✓ Strong FDP compliance</li>
              <li>✓ Stable or increasing revenue trends</li>
              <li>✓ Balanced expenditures toward economic and social services</li>
              <li>✓ Prudent debt and investment management</li>
              <li>✓ Clear documentation practices and timely reporting</li>
            </ul>
          </div>
        </section>

        {/* Overall Findings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Overall Findings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-800 mb-3">Improvement Trend</h3>
              <p className="text-gray-700">
                Overall FDP compliance in Batangas improved across the five years, especially after the introduction
                of enhanced digital posting through FDPP v2 and v3. LGUs became more familiar with online submission
                processes, leading to fewer missing documents and higher posting consistency.
              </p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-800 mb-3">Recommendations</h3>
              <p className="text-gray-700">
                For LGUs, these findings highlight the importance of strengthening internal reporting systems,
                improving digital readiness, and sustaining full compliance with FDP posting requirements. Transparency
                is not only a legal mandate — it is a practical tool for improving revenue generation, boosting public
                confidence, and ensuring responsible spending.
              </p>
            </div>
          </div>
        </section>

        {/* Component City vs Municipality */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Component Cities vs Municipalities</h2>
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              A notable finding is the widening gap between component cities and municipalities. Cities demonstrated
              stronger performance in revenue and economic spending indicators, driven by larger economies and greater
              administrative capacity. However, several municipalities with high compliance—such as San Jose or Bauan—
              performed competitively, demonstrating that transparency helps mitigate resource constraints.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

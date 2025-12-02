'use client';

import Image from 'next/image';

export default function StudyFindings() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">📊 Does Transparency Improve Financial Performance?</h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
            This section presents the key findings of the study through interactive graphs and tables. Visualizations illustrate the trends
            in financial performance indicators from 2019–2023 and how these relate to FDP compliance rates across Batangas LGUs.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Significant Findings Intro */}
        <section className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">Significant Findings</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
            <p className="text-gray-700 text-sm md:text-base">
              Indicators Visualized: Locally Sourced Revenue per Capita (LSRPC) and Total Expenditure per Capita (TEPC)
            </p>
            <p className="text-gray-700 text-sm md:text-base mt-2">
              (Click images to open full-size in a new tab)
            </p>
          </div>
        </section>

        {/* LSRPC image + text */}
        <section className="mb-6">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Locally Sourced Revenue per Capita (LSRPC) and Total Expenditure per Capita (TEPC)</h3>
          <div className="bg-white rounded-lg shadow p-4 md:p-6 flex justify-center">
            <a href="/images/lsrpc.png" target="_blank" rel="noreferrer" className="w-full max-w-lg">
              <Image src="/images/lsrpc.png" alt="LSRPC and TEPC" width={700} height={260} className="w-full h-auto object-contain" />
            </a>
          </div>

          <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-gray-700 mb-3">
              “LGUs with higher FDP compliance generally demonstrated stronger performance in Locally Sourced Revenue
              per Capita (LSRPC). This suggests that transparent publication of budgets, financial statements, and
              procurement documents helped enhance fiscal credibility, encouraged better taxpayer cooperation, and
              supported improved revenue mobilization efforts. Cities such as Batangas, Calaca, and Tanauan consistently
              reported both high LSRPC values and complete FDP documentation.”
            </p>

            <p className="text-gray-700 mb-3">
              “Furthermore, analysis of Batangas LGUs indicates that higher FDP compliance significantly increases Total
              Expenditure per Capita (TEPC), suggesting that transparent disclosure of documents promotes more accountable
              and efficient fiscal management. LGUs with stronger compliance tend to allocate more resources per resident,
              reflecting better expenditure planning and public service delivery. These findings align with prior studies
              emphasizing that transparency frameworks and digital disclosure tools enhance financial performance by
              supporting evidence-based budgeting and effective resource utilization. The observed pattern among Batangas LGUs
              highlights the practical importance of FDP adherence in improving fiscal outcomes, in this case, efficient LGU
              spending per constituent.”
            </p>

            <p className="text-gray-700">
              “Another notable finding is the widening gap between component cities and municipalities. Cities demonstrated
              stronger performance in revenue and economic spending indicators, driven by larger economies and greater
              administrative capacity. However, several municipalities with high compliance—such as San Jose or Bauan—
              performed competitively, demonstrating that transparency helps mitigate resource constraints.”
            </p>
          </div>

          <div className="mt-5 flex justify-center">
            <a href="/images/fdp.png" target="_blank" rel="noreferrer" className="w-full max-w-md">
              <Image src="/images/fdp.png" alt="FDP compliance trend" width={640} height={220} className="w-full h-auto object-contain" />
            </a>
          </div>

          <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-gray-700">
              “Overall FDP compliance in Batangas improved across the five years, especially after the introduction of enhanced digital
              posting through FDPP v2 and v3. LGUs became more familiar with online submission processes, leading to fewer missing
              documents and higher posting consistency.”
            </p>
          </div>
        </section>

        {/* Other Relevant Findings */}
        <section className="mb-6">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Other Relevant Findings</h3>

          {/* 1. Revenue Indicators */}
          <div className="mb-4">
            <h4 className="font-bold text-green-700 mb-2">1. Revenue Indicators</h4>
            <div className="bg-white rounded-lg shadow p-4 flex justify-center mb-3">
              <a href="/images/revenue.png" target="_blank" rel="noreferrer" className="w-full max-w-md">
                <Image src="/images/revenue.png" alt="Revenue indicators" width={640} height={220} className="w-full h-auto object-contain" />
              </a>
            </div>

            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>
                Expansion of Fiscal Autonomy - LSRTTLR showed a modest recovery in 2022 (16.70%) and rose sharply in 2023 (19.93%), the highest during the five-year period.
                Despite this growth, most LGUs remain heavily dependent on external transfers, especially the IRA/NTA. Findings show that LGUs in Batangas continue to have
                limited, yet expanding fiscal autonomy, as less than one-fifth of their total revenues are generated locally. While the rise in 2023 is promising, it highlights
                the need for stronger local tax administration and diversified revenue sources.
              </li>
              <li>
                Dependence on National Transfers (IRA/NTA) - Findings show that RRTTLR was consistently high, showing that most LGU revenues come from stable, recurring
                sources like IRA/NTA and local taxes. RRTTLR increased significantly during the pandemic years, reflecting reliance on national government transfers when
                local economic activity contracted. It peaked in 2022 at 82.20%, the highest in five years, before slightly declining to 80.04% in 2023. The consistently high
                RRTTLR suggests dependable revenue inflows but also indicates structural dependence on intergovernmental fiscal support. LGUs benefit from predictable revenue
                streams, but the dominance of regular revenues—particularly national transfers—shows limited diversification and high vulnerability to national policy changes.
              </li>
            </ol>

            <p className="text-gray-700 mt-3">
              Based on this evidence, it can be drawn that from 2019–2023, Batangas LGUs showed steady revenue recovery and improved capacity to generate funds locally, though
              smaller municipalities continued to lag behind more urbanized areas. Fluctuations during the pandemic revealed vulnerabilities, but the overall upward trend signals
              strengthening fiscal independence.
            </p>

            <p className="text-gray-700 mt-2">
              For citizens and stakeholders, these patterns emphasize the need to support policies that expand local revenue sources so all communities—not just the most developed—can
              fund essential services and long-term growth.
            </p>
          </div>

          {/* 2. Expenditure Indicators */}
          <div className="mb-4">
            <h4 className="font-bold text-green-700 mb-2">2. Expenditure Indicators</h4>
            <div className="bg-white rounded-lg shadow p-4 flex justify-center mb-3">
              <a href="/images/dser.png" target="_blank" rel="noreferrer" className="w-full max-w-md">
                <Image src="/images/dser.png" alt="Expenditure indicators" width={640} height={220} className="w-full h-auto object-contain" />
              </a>
            </div>

            <p className="text-gray-700 mb-2">
              Based on the data gathered from the study, Batangas LGUs demonstrated the following financial behavior across the five-year period from 2019 to 2023.
            </p>

            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>
                Prudent Debt Management - Low DSER values show strong debt sustainability and conservative financial behavior, although outliers indicate unequal fiscal capacity.
                The persistently low DSER indicates strong fiscal discipline, limited reliance on loans, and a preference for pay-as-you-go financing or dependence on intergovernmental transfers.
                The 2023 spike in one LGU highlights uneven debt exposure, implying differences in administrative capacity and investment strategies across municipalities.
              </li>
              <li>
                Underinvestment in Social Development - SER trends reveal that social sectors consistently receive limited financial priority, which may hinder long-term human capital outcomes.
                Batangas LGUs invest considerably less in social sectors—far below the national LGU average of 21% for social services. Findings indicate that LGUs responded to short-term welfare
                needs during COVID-19, but long-term investments in health, education, housing, and social protection remain constrained. This suggests a structural underinvestment in human development relative to national norms.
              </li>
              <li>
                Declining Economic Investment - The downward EER trend signals decreasing budgetary emphasis on growth-oriented programs, with pandemic disruptions and shifting priorities likely influencing spending.
                The decline indicates reduced fiscal focus on economic development, including infrastructure, agriculture, and industry support. The average EER is below the national benchmark of 15.4% (Diokno-Sicat et al., 2021), suggesting LGUs devote less than recommended levels to growth-driven expenditures.
                The unstable pattern highlights the need for more strategic and consistent economic investment, especially for long-term competitiveness.
              </li>
            </ol>

            <p className="text-gray-700 mt-3">
              In consideration of FDP compliance in this picture, expenditure patterns also reflected the influence of transparency. LGUs with higher FDP compliance tended to allocate spending more strategically across social and economic sectors.
              Increased transparency may have contributed to more deliberate decision-making, as displayed by the upward trends in Social and Economic Expenditure Ratios among compliant LGUs.
            </p>

            <p className="text-gray-700 mt-2">
              Local spending patterns from 2019–2023 show that Batangas LGUs generally manage debt responsibly, but consistently underinvest in both social services and economic development. While fiscal discipline is evident, the low allocations to welfare and growth-oriented programs highlight a need for stronger, future-focused budgeting.
            </p>

            <p className="text-gray-700 mt-2">
              For citizens and stakeholders, these trends underscore the importance of advocating for budgets that not only maintain stability—but also invest boldly in people and local progress.
            </p>
          </div>

          {/* 3. Debt and Investment Capacity Indicators */}
          <div className="mb-4">
            <h4 className="font-bold text-green-700 mb-2">3. Debt and Investment Capacity Indicators</h4>
            <div className="bg-white rounded-lg shadow p-4 flex justify-center mb-3">
              <a href="/images/debt.png" target="_blank" rel="noreferrer" className="w-full max-w-md">
                <Image src="/images/debt.png" alt="Debt and investment capacity" width={640} height={220} className="w-full h-auto object-contain" />
              </a>
            </div>

            <p className="text-gray-700 mb-2">
              In terms of debt and investment capacity indicators, Batangas LGUs showed the following features across periods covering 2019 to 2023.
            </p>

            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>
                Reliable repayment ability - DSR values remained consistently above 1 across all years, indicating that LGUs generated more than enough regular income to cover annual debt obligations.
                The five-year overall mean was 2.53, showing strong repayment capacity even during pandemic years. Variability was relatively low, reflecting that most LGUs maintained predictable and dependable debt servicing performance.
                This finding shows that Batangas LGUs maintained low credit risk and a stable debt-servicing position, giving them sufficient fiscal space to take on additional borrowing for development projects if needed.
              </li>
              <li>
                Low risk of debt repayment difficulty - GOSDSR values were consistently high across all five years, with a five-year overall mean of 5.28. The ratio peaked in 2020 (5.99) despite pandemic conditions, indicating that LGUs still produced substantial operating surpluses relative to their debt obligations.
                This reinforces that LGUs continued to generate operating surpluses far exceeding their annual debt service requirements. Standard deviations remained moderate, suggesting that most LGUs had similarly strong debt service coverage using their operating surplus.
                The figures signal very strong fiscal capacity, showing that Batangas LGUs generated four to six times the operating surplus required to meet their debt service payments.
              </li>
            </ol>

            <p className="text-gray-700 mt-3">
              In consideration of FDP Compliance, Debt Service Ratio (DSR) trends indicate that LGUs with consistent FDP posting showed more responsible debt management practices. These LGUs had lower and more stable debt servicing burdens, enabling more resources to be directed toward development initiatives. Meanwhile, LGUs with lower compliance showed more variability and occasional surges in debt servicing.
            </p>

            <p className="text-gray-700 mt-2">
              Batangas LGUs kept their debt levels low while maintaining strong operating surpluses, meaning they consistently generated far more than enough funds to cover their debt payments. This balance of minimal debt burden and high repayment capacity reflects disciplined financial management.
            </p>

            <p className="text-gray-700 mt-2">
              For Batangueños, this shows that LGUs are in a stable position to invest in community development without risking fiscal strain—your local government is managing its obligations responsibly while keeping room for future growth.
            </p>
          </div>

          {/* 4. Financial Management Capacity Indicator */}
          <div className="mb-4">
            <h4 className="font-bold text-green-700 mb-2">4. Financial Management Capacity Indicator</h4>
            <div className="bg-white rounded-lg shadow p-4 flex justify-center mb-3">
              <a href="/images/financial.png" target="_blank" rel="noreferrer" className="w-full max-w-md">
                <Image src="/images/financial.png" alt="Financial management capacity" width={640} height={220} className="w-full h-auto object-contain" />
              </a>
            </div>

            <p className="text-gray-700 mb-2">
              Net Operating Surplus to Total Revenue Ratio (NOSTRR) showed strong volatility, ranging from 1.97 in 2019 to a dramatic spike of 14.24 in 2020, before steadily declining to 5.67 in 2023. The sharp increase in 2020 reflects pandemic-driven expenditure restraint and inflows of external fiscal support, which temporarily boosted operating surpluses.
            </p>

            <p className="text-gray-700 mb-2">
              The gradual decline from 2021–2023 indicates normalization of spending and recovery-related investments, reducing surplus levels. Wide minimum and maximum values (e.g., –99.20 to 323.10 in 2020) show large disparities across LGUs, with some generating strong surpluses while others ran deficits. The consistently high standard deviations (14.79–59.51) indicate uneven operational efficiency and fiscal discipline among municipalities, confirming varying levels of financial management capacity.
            </p>

            <p className="text-gray-700">
              Overall, Batangas LGUs showed highly fluctuating operating surplus performance from 2019–2023, with NOSTRR rising sharply during the pandemic due to spending restraint, then steadily falling as normal operations resumed. The wide variation—ranging from large surpluses to deep deficits—reveals uneven fiscal discipline and differing capacities to manage revenues and expenditures across municipalities.
            </p>

            <p className="text-gray-700 mt-3 font-semibold">High-Performing LGUs Exhibit Common Traits</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Strong FDP compliance</li>
              <li>Stable or increasing revenue trends</li>
              <li>Balanced expenditures toward economic and social services</li>
              <li>Prudent debt and investment management</li>
              <li>Clear documentation practices and timely reporting</li>
            </ul>

            <p className="text-gray-700 mt-3">
              These traits reflect how transparency supports long-term fiscal health. For LGUs, these findings highlight the importance of strengthening internal reporting systems, improving digital readiness, and sustaining full compliance with FDP posting requirements. Transparency is not only a legal mandate — it is a practical tool for improving revenue generation, boosting public confidence, and ensuring responsible spending.
            </p>
          </div>
        </section>

        {/* Summary & Recommendations */}
        <section className="mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Summary & Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-gray-700">
                Overall FDP compliance in Batangas improved across the five years, especially after the introduction of enhanced digital posting through FDPP v2 and v3. LGUs became more familiar with online submission processes, leading to fewer missing documents and higher posting consistency.
              </p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
              <p className="text-gray-700">
                For LGUs, these findings highlight the importance of strengthening internal reporting systems, improving digital readiness, and sustaining full compliance with FDP posting requirements. Transparency is not only a legal mandate — it is a practical tool for improving revenue generation, boosting public confidence, and ensuring responsible spending.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

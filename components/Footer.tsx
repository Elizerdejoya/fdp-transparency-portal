export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">FDP Portal</h3>
            <p className="text-gray-400 text-sm">
              Strengthening fiscal transparency and financial performance in Batangas LGUs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about-fdp" className="hover:text-white transition">About FDP</a></li>
              <li><a href="/study-findings" className="hover:text-white transition">Study Findings</a></li>
              <li><a href="/best-practices" className="hover:text-white transition">Best Practices</a></li>
              <li><a href="/framework" className="hover:text-white transition">Framework</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">More</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/recommendations" className="hover:text-white transition">Recommendations</a></li>
              <li><a href="/resources" className="hover:text-white transition">Resources</a></li>
              <li><a href="/feedback" className="hover:text-white transition">Feedback</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="mailto:panapanaanashleygwyneth@gmail.com" className="hover:text-white transition break-all">panapanaanashleygwyneth@gmail.com</a></li>
              <li><a href="mailto:noreleesulabo09@gmail.com" className="hover:text-white transition break-all">noreleesulabo09@gmail.com</a></li>
              <li><a href="mailto:landichoannakathrina@gmail.com" className="hover:text-white transition break-all">landichoannakathrina@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 FDP Transparency Portal. All rights reserved.</p>
          <p>Research Study: FDP & Financial Performance in Batangas LGUs (2019–2023)</p>
        </div>
      </div>
    </footer>
  );
}

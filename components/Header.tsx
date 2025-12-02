'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About FDP', href: '/about-fdp' },
    { label: 'Study Findings', href: '/study-findings' },
    { label: 'Best Practices', href: '/best-practices' },
    { label: 'Framework', href: '/framework' },
    { label: 'Recommendations', href: '/recommendations' },
    { label: 'Resources', href: '/resources' },
    { label: 'Feedback', href: '/feedback' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-green-600 text-white px-3 py-1 rounded-lg font-bold text-lg">
            FDP
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-gray-800">Transparency Portal</h1>
            <p className="text-xs text-gray-600">Batangas LGUs 2019–2023</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-green-50 border-t border-green-100">
          <nav className="flex flex-col p-4 gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-green-600 transition-colors py-2 px-3 rounded-lg hover:bg-green-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

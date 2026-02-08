import React from 'react';
import Timeline from './components/Timeline';
import { certificates } from './data/certificates';

function App() {
  return (
    <div className="min-h-screen bg-matcha-50 font-sans text-gray-800 relative overflow-hidden">
      {/* Fixed Background Text */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center -z-0 opacity-40 select-none">
        <span className="font-cursive text-matcha-200 text-[15vw] md:text-[12vw] leading-none whitespace-nowrap transform -rotate-12">
          Anderson Liu Zian
        </span>
      </div>

      <div className="relative z-10">
        <header className="py-20 px-4 text-center bg-white/80 backdrop-blur-sm border-b border-matcha-100 shadow-sm">
        <h1 className="text-4xl md:text-5xl font-bold text-matcha-800 tracking-tight mb-4">
          My Certificates
        </h1>
        <p className="text-matcha-600 max-w-2xl mx-auto text-lg">
          A collection of my academic achievements, awards, and certifications.
        </p>
      </header>

      <main className="container mx-auto px-4">
        <Timeline certificates={certificates} />
      </main>

      <footer className="py-8 text-center text-matcha-600 text-sm mt-12 border-t border-matcha-100 bg-white/80 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Certificate Portfolio</p>
      </footer>
      </div>
    </div>
  );
}

export default App;

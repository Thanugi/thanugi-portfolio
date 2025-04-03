import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/Thanugi" className="hover:text-white transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/thanugi-weerasinghe-6799772b5/" className="hover:text-white transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            {/* <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSMTRpHkQTVWSsTqLqtTnGSVhmVZFnnPvrtwhmbdrPRVTzFZzGzVzTZHHmgxpMztWzWLkrxM" className="hover:text-white transition-colors duration-300">
              <Mail size={24} />
            </a> */}
          </div>
          <p className="fade-in-delay-3">© 2025 Thanugi Weerasinghe. All rights reserved.</p>
        </footer>
      </div>
      
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1a1f3c,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#2d1a3c,_transparent_50%)]"></div>
      </div>
    </div>
  );
}

export default App;
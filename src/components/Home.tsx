import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home: React.FC = () => {
  const typedTextRef = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedTextRef.current) {
      typedRef.current = new Typed(typedTextRef.current, {
        strings: [
          'Full Stack Developer',
          'Web Developer',
          'App Developer',
          'UI/UX Designer',
          'Data Analyst',
          'Network Engineer'
        ],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true,
        smartBackspace: true,
      });
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white relative"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 z-10 text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
          Muhammad Abdullah
        </h1>
        <div className="text-xl md:text-3xl mb-8">
          I'm a <span ref={typedTextRef} className="text-teal-400 font-semibold"></span>
        </div>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200">
          Building elegant solutions to complex problems with clean, efficient code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg transition-colors shadow-lg"
          >
            Hire Me
          </button>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-lg transition-colors"
          >
            View Portfolio
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="rounded-full bg-white/30 p-3 hover:bg-white/40 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Home;
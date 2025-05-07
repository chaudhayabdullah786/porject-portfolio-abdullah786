import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Teams from './components/Teams';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './utils/animations.css';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Muhammad Abdullah | Full Stack Developer";
    
    // Create a new link element for the favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>";
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Teams />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
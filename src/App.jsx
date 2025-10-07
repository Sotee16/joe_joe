import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from "./components/About";
import Projects from './components/Projects';
import Achievements from './components/Achievements';
// import SKills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Autobiography from "./components/Autobiography";
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 1000); // Delay to show fade-out
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <>
      {loading && <Loader progress={progress} />}
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Achievements /> 
          {/* <Skills/>  */}
          <Autobiography />
          <Testimonials />
          <Blog />
          <Contact />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
};

export default App;

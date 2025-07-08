import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </>
  )
}

export default App
// This is the main entry point of the React application.
// It imports necessary components and initializes AOS for animations.

// useEffect(() => {
//   // Tawk.to live chat integration
//   var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
//   (function () {
//     var s1 = document.createElement("script"),
//       s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = "https://embed.tawk.to/YOUR_PROPERTY_ID_HERE/default"; // <-- Replace with your real URL
//     s1.charset = "UTF-8";
//     s1.setAttribute("crossorigin", "*");
//     s0.parentNode.insertBefore(s1, s0);
//   })();
// }, []);

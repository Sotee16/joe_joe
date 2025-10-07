import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="btn btn-primary position-fixed"
        style={{ bottom: '30px', left: '30px', zIndex: 1000,}}
      >
        ↑ Top
      </button>
    )
  );
};

export default ScrollToTop;
// This component provides a button that appears when the user scrolls down the page.
// Clicking the button scrolls the page back to the top smoothly.
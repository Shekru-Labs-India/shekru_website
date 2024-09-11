import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-success position-fixed bottom-0 end-0 m-3 d-none d-sm-block"
          style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            zIndex: 99, // Ensure it's on top
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)' // Optional: add shadow for better visibility
          }}
          title="Scroll to Top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

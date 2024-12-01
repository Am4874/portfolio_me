import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 bg-[#ab4459] text-[#fcfaf2] 
                     p-2 rounded-full shadow-lg hover:bg-[#d24b66] 
                     transition-all duration-300 ease-in-out"
          aria-label="Scroll to Top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;

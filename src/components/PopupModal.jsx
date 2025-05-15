import React, { useState, useEffect, useRef } from 'react';

const PopupModal = ({ imageUrl, redirectUrl, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);

  // Show the modal after a short delay when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500); // Delay of 1.5 seconds before showing

    return () => clearTimeout(timer);
  }, []);
  
  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);
  
  // Handle outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  const handleImageClick = () => {
    window.open(redirectUrl, '_blank', 'noopener,noreferrer');
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300); // Wait for animation to complete
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300">
      <div 
        ref={modalRef}
        className="relative max-w-lg mx-4 bg-gray-800 rounded-lg shadow-lg border border-emerald-500/20 overflow-hidden animate-fadeIn"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-emerald-500 transition-colors duration-300 z-10"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {/* Clickable image */}
        <div 
          className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
          onClick={handleImageClick}
        >
          <img 
            src={imageUrl || "/api/placeholder/600/400"} 
            alt="Promotional content" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
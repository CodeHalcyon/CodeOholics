import React, { useState, useEffect, useRef } from 'react';

const PopupModal = ({ imageUrl, redirectUrl, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, []);

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
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300 p-4">
      <div
        ref={modalRef}
        className="relative max-w-sm w-full mx-auto bg-paper border-[4px] border-ink shadow-[10px_10px_0_0_var(--color-punk)] overflow-hidden animate-fadeIn"
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 w-9 h-9 flex items-center justify-center bg-ink text-paper border-2 border-ink hover:bg-punk transition-colors duration-200 z-10"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <div
          className="cursor-pointer"
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

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-matcha-50">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-matcha-200 transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4 bg-gray-50 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

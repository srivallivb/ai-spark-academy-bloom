
import React from 'react';
import { Gift } from 'lucide-react';

interface FloatingSurpriseButtonProps {
  onClick: () => void;
}

const FloatingSurpriseButton = ({ onClick }: FloatingSurpriseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        fixed bottom-24 right-4 md:bottom-20 md:right-6
        w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600
        rounded-full shadow-2xl flex items-center justify-center
        text-white transform transition-all duration-200
        hover:scale-110 active:scale-95 z-20
        animate-bounce
      "
      style={{ animationDuration: '2s' }}
    >
      <Gift size={24} />
    </button>
  );
};

export default FloatingSurpriseButton;

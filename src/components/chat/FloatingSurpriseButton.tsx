
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
        fixed bottom-20 right-4 md:bottom-20 md:right-6
        w-14 h-14 bg-gradient-to-r from-pink-400 to-purple-500
        rounded-full shadow-xl flex items-center justify-center
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

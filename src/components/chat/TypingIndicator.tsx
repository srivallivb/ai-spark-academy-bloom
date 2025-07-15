
import React from 'react';
import { Bot } from 'lucide-react';

const TypingIndicator = () => {
  return (
    <div className="flex justify-start animate-fade-in">
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
          <Bot className="text-white" size={18} />
        </div>
        <div className="bg-white shadow-lg border border-purple-100 rounded-2xl rounded-bl-md px-4 py-3">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;

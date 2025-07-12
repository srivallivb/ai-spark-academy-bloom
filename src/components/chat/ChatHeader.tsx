
import React from 'react';
import { Bot, Heart, Sparkles } from 'lucide-react';

const ChatHeader = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-6 shadow-lg">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center animate-pulse">
          <Bot className="text-white" size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold">AI Learning Buddy</h1>
          <p className="text-purple-100 flex items-center space-x-1">
            <Heart size={14} className="text-pink-300 animate-pulse" />
            <span>Ready to help you learn anything!</span>
            <Sparkles size={14} className="text-yellow-300 animate-bounce" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;

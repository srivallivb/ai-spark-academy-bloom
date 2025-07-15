
import React from 'react';
import { Bot, Heart, Sparkles } from 'lucide-react';

const ChatHeader = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-4 shadow-lg">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center animate-pulse">
          <Bot className="text-white" size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold">AI Learning Buddy</h1>
          <p className="text-purple-100 flex items-center space-x-1 text-sm">
            <Heart size={12} className="text-pink-200 animate-pulse" />
            <span>Ready to help you learn anything!</span>
            <Sparkles size={12} className="text-yellow-200 animate-bounce" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;

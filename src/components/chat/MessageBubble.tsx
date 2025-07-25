
import React from 'react';
import { Bot, User, ImageIcon } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  uploadedFile?: File;
}

interface MessageBubbleProps {
  message: Message;
  index: number;
}

const MessageBubble = ({ message, index }: MessageBubbleProps) => {
  return (
    <div 
      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`} 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`flex items-start space-x-3 max-w-xs md:max-w-lg ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${
          message.isUser 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
            : 'bg-gradient-to-r from-green-500 to-teal-600'
        }`}>
          {message.isUser ? (
            <User className="text-white" size={18} />
          ) : (
            <Bot className="text-white" size={18} />
          )}
        </div>
        
        <div className={`px-4 py-3 rounded-2xl shadow-lg max-w-full ${
          message.isUser 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-md' 
            : 'bg-white border border-purple-100 text-gray-800 rounded-bl-md'
        }`}>
          {message.uploadedFile && (
            <div className="mb-3 p-2 bg-white/20 rounded-xl flex items-center space-x-2">
              <ImageIcon size={16} className={message.isUser ? 'text-white' : 'text-gray-600'} />
              <span className={`text-xs ${message.isUser ? 'text-white' : 'text-gray-600'}`}>
                Image: {message.uploadedFile.name}
              </span>
            </div>
          )}
          <p className={`text-sm leading-relaxed whitespace-pre-line ${message.isUser ? 'text-white' : 'text-gray-800'}`}>
            {message.text}
          </p>
          <p className={`text-xs mt-2 ${
            message.isUser ? 'text-white/80' : 'text-gray-500'
          }`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;


import React from 'react';
import { Sparkles, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ChatHeader from '@/components/chat/ChatHeader';
import MessageBubble from '@/components/chat/MessageBubble';
import QuickQuestionCard from '@/components/chat/QuickQuestionCard';
import TypingIndicator from '@/components/chat/TypingIndicator';
import ChatInput from '@/components/chat/ChatInput';
import useChat from '@/hooks/useChat';

const Chat = () => {
  const {
    messages,
    inputText,
    setInputText,
    isTyping,
    messagesEndRef,
    handleSendMessage,
    handleFileUpload
  } = useChat();

  const quickQuestions = [
    { text: "🌱 Explain photosynthesis simply", icon: "🌿", gradient: "from-green-400 to-emerald-500" },
    { text: "📐 Help with quadratic equations", icon: "🔢", gradient: "from-blue-400 to-cyan-500" },
    { text: "💻 Learn programming basics", icon: "⚡", gradient: "from-purple-400 to-pink-500" },
    { text: "⚗️ Chemistry reactions explained", icon: "🧪", gradient: "from-orange-400 to-red-500" }
  ];

  const handleQuickQuestion = (question: string) => {
    setInputText(question.replace(/[🌱📐💻⚗️🌿🔢⚡🧪]/g, '').trim());
  };

  return (
    <div className="md:ml-72 flex flex-col h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-6 pb-24 md:pb-6 space-y-6">
        {messages.length === 1 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
              <Sparkles className="text-white" size={36} />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent mb-3">
              What would you like to learn?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">Ask me anything from basic concepts to advanced topics! 🚀</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {quickQuestions.map((question, index) => (
                <QuickQuestionCard
                  key={index}
                  question={question}
                  index={index}
                  onClick={handleQuickQuestion}
                />
              ))}
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <MessageBubble key={message.id} message={message} index={index} />
        ))}

        {isTyping && <TypingIndicator />}
        
        <div ref={messagesEndRef} />
      </div>

      <ChatInput
        inputText={inputText}
        setInputText={setInputText}
        onSendMessage={handleSendMessage}
        onFileUpload={handleFileUpload}
        isTyping={isTyping}
      />
    </div>
  );
};

export default Chat;

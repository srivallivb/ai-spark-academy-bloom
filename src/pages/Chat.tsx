
import React from 'react';
import { Sparkles, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ChatHeader from '@/components/chat/ChatHeader';
import MessageBubble from '@/components/chat/MessageBubble';
import QuickQuestionCard from '@/components/chat/QuickQuestionCard';
import TypingIndicator from '@/components/chat/TypingIndicator';
import ChatInput from '@/components/chat/ChatInput';
import GreetingSuggestions from '@/components/chat/GreetingSuggestions';
import FloatingSurpriseButton from '@/components/chat/FloatingSurpriseButton';
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

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
  };

  const handleSurpriseMe = () => {
    const surprisePrompts = [
      "Tell me a fun fact about space",
      "Explain gravity in simple terms",
      "What's the most interesting thing about the ocean?",
      "How do computers work?",
      "Why do we dream?",
      "What makes rainbows appear?"
    ];
    const randomPrompt = surprisePrompts[Math.floor(Math.random() * surprisePrompts.length)];
    setInputText(randomPrompt);
  };

  return (
    <div className="md:ml-72 flex flex-col h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 pb-32 md:pb-24 space-y-4">
        {messages.length === 1 && (
          <div className="animate-fade-in">
            <GreetingSuggestions onSuggestionClick={handleSuggestionClick} />
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

      <FloatingSurpriseButton onClick={handleSurpriseMe} />
    </div>
  );
};

export default Chat;

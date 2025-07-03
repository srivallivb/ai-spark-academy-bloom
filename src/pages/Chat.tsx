
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, BookOpen, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI learning assistant. I can help you with any subject from 6th grade to B.Tech level. What would you like to learn today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    "Explain photosynthesis in simple terms",
    "How do I solve quadratic equations?",
    "What is object-oriented programming?",
    "Help me with Newton's laws"
  ];

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `I understand you're asking about "${inputText}". Let me explain this concept step by step with examples that are perfect for your learning level. This is a great question that many students ask!`,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
  };

  return (
    <div className="md:ml-64 flex flex-col h-screen">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-learning rounded-xl flex items-center justify-center">
            <Bot className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">AI Learning Assistant</h1>
            <p className="text-sm text-gray-500">Get instant help with any topic</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 pb-32 md:pb-6 space-y-4">
        {messages.length === 1 && (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-gradient-learning rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
              <Sparkles className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">What would you like to learn?</h2>
            <p className="text-gray-600 mb-6">Ask me anything from basic concepts to advanced topics</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {quickQuestions.map((question, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-learning-primary/20" onClick={() => handleQuickQuestion(question)}>
                  <CardContent className="p-4 flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Lightbulb className="text-blue-600" size={16} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{question}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-slide-up`}>
            <div className={`flex items-start space-x-3 max-w-xs md:max-w-md lg:max-w-lg ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.isUser 
                  ? 'bg-learning-primary' 
                  : 'bg-gradient-learning'
              }`}>
                {message.isUser ? (
                  <User className="text-white" size={16} />
                ) : (
                  <Bot className="text-white" size={16} />
                )}
              </div>
              
              <div className={`px-4 py-3 rounded-2xl ${
                message.isUser 
                  ? 'bg-learning-primary text-white' 
                  : 'bg-white shadow-md border border-gray-200'
              }`}>
                <p className={`text-sm ${message.isUser ? 'text-white' : 'text-gray-800'}`}>
                  {message.text}
                </p>
                <p className={`text-xs mt-1 ${
                  message.isUser ? 'text-white/70' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-learning rounded-full flex items-center justify-center">
                <Bot className="text-white" size={16} />
              </div>
              <div className="bg-white shadow-md border border-gray-200 rounded-2xl px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="fixed bottom-16 md:bottom-0 left-0 right-0 md:left-64 bg-white/80 backdrop-blur-lg border-t border-gray-200 p-6">
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask me anything about your studies..."
              className="pr-12 py-3 rounded-xl border-2 border-gray-200 focus:border-learning-primary"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
          </div>
          <Button 
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            className="bg-gradient-learning hover:opacity-90 rounded-xl px-4 py-3"
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

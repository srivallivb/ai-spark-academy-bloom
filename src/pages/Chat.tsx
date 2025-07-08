
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, BookOpen, Lightbulb, Heart, Star } from 'lucide-react';
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
      text: "Hey there, future genius! 🌟 I'm your AI learning buddy, ready to help you master anything from 6th grade math to B.Tech engineering! What amazing thing do you want to learn today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    { text: "🌱 Explain photosynthesis simply", icon: "🌿", gradient: "from-green-400 to-emerald-500" },
    { text: "📐 Help with quadratic equations", icon: "🔢", gradient: "from-blue-400 to-cyan-500" },
    { text: "💻 Learn programming basics", icon: "⚡", gradient: "from-purple-400 to-pink-500" },
    { text: "⚗️ Chemistry reactions explained", icon: "🧪", gradient: "from-orange-400 to-red-500" }
  ];

  const handleSendMessage = async () => {
     const message = userInput.trim();
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, { from: 'user', text: message }]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: "I'm your AI buddy, how can I help? 💡" }]);
    }, 1000);
      const responses = [
        "Great question! Let me break this down for you step by step... 🎯",
        "I love your curiosity! Here's what you need to know... ✨",
        "Perfect timing to learn this! Let me explain it in a fun way... 🚀",
        "You're asking all the right questions! Here's the answer... 💡"
      ];
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `${responses[Math.floor(Math.random() * responses.length)]} 

About "${inputText}" - This is such an important concept! Let me explain it in a way that makes perfect sense for your learning level. I'll use examples and break it down so it's super clear and easy to remember! 📚✨

Want me to explain any part in more detail? I'm here to help you master this! 🌟`,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question.replace(/[🌱📐💻⚗️🌿🔢⚡🧪]/g, '').trim());
  };

  return (
    <div className="md:ml-72 flex flex-col h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Enhanced Header */}
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

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 pb-32 md:pb-6 space-y-6">
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
                <Card 
                  key={index} 
                  className="cursor-pointer hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 hover:-translate-y-1" 
                  onClick={() => handleQuickQuestion(question.text)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className={`w-full h-24 bg-gradient-to-r ${question.gradient} rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden`}>
                      <div className="text-4xl">{question.icon}</div>
                      <div className="absolute top-2 right-2">
                        <Star size={16} className="text-white/70 animate-pulse" />
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 block text-center">
                      {question.text}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className={`flex items-start space-x-3 max-w-xs md:max-w-lg ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${
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
              
              <div className={`px-6 py-4 rounded-3xl shadow-lg ${
                message.isUser 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                  : 'bg-white border-2 border-purple-100'
              }`}>
                <p className={`text-sm leading-relaxed ${message.isUser ? 'text-white' : 'text-gray-800'}`}>
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
        ))}

        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Bot className="text-white" size={18} />
              </div>
              <div className="bg-white shadow-lg border-2 border-purple-100 rounded-3xl px-6 py-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Enhanced Input Area */}
      <div className="fixed bottom-16 md:bottom-0 left-0 right-0 md:left-72 bg-gradient-to-r from-white/95 to-purple-50/95 backdrop-blur-xl border-t-2 border-purple-200/30 p-6 shadow-2xl">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask me anything about your studies... 🤔✨"
              className="pr-16 py-4 text-lg rounded-2xl border-2 border-purple-200 focus:border-purple-400 bg-white/90 backdrop-blur-sm shadow-lg"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Lightbulb size={20} className="text-purple-400 animate-pulse" />
            </div>
          </div>
          <Button 
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-2xl px-6 py-4 shadow-lg transform transition-all hover:scale-105"
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

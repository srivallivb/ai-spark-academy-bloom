
import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, Bot, User, Sparkles, BookOpen, Lightbulb, Heart, Star, Upload, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  uploadedFile?: File;
}

const Chat = () => {
  const location = useLocation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey there, future genius! 🌟 I'm your AI learning buddy, ready to help you master anything from 6th grade math to B.Tech engineering! What amazing thing do you want to learn today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Handle uploaded file from Home page
  useEffect(() => {
    if (location.state?.uploadedFile && location.state?.extractedQuestion) {
      const { uploadedFile, extractedQuestion, source } = location.state;
      
      // Add user message with uploaded file
      const userMessage: Message = {
        id: Date.now().toString(),
        text: extractedQuestion,
        isUser: true,
        timestamp: new Date(),
        uploadedFile: uploadedFile
      };

      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);

      // Simulate AI response to uploaded image
      setTimeout(() => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: `Great! I can see you've uploaded an image from your ${source}! 📸✨

I'm analyzing your question step by step:

🔍 **What I can see:** This appears to be a ${uploadedFile.type.includes('image') ? 'mathematical problem or educational content' : 'learning material'} that needs explanation.

📚 **My Solution Approach:**
1. First, I'll break down the core concepts
2. Then I'll provide step-by-step explanations  
3. Finally, I'll give you tips to remember this better

💡 **Detailed Explanation:**
Based on the image you shared, let me walk you through the solution process. This type of problem requires understanding the fundamental principles and applying them systematically.

Would you like me to:
- Explain any specific part in more detail?
- Show similar practice problems?
- Give you memory tricks for this topic?

I'm here to make sure you completely understand this! 🚀`,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
      }, 2000);

      // Clear location state
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

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

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: userMessage.text }]
              }
            ]
          })
        }
      );

      const data = await response.json();
      const geminiText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: geminiText,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Something went wrong while contacting Gemini.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question.replace(/[🌱📐💻⚗️🌿🔢⚡🧪]/g, '').trim());
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: `I've uploaded an image. Please analyze this and help me understand the solution step by step.`,
        isUser: true,
        timestamp: new Date(),
        uploadedFile: file
      };

      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);

      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: `Perfect! I can see your uploaded image! 📸✨

Let me analyze this step by step:

🔍 **Image Analysis:** I can see this is a learning material that needs explanation.

📚 **Step-by-Step Solution:**
1. Let me identify the key concepts in your image
2. I'll break down the problem systematically
3. Then provide a clear, easy-to-understand explanation

💡 **Detailed Explanation:** Based on what I can see in your image, this involves fundamental concepts that I'll explain in simple terms with examples.

Would you like me to focus on any specific part of this problem? I'm here to make sure you understand everything perfectly! 🚀`,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
      }, 2000);
    }
  };

  return (
    <div className="md:ml-72 flex flex-col h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onFileChange}
        className="hidden"
      />

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
                {message.uploadedFile && (
                  <div className="mb-3 p-3 bg-white/20 rounded-2xl flex items-center space-x-2">
                    <ImageIcon size={16} className={message.isUser ? 'text-white' : 'text-gray-600'} />
                    <span className={`text-xs ${message.isUser ? 'text-white' : 'text-gray-600'}`}>
                      Image uploaded: {message.uploadedFile.name}
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

      {/* Enhanced Input Area - Fixed positioning */}
      <div className="fixed bottom-16 md:bottom-0 left-0 right-0 md:left-72 bg-gradient-to-r from-white/95 to-purple-50/95 backdrop-blur-xl border-t-2 border-purple-200/30 p-4 shadow-2xl z-10">
        <div className="flex items-center space-x-4 max-w-4xl mx-auto">
          <Button
            onClick={handleFileUpload}
            variant="outline"
            className="flex-shrink-0 rounded-2xl border-2 border-purple-200 hover:border-purple-400 p-3"
          >
            <Upload size={20} className="text-purple-600" />
          </Button>
          <div className="flex-1 relative">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask me anything about your studies... 🤔✨"
              className="pr-16 py-3 text-base rounded-2xl border-2 border-purple-200 focus:border-purple-400 bg-white/90 backdrop-blur-sm shadow-lg"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Lightbulb size={20} className="text-purple-400 animate-pulse" />
            </div>
          </div>
          <Button 
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-2xl px-6 py-3 shadow-lg transform transition-all hover:scale-105"
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;


import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  uploadedFile?: File;
}

const useChat = () => {
  const location = useLocation();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle uploaded file from Home page
  useEffect(() => {
    if (location.state?.uploadedFile && location.state?.extractedQuestion) {
      const { uploadedFile, extractedQuestion, source } = location.state;
      
      const userMessage: Message = {
        id: Date.now().toString(),
        text: extractedQuestion,
        isUser: true,
        timestamp: new Date(),
        uploadedFile: uploadedFile
      };

      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);

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

      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

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

  const handleFileUpload = (file: File) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: `I've uploaded an image. Please analyze this and help me understand the solution step by step.`,
      isUser: true,
      timestamp: new Date(),
      uploadedFile: file
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

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
  };

  return {
    messages,
    inputText,
    setInputText,
    isTyping,
    messagesEndRef,
    handleSendMessage,
    handleFileUpload
  };
};

export default useChat;

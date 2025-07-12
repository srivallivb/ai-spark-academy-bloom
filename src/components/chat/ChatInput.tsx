
import React, { useRef } from 'react';
import { Send, Upload, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatInputProps {
  inputText: string;
  setInputText: (text: string) => void;
  onSendMessage: () => void;
  onFileUpload: (file: File) => void;
  isTyping: boolean;
}

const ChatInput = ({ inputText, setInputText, onSendMessage, onFileUpload, isTyping }: ChatInputProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="fixed bottom-16 md:bottom-0 left-0 right-0 md:left-72 bg-gradient-to-r from-white/95 to-purple-50/95 backdrop-blur-xl border-t-2 border-purple-200/30 p-4 shadow-2xl z-10">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onFileChange}
        className="hidden"
      />
      
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
            onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Lightbulb size={20} className="text-purple-400 animate-pulse" />
          </div>
        </div>
        <Button 
          onClick={onSendMessage}
          disabled={!inputText.trim() || isTyping}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-2xl px-6 py-3 shadow-lg transform transition-all hover:scale-105"
        >
          <Send size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;

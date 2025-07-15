
import React, { useRef } from 'react';
import { Send, Upload, Mic } from 'lucide-react';
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
    <div className="fixed bottom-0 left-0 right-0 md:left-72 bg-white/95 backdrop-blur-xl border-t border-purple-100 p-4 shadow-xl z-10">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onFileChange}
        className="hidden"
      />
      
      <div className="flex items-center space-x-3 max-w-4xl mx-auto">
        <Button
          onClick={handleFileUpload}
          variant="outline"
          className="flex-shrink-0 rounded-full w-12 h-12 border-2 border-purple-200 hover:border-purple-300 p-0"
        >
          <Upload size={18} className="text-purple-500" />
        </Button>
        
        <Button
          variant="outline"
          className="flex-shrink-0 rounded-full w-12 h-12 border-2 border-purple-200 hover:border-purple-300 p-0"
        >
          <Mic size={18} className="text-purple-500" />
        </Button>
        
        <div className="flex-1 relative">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask me anything… e.g. 'Help with a math problem' or 'Write an essay'"
            className="pr-4 py-3 text-base rounded-full border-2 border-purple-200 focus:border-purple-300 bg-white shadow-sm min-h-[48px]"
            onKeyPress={(e) => e.key === 'Enter' && onSendMessage()}
          />
        </div>
        
        <Button 
          onClick={onSendMessage}
          disabled={!inputText.trim() || isTyping}
          className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 rounded-full w-12 h-12 p-0 shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Send size={18} />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;

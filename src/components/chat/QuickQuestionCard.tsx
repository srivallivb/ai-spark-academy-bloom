
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface QuickQuestion {
  text: string;
  icon: string;
  gradient: string;
}

interface QuickQuestionCardProps {
  question: QuickQuestion;
  index: number;
  onClick: (text: string) => void;
}

const QuickQuestionCard = ({ question, index, onClick }: QuickQuestionCardProps) => {
  return (
    <Card 
      key={index} 
      className="cursor-pointer hover:shadow-2xl transition-all duration-300 border-0 transform hover:scale-105 hover:-translate-y-1" 
      onClick={() => onClick(question.text)}
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
  );
};

export default QuickQuestionCard;

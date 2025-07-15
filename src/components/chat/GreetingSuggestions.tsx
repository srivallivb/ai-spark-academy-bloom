
import React from 'react';
import { Brain, PenTool, Code, Beaker, Calculator, BookOpen } from 'lucide-react';

interface GreetingSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

const GreetingSuggestions = ({ onSuggestionClick }: GreetingSuggestionsProps) => {
  const suggestions = [
    { 
      text: "Help with quadratic equations", 
      icon: Calculator, 
      emoji: "📐",
      color: "from-blue-400 to-cyan-500" 
    },
    { 
      text: "Write an essay on climate change", 
      icon: PenTool, 
      emoji: "✍️",
      color: "from-green-400 to-emerald-500" 
    },
    { 
      text: "Learn programming basics", 
      icon: Code, 
      emoji: "💻",
      color: "from-purple-400 to-pink-500" 
    },
    { 
      text: "Explain photosynthesis", 
      icon: Beaker, 
      emoji: "🧪",
      color: "from-orange-400 to-red-500" 
    },
    { 
      text: "Solve fractions", 
      icon: Calculator, 
      emoji: "🔢",
      color: "from-indigo-400 to-purple-500" 
    },
    { 
      text: "Prepare for a test", 
      icon: BookOpen, 
      emoji: "📚",
      color: "from-teal-400 to-blue-500" 
    }
  ];

  return (
    <div className="text-center py-6 animate-slide-up">
      <div className="flex items-center justify-center mb-4">
        <Brain className="text-purple-600 mr-3 animate-pulse" size={28} />
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          What can I help you with?
        </h2>
      </div>
      
      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-3 px-4 min-w-max">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => onSuggestionClick(suggestion.text)}
              className={`
                flex items-center space-x-2 px-4 py-3 rounded-full 
                bg-gradient-to-r ${suggestion.color} text-white
                shadow-md hover:shadow-lg transform transition-all duration-200
                hover:scale-105 active:scale-95 min-w-max
                animate-fade-in
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-lg">{suggestion.emoji}</span>
              <span className="text-sm font-medium whitespace-nowrap">
                {suggestion.text}
              </span>
            </button>
          ))}
        </div>
      </div>

      <p className="text-gray-600 mt-4 text-sm px-4">
        Tap any suggestion above or ask me anything! 🚀
      </p>
    </div>
  );
};

export default GreetingSuggestions;

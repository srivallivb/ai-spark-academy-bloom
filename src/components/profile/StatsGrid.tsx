
import React from 'react';
import { Clock, Trophy, BookOpen, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { label: 'Total Study Hours', value: '156', icon: Clock, color: 'text-blue-600 bg-blue-100' },
  { label: 'Quizzes Completed', value: '47', icon: Trophy, color: 'text-green-600 bg-green-100' },
  { label: 'Notes Created', value: '23', icon: BookOpen, color: 'text-purple-600 bg-purple-100' },
  { label: 'Streak Days', value: '12', icon: Target, color: 'text-orange-600 bg-orange-100' }
];

export const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="border-0 shadow-lg animate-fade-in hover:shadow-xl transition-all duration-200" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardContent className="p-6 text-center">
              <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                <Icon size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

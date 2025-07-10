
import React from 'react';
import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const achievements = [
  { name: 'First Quiz', description: 'Complete your first quiz', earned: true, icon: '🎯' },
  { name: 'Study Streak', description: '7 days of continuous learning', earned: true, icon: '🔥' },
  { name: 'Math Master', description: 'Score 90%+ in 5 math quizzes', earned: true, icon: '🧮' },
  { name: 'Note Taker', description: 'Create 20+ notes', earned: true, icon: '📝' },
  { name: 'AI Companion', description: 'Chat with AI 50+ times', earned: false, icon: '🤖' },
  { name: 'Perfect Score', description: 'Get 100% in any quiz', earned: false, icon: '⭐' }
];

export const Achievements: React.FC = () => {
  return (
    <Card className="border-0 shadow-lg animate-fade-in hover:shadow-xl transition-all duration-200">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Award className="text-yellow-600" size={20} />
          <span>Achievements</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement, index) => (
            <div key={index} className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
              achievement.earned 
                ? 'border-green-200 bg-green-50 shadow-sm' 
                : 'border-gray-200 bg-gray-50 opacity-60'
            }`}>
              <div className="text-center">
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <div className="font-medium text-sm text-gray-800 mb-1">
                  {achievement.name}
                </div>
                <div className="text-xs text-gray-600">
                  {achievement.description}
                </div>
                {achievement.earned && (
                  <Badge className="mt-2 bg-green-500 text-white text-xs">
                    Earned
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};


import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const subjects = [
  { name: 'Mathematics', progress: 85, level: 'Advanced', color: 'bg-blue-500' },
  { name: 'Biology', progress: 72, level: 'Intermediate', color: 'bg-green-500' },
  { name: 'Computer Science', progress: 90, level: 'Advanced', color: 'bg-purple-500' },
  { name: 'Physics', progress: 65, level: 'Intermediate', color: 'bg-red-500' },
  { name: 'Chemistry', progress: 58, level: 'Beginner', color: 'bg-yellow-500' }
];

export const SubjectProgress: React.FC = () => {
  return (
    <Card className="border-0 shadow-lg animate-fade-in hover:shadow-xl transition-all duration-200">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="text-blue-600" size={20} />
          <span>Subject Progress</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {subjects.map((subject, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${subject.color}`}></div>
                <span className="font-medium text-gray-800">{subject.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  {subject.level}
                </Badge>
                <span className="text-sm font-medium text-gray-600">{subject.progress}%</span>
              </div>
            </div>
            <Progress value={subject.progress} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

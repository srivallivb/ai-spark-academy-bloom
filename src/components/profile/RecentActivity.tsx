
import React from 'react';
import { Star, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const recentActivity = [
  { action: 'Completed Quiz', subject: 'Mathematics', time: '2 hours ago', score: '8/10' },
  { action: 'Created Note', subject: 'Biology', time: '1 day ago', score: null },
  { action: 'AI Chat Session', subject: 'Physics', time: '2 days ago', score: null },
  { action: 'Completed Quiz', subject: 'Chemistry', time: '3 days ago', score: '9/10' }
];

export const RecentActivity: React.FC = () => {
  return (
    <Card className="border-0 shadow-lg animate-fade-in hover:shadow-xl transition-all duration-200">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Star className="text-orange-600" size={20} />
          <span>Recent Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <BookOpen className="text-white" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-800">
                    {activity.action}
                  </div>
                  <div className="text-sm text-gray-600">
                    {activity.subject} • {activity.time}
                  </div>
                </div>
              </div>
              {activity.score && (
                <Badge className="bg-green-100 text-green-800">
                  {activity.score}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

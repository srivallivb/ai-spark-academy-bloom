
import React from 'react';
import { User, Trophy, BookOpen, Clock, Star, Target, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    grade: '10th Grade',
    joinDate: 'January 2024',
    avatar: '/placeholder.svg'
  };

  const stats = [
    { label: 'Total Study Hours', value: '156', icon: Clock, color: 'text-blue-600 bg-blue-100' },
    { label: 'Quizzes Completed', value: '47', icon: Trophy, color: 'text-green-600 bg-green-100' },
    { label: 'Notes Created', value: '23', icon: BookOpen, color: 'text-purple-600 bg-purple-100' },
    { label: 'Streak Days', value: '12', icon: Target, color: 'text-orange-600 bg-orange-100' }
  ];

  const achievements = [
    { name: 'First Quiz', description: 'Complete your first quiz', earned: true, icon: '🎯' },
    { name: 'Study Streak', description: '7 days of continuous learning', earned: true, icon: '🔥' },
    { name: 'Math Master', description: 'Score 90%+ in 5 math quizzes', earned: true, icon: '🧮' },
    { name: 'Note Taker', description: 'Create 20+ notes', earned: true, icon: '📝' },
    { name: 'AI Companion', description: 'Chat with AI 50+ times', earned: false, icon: '🤖' },
    { name: 'Perfect Score', description: 'Get 100% in any quiz', earned: false, icon: '⭐' }
  ];

  const subjects = [
    { name: 'Mathematics', progress: 85, level: 'Advanced', color: 'bg-blue-500' },
    { name: 'Biology', progress: 72, level: 'Intermediate', color: 'bg-green-500' },
    { name: 'Computer Science', progress: 90, level: 'Advanced', color: 'bg-purple-500' },
    { name: 'Physics', progress: 65, level: 'Intermediate', color: 'bg-red-500' },
    { name: 'Chemistry', progress: 58, level: 'Beginner', color: 'bg-yellow-500' }
  ];

  const recentActivity = [
    { action: 'Completed Quiz', subject: 'Mathematics', time: '2 hours ago', score: '8/10' },
    { action: 'Created Note', subject: 'Biology', time: '1 day ago', score: null },
    { action: 'AI Chat Session', subject: 'Physics', time: '2 days ago', score: null },
    { action: 'Completed Quiz', subject: 'Chemistry', time: '3 days ago', score: '9/10' }
  ];

  return (
    <div className="md:ml-64 min-h-screen p-6 pb-20 md:pb-6">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="bg-gradient-learning rounded-2xl p-8 mb-8 text-white animate-slide-up">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <User className="text-white" size={48} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
              <p className="text-white/80 mb-1">{user.email}</p>
              <p className="text-white/80 mb-4">{user.grade} • Joined {user.joinDate}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <Badge className="bg-white/20 text-white border-white/30">Active Learner</Badge>
                <Badge className="bg-white/20 text-white border-white/30">Quiz Master</Badge>
              </div>
            </div>
            <Button variant="secondary" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-0 shadow-lg animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Subject Progress */}
          <Card className="border-0 shadow-lg animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="text-learning-primary" size={20} />
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

          {/* Achievements */}
          <Card className="border-0 shadow-lg animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="text-learning-accent" size={20} />
                <span>Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    achievement.earned 
                      ? 'border-green-200 bg-green-50' 
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
        </div>

        {/* Recent Activity */}
        <Card className="border-0 shadow-lg mt-8 animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="text-learning-secondary" size={20} />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-learning-primary rounded-full flex items-center justify-center">
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
      </div>
    </div>
  );
};

export default Profile;


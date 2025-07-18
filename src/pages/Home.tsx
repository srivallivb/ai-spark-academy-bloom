import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MessageCircle, 
  BookOpen, 
  Target, 
  TrendingUp,
  Home as HomeIcon,
  User,
  Brain,
  Award,
  Star,
  Flame
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('Sri');
  const [dayStreak, setDayStreak] = useState(1);
  const [xpPoints, setXpPoints] = useState(1250);
  const [currentLevel, setCurrentLevel] = useState(5);
  const [xpToNextLevel, setXpToNextLevel] = useState(250);
  const [levelProgress, setLevelProgress] = useState(83);
  const [todayXP, setTodayXP] = useState(150);

  const quickActions = [
    {
      title: 'Daily Quiz',
      icon: Brain,
      color: 'bg-gradient-to-br from-orange-400 to-orange-500',
      textColor: 'text-white',
      path: '/quiz'
    },
    {
      title: 'AI Chat',
      icon: MessageCircle,
      color: 'bg-gradient-to-br from-purple-400 to-purple-500',
      textColor: 'text-white',
      path: '/chat'
    },
    {
      title: 'Practice',
      icon: Target,
      color: 'bg-gradient-to-br from-teal-400 to-teal-500',
      textColor: 'text-white',
      path: '/practice'
    },
    {
      title: 'Progress',
      icon: TrendingUp,
      color: 'bg-gradient-to-br from-green-400 to-green-500',
      textColor: 'text-white',
      path: '/progress'
    }
  ];

  const bottomNavItems = [
    { icon: HomeIcon, label: 'Home', path: '/', active: true },
    { icon: BookOpen, label: 'Learn', path: '/chat', active: false },
    { icon: Brain, label: 'Quiz', path: '/quiz', active: false },
    { icon: User, label: 'Profile', path: '/profile', active: false }
  ];

  const handleQuickAction = (path: string) => {
    navigate(path);
  };

  const handleBottomNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pb-20">
      {/* Header with greeting */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="text-white">
            <h1 className="text-2xl font-bold">Hello, {userName}! 👋</h1>
            <p className="text-blue-100 text-sm mt-1">Welcome to AI Spark</p>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Card className="bg-gradient-to-br from-red-400 to-pink-500 border-0 shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="text-white">
                <div className="text-2xl font-bold mb-1">{dayStreak}</div>
                <div className="text-sm text-red-100">Day Streak</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-teal-400 to-green-500 border-0 shadow-lg">
            <CardContent className="p-4 text-center">
              <div className="text-white">
                <div className="text-2xl font-bold mb-1">{xpPoints}</div>
                <div className="text-sm text-teal-100">XP Points</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Level Progress */}
      <div className="px-6 mt-6">
        <Card className="border-0 shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-gray-800">Level {currentLevel}</h3>
              <span className="text-sm text-gray-600">{levelProgress}%</span>
            </div>
            <div className="text-sm text-gray-600 mb-3">{xpToNextLevel} XP to next level</div>
            <Progress value={levelProgress} className="h-3 bg-gray-200" />
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="px-6 mt-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => handleQuickAction(action.path)}
              >
                <CardContent className={`p-6 ${action.color} rounded-lg`}>
                  <div className="flex flex-col items-center text-center">
                    <IconComponent className={`${action.textColor} mb-3`} size={32} />
                    <span className={`font-semibold ${action.textColor}`}>{action.title}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Today's Progress */}
      <div className="px-6 mt-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Today's Progress</h2>
        <Card className="border-0 shadow-md bg-gradient-to-r from-yellow-50 to-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Star className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg">Great Job!</h3>
                <p className="text-gray-600 text-sm">You've earned {todayXP} XP today</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Learning Suggestions */}
      <div className="px-6 mt-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Continue Learning</h2>
        <Card className="border-0 shadow-md">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Brain className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Mathematics</p>
                    <p className="text-sm text-gray-600">Algebra basics</p>
                  </div>
                </div>
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                  Continue
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Science</p>
                    <p className="text-sm text-gray-600">Physics laws</p>
                  </div>
                </div>
                <Button size="sm" className="bg-purple-500 hover:bg-purple-600">
                  Start
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-4 py-2">
          {bottomNavItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                onClick={() => handleBottomNavClick(item.path)}
                className={`flex flex-col items-center py-3 px-2 transition-colors duration-200 ${
                  item.active 
                    ? 'text-blue-600' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <IconComponent size={20} />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
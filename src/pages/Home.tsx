import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Brain, 
  Sparkles, 
  Trophy, 
  Users, 
  BookOpen, 
  MessageCircle,
  ArrowRight,
  Star,
  Zap,
  Target,
  Bot,
  Camera,
  Upload,
  Eye,
  Clock,
  FileText,
  Calculator,
  Globe,
  Lightbulb,
  Image,
  Gift,
  Flame,
  ChevronRight,
  Play,
  Home as HomeIcon,
  User,
  Rocket,
  Coffee,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Home = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [showSurprise, setShowSurprise] = useState(false);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Get personalized explanations and instant help with any topic',
      color: 'text-purple-600 bg-purple-100',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Trophy,
      title: 'Interactive Quizzes',
      description: 'Test your knowledge with engaging quizzes and track progress',
      color: 'text-amber-600 bg-amber-100',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: BookOpen,
      title: 'Smart Notes',
      description: 'Organize and save your learning materials with AI assistance',
      color: 'text-green-600 bg-green-100',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Target,
      title: 'Personalized Path',
      description: 'Customized learning journey from 6th grade to B.Tech',
      color: 'text-blue-600 bg-blue-100',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Students Learning', icon: Users, gradient: 'from-blue-500 to-purple-600' },
    { number: '95%', label: 'Success Rate', icon: Trophy, gradient: 'from-green-500 to-teal-600' },
    { number: '24/7', label: 'AI Support', icon: Bot, gradient: 'from-orange-500 to-red-600' },
    { number: '500+', label: 'Topics Covered', icon: BookOpen, gradient: 'from-pink-500 to-rose-600' }
  ];

  const recentlyViewed = [
    { title: 'Algebra Equations', subject: 'Mathematics', time: '2 hours ago', icon: Calculator, progress: 75, gradient: 'from-blue-500 to-cyan-500' },
    { title: 'World History', subject: 'History', time: '1 day ago', icon: Globe, progress: 60, gradient: 'from-green-500 to-teal-500' },
    { title: 'Physics Laws', subject: 'Physics', time: '3 days ago', icon: Lightbulb, progress: 90, gradient: 'from-purple-500 to-pink-500' }
  ];

  const learningCards = [
    { title: 'Continue Learning', subtitle: 'Pick up where you left off', icon: Play, gradient: 'from-green-500 to-teal-500', items: recentlyViewed },
    { title: 'Suggested for You', subtitle: 'Based on your interests', icon: Star, gradient: 'from-purple-500 to-pink-500', items: recentlyViewed.slice(1) },
    { title: 'Recently Viewed', subtitle: 'Your learning history', icon: Eye, gradient: 'from-blue-500 to-cyan-500', items: recentlyViewed }
  ];

  const bottomNavItems = [
    { icon: HomeIcon, label: 'Home', path: '/', active: true },
    { icon: BookOpen, label: 'Learn', path: '/chat', active: false },
    { icon: Brain, label: 'Practice', path: '/quiz', active: false },
    { icon: User, label: 'Profile', path: '/profile', active: false }
  ];

  const surpriseFacts = [
    "Did you know? The human brain has about 86 billion neurons! 🧠",
    "Fun fact: Honey never spoils! Archaeologists have found edible honey in ancient Egyptian tombs! 🍯",
    "Amazing: A group of flamingos is called a 'flamboyance'! 🦩",
    "Wow: Bananas are berries, but strawberries aren't! 🍌"
  ];

  const aiLearningActions = [
    {
      title: 'Start Learning 🚀',
      subtitle: 'Jump into your next lesson',
      icon: Rocket,
      gradient: 'from-blue-400 to-purple-500',
      action: () => navigate('/chat'),
      message: 'Ready to blast off?'
    },
    {
      title: 'Quick Quiz of the Day 📚',
      subtitle: 'Test your knowledge',
      icon: Brain,
      gradient: 'from-green-400 to-teal-500',
      action: () => navigate('/quiz'),
      message: 'Challenge accepted!'
    },
    {
      title: 'Ask AI Anything 🤖',
      subtitle: 'Get instant answers',
      icon: MessageCircle,
      gradient: 'from-purple-400 to-pink-500',
      action: () => navigate('/chat'),
      message: 'What\'s on your mind?'
    },
    {
      title: 'Today\'s Challenge 💡',
      subtitle: 'Discover something new',
      icon: Lightbulb,
      gradient: 'from-orange-400 to-red-500',
      action: () => navigate('/chat'),
      message: 'Let\'s explore together!'
    }
  ];

  const [currentAiAction, setCurrentAiAction] = useState(0);

  const handleFileUpload = async (file: File, source: string) => {
    if (!file) return;

    const extractedQuestion = `I need help with this ${file.type.includes('image') ? 'problem' : 'question'} from my ${source === 'camera' ? 'camera' : 'gallery'}. Please analyze and explain the solution step by step.`;
    
    navigate('/chat', { 
      state: { 
        uploadedFile: file,
        extractedQuestion: extractedQuestion,
        source: source
      }
    });
  };

  const handleGalleryUpload = () => {
    fileInputRef.current?.click();
  };

  const handleCameraUpload = () => {
    cameraInputRef.current?.click();
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>, source: string) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileUpload(file, source);
    }
  };

  const handleSurpriseMe = () => {
    const randomFact = surpriseFacts[Math.floor(Math.random() * surpriseFacts.length)];
    setShowSurprise(true);
    alert(randomFact);
    setTimeout(() => setShowSurprise(false), 3000);
  };

  const handleAiActionClick = () => {
    const action = aiLearningActions[currentAiAction];
    action.action();
  };

  const cycleAiAction = () => {
    setCurrentAiAction((prev) => (prev + 1) % aiLearningActions.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-25 via-purple-25 to-pink-25 pb-20 md:pb-8">
      {/* Hidden file inputs */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => onFileChange(e, 'gallery')}
        className="hidden"
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={(e) => onFileChange(e, 'camera')}
        className="hidden"
      />

      {/* Colorful Header */}
      <header className="md:ml-64 px-4 py-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="md:hidden flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-bounce">
              <Bot className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">AI Spark Academy</h1>
              <p className="text-white/80 text-sm font-medium">Bloom</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-3 py-2" asChild>
              <Link to="/auth">Login</Link>
            </Button>
            <Button className="bg-white text-purple-600 hover:bg-white/90 font-semibold text-sm px-3 py-2" asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="md:ml-64">
        {/* Welcome Banner */}
        <section className="px-4 py-6">
          <Card className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 border-0 shadow-xl animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center animate-float">
                  <Bot className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-2">
                    Hey Buddy! Ready to spark your learning journey? 🚀
                  </h2>
                  <p className="text-white/90 font-medium text-sm">You're doing amazing! Let's make today awesome together!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Daily Streak Card */}
        <section className="px-4 mb-6">
          <Card className="bg-gradient-to-r from-orange-300 to-pink-400 border-0 shadow-lg animate-slide-up">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Flame className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Daily Streak 🔥</h3>
                    <p className="text-white/90 text-sm">You're on a 3-day streak! Keep it going!</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-white">
                  <span className="font-medium text-sm">⭐ XP Progress</span>
                  <span className="font-bold text-sm">150 / 200 XP</span>
                </div>
                <Progress value={75} className="h-2 bg-white/20" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Stats Section */}
        <section className="px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-4 text-center">
                    <div className={`w-10 h-10 bg-gradient-to-r ${stat.gradient.replace('500', '400').replace('600', '500')} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <IconComponent className="text-white" size={18} />
                    </div>
                    <div className="text-xl font-bold text-gray-800 mb-1">{stat.number}</div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* AI-Powered Learning Section */}
        <section className="px-4 py-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">What do you want to learn today?</h2>
            <p className="text-gray-600 text-sm">Let our AI buddy help you explore!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* AI Learning Action Card */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-blue-50 animate-slide-up overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-r ${aiLearningActions[currentAiAction].gradient} rounded-full flex items-center justify-center mx-auto mb-4 animate-float shadow-lg`}>
                  {React.createElement(aiLearningActions[currentAiAction].icon, { className: "text-white", size: 32 })}
                </div>
                <CardTitle className={`text-lg font-bold bg-gradient-to-r ${aiLearningActions[currentAiAction].gradient} bg-clip-text text-transparent mb-2`}>
                  {aiLearningActions[currentAiAction].title}
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium text-sm">
                  {aiLearningActions[currentAiAction].subtitle}
                </CardDescription>
                
                <div className="mt-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-orange-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full flex items-center justify-center animate-bounce">
                      <Bot className="text-white" size={14} />
                    </div>
                    <p className="text-orange-700 font-medium text-xs">
                      "Hey Buddy! {aiLearningActions[currentAiAction].message}"
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3 relative z-10">
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <Sparkles className="text-purple-500" size={16} />
                  <span className="text-xs text-purple-700 font-medium">AI-powered personalized experience</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
                  <Heart className="text-green-500" size={16} />
                  <span className="text-xs text-green-700 font-medium">Made just for you!</span>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    className={`w-full bg-gradient-to-r ${aiLearningActions[currentAiAction].gradient} hover:opacity-90 flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 text-sm py-2`}
                    onClick={handleAiActionClick}
                  >
                    {React.createElement(aiLearningActions[currentAiAction].icon, { size: 16 })}
                    <span>Let's Go!</span>
                    <ArrowRight size={16} />
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 text-sm py-2"
                    onClick={cycleAiAction}
                  >
                    <Coffee size={14} />
                    <span className="ml-2">Try Something Else</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Smart Upload Feature */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <Camera className="text-white" size={24} />
                </div>
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Smart Question Upload
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm">
                  Upload from gallery or device to get instant AI-powered solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <Image className="text-blue-500" size={16} />
                  <span className="text-xs text-blue-700 font-medium">Upload from gallery or device</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
                  <Zap className="text-green-500" size={16} />
                  <span className="text-xs text-green-700 font-medium">Get instant AI analysis</span>
                </div>
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-gradient-to-r from-green-400 to-teal-500 hover:opacity-90 flex items-center space-x-2 shadow-md text-sm py-2"
                    onClick={handleGalleryUpload}
                  >
                    <Upload size={16} />
                    <span>Upload from Gallery</span>
                  </Button>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-400 to-purple-500 hover:opacity-90 flex items-center space-x-2 shadow-md text-sm py-2"
                    onClick={handleCameraUpload}
                  >
                    <Camera size={16} />
                    <span>Upload from Camera</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Floating Surprise Button */}
      <Button
        onClick={handleSurpriseMe}
        className={`fixed bottom-20 right-4 md:bottom-8 w-12 h-12 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 hover:opacity-90 shadow-xl transition-all duration-300 z-20 ${showSurprise ? 'animate-wiggle' : 'animate-bounce-slow'}`}
        size="icon"
      >
        <Gift className="text-white" size={20} />
      </Button>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/30 px-4 py-2 md:hidden shadow-xl z-10">
        <div className="flex justify-around items-center">
          {bottomNavItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-2xl transition-all duration-300 ${
                  item.active
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white scale-105 -translate-y-1 shadow-md'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <div className={`w-6 h-6 flex items-center justify-center ${item.active ? '' : 'hover:scale-110 transition-transform'}`}>
                  <Icon size={18} />
                </div>
                <span className={`text-xs font-medium ${item.active ? 'text-white' : ''}`}>
                  {item.label}
                </span>
                {item.active && (
                  <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

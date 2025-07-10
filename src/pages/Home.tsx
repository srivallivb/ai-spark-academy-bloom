
import React from 'react';
import { Link } from 'react-router-dom';
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
  Lightbulb
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Get personalized explanations and instant help with any topic',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Trophy,
      title: 'Interactive Quizzes',
      description: 'Test your knowledge with engaging quizzes and track progress',
      color: 'text-amber-600 bg-amber-100'
    },
    {
      icon: BookOpen,
      title: 'Smart Notes',
      description: 'Organize and save your learning materials with AI assistance',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Target,
      title: 'Personalized Path',
      description: 'Customized learning journey from 6th grade to B.Tech',
      color: 'text-blue-600 bg-blue-100'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Students Learning' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'AI Support' },
    { number: '500+', label: 'Topics Covered' }
  ];

  const recentlyViewed = [
    { title: 'Algebra Equations', subject: 'Mathematics', time: '2 hours ago', icon: Calculator },
    { title: 'World History', subject: 'History', time: '1 day ago', icon: Globe },
    { title: 'Physics Laws', subject: 'Physics', time: '3 days ago', icon: Lightbulb },
    { title: 'English Grammar', subject: 'English', time: '1 week ago', icon: FileText }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="md:ml-64 px-4 py-6 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="md:hidden flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-learning rounded-lg flex items-center justify-center">
              <BookOpen className="text-white" size={16} />
            </div>
            <h1 className="text-lg font-bold text-gray-800">LearnAI</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/auth">Login</Link>
            </Button>
            <Button className="bg-gradient-learning hover:opacity-90" asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="md:ml-64 pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="px-6 py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-learning text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Sparkles size={16} />
              <span>AI-Powered Learning Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-slide-up">
              Learn Smarter with
              <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent"> AI Assistance</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto animate-slide-up">
              Our AI-powered companion transforms learning into an engaging, personalized, and enjoyable experience. 
              Join thousands of students unlocking their full potential every day.
            </p>

            <p className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-8 animate-fade-in">
              "Your AI study buddy is just one click away! 🚀✨"
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="lg" className="bg-gradient-learning hover:opacity-90 px-8 flex items-center space-x-3" asChild>
                <Link to="/chat">
                  <Bot size={24} className="animate-pulse" />
                  <span>Try AI Chat</span>
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8" asChild>
                <Link to="/quiz">Take a Quiz</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-6 py-12 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Students Love LearnAI
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the future of education with our comprehensive AI-powered learning platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                        <Icon size={24} />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-gray-600">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Smart Features Section */}
        <section className="px-6 py-16 bg-gradient-to-br from-slate-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Camera Upload Feature */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm animate-slide-up">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                    <Camera className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Smart Question Upload
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Snap a photo of your question and get instant AI-powered solutions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Upload className="text-blue-600" size={20} />
                    <span className="text-sm text-blue-700 font-medium">Upload from camera or gallery</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <Zap className="text-green-600" size={20} />
                    <span className="text-sm text-green-700 font-medium">Get instant AI analysis</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 flex items-center space-x-2" asChild>
                    <Link to="/chat">
                      <Camera size={18} />
                      <span>Try Camera Upload</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Recently Viewed */}
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                      <Eye className="text-white" size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800">Recently Viewed</CardTitle>
                      <CardDescription className="text-gray-600">Continue where you left off</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentlyViewed.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                          <Icon className="text-gray-600" size={16} />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-800 text-sm">{item.title}</div>
                          <div className="text-xs text-gray-500">{item.subject}</div>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-400">
                          <Clock size={12} />
                          <span>{item.time}</span>
                        </div>
                      </div>
                    );
                  })}
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link to="/notes">
                      <span>View All History</span>
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

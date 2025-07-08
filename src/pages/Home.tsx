
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
  Target
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
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
             Our AI-powered companion transforms learning into an engaging, personalized, and enjoyable experience. 
              Join thousands of students unlocking their full potential every day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="lg" className="bg-gradient-learning hover:opacity-90 px-8" asChild>
                <Link to="/chat">
                  Start Learning <ArrowRight className="ml-2" size={20} />
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

        {/* CTA Section */}
        <section className="px-6 py-16 bg-gradient-learning text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-float mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Zap className="text-white" size={32} />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who are already learning smarter with AI
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8" asChild>
                <Link to="/auth">
                  Start Free Trial <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8" asChild>
                <Link to="/chat">Try AI Chat</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

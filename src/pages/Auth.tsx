import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft, GraduationCap, Sparkles, Star, Heart, BookOpen, Code, Atom, Calculator, Globe, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentView, setCurrentView] = useState('welcome');
  const [selectedEducationLevel, setSelectedEducationLevel] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isStartingJourney, setIsStartingJourney] = useState(false);

  const educationLevels = [
    'Class 6-8',
    'Class 9-10', 
    'Class 11-12',
    'Undergraduate',
    'Graduate',
    'Post Graduate',
    'Professional'
  ];

  const learningInterests = [
    { name: 'Mathematics', icon: Calculator, color: 'bg-blue-500' },
    { name: 'Physics', icon: Atom, color: 'bg-purple-500' },
    { name: 'Chemistry', icon: Sparkles, color: 'bg-green-500' },
    { name: 'Biology', icon: Heart, color: 'bg-red-500' },
    { name: 'Computer Science', icon: Cpu, color: 'bg-indigo-500' },
    { name: 'Programming Languages', icon: Code, color: 'bg-orange-500' },
    { name: 'Web Development', icon: Globe, color: 'bg-cyan-500' },
    { name: 'Data Science', icon: BookOpen, color: 'bg-teal-500' },
    { name: 'Networking', icon: Globe, color: 'bg-pink-500' },
    { name: 'English Literature', icon: BookOpen, color: 'bg-amber-500' },
    { name: 'History', icon: BookOpen, color: 'bg-yellow-500' },
    { name: 'Geography', icon: Globe, color: 'bg-emerald-500' },
    { name: 'Economics', icon: Calculator, color: 'bg-violet-500' },
    { name: 'Machine Learning', icon: Cpu, color: 'bg-rose-500' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (currentView === 'signup') {
        setCurrentView('setup');
      } else {
        console.log('Login successful');
      }
    }, 2000);
  };

  const handleSetupComplete = () => {
    setIsStartingJourney(true);
    setTimeout(() => {
      console.log('Learning journey started!');
      // Navigate to dashboard or main app
    }, 3000);
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  // Welcome Screen
  if (currentView === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 flex flex-col">
        {/* Header with decorative elements */}
        <div className="relative pt-16 pb-12 px-6">
          <div className="text-center relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-6">
              <Star className="text-yellow-300 animate-pulse" size={20} />
            </div>
            <div className="absolute -top-6 -right-4">
              <Sparkles className="text-pink-300 animate-bounce" size={18} />
            </div>
            <div className="absolute -bottom-4 left-12">
              <Heart className="text-red-300 animate-pulse" size={16} />
            </div>
            
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <GraduationCap className="text-purple-600" size={48} />
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to AIKA! 🚀
            </h1>
            <p className="text-white/90 text-xl mb-2">
              Your AI Learning Companion
            </p>
            <p className="text-white/80 text-base px-4">
              Join thousands of students already learning with AIKA's personalized AI tutoring
            </p>
          </div>
        </div>

        {/* Welcome Content */}
        <div className="flex-1 bg-white rounded-t-3xl px-6 py-12">
          <div className="max-w-sm mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Get Started</h2>
              <p className="text-gray-600">Choose how you'd like to continue</p>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={() => setCurrentView('signup')}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <User className="mr-2" size={20} />
                Create New Account
              </Button>

              <Button 
                onClick={() => setCurrentView('signin')}
                variant="outline"
                className="w-full py-4 rounded-2xl border-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 font-semibold text-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Mail className="mr-2" size={20} />
                Sign In
              </Button>
            </div>

            {/* Features highlight */}
            <div className="mt-12 p-6 bg-purple-50 rounded-2xl">
              <h3 className="font-semibold text-gray-800 mb-3 text-center">Why Choose AIKA?</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Personalized AI tutoring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Interactive learning experiences</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span>Progress tracking & achievements</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Setup Screen
  if (currentView === 'setup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 flex flex-col">
        {/* Header */}
        <div className="relative pt-12 pb-8 px-4">
          <div className="absolute top-6 left-6">
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => setCurrentView('signup')}
            >
              <ArrowLeft className="mr-2" size={16} />
              Back
            </Button>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <GraduationCap className="text-purple-600" size={40} />
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-2">
              Complete Your Profile
            </h1>
            <p className="text-white/90 text-lg">
              Help us personalize your learning experience
            </p>
          </div>
        </div>

        {/* Setup Form */}
        <div className="flex-1 bg-white rounded-t-3xl px-6 py-8 overflow-y-auto">
          <div className="max-w-md mx-auto">
            {/* Education Level */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <GraduationCap className="mr-2 text-purple-600" size={20} />
                Education Level
              </h3>
              <p className="text-gray-600 text-sm mb-4">What's your current education level?</p>
              <div className="grid grid-cols-2 gap-3">
                {educationLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedEducationLevel(level)}
                    className={`px-4 py-3 rounded-2xl border text-sm font-medium transition-all transform ${
                      selectedEducationLevel === level
                        ? 'bg-purple-600 text-white border-purple-600 scale-105 shadow-lg'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-purple-300 hover:scale-102'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Learning Interests */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <Sparkles className="mr-2 text-purple-600" size={20} />
                Learning Interests
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Select subjects you're interested in learning (choose 3-5 topics)
              </p>
              <div className="grid grid-cols-2 gap-3">
                {learningInterests.map((interest) => {
                  const IconComponent = interest.icon;
                  const isSelected = selectedInterests.includes(interest.name);
                  return (
                    <button
                      key={interest.name}
                      onClick={() => toggleInterest(interest.name)}
                      className={`p-4 rounded-2xl text-sm font-medium transition-all transform flex flex-col items-center space-y-2 ${
                        isSelected
                          ? `${interest.color} text-white scale-105 shadow-lg`
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-102'
                      }`}
                    >
                      <IconComponent size={24} />
                      <span className="text-center leading-tight">{interest.name}</span>
                    </button>
                  );
                })}
              </div>
              {selectedInterests.length > 0 && (
                <div className="mt-3 text-center">
                  <span className="text-sm text-purple-600 font-medium">
                    {selectedInterests.length} topic{selectedInterests.length > 1 ? 's' : ''} selected
                  </span>
                </div>
              )}
            </div>

            {/* Interactive Start Learning Journey Button */}
            <div className="relative">
              <Button 
                onClick={handleSetupComplete}
                className={`w-full py-4 rounded-2xl font-semibold text-lg transform transition-all duration-300 ${
                  isStartingJourney
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 animate-pulse'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105'
                } text-white shadow-lg`}
                disabled={!selectedEducationLevel || selectedInterests.length === 0 || isStartingJourney}
              >
                {isStartingJourney ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Starting Your Journey...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Star className="animate-bounce" size={20} />
                    <span>Start Learning Journey</span>
                    <Sparkles className="animate-pulse" size={20} />
                  </div>
                )}
              </Button>
              
              {isStartingJourney && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                    <p className="text-sm text-purple-600 font-medium">
                      🎉 Welcome to AIKA! 
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            {(!selectedEducationLevel || selectedInterests.length === 0) && !isStartingJourney && (
              <p className="text-center text-sm text-gray-500 mt-3">
                Please select your education level and at least one interest to continue
              </p>
            )}

            {/* Progress indicator when starting journey */}
            {isStartingJourney && (
              <div className="mt-6 space-y-3">
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <p className="text-center text-sm text-gray-600">
                  Setting up your personalized learning experience...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Sign In / Sign Up Forms
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 flex flex-col">
      {/* Header */}
      <div className="relative pt-12 pb-8 px-4">
        <div className="absolute top-6 left-6">
          <Button 
            variant="ghost" 
            className="text-white/80 hover:text-white hover:bg-white/10 transform transition-all hover:scale-105"
            onClick={() => setCurrentView('welcome')}
          >
            <ArrowLeft className="mr-2" size={16} />
            Back
          </Button>
        </div>
        
        <div className="text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <GraduationCap className="text-purple-600" size={40} />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2">
            {currentView === 'signin' ? 'Welcome Back!' : 'Join AIKA'}
          </h1>
          <p className="text-white/90 text-lg">
            {currentView === 'signin' 
              ? 'Sign in to continue learning' 
              : 'Create your account to get started'
            }
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 bg-white rounded-t-3xl px-6 py-8">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {currentView === 'signup' && (
              <div className="relative">
                <User className="absolute left-4 top-4 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  className="pl-12 py-4 rounded-2xl border-gray-200 focus:border-purple-400 focus:ring-purple-400 transition-all"
                  required
                />
              </div>
            )}
            
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
              <Input
                type="email"
                placeholder="Enter your email address"
                className="pl-12 py-4 rounded-2xl border-gray-200 focus:border-purple-400 focus:ring-purple-400 transition-all"
                required
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-gray-400" size={20} />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder={currentView === 'signin' ? "Enter your password" : "Create a strong password"}
                className="pl-12 pr-12 py-4 rounded-2xl border-gray-200 focus:border-purple-400 focus:ring-purple-400 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {currentView === 'signup' && (
              <div className="relative">
                <Lock className="absolute left-4 top-4 text-gray-400" size={20} />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="pl-12 pr-12 py-4 rounded-2xl border-gray-200 focus:border-purple-400 focus:ring-purple-400 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            )}

            {currentView === 'signin' && (
              <div className="text-right">
                <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium hover:underline transition-all">
                  Forgot your password?
                </a>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
              disabled={isLoading}
            >
              {isLoading 
                ? (currentView === 'signin' ? "Signing in..." : "Creating Account...") 
                : (currentView === 'signin' ? "Sign In" : "Continue")
              }
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {currentView === 'signin' ? "Don't have an account?" : "Already have an account?"}{' '}
              <button 
                onClick={() => setCurrentView(currentView === 'signin' ? 'signup' : 'signin')}
                className="text-purple-600 hover:text-purple-700 font-medium hover:underline transition-all"
              >
                {currentView === 'signin' ? "Create Account" : "Sign In"}
              </button>
            </p>
          </div>

          {currentView === 'signup' && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                By continuing, you agree to our{' '}
                <a href="#" className="text-purple-600 hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft, GraduationCap, Sparkles, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentView, setCurrentView] = useState('welcome'); // 'welcome', 'signin', 'signup', 'setup'
  const [selectedEducationLevel, setSelectedEducationLevel] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const educationLevels = [
    'Class 1-5', 'Class 6-8', 'Class 9-10',
    'Class 11-12', 'Undergraduate', 'Graduate',
    'Post Graduate', 'Professional'
  ];

  const learningInterests = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology',
    'Programming Languages', 'Computer Science', 'English',
    'History', 'Geography', 'Economics', 'Social Studies',
    'Networking', 'Data Science', 'Web Development'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (currentView === 'signup') {
        setCurrentView('setup');
      } else {
        // Navigate to main app
        console.log('Login successful');
      }
    }, 2000);
  };

  const handleSetupComplete = () => {
    // Navigate to main app
    console.log('Setup complete');
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
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg shadow-lg"
              >
                Create New Account
              </Button>

              <Button 
                onClick={() => setCurrentView('signin')}
                variant="outline"
                className="w-full py-4 rounded-2xl border-2 border-purple-200 text-purple-600 hover:bg-purple-50 font-semibold text-lg"
              >
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
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Education Level</h3>
              <p className="text-gray-600 text-sm mb-4">What's your current education level?</p>
              <div className="grid grid-cols-2 gap-3">
                {educationLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedEducationLevel(level)}
                    className={`px-4 py-3 rounded-2xl border text-sm font-medium transition-all ${
                      selectedEducationLevel === level
                        ? 'bg-purple-600 text-white border-purple-600'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Learning Interests */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Learning Interests</h3>
              <p className="text-gray-600 text-sm mb-4">
                Select subjects you're interested in learning
              </p>
              <div className="flex flex-wrap gap-2">
                {learningInterests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedInterests.includes(interest)
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-purple-100'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Complete Button */}
            <Button 
              onClick={handleSetupComplete}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg"
              disabled={!selectedEducationLevel || selectedInterests.length === 0}
            >
              Start Learning Journey
            </Button>
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
            className="text-white/80 hover:text-white hover:bg-white/10"
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
                  className="pl-12 py-4 rounded-2xl border-gray-200 focus:border-purple-400"
                  required
                />
              </div>
            )}
            
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
              <Input
                type="email"
                placeholder="Enter your email address"
                className="pl-12 py-4 rounded-2xl border-gray-200 focus:border-purple-400"
                required
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-gray-400" size={20} />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder={currentView === 'signin' ? "Enter your password" : "Create a strong password"}
                className="pl-12 pr-12 py-4 rounded-2xl border-gray-200 focus:border-purple-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {currentView === 'signin' && (
              <div className="text-right">
                <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                  Forgot your password?
                </a>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg"
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
                className="text-purple-600 hover:text-purple-700 font-medium"
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

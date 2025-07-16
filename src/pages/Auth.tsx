
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, BookOpen, ArrowLeft, GraduationCap, Sparkles, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState('auth'); // 'auth' or 'setup'
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
      setCurrentStep('setup');
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

  if (currentStep === 'setup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 flex flex-col">
        {/* Header with decorative elements */}
        <div className="relative pt-12 pb-8 px-4">
          <div className="absolute top-6 left-6">
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => setCurrentStep('auth')}
            >
              <ArrowLeft className="mr-2" size={16} />
              Back
            </Button>
          </div>
          
          <div className="text-center relative">
            {/* Decorative elements */}
            <div className="absolute -top-2 -left-4">
              <Star className="text-yellow-300 animate-pulse" size={16} />
            </div>
            <div className="absolute -top-4 -right-2">
              <Sparkles className="text-pink-300 animate-bounce" size={14} />
            </div>
            <div className="absolute -bottom-2 left-8">
              <Heart className="text-red-300 animate-pulse" size={12} />
            </div>
            
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <GraduationCap className="text-purple-600" size={40} />
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome to AIKA Learning! 🚀
            </h1>
            <p className="text-white/90 text-lg">
              Your personalized learning journey starts here
            </p>
            <p className="text-white/80 text-sm mt-2 italic">
              Join thousands of students who are already transforming their future with AIKA!
            </p>
          </div>
        </div>

        {/* Setup Form */}
        <div className="flex-1 bg-white rounded-t-3xl px-6 py-8 overflow-y-auto">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Your Account</h2>
              <p className="text-gray-600">Let's get you started on your learning adventure</p>
            </div>

            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-4 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-12 py-4 rounded-2xl border-gray-200 focus:border-purple-400"
                  />
                </div>
                <div className="relative">
                  <Sparkles className="absolute left-4 top-4 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Choose a cool nickname"
                    className="pl-12 py-4 rounded-2xl border-gray-200 focus:border-purple-400"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="pl-12 py-4 rounded-2xl border-gray-200 focus:border-purple-400"
                  />
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Security</h3>
              <div className="space-y-4">
                <div className="relative">
                  <Lock className="absolute left-4 top-4 text-gray-400" size={20} />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="pl-12 pr-12 py-4 rounded-2xl border-gray-200 focus:border-purple-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-4 text-gray-400" size={20} />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="pl-12 pr-12 py-4 rounded-2xl border-gray-200 focus:border-purple-400"
                  />
                </div>
              </div>
            </div>

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
                        ? 'bg-purple-500 text-white border-purple-500'
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
                Select subjects you're interested in learning (choose multiple)
              </p>
              <div className="flex flex-wrap gap-2">
                {learningInterests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedInterests.includes(interest)
                        ? 'bg-purple-500 text-white'
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
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold text-lg"
              disabled={!selectedEducationLevel || selectedInterests.length === 0}
            >
              Create Account & Start Learning
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500 flex flex-col">
      {/* Header with decorative elements */}
      <div className="relative pt-12 pb-8 px-4">
        <div className="absolute top-6 left-6">
          <Button 
            variant="ghost" 
            className="text-white/80 hover:text-white hover:bg-white/10"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Link>
          </Button>
        </div>
        
        <div className="text-center relative">
          {/* Decorative elements */}
          <div className="absolute -top-2 -left-4">
            <Star className="text-yellow-300 animate-pulse" size={16} />
          </div>
          <div className="absolute -top-4 -right-2">
            <Sparkles className="text-pink-300 animate-bounce" size={14} />
          </div>
          <div className="absolute -bottom-2 left-8">
            <Heart className="text-red-300 animate-pulse" size={12} />
          </div>
          
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <BookOpen className="text-purple-600" size={40} />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome Back to AIKA! 🎓
          </h1>
          <p className="text-white/90 text-lg">
            Continue your learning journey with us
          </p>
          <p className="text-white/80 text-sm mt-2 italic">
            Ready to unlock your potential? Let's dive back into learning!
          </p>
        </div>
      </div>

      {/* Auth Forms */}
      <div className="flex-1 bg-white rounded-t-3xl px-6 py-8">
        <div className="max-w-md mx-auto">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 p-1 rounded-2xl">
              <TabsTrigger 
                value="login" 
                className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger 
                value="signup" 
                className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Create Account
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign In to Your Account</h2>
                <p className="text-gray-600">Enter your credentials to continue</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="pl-12 py-4 rounded-2xl border-gray-200 focus:border-purple-400"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Lock className="absolute left-4 top-4 text-gray-400" size={20} />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
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

                <div className="text-right">
                  <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Forgot your password?
                  </a>
                </div>

                <Button 
                  type="submit" 
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In & Start Learning"}
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">or</p>
                <p className="text-gray-600">
                  New to AIKA Learning?{' '}
                  <button className="text-purple-600 hover:text-purple-700 font-medium">
                    Create Account
                  </button>
                </p>
              </div>

              {/* Motivational Quote */}
              <div className="mt-8 p-4 bg-purple-50 rounded-2xl border-l-4 border-purple-500">
                <p className="text-purple-700 italic text-center">
                  "Every expert was once a beginner. Every pro was once an amateur."
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="signup">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Your Account</h2>
                <p className="text-gray-600">Join thousands learning with AIKA</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-4 top-4 text-gray-400" size={20} />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-12 py-4 rounded-2xl border-gray-200 focus:border-purple-400"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="Enter your email address"
                    className="pl-12 py-4 rounded-2xl border-gray-200 focus:border-purple-400"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Lock className="absolute left-4 top-4 text-gray-400" size={20} />
                  <Input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
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

                <Button 
                  type="submit" 
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Continue Setup"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  By continuing, you agree to our{' '}
                  <a href="#" className="text-purple-600 hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;


import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Home, MessageCircle, BookOpen, User, Award, PenTool, Sparkles } from 'lucide-react';

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { icon: Home, label: 'Home', path: '/', color: 'from-blue-500 to-purple-600' },
    { icon: MessageCircle, label: 'AI Chat', path: '/chat', color: 'from-green-500 to-teal-600' },
    { icon: BookOpen, label: 'Quiz', path: '/quiz', color: 'from-orange-500 to-red-600' },
    { icon: PenTool, label: 'Notes', path: '/notes', color: 'from-pink-500 to-rose-600' },
    { icon: User, label: 'Profile', path: '/profile', color: 'from-indigo-500 to-blue-600' }
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Outlet />
      
      {/* Enhanced Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-purple-200/30 px-2 py-3 md:hidden shadow-2xl">
        <div className="flex justify-around items-center">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isCurrentActive = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center space-y-1 px-2 py-2 rounded-2xl transition-all duration-300 transform ${
                  isCurrentActive
                    ? 'scale-110 -translate-y-1'
                    : 'hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  isCurrentActive
                    ? `bg-gradient-to-r ${item.color} shadow-lg`
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}>
                  <Icon 
                    size={20} 
                    className={isCurrentActive ? 'text-white' : 'text-gray-600'} 
                  />
                  {isCurrentActive && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse">
                      <Sparkles size={8} className="text-white absolute top-0.5 left-0.5" />
                    </div>
                  )}
                </div>
                <span className={`text-xs font-medium transition-colors ${
                  isCurrentActive ? 'text-purple-700' : 'text-gray-500'
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      
      {/* Enhanced Side Navigation for Desktop */}
      <div className="hidden md:fixed md:left-0 md:top-0 md:h-full md:w-72 md:bg-gradient-to-b md:from-white/90 md:to-purple-50/90 md:backdrop-blur-xl md:border-r md:border-purple-200/30 md:flex md:flex-col md:z-10 md:shadow-xl">
        <div className="p-8">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg animate-float">
              <BookOpen className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                LearnAI
              </h1>
              <p className="text-sm text-purple-600 font-medium">Smart Learning Hub</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 px-6 space-y-3">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isCurrentActive = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 group ${
                  isCurrentActive
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg transform scale-105`
                    : 'text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isCurrentActive ? 'bg-white/20' : 'bg-purple-100 group-hover:bg-purple-200'
                }`}>
                  <Icon size={20} />
                </div>
                <span className="font-semibold text-lg">{item.label}</span>
                {isCurrentActive && (
                  <div className="ml-auto">
                    <Sparkles size={16} className="animate-pulse" />
                  </div>
                )}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 text-white text-center">
            <Award className="mx-auto mb-2" size={24} />
            <p className="text-sm font-medium">Keep Learning!</p>
            <p className="text-xs opacity-90">You're doing great</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

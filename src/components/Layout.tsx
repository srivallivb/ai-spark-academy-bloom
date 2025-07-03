
import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Home, MessageCircle, BookOpen, User, Award, PenTool } from 'lucide-react';

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: MessageCircle, label: 'AI Chat', path: '/chat' },
    { icon: BookOpen, label: 'Quiz', path: '/quiz' },
    { icon: PenTool, label: 'Notes', path: '/notes' },
    { icon: User, label: 'Profile', path: '/profile' }
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Outlet />
      
      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 px-4 py-2 md:hidden">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-learning-primary text-white shadow-lg'
                    : 'text-gray-600 hover:text-learning-primary'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
      
      {/* Side Navigation for Desktop */}
      <div className="hidden md:fixed md:left-0 md:top-0 md:h-full md:w-64 md:bg-white/80 md:backdrop-blur-lg md:border-r md:border-gray-200 md:flex md:flex-col md:z-10">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-learning rounded-xl flex items-center justify-center">
              <BookOpen className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">LearnAI</h1>
              <p className="text-sm text-gray-500">Smart Learning</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-gradient-learning text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-learning-primary'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Layout;

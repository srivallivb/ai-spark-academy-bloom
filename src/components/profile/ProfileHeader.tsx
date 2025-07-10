
import React from 'react';
import { User, Edit, Settings } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EditProfileDialog } from './EditProfileDialog';
import { SettingsDropdown } from './SettingsDropdown';

interface ProfileHeaderProps {
  user: {
    name: string;
    email: string;
    grade: string;
    joinDate: string;
  };
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white animate-fade-in">
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
        <div className="flex flex-col space-y-3">
          <EditProfileDialog user={user} />
          <SettingsDropdown />
        </div>
      </div>
    </div>
  );
};

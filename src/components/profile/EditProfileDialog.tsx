
import React, { useState } from 'react';
import { Edit, User, Mail, Calendar, GraduationCap, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface EditProfileDialogProps {
  user: {
    name: string;
    email: string;
    dateOfBirth?: string;
    education?: string;
  };
}

export const EditProfileDialog: React.FC<EditProfileDialogProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSaveProfile = () => {
    console.log('Profile saved');
    setIsOpen(false);
  };

  const handleLogout = () => {
    console.log('User logged out');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="bg-white/20 border-white/30 text-white hover:bg-white/30 transition-all duration-200">
          <Edit size={16} className="mr-2" />
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center text-gray-800">Edit Profile</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right flex items-center text-gray-700">
              <User size={16} className="mr-1" />
              Name
            </Label>
            <Input
              id="name"
              defaultValue={user.name}
              className="col-span-3 border-gray-300 focus:border-blue-500"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right flex items-center text-gray-700">
              <Mail size={16} className="mr-1" />
              Email
            </Label>
            <Input
              id="email"
              defaultValue={user.email}
              className="col-span-3 border-gray-300 focus:border-blue-500"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dob" className="text-right flex items-center text-gray-700">
              <Calendar size={16} className="mr-1" />
              DOB
            </Label>
            <Input
              id="dob"
              type="date"
              defaultValue={user.dateOfBirth || '2007-05-15'}
              className="col-span-3 border-gray-300 focus:border-blue-500"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="education" className="text-right flex items-center text-gray-700">
              <GraduationCap size={16} className="mr-1" />
              Education
            </Label>
            <Input
              id="education"
              defaultValue={user.education || 'High School Student'}
              className="col-span-3 border-gray-300 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <Button 
            onClick={handleSaveProfile} 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
          >
            Save Changes
          </Button>
          <Button 
            variant="outline" 
            className="w-full border-red-200 text-red-600 hover:bg-red-50 transition-all duration-200 flex items-center justify-center space-x-2"
            onClick={handleLogout}
          >
            <LogOut size={16} />
            <span>Logout</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

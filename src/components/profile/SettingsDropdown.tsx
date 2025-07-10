
import React, { useState } from 'react';
import { Settings, History, MessageSquare, Info, LogOut, User, Mail, Key, Image, Link2, Shield, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

const searchHistory = [
  { query: 'Physics equations', time: '2 hours ago', type: 'Search' },
  { query: 'Biology cell structure', time: '1 day ago', type: 'Quiz' },
  { query: 'Math derivatives', time: '2 days ago', type: 'Chat' },
  { query: 'Chemistry periodic table', time: '3 days ago', type: 'Notes' }
];

export const SettingsDropdown: React.FC = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isAccountSettingsOpen, setIsAccountSettingsOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isEmailEditOpen, setIsEmailEditOpen] = useState(false);
  const [isPasswordEditOpen, setIsPasswordEditOpen] = useState(false);
  const [isNicknameEditOpen, setIsNicknameEditOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const handleLogout = () => {
    console.log('User logged out');
  };

  const handleSubmitFeedback = () => {
    console.log('Feedback submitted:', feedbackText);
    console.log('Uploaded image:', uploadedImage);
    setIsFeedbackOpen(false);
    setFeedbackText('');
    setUploadedImage(null);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedImage(file);
      console.log('Image uploaded:', file.name);
    }
  };

  const handleProfilePictureSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        console.log('Profile picture selected:', file.name);
      }
    };
    input.click();
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="bg-white/20 border-white/30 text-white hover:bg-white/30 transition-all duration-200">
            <Settings size={16} className="mr-2" />
            Settings
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white shadow-lg border border-gray-200">
          <DropdownMenuLabel className="text-gray-800">Options</DropdownMenuLabel>
          
          <DropdownMenuItem onClick={() => setIsHistoryOpen(true)} className="cursor-pointer hover:bg-gray-50">
            <History className="mr-2 h-4 w-4 text-gray-600" />
            <span>History</span>
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={() => setIsAccountSettingsOpen(true)} className="cursor-pointer hover:bg-gray-50">
            <Settings className="mr-2 h-4 w-4 text-gray-600" />
            <span>Account Settings</span>
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={() => setIsFeedbackOpen(true)} className="cursor-pointer hover:bg-gray-50">
            <MessageSquare className="mr-2 h-4 w-4 text-gray-600" />
            <span>Feedback</span>
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem onClick={() => setIsAboutOpen(true)} className="cursor-pointer hover:bg-gray-50">
            <Info className="mr-2 h-4 w-4 text-gray-600" />
            <span>About</span>
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer hover:bg-red-50">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* History Dialog */}
      <Dialog open={isHistoryOpen} onOpenChange={setIsHistoryOpen}>
        <DialogContent className="sm:max-w-[500px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">Search History</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {searchHistory.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                <div>
                  <p className="font-medium text-gray-800">{item.query}</p>
                  <p className="text-sm text-gray-600">{item.type} • {item.time}</p>
                </div>
                <History className="h-4 w-4 text-gray-400" />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Account Settings Dialog */}
      <Dialog open={isAccountSettingsOpen} onOpenChange={setIsAccountSettingsOpen}>
        <DialogContent className="sm:max-w-[500px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">Account Settings</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-800">
                <User className="mr-2 h-5 w-5" />
                Account
              </h3>
              <div className="space-y-3 ml-7">
                <div 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent transition-all duration-200"
                  onClick={() => setIsEmailEditOpen(true)}
                >
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-gray-600" />
                    <span className="text-gray-700">Email: alex.johnson@example.com</span>
                  </div>
                </div>
                <div 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent transition-all duration-200"
                  onClick={() => setIsPasswordEditOpen(true)}
                >
                  <div className="flex items-center">
                    <Key className="mr-2 h-4 w-4 text-gray-600" />
                    <span className="text-gray-700">Set Password</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-800">
                <User className="mr-2 h-5 w-5" />
                Profile
              </h3>
              <div className="space-y-3 ml-7">
                <div 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent transition-all duration-200"
                  onClick={() => setIsNicknameEditOpen(true)}
                >
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4 text-gray-600" />
                    <span className="text-gray-700">Nickname</span>
                  </div>
                </div>
                <div 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent transition-all duration-200"
                  onClick={handleProfilePictureSelect}
                >
                  <div className="flex items-center">
                    <Image className="mr-2 h-4 w-4 text-gray-600" />
                    <span className="text-gray-700">Profile Picture</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-800">
                <Link2 className="mr-2 h-5 w-5" />
                Connected Accounts
              </h3>
              <div className="space-y-3 ml-7">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-4 h-4 mr-2 bg-red-500 rounded"></div>
                    <span className="text-gray-700">Google Account Connected</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Connected</Badge>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleLogout} 
              variant="outline" 
              className="w-full mt-6 text-red-600 border-red-200 hover:bg-red-50 transition-colors duration-200"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Email Edit Dialog */}
      <Dialog open={isEmailEditOpen} onOpenChange={setIsEmailEditOpen}>
        <DialogContent className="sm:max-w-[400px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">Edit Email</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="current-email" className="text-sm font-medium text-gray-700">Current Email</Label>
              <Input id="current-email" value="alex.johnson@example.com" disabled className="mt-2" />
            </div>
            <div>
              <Label htmlFor="new-email" className="text-sm font-medium text-gray-700">New Email</Label>
              <Input id="new-email" placeholder="Enter new email" className="mt-2" />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Update Email
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Password Edit Dialog */}
      <Dialog open={isPasswordEditOpen} onOpenChange={setIsPasswordEditOpen}>
        <DialogContent className="sm:max-w-[400px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">Set Password</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="current-password" className="text-sm font-medium text-gray-700">Current Password</Label>
              <Input id="current-password" type="password" placeholder="Enter current password" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="new-password" className="text-sm font-medium text-gray-700">New Password</Label>
              <Input id="new-password" type="password" placeholder="Enter new password" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">Confirm Password</Label>
              <Input id="confirm-password" type="password" placeholder="Confirm new password" className="mt-2" />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Update Password
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Nickname Edit Dialog */}
      <Dialog open={isNicknameEditOpen} onOpenChange={setIsNicknameEditOpen}>
        <DialogContent className="sm:max-w-[400px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">Edit Nickname</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="nickname" className="text-sm font-medium text-gray-700">Nickname</Label>
              <Input id="nickname" placeholder="Enter your nickname" className="mt-2" />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Update Nickname
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Feedback Dialog */}
      <Dialog open={isFeedbackOpen} onOpenChange={setIsFeedbackOpen}>
        <DialogContent className="sm:max-w-[500px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">Feedback</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-600">
              We love to hear your suggestions or help you with any issue you've come across.
            </p>
            <div>
              <Label htmlFor="feedback" className="text-sm font-medium text-gray-700">
                How can we improve to make your experience better?
              </Label>
              <Textarea 
                id="feedback"
                placeholder="Tell us about your experience..."
                className="mt-2 min-h-[120px] border-gray-300 focus:border-blue-500"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="picture" className="text-sm font-medium text-gray-700">
                Upload Picture (optional)
              </Label>
              <div 
                className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 cursor-pointer transition-colors duration-200"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  {uploadedImage ? `Selected: ${uploadedImage.name}` : 'Click to upload or drag and drop'}
                </p>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
            <Button onClick={handleSubmitFeedback} className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
              Submit Feedback
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* About Dialog */}
      <Dialog open={isAboutOpen} onOpenChange={setIsAboutOpen}>
        <DialogContent className="sm:max-w-[400px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">About</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <Shield className="mr-3 h-4 w-4 text-gray-600" />
                <span className="text-gray-700">Terms and Conditions</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <Shield className="mr-3 h-4 w-4 text-gray-600" />
                <span className="text-gray-700">Privacy Policy</span>
              </div>
            </div>
            <Button 
              onClick={handleLogout} 
              variant="outline" 
              className="w-full text-red-600 border-red-200 hover:bg-red-50 transition-colors duration-200"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

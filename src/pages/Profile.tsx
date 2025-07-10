
import React from 'react';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { StatsGrid } from '@/components/profile/StatsGrid';
import { SubjectProgress } from '@/components/profile/SubjectProgress';
import { Achievements } from '@/components/profile/Achievements';
import { RecentActivity } from '@/components/profile/RecentActivity';

const Profile = () => {
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    grade: '10th Grade',
    joinDate: 'January 2024',
    dateOfBirth: '2007-05-15',
    education: 'High School Student'
  };

  return (
    <div className="md:ml-64 min-h-screen p-6 pb-20 md:pb-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ProfileHeader user={user} />
        <StatsGrid />
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <SubjectProgress />
          <Achievements />
        </div>

        <RecentActivity />
      </div>
    </div>
  );
};

export default Profile;

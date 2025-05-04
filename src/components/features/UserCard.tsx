import React from 'react';
import { Star, MapPin, CheckCircle } from 'lucide-react';
import Card from '../ui/Card';
import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { User, UserType } from '../../types';

interface UserCardProps {
  user: User;
  showActions?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ user, showActions = true }) => {
  const userTypeLabels: Record<UserType, { label: string, variant: 'default' | 'success' | 'warning' | 'info' }> = {
    elderly: { label: 'Elderly', variant: 'default' },
    caretaker: { label: 'Caretaker', variant: 'success' },
    young: { label: 'Young Person', variant: 'default' },
    storyteller: { label: 'Storyteller', variant: 'info' },
    seeker: { label: 'Seeker', variant: 'default' },
    psychologist: { label: 'Psychology Student', variant: 'warning' }
  };

  const { label, variant } = userTypeLabels[user.type];

  return (
    <Card hoverable className="h-full flex flex-col">
      <div className="relative p-4 pb-0">
        <Badge variant={variant} className="absolute top-4 right-4">
          {label}
        </Badge>
        <div className="flex flex-col items-center">
          <Avatar src={user.image} alt={user.name} size="xl" />
          <h3 className="mt-4 text-xl font-semibold">{user.name}</h3>
          
          <div className="flex items-center mt-1 text-gray-600">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{user.location}</span>
          </div>
          
          {user.verified && (
            <div className="flex items-center mt-1 text-emerald-600">
              <CheckCircle size={16} className="mr-1" />
              <span className="text-sm font-medium">Verified</span>
            </div>
          )}
          
          {user.rating && (
            <div className="flex items-center mt-1 text-amber-500">
              <Star size={16} className="mr-1 fill-current" />
              <span className="font-medium">{user.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4 flex-grow">
        <p className="text-gray-600 text-sm mb-3">{user.bio}</p>
        
        {user.skills && user.skills.length > 0 && (
          <div className="mb-3">
            <h4 className="text-sm font-semibold mb-1">Skills</h4>
            <div className="flex flex-wrap gap-1">
              {user.skills.map((skill, index) => (
                <Badge key={index} size="sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        {user.interests && user.interests.length > 0 && (
          <div className="mb-3">
            <h4 className="text-sm font-semibold mb-1">Interests</h4>
            <div className="flex flex-wrap gap-1">
              {user.interests.map((interest, index) => (
                <Badge key={index} variant="info" size="sm">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        {user.availability && user.availability.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-1">Availability</h4>
            <div className="flex flex-wrap gap-1">
              {user.availability.map((time, index) => (
                <Badge key={index} variant="success" size="sm">
                  {time}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {showActions && (
        <div className="p-4 pt-0 mt-auto">
          <Button fullWidth variant="primary">
            Connect
          </Button>
          <button className="mt-2 w-full text-blue-600 text-sm hover:underline">
            View Profile
          </button>
        </div>
      )}
    </Card>
  );
};

export default UserCard;
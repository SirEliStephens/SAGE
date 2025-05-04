import { User, Connection, Message, Appointment, Review } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Eleanor Johnson',
    email: 'eleanor@example.com',
    type: 'elderly',
    bio: 'Retired teacher looking for a compassionate caretaker who enjoys literature.',
    location: 'San Francisco, CA',
    image: 'https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg',
    interests: ['reading', 'gardening', 'classical music'],
    rating: 4.8
  },
  {
    id: '2',
    name: 'David Chen',
    email: 'david@example.com',
    type: 'caretaker',
    bio: 'Certified caretaker with 5 years of experience. Patient and understanding.',
    location: 'San Francisco, CA',
    image: 'https://images.pexels.com/photos/5752282/pexels-photo-5752282.jpeg',
    skills: ['meal preparation', 'medication management', 'companionship'],
    availability: ['weekdays', 'evenings'],
    verified: true,
    rating: 4.9
  },
  {
    id: '3',
    name: 'Olivia Martinez',
    email: 'olivia@example.com',
    type: 'storyteller',
    bio: 'Passionate about sharing family stories and cultural traditions.',
    location: 'Portland, OR',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
    skills: ['storytelling', 'cultural history', 'traditional cooking'],
    availability: ['weekends', 'afternoons'],
    verified: true,
    rating: 4.7
  },
  {
    id: '4',
    name: 'Noah Wilson',
    email: 'noah@example.com',
    type: 'young',
    bio: 'College student interested in learning from the wisdom of older generations.',
    location: 'Seattle, WA',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
    interests: ['history', 'cooking', 'life advice'],
    rating: 4.5
  },
  {
    id: '5',
    name: 'Sophia Lee',
    email: 'sophia@example.com',
    type: 'psychologist',
    bio: 'Psychology graduate student specializing in elder care and intergenerational dynamics.',
    location: 'Chicago, IL',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
    skills: ['counseling', 'active listening', 'conflict resolution'],
    availability: ['weekdays', 'flexible hours'],
    verified: true,
    rating: 4.9
  },
  {
    id: '6',
    name: 'James Patterson',
    email: 'james@example.com',
    type: 'seeker',
    bio: 'Looking for someone to talk to about career transitions and life changes.',
    location: 'Austin, TX',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    interests: ['career guidance', 'stress management', 'work-life balance'],
    rating: 4.4
  }
];

export const mockConnections: Connection[] = [
  {
    id: '1',
    userId1: '1',
    userId2: '2',
    status: 'accepted',
    createdAt: '2023-05-15T10:30:00Z'
  },
  {
    id: '2',
    userId1: '3',
    userId2: '4',
    status: 'accepted',
    createdAt: '2023-06-20T14:45:00Z'
  },
  {
    id: '3',
    userId1: '5',
    userId2: '6',
    status: 'pending',
    createdAt: '2023-07-10T09:15:00Z'
  }
];

export const mockMessages: Message[] = [
  {
    id: '1',
    senderId: '1',
    receiverId: '2',
    content: 'Hello David, I was wondering if you have availability this Thursday afternoon?',
    timestamp: '2023-05-16T11:30:00Z',
    read: true
  },
  {
    id: '2',
    senderId: '2',
    receiverId: '1',
    content: 'Hi Eleanor, yes I am available Thursday from 2-5pm. Would that work for you?',
    timestamp: '2023-05-16T12:45:00Z',
    read: true
  },
  {
    id: '3',
    senderId: '3',
    receiverId: '4',
    content: 'Noah, I have some wonderful stories about my grandmother\'s journey to America if you\'d like to hear them.',
    timestamp: '2023-06-21T10:15:00Z',
    read: true
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    userId1: '1',
    userId2: '2',
    date: '2023-05-18',
    time: '14:00',
    duration: 120,
    status: 'completed',
    notes: 'Medication review and afternoon walk'
  },
  {
    id: '2',
    userId1: '3',
    userId2: '4',
    date: '2023-06-24',
    time: '11:00',
    duration: 90,
    status: 'scheduled',
    notes: 'Cultural storytelling session'
  }
];

export const mockReviews: Review[] = [
  {
    id: '1',
    reviewerId: '1',
    revieweeId: '2',
    rating: 5,
    comment: 'David is extremely patient and caring. He made me feel comfortable immediately.',
    createdAt: '2023-05-19T16:30:00Z'
  },
  {
    id: '2',
    reviewerId: '4',
    revieweeId: '3',
    rating: 4,
    comment: 'Olivia\'s stories are fascinating and she is a wonderful storyteller. Looking forward to our next session.',
    createdAt: '2023-06-25T13:45:00Z'
  }
];
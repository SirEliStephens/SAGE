export type UserType = 'elderly' | 'caretaker' | 'young' | 'storyteller' | 'seeker' | 'psychologist';

export interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
  bio: string;
  location: string;
  image?: string;
  availability?: string[];
  skills?: string[];
  interests?: string[];
  verified?: boolean;
  rating?: number;
}

export interface Connection {
  id: string;
  userId1: string;
  userId2: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Appointment {
  id: string;
  userId1: string;
  userId2: string;
  date: string;
  time: string;
  duration: number;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface Review {
  id: string;
  reviewerId: string;
  revieweeId: string;
  rating: number;
  comment: string;
  createdAt: string;
}
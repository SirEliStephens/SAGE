import React from 'react';
import { Heart, Lightbulb, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';

const connections = [
  {
    id: 1,
    title: 'Elderly & Caretakers',
    description: 'Connect with compassionate, verified caretakers who provide personalized support, companionship, and assistance with daily activities.',
    icon: <Heart size={40} className="text-rose-500" />,
    image: 'https://images.pexels.com/photos/7551671/pexels-photo-7551671.jpeg',
    color: 'from-rose-50 to-rose-100',
    buttonText: 'Find Care Support',
  },
  {
    id: 2,
    title: 'Young & Storytellers',
    description: 'Discover wisdom through stories from experienced individuals who share their knowledge, cultural traditions, and life experiences.',
    icon: <Lightbulb size={40} className="text-amber-500" />,
    image: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg',
    color: 'from-amber-50 to-amber-100',
    buttonText: 'Discover Stories',
  },
  {
    id: 3,
    title: 'Seekers & Psychology Students',
    description: 'Talk with psychology students who provide a listening ear, fresh perspectives, and supportive conversations about life\'s challenges.',
    icon: <MessageCircle size={40} className="text-blue-500" />,
    image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg',
    color: 'from-blue-50 to-blue-100',
    buttonText: 'Start Conversations',
  },
];

const ConnectionTypes: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meaningful Connections For Everyone
          </h2>
          <p className="text-lg text-gray-600">
            SAGE+ facilitates three unique types of connections, each designed to 
            bring value and enrichment to both parties involved.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {connections.map((connection) => (
            <div 
              key={connection.id} 
              className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br ${connection.color}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={connection.image} 
                  alt={connection.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white rounded-full p-3 shadow-md">
                    {connection.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{connection.title}</h3>
                <p className="text-gray-700 mb-5">{connection.description}</p>
                <Button variant="primary" fullWidth>
                  {connection.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectionTypes;
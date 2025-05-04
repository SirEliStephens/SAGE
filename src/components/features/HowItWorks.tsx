import React from 'react';
import { Search, Users, Calendar, Heart } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Create Your Profile',
    description: 'Sign up and specify whether you\'re looking for care, stories, or conversation.',
    icon: <Users size={24} />,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    title: 'Find Your Match',
    description: 'Browse profiles or use our matching algorithm to find the perfect connection.',
    icon: <Search size={24} />,
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: 3,
    title: 'Schedule a Meeting',
    description: 'Use our secure platform to arrange in-person or virtual meetings.',
    icon: <Calendar size={24} />,
    color: 'bg-amber-100 text-amber-600',
  },
  {
    id: 4,
    title: 'Build Relationships',
    description: 'Develop meaningful connections that enrich both lives.',
    icon: <Heart size={24} />,
    color: 'bg-rose-100 text-rose-600',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How SAGE<span className="text-blue-600">+</span> Works
          </h2>
          <p className="text-lg text-gray-600">
            Our simple process makes it easy to find the perfect match for your needs, 
            creating meaningful connections across generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              {/* Connector line between steps */}
              {step.id < steps.length && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 z-0 transform -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
              )}
              
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-5`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
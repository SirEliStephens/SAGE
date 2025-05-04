import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-blue-50 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Meaningful Connections <span className="text-emerald-600">Across Generations</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              SAGE+ connects elderly individuals with compassionate caretakers, 
              young people with experienced storytellers, and those seeking support 
              with psychology students in a safe, trusted community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center text-gray-600">
              <span className="flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 mr-2"></span>
                Trusted by 10,000+ users
              </span>
              <span className="mx-4">•</span>
              <span className="flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 mr-2"></span>
                Verified caregivers
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7551622/pexels-photo-7551622.jpeg" 
                alt="Elderly woman with caretaker" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 animate-float z-10">
              <div className="flex items-center">
                <img src="https://images.pexels.com/photos/7551628/pexels-photo-7551628.jpeg" alt="User" className="w-10 h-10 rounded-full object-cover" />
                <div className="ml-3">
                  <p className="text-sm font-medium">Found my perfect match!</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-float animation-delay-500 z-10">
              <div className="flex items-center">
                <img src="https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg" alt="User" className="w-10 h-10 rounded-full object-cover" />
                <div className="ml-3">
                  <p className="text-sm font-medium">Stories that inspire!</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C62.74,22.86,125.48,36.81,189.87,54.13l132,30.71Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
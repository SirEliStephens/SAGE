import React from 'react';
import { ArrowRight, Heart, ShieldCheck, Users } from 'lucide-react';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Building Meaningful Connections Today
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Join our growing community and discover the power of intergenerational relationships.
              Whether you're seeking care, stories, or conversation, SAGE+ brings people together.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-2 mr-4">
                  <Heart size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Compassionate Community</h3>
                  <p className="text-white/80">Join a network of caring individuals who value meaningful connection.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-2 mr-4">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Safe & Secure</h3>
                  <p className="text-white/80">All care providers undergo thorough verification for your peace of mind.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-2 mr-4">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Perfect Matches</h3>
                  <p className="text-white/80">Our intelligent matching system connects you with compatible individuals.</p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100 group shadow-lg"
            >
              Join SAGE+ Now
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </Button>
          </div>
          
          <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-w-4 aspect-h-3">
              <img 
                src="https://images.pexels.com/photos/7298904/pexels-photo-7298904.jpeg" 
                alt="Elderly woman with young caretaker" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Join 10,000+ Members</h3>
              <p className="mb-4">Creating connections that matter across generations</p>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img 
                    key={i}
                    src={`https://images.pexels.com/photos/${7000000 + i * 100000}/pexels-photo-${7000000 + i * 100000}.jpeg`}
                    alt={`Community member ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-600 flex items-center justify-center text-sm font-medium">
                  +5k
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
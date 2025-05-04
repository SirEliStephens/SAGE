import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Avatar from '../ui/Avatar';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  role: string;
  image: string;
  connectionType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "SAGE+ helped me find a wonderful caretaker who not only assists me with daily activities but has become a cherished friend. Our conversations brighten my days.",
    name: "Margaret Wilson",
    role: "Retired Teacher",
    image: "https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg",
    connectionType: "Elderly & Caretaker"
  },
  {
    id: 2,
    content: "As a caretaker, SAGE+ allowed me to connect with elderly individuals who appreciate my services. I've learned so much from their wisdom and life experiences.",
    name: "David Chen",
    role: "Professional Caretaker",
    image: "https://images.pexels.com/photos/5752282/pexels-photo-5752282.jpeg",
    connectionType: "Elderly & Caretaker"
  },
  {
    id: 3,
    content: "The stories I've heard from my storyteller have given me perspectives I never considered. It's like having access to decades of wisdom in our weekly conversations.",
    name: "Noah Wilson",
    role: "College Student",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
    connectionType: "Young & Storyteller"
  },
  {
    id: 4,
    content: "Sharing my cultural stories with young people has been incredibly rewarding. I feel like I'm preserving important traditions while making meaningful connections.",
    name: "Olivia Martinez",
    role: "Cultural Storyteller",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    connectionType: "Young & Storyteller"
  },
  {
    id: 5,
    content: "The psychology student I connected with through SAGE+ helped me navigate a difficult life transition with empathy and fresh insights. I'm grateful for this platform.",
    name: "James Patterson",
    role: "Marketing Professional",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    connectionType: "Seeker & Psychology Student"
  },
  {
    id: 6,
    content: "Working with real people through SAGE+ has enhanced my psychology education more than any textbook could. These connections have shaped how I approach my future practice.",
    name: "Sophia Lee",
    role: "Psychology Graduate Student",
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg",
    connectionType: "Seeker & Psychology Student"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonialsPerView = 3;
  const maxIndex = testimonials.length - testimonialsPerView;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, currentIndex]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stories of Connection
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our community members about how SAGE+ has enriched their lives
            through meaningful intergenerational connections.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / testimonialsPerView)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-[33.333%] px-4"
                  onMouseEnter={() => setAutoplay(false)}
                  onMouseLeave={() => setAutoplay(true)}
                >
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm h-full border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start mb-4">
                      <div className="text-emerald-500 mr-3 mt-1">
                        <Quote size={24} />
                      </div>
                      <p className="text-gray-700 italic">{testimonial.content}</p>
                    </div>
                    <div className="mt-6 flex items-center">
                      <Avatar src={testimonial.image} alt={testimonial.name} size="md" />
                      <div className="ml-3">
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <span className="text-xs font-medium text-emerald-600">
                          {testimonial.connectionType}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide} 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-emerald-600 hover:shadow-lg transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-emerald-600 hover:shadow-lg transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-8">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full mx-1 transition-all duration-300 ${
                index === currentIndex ? 'bg-emerald-600 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
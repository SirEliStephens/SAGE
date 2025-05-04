import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/features/HeroSection';
import HowItWorks from '../components/features/HowItWorks';
import ConnectionTypes from '../components/features/ConnectionTypes';
import TestimonialsSection from '../components/features/TestimonialsSection';
import CTASection from '../components/features/CTASection';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <HowItWorks />
      <ConnectionTypes />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default HomePage;
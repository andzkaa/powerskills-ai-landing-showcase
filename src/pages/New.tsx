import React from 'react';
import Header from '@/components/Header';
import HeroNew from '@/components/HeroNew';
import Services from '@/components/Services';
import LabsSection from '@/components/LabsSection';
import Education from '@/components/Education';
import AboutNew from '@/components/AboutNew';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WaveSeparator from '@/components/WaveSeparator';

const New = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroNew />
        <Services />
        <WaveSeparator opacity={0.15} />
        <LabsSection />
        <WaveSeparator opacity={0.1} />
        <Education />
        <AboutNew />
        <WaveSeparator opacity={0.15} />
        <SocialProof />
        <WaveSeparator opacity={0.1} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default New;

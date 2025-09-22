import React from 'react';
import { Button } from '@/components/ui/button';
import PowerDots from './PowerDots';
import heroBg from '@/assets/hero-bg.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6 animate-fade-in">
            <PowerDots animated className="text-primary" />
            <span className="text-primary font-inter font-semibold tracking-wide uppercase text-sm">
              Activate Your Potential
            </span>
          </div>
          
          <h1 className="font-anton text-6xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-fade-in">
            <span className="text-foreground">Develop</span>
            <br />
            <span className="gradient-text">Future-Ready</span>
            <br />
            <span className="text-foreground">Skills</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-inter font-light leading-relaxed mb-8 max-w-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
            PowerSkills.ai supports people and organizations in developing the competencies of the future – 
            skills that truly have power. We create a space where technology and human potential meet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-inter font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 animate-power-glow">
              Start Your Journey
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block animate-float">
        <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-primary-foreground rounded-full relative">
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary-foreground rounded-full transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
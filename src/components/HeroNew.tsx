import React from 'react';
import { Button } from '@/components/ui/button';
import PowerDots from './PowerDots';
import heroBg from '@/assets/hero-bg.jpg';

const HeroNew: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-bg-waves">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url('/green-waves-bg.svg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-background/50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6 animate-fade-in">
            <PowerDots animated className="text-primary" />
            <span className="text-primary font-inter font-semibold tracking-wide uppercase text-sm">
              Język przyszłości
            </span>
          </div>

          <h1 className="font-anton text-6xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-fade-in">
            <span className="text-foreground">Kompetencje</span>
            <br />
            <span className="gradient-text">Jutra</span>
            <br />
            <span className="text-foreground">Dziś w Twoich Rękach</span>
          </h1>

          <p className="text-2xl md:text-3xl text-foreground font-inter font-semibold leading-relaxed mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Dwa spojrzenia, jedna praktyka.
            <br />
            <span className="text-primary">Nie szkolenie – laboratorium AI w Szczecinie.</span>
          </p>

          <p className="text-xl md:text-2xl text-muted-foreground font-inter font-light leading-relaxed mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            W świecie, w którym technologia zmienia się szybciej niż program szkolny, potrzebne są nowe umiejętności – <strong className="text-foreground">powerskills</strong>.
            Pokazujemy, jak zamienić strach w ciekawość, teorię w działanie, a działanie w efekty: oszczędność czasu, lepszą organizację pracy i więcej przestrzeni na rozwój.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-inter font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 animate-power-glow">
              <a href="#contact">Dołącz do AI-Lab</a>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300">
              <a href="#about">Dowiedz się więcej</a>
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

export default HeroNew;

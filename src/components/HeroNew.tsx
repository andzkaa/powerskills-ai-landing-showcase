import React from 'react';
import { Button } from '@/components/ui/button';
import PowerDots from './PowerDots';
import greenWaves from '@/assets/green-waves.png';

const HeroNew: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${greenWaves})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 to-background/60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6 animate-fade-in">
            <PowerDots animated className="text-primary" />
            <span className="text-primary font-inter font-semibold tracking-wide uppercase text-sm">
              Twój strategiczny ruch
            </span>
          </div>

          <h1 className="font-anton text-6xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-fade-in">
            <span className="text-foreground">Zagraj Mądrze</span>
            <br />
            <span className="gradient-text">z AI</span>
            <br />
            <span className="text-foreground">Nie Musisz Być Ekspertem</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-inter font-light leading-relaxed mb-6 max-w-2xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Sztuczna inteligencja to nie magia. To narzędzie, które dziś może Ci zaoszczędzić
            godziny pracy – jeśli wiesz jak z niego korzystać.
          </p>

          <div className="space-y-3 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-3">
              <span className="text-primary text-2xl">✓</span>
              <span className="text-foreground font-inter text-lg md:text-xl">
                Raport dla zarządu: <span className="text-primary font-semibold">z 2 godzin → 15 minut</span>
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-primary text-2xl">✓</span>
              <span className="text-foreground font-inter text-lg md:text-xl">
                CV dla kandydata: <span className="text-primary font-semibold">z 3 godzin → 30 minut</span>
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-primary text-2xl">✓</span>
              <span className="text-foreground font-inter text-lg md:text-xl">
                30 postów na social media: <span className="text-primary font-semibold">z 2 dni → pół godziny</span>
              </span>
            </div>
          </div>

          <p className="text-xl text-foreground font-inter font-semibold mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Nie teoria. Konkretne narzędzia, które działają od pierwszego dnia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-inter font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:-translate-y-0.5 animate-glow-pulse">
              <a href="#programs">Sprawdź programy</a>
            </Button>
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,136,0.3)]">
              <a href="#contact">Napisz do nas</a>
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

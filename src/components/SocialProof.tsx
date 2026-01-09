import React from 'react';
import { Building2, Users, MapPin } from 'lucide-react';
import PowerDots from './PowerDots';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_rgba(0,255,136,0.15)_0%,_transparent_70%)]" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <PowerDots animated />
            <span className="text-primary font-inter font-semibold tracking-wide uppercase text-sm">
              Zaufali nam
            </span>
            <PowerDots animated />
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-card/50 border-2 border-primary/30 rounded-3xl p-12 backdrop-blur-sm mb-12 hover:border-primary hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all duration-500">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-background border border-primary/20 rounded-2xl flex items-center justify-center">
                <Building2 className="w-12 h-12 text-primary drop-shadow-[0_0_10px_rgba(0,255,136,0.3)]" />
              </div>
            </div>

            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl font-anton text-foreground mb-6 leading-relaxed">
                "Po warsztacie PowerSkills wprowadzamy zmiany w organizacji.
                <br />
                <span className="gradient-text">To nie było szkolenie - to było laboratorium.</span>"
              </p>
              <footer className="text-primary font-inter font-semibold text-lg">
                — Bridgestone
              </footer>
            </blockquote>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card/50 rounded-2xl border border-primary/20 hover:border-primary backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary drop-shadow-[0_0_5px_rgba(0,255,136,0.3)]" />
                </div>
              </div>
              <p className="font-anton text-3xl text-primary mb-2 neon-text-glow">15+</p>
              <p className="text-muted-foreground font-inter text-sm">firm przeszkolonych</p>
            </div>

            <div className="text-center p-6 bg-card/50 rounded-2xl border border-primary/20 hover:border-primary backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary drop-shadow-[0_0_5px_rgba(0,255,136,0.3)]" />
                </div>
              </div>
              <p className="font-anton text-3xl text-primary mb-2 neon-text-glow">200+</p>
              <p className="text-muted-foreground font-inter text-sm">osób w LAB</p>
            </div>

            <div className="text-center p-6 bg-card/50 rounded-2xl border border-primary/20 hover:border-primary backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary drop-shadow-[0_0_5px_rgba(0,255,136,0.3)]" />
                </div>
              </div>
              <p className="font-anton text-xl text-primary mb-2">Szczecin</p>
              <p className="text-muted-foreground font-inter text-sm">zachodniopomorskie, Poznań</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

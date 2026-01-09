import React from 'react';
import { Building2, Users, MapPin } from 'lucide-react';
import PowerDots from './PowerDots';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-background">
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

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/20 mb-12">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-card rounded-2xl flex items-center justify-center">
                <Building2 className="w-12 h-12 text-primary" />
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
            <div className="text-center p-6 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
              </div>
              <p className="font-anton text-3xl text-foreground mb-2">15+</p>
              <p className="text-muted-foreground font-inter text-sm">firm przeszkolonych</p>
            </div>

            <div className="text-center p-6 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              <p className="font-anton text-3xl text-foreground mb-2">200+</p>
              <p className="text-muted-foreground font-inter text-sm">osób w LAB</p>
            </div>

            <div className="text-center p-6 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
              </div>
              <p className="font-anton text-xl text-foreground mb-2">Szczecin</p>
              <p className="text-muted-foreground font-inter text-sm">zachodniopomorskie, Poznań</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

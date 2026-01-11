import React from 'react';
import { Building2, Users, TrendingUp, Clock } from 'lucide-react';
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
              Efekty, nie obietnice
            </span>
            <PowerDots animated />
          </div>
          <h2 className="font-anton text-4xl md:text-5xl text-foreground">
            <span className="gradient-text">Realne Wyniki</span> z Realnych Firm
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-card/50 border-2 border-primary/30 rounded-3xl p-12 backdrop-blur-sm mb-12 hover:border-primary hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all duration-500">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-background border border-primary/20 rounded-2xl flex items-center justify-center">
                <Building2 className="w-12 h-12 text-primary drop-shadow-[0_0_10px_rgba(0,255,136,0.3)]" />
              </div>
            </div>

            <blockquote className="text-center mb-8">
              <p className="text-xl md:text-2xl font-inter text-foreground mb-6 leading-relaxed">
                "Po 30 dniach od szkolenia PowerSkills:"
              </p>
              <div className="space-y-4 text-left max-w-2xl mx-auto mb-6">
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl mt-1">→</span>
                  <span className="text-lg text-foreground font-inter">
                    Czas przygotowania raportów <strong className="text-primary">skrócony o 65%</strong>
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl mt-1">→</span>
                  <span className="text-lg text-foreground font-inter">
                    Zespół HR zaoszczędził <strong className="text-primary">12 godzin tygodniowo</strong> na screeningu CV
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary text-xl mt-1">→</span>
                  <span className="text-lg text-foreground font-inter">
                    Wprowadziliśmy <strong className="text-primary">5 nowych procesów z AI</strong> w organizacji
                  </span>
                </div>
              </div>
              <footer className="text-primary font-inter font-semibold text-xl">
                — Bridgestone Polska
              </footer>
            </blockquote>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card/50 rounded-2xl border border-primary/20 hover:border-primary backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary drop-shadow-[0_0_5px_rgba(0,255,136,0.3)]" />
                </div>
              </div>
              <p className="font-anton text-4xl text-primary mb-2 neon-text-glow">15+</p>
              <p className="text-muted-foreground font-inter text-sm">firm przeszkolonych</p>
            </div>

            <div className="text-center p-6 bg-card/50 rounded-2xl border border-primary/20 hover:border-primary backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary drop-shadow-[0_0_5px_rgba(0,255,136,0.3)]" />
                </div>
              </div>
              <p className="font-anton text-4xl text-primary mb-2 neon-text-glow">200+</p>
              <p className="text-muted-foreground font-inter text-sm">osób wyszkolonych</p>
            </div>

            <div className="text-center p-6 bg-card/50 rounded-2xl border border-primary/20 hover:border-primary backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary drop-shadow-[0_0_5px_rgba(0,255,136,0.3)]" />
                </div>
              </div>
              <p className="font-anton text-4xl text-primary mb-2 neon-text-glow">90%</p>
              <p className="text-muted-foreground font-inter text-sm">wraca po więcej</p>
            </div>

            <div className="text-center p-6 bg-card/50 rounded-2xl border border-primary/20 hover:border-primary backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-primary drop-shadow-[0_0_5px_rgba(0,255,136,0.3)]" />
                </div>
              </div>
              <p className="font-anton text-4xl text-primary mb-2 neon-text-glow">~2.5h</p>
              <p className="text-muted-foreground font-inter text-sm">zaoszczędzone dziennie<br />(średnia na osobę)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

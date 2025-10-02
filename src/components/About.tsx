import React from 'react';
import { Button } from '@/components/ui/button';
import PowerDots from './PowerDots';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-4 mb-6">
              <PowerDots animated />
              <span className="text-primary font-inter font-semibold tracking-wide uppercase text-sm">
                O nas
              </span>
            </div>

            <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Szczecińska firma
              <br />
              <span className="gradient-text">z globalną wizją</span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-inter leading-relaxed">
              <p className="text-lg">
                <strong className="text-foreground">powerskills.ai</strong> to młoda, szczecińska firma szkoleniowa, która uczy, jak zaprzyjaźnić się ze sztuczną inteligencją i wykorzystać ją w codziennym życiu. 
                Wierzymy, że dobrze zadane pytanie – prompt – może być nowym „językiem angielskim" kompetencji cyfrowych, a AI nie jest zagrożeniem, lecz narzędziem dającym realną przewagę.
              </p>

              <p className="text-lg">
                <strong className="text-foreground">Nasza misja:</strong> Przełamujemy strach przed technologią. Pokazujemy, że AI może być naturalnym wsparciem – czymś, co ułatwia codzienność, a nie kolejnym skomplikowanym gadżetem. 
                Uczymy „języka przyszłości", budujemy pewność siebie i pokazujemy, że sztuczna inteligencja może działać dla każdego – od studenta po osobę 55+.
              </p>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <h3 className="font-anton text-xl text-foreground mb-4">Dlaczego my</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="font-inter text-foreground"><strong>Blisko i lokalnie</strong> – warsztaty w Szczecinie i okolicy, z kameralną atmosferą</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="font-inter text-foreground"><strong>Od promptu do efektu</strong> – każda lekcja kończy się gotowym narzędziem</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="font-inter text-foreground"><strong>90 dni na utrwalenie</strong> – wsparcie i wyzwania po szkoleniu</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="font-inter text-foreground"><strong>Produktowo, nie teoretycznie</strong> – realny zysk: więcej czasu, mniej rutyny</span>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-card/80 rounded-2xl p-6 text-center backdrop-blur-sm">
                    <div className="text-5xl mb-4">⚡</div>
                    <h4 className="font-anton text-2xl text-foreground mb-2">Oszczędź 20% dnia</h4>
                    <p className="text-muted-foreground font-inter text-sm">Odzyskaj czas i przeznaczyć go na to, co naprawdę ważne</p>
                  </div>

                  <div className="bg-card/80 rounded-2xl p-6 text-center backdrop-blur-sm">
                    <div className="text-5xl mb-4">🎯</div>
                    <h4 className="font-anton text-2xl text-foreground mb-2">Gotowe rozwiązania</h4>
                    <p className="text-muted-foreground font-inter text-sm">CV w godzinę, budżet w 5 minut, maile które wysyłają się same</p>
                  </div>

                  <div className="bg-card/80 rounded-2xl p-6 text-center backdrop-blur-sm col-span-2">
                    <div className="flex justify-center mb-4">
                      <PowerDots className="scale-125" />
                    </div>
                    <h4 className="font-anton text-2xl text-foreground mb-2">Nie kurs. Upgrade Twojego życia</h4>
                    <p className="text-muted-foreground font-inter text-sm">Zamiast teorii – konkret. Zamiast notatek – narzędzia, które działają od zaraz</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-float" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
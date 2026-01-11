import React from 'react';
import { Button } from '@/components/ui/button';
import PowerDots from './PowerDots';
import TrainersSection from './TrainersSection';

const AboutNew: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
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
              <span className="gradient-text">Szczecin z Globalną Wizją</span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-inter leading-relaxed">
              <p className="text-lg">
                <strong className="text-foreground">Dwóch Trenerów. Różne Perspektywy. Jeden Cel.</strong>
              </p>

              <p className="text-lg text-foreground">
                Nie jesteśmy ogólnopolską korporacją szkoleń.<br />
                Jesteśmy szczecińską firmą, która zna lokalny rynek i potrafi mówić ludzkim językiem o AI.
              </p>

              <p className="text-lg">
                <strong className="text-foreground">Pracujemy z:</strong> Bridgestone, Microsoft, i innymi firmami
              </p>

              <p className="text-lg text-foreground">
                <strong className="text-primary">Nasza misja:</strong> Pokazać że AI nie jest dla wybranych. Jest dla każdego, kto chce pracować mądrzej, nie ciężej.
              </p>
            </div>

            <div className="mt-8 p-6 bg-card/50 rounded-2xl border border-primary/20 backdrop-blur-sm">
              <h3 className="font-anton text-2xl text-foreground mb-6 text-center">
                <span className="gradient-text">Dlaczego Powerskills</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="font-inter text-foreground text-lg block mb-2">Szczecin to Nasza Baza</strong>
                    <p className="font-inter text-muted-foreground">
                      Warsztaty w Szczecinie i okolicy - kameralna atmosfera, bez masowych kursów online.
                      Znamy lokalny rynek. Pracujemy z firmami jak Bridgestone i Microsoft.
                      Ale jeździmy też dalej (Poznań, Warszawa - wyższa cena).
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="font-inter text-foreground text-lg block mb-2">Praktyka, Nie Teoria</strong>
                    <p className="font-inter text-muted-foreground">
                      80% czasu to praca na TWOICH realnych zadaniach. 20% to wiedza potrzebna żeby działać.
                      Nie będzie: "AI to przyszłość". Będzie: "Jak napisać email w 3 minuty zamiast 20".
                      Każda lekcja kończy się gotowym narzędziem, które działa w praktyce od zaraz.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="font-inter text-foreground text-lg block mb-2">90 Dni z Nami</strong>
                    <p className="font-inter text-muted-foreground mb-2">Po szkoleniu otrzymujesz:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li className="flex items-center space-x-2">
                        <span className="text-primary">✓</span>
                        <span className="text-sm">Gotowe prompty do 15 zadań w pracy</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-primary">✓</span>
                        <span className="text-sm">Dostęp do bazy narzędzi i inspiracji</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-primary">✓</span>
                        <span className="text-sm">90 dni wsparcia (mail/Slack)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-primary">✓</span>
                        <span className="text-sm">Praktyczne wyzwania do wdrożenia</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="font-inter text-foreground text-lg block mb-2">Dwóch Trenerów, Dwa Spojrzenia</strong>
                    <p className="font-inter text-muted-foreground">
                      <strong className="text-foreground">Artur:</strong> 23 lata w biznesie. Patrzy przez procesy i ROI.<br />
                      <strong className="text-foreground">Ania:</strong> Marketing i tech. Patrzy przez ludzi i narzędzia.
                    </p>
                    <p className="font-inter text-foreground mt-3">
                      Razem dajemy Ci: <span className="text-primary">perspektywę biznesową</span> (jak zarabiać więcej) +{' '}
                      <span className="text-primary">perspektywę praktyczną</span> (jak robić to szybciej)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="font-inter text-foreground text-lg block mb-2">Bezpieczeństwo i Spokój</strong>
                    <p className="font-inter text-muted-foreground mb-3">
                      AI to potężne narzędzie. Ale tylko jeśli używasz go odpowiedzialnie.
                    </p>
                    <p className="font-inter text-muted-foreground mb-2">Na każdym warsztacie:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">→</span>
                        <span className="text-sm">GDPR i compliance (co wolno, czego nie)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">→</span>
                        <span className="text-sm">Jak chronić dane firmowe</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-primary">→</span>
                        <span className="text-sm">Jak ustawić politykę AI w organizacji</span>
                      </li>
                    </ul>
                    <p className="font-inter text-foreground mt-3">
                      <strong>Nie eksperymentujemy na Twoich danych.</strong> Uczymy jak to robić bezpiecznie.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PROOF OF EXPERTISE */}
            <div className="mt-8 p-6 bg-card/50 rounded-2xl border border-primary/20 backdrop-blur-sm">
              <h3 className="font-anton text-2xl text-foreground mb-6 text-center">
                <span className="gradient-text">Nasze Doświadczenie w Liczbach</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-anton text-xl text-primary mb-3">Artur:</h4>
                  <ul className="space-y-2 text-muted-foreground font-inter">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">→</span>
                      <span>23 lata w biznesie (bankowość, sprzedaż)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">→</span>
                      <span>Pomysłodawca stowarzyszenia ON.AI</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">→</span>
                      <span>50+ kursów i certyfikatów AI</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-anton text-xl text-primary mb-3">Ania:</h4>
                  <ul className="space-y-2 text-muted-foreground font-inter">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">→</span>
                      <span>+4000 followersów w 3 tygodnie (AI content)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">→</span>
                      <span>Współtwórczyni Ryōshin AI Podcast</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary">→</span>
                      <span>100+ szkoleń indywidualnych</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-primary/20">
                <h4 className="font-anton text-xl text-foreground mb-3 text-center">Razem:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-background/60 rounded-lg border border-primary/10">
                    <p className="font-anton text-3xl text-primary mb-1">15+</p>
                    <p className="text-sm text-muted-foreground font-inter">firm korporacyjnych</p>
                  </div>
                  <div className="p-4 bg-background/60 rounded-lg border border-primary/10">
                    <p className="font-anton text-3xl text-primary mb-1">200+</p>
                    <p className="text-sm text-muted-foreground font-inter">osób przeszkolonych</p>
                  </div>
                  <div className="p-4 bg-background/60 rounded-lg border border-primary/10">
                    <p className="font-anton text-3xl text-primary mb-1">90%</p>
                    <p className="text-sm text-muted-foreground font-inter">klientów wraca po więcej</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="bg-card/50 border border-primary/20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background/80 border border-primary/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                    <div className="text-5xl mb-4">⚡</div>
                    <h4 className="font-anton text-2xl text-foreground mb-2">Oszczędź 20% dnia</h4>
                    <p className="text-muted-foreground font-inter text-sm">Odzyskaj czas i przeznaczyć go na to, co naprawdę ważne</p>
                  </div>

                  <div className="bg-background/80 border border-primary/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                    <div className="text-5xl mb-4">🎯</div>
                    <h4 className="font-anton text-2xl text-foreground mb-2">Gotowe rozwiązania</h4>
                    <p className="text-muted-foreground font-inter text-sm">CV w godzinę, budżet w 5 minut, maile które wysyłają się same</p>
                  </div>

                  <div className="bg-background/80 border border-primary/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-primary/30 transition-all duration-300 col-span-2">
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

        <TrainersSection />
      </div>
    </section>
  );
};

export default AboutNew;

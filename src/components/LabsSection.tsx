import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  User,
  Crown,
  Castle,
  Target,
  TrendingUp,
  Megaphone,
  HeadphonesIcon,
  Users,
  Settings,
  DollarSign,
  Wrench,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import PowerDots from './PowerDots';
import greenWaves from '@/assets/green-waves.png';

const programs = [
  {
    icon: User,
    title: "AI Start",
    subtitle: "Podstawy dla wszystkich",
    forWho: "Każdy dział",
    what: "Narzędzia codzienne",
    result: "Oszczędność 2-3h dziennie",
    description: "6 godzin praktyki na Twoich realnych zadaniach.",
    benefits: [
      "Pisanie emaili: z 20 min → 3 minuty",
      "Przygotowanie prezentacji: z 2h → 30 min",
      "Research konkurencji: z 1 dnia → 1 godzina",
      "Automatyzacja powtarzalnych zadań"
    ],
    details: "6 godzin | Do 15 osób | 10 000 PLN netto",
    showPlan: true,
    plan: [
      {
        title: "Wprowadzenie do AI",
        time: "15 min",
        content: ["Krótkie omówienie preworku", "Odpowiedzi na pytania"]
      },
      {
        title: "Efektywna komunikacja z AI",
        time: "45 min",
        content: ["Podstawowe ustawienia i funkcje", "Różne narzędzia (ChatGPT, Claude, Gemini)", "Co kiedy używać"]
      },
      {
        title: "Zaawansowane techniki",
        time: "1h",
        content: ["Zasady dobrego promptu", "Gotowe frameworki do skopiowania"]
      },
      {
        title: "PRAKTYKA: Piszemy teksty",
        time: "1.5h",
        content: ["Ogłoszenia o pracę", "Posty na social media", "Maile handlowe i wewnętrzne"]
      },
      {
        title: "PRAKTYKA: Praca z grafiką",
        time: "1h",
        content: ["Generowanie obrazków (Midjourney, DALL-E)", "Frameworki dla grafik"]
      },
      {
        title: "TOP 3 narzędzia produktywności",
        time: "30 min",
        content: ["Które narzędzie do czego", "Praktyczne przypadki użycia"]
      },
      {
        title: "Etyka i prawo",
        time: "30 min",
        content: ["Co wolno, czego nie", "Bezpieczeństwo danych w firmie"]
      },
      {
        title: "Asystenci vs Agenci",
        time: "30 min",
        content: ["Czym różnią się od czatu", "Jak wspierają pracę"]
      },
      {
        title: "BONUS: Automatyzacja",
        time: "30 min",
        content: ["Co to jest workflow i agent", "Kiedy stosować automatyzację"]
      }
    ]
  },
  {
    icon: Crown,
    title: "AI Strategia",
    subtitle: "Wdrożenie w firmie",
    forWho: "Zarząd, C-level",
    what: "Roadmapa AI 6-12 mies",
    result: "Plan wdrożenia gotowy",
    description: "Roadmapa wdrożenia AI w Twojej firmie.",
    benefits: [
      "Plan wdrożenia AI (6-12 miesięcy)",
      "Budżet i ROI: ile kosztuje, kiedy się zwróci",
      "Quick wins: co wdrożyć w pierwszy miesiąc",
      "Jak przygotować zespół do zmian"
    ],
    details: "6 godzin | Do 15 osób | 10 000 PLN netto",
    showPlan: false
  },
  {
    icon: Castle,
    title: "AI dla Działów",
    subtitle: "HR, Sales, Marketing, Ops",
    forWho: "Konkretne działy",
    what: "Narzędzia branżowe",
    result: "40% szybciej",
    description: "Dedykowane programy dla konkretnych obszarów biznesu.",
    benefits: [
      "HR: Proces rekrutacji krótszy o 40%",
      "Sales: Cold email z 20% → 45% response rate",
      "Marketing: 30 dni contentu w 6 godzin",
      "Operations: Raport z 2 dni → 2 godziny"
    ],
    details: "6 godzin | Do 15 osób | 10 000 PLN netto",
    showPlan: false,
    subPrograms: [
      {
        icon: TrendingUp,
        title: "AI dla Sprzedaży",
        forWho: "Zespoły sprzedaży, account managerzy",
        benefits: ["Personalizacja w skali - cold email, LinkedIn", "Przygotowanie do rozmów handlowych", "Analiza klientów i prognozowanie"]
      },
      {
        icon: Megaphone,
        title: "AI dla Marketingu",
        forWho: "Marketerzy, social media, content creators",
        benefits: ["Content marketing z AI - posty, artykuły, skrypty", "Kampanie reklamowe - copy, landing pages", "Visual AI - generatory obrazów"]
      },
      {
        icon: HeadphonesIcon,
        title: "AI dla Customer Care",
        forWho: "BOK, customer success, support",
        benefits: ["Automatyzacja odpowiedzi (z empatią)", "Baza wiedzy + AI, chatboty", "Analiza nastrojów klientów"]
      },
      {
        icon: Users,
        title: "AI dla HR",
        forWho: "HR, talent acquisition, people ops",
        benefits: ["Pisanie ogłoszeń i screening CV", "Przygotowanie do rozmów rekrutacyjnych", "Onboarding i rozwój pracowników"]
      },
      {
        icon: Settings,
        title: "AI dla Operacji",
        forWho: "Operations, project management, quality",
        benefits: ["Automatyzacja dokumentacji - SOP, procedury", "Optymalizacja procesów", "Raportowanie operacyjne"]
      },
      {
        icon: DollarSign,
        title: "AI dla Finance",
        forWho: "Finance, controlling, analitycy finansowi",
        benefits: ["Automatyzacja raportów finansowych", "Analiza trendów i anomalii", "Budżetowanie i forecasting"]
      }
    ]
  }
];

const LabsSection: React.FC = () => {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const [expandedSubPrograms, setExpandedSubPrograms] = useState(false);

  const togglePlan = (title: string) => {
    setExpandedProgram(expandedProgram === title ? null : title);
  };

  return (
    <section id="programs" className="py-20 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${greenWaves})` }}
      />
      <div className="absolute inset-0 bg-background/40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <PowerDots animated />
            <span className="text-primary font-inter font-semibold tracking-wide uppercase text-sm">
              Nasze programy
            </span>
            <PowerDots animated />
          </div>
          <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Wybierz to, czego <span className="gradient-text">potrzebujesz</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter font-light max-w-3xl mx-auto">
            <strong className="text-foreground">6 godzin. Do 15 osób. 80% praktyki.</strong>
            <br />
            Pracujemy na realnych przypadkach z Twojej firmy.
          </p>
        </div>

        {/* OD CZEGO ZACZĄĆ */}
        <div className="max-w-4xl mx-auto mb-16 p-8 bg-card/60 border-2 border-primary/30 rounded-2xl backdrop-blur-sm">
          <h3 className="font-anton text-3xl text-foreground mb-4 text-center">
            <span className="gradient-text">OD CZEGO ZACZĄĆ?</span>
          </h3>
          <p className="text-xl text-foreground font-inter text-center mb-4">
            <strong className="text-primary">90% firm</strong> zaczyna od <strong>AI Start</strong> – podstawy dla całego zespołu.
          </p>
          <p className="text-lg text-muted-foreground font-inter text-center mb-6">
            Potem decydujemy razem co dalej: strategia, konkretne działy, czy scaling.
          </p>
          <div className="border-t border-primary/20 pt-6 text-center">
            <p className="text-lg text-foreground font-inter mb-4">
              Nie wiesz co wybrać? Napisz – dobierzemy program do Twoich potrzeb.
            </p>
            <Button
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-inter font-semibold px-8 py-3 hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all duration-300"
              onClick={() => window.location.href = '#contact'}
            >
              Porozmawiajmy 15 min
            </Button>
            <p className="text-sm text-muted-foreground font-inter mt-3">
              📞 Oddzwaniamy w 24h • ✉️ Bez spamu, bez zobowiązań
            </p>
          </div>
        </div>

        {/* Quick overview cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className="group hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all duration-500 border border-primary/30 hover:border-primary bg-card/95 backdrop-blur-sm animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => document.getElementById(`program-${program.title}`)?.scrollIntoView({ behavior: 'smooth' })}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(0,255,136,0.3)] transition-all duration-300 mx-auto mb-4">
                  <program.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-anton text-2xl text-foreground mb-2">{program.title}</h3>
                <p className="text-sm text-primary font-inter font-medium mb-3">{program.subtitle}</p>
                <div className="space-y-1 text-sm text-muted-foreground font-inter">
                  <p><strong className="text-foreground">Dla kogo:</strong> {program.forWho}</p>
                  <p><strong className="text-foreground">Co:</strong> {program.what}</p>
                  <p><strong className="text-foreground">Efekt:</strong> <span className="text-primary">{program.result}</span></p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground text-xs"
                >
                  Zobacz szczegóły
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed program cards */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div key={program.title} id={`program-${program.title}`}>
              <Card className="border border-primary/30 bg-card/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center">
                        <program.icon className="w-10 h-10 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-anton text-3xl text-foreground">{program.title}</h3>
                        <p className="text-lg text-primary font-inter font-medium">{program.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-foreground font-inter font-medium mb-6">
                    {program.description}
                  </p>

                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-sm text-muted-foreground font-inter">
                      <strong className="text-foreground">Dla kogo:</strong> {program.forWho}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-inter font-semibold text-foreground mb-3">Co konkretnie zyskasz:</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {program.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                          <span className="text-muted-foreground font-inter text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 pt-4 border-t border-border/50 space-y-4">
                    <div>
                      <p className="text-foreground font-inter mb-2">
                        <strong className="text-primary">Format: 6 godzin (sprint wdrożeniowy)</strong>
                      </p>
                      <p className="text-sm text-muted-foreground font-inter italic bg-primary/5 p-3 rounded-lg border border-primary/10">
                        To nie jest szkolenie. To intensywna praca na Twoich realnych przypadkach.
                        <strong className="text-foreground"> 80% praktyki</strong> = narzędzia gotowe do użycia pierwszego dnia po warsztacie.
                      </p>
                    </div>
                    <div>
                      <p className="text-foreground font-inter">
                        <strong>Cena:</strong> <span className="text-primary">10 000 PLN netto</span> |
                        <strong> Grupa:</strong> do 15 osób
                      </p>
                      <p className="text-sm text-muted-foreground font-inter mt-1">
                        Lokalizacja: Szczecin, zachodniopomorskie, Poznań
                      </p>
                    </div>
                    <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                      <p className="text-sm font-inter font-semibold text-foreground mb-2">Bezpieczeństwo:</p>
                      <div className="space-y-1 text-sm text-muted-foreground font-inter">
                        <p className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span>Zgodnie z GDPR i polityką firmy</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span>Bez wycieku danych wrażliwych</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <span className="text-primary">✓</span>
                          <span>Zasady bezpiecznego używania AI</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {program.showPlan && program.plan && (
                    <div className="mb-6">
                      <Button
                        variant="outline"
                        className="w-full border-2 border-primary text-primary hover:bg-primary/10 font-inter font-semibold"
                        onClick={() => togglePlan(program.title)}
                      >
                        {expandedProgram === program.title ? (
                          <>
                            <ChevronUp className="w-5 h-5 mr-2" />
                            Ukryj ramowy plan 6h
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-5 h-5 mr-2" />
                            Zobacz ramowy plan 6h
                          </>
                        )}
                      </Button>

                      {expandedProgram === program.title && (
                        <div className="mt-6 p-6 bg-secondary/50 rounded-lg border border-primary/20">
                          <h4 className="font-anton text-xl text-foreground mb-4">Ramowy Plan 6h</h4>
                          <div className="space-y-4">
                            {program.plan.map((item, idx) => (
                              <div key={idx} className="border-l-2 border-primary/30 pl-4">
                                <div className="flex items-baseline justify-between mb-2">
                                  <h5 className="font-inter font-semibold text-foreground">{item.title}</h5>
                                  <span className="text-sm text-primary font-inter font-medium ml-4">{item.time}</span>
                                </div>
                                <ul className="space-y-1">
                                  {item.content.map((line, lineIdx) => (
                                    <li key={lineIdx} className="text-sm text-muted-foreground font-inter flex items-start">
                                      <span className="text-primary mr-2">-</span>
                                      {line}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-primary/20 text-center">
                            <p className="text-foreground font-inter">
                              <strong className="text-primary">Cena: 10 000 PLN netto</strong> | Grupa: do 15 osób
                            </p>
                            <p className="text-sm text-muted-foreground font-inter mt-2">
                              Lokalizacja: Szczecin, okolice
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {program.subPrograms && (
                    <div className="mb-6">
                      <Button
                        variant="outline"
                        className="w-full border-2 border-primary text-primary hover:bg-primary/10 font-inter font-semibold"
                        onClick={() => setExpandedSubPrograms(!expandedSubPrograms)}
                      >
                        {expandedSubPrograms ? (
                          <>
                            <ChevronUp className="w-5 h-5 mr-2" />
                            Ukryj wszystkie programy dla działów
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-5 h-5 mr-2" />
                            Zobacz wszystkie programy dla działów
                          </>
                        )}
                      </Button>

                      {expandedSubPrograms && (
                        <div className="mt-6 grid md:grid-cols-2 gap-4">
                          {program.subPrograms.map((subProgram, idx) => (
                            <Card key={idx} className="border border-primary/20 bg-secondary/50">
                              <CardContent className="p-6">
                                <div className="flex items-center space-x-3 mb-4">
                                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <subProgram.icon className="w-6 h-6 text-primary" />
                                  </div>
                                  <h5 className="font-anton text-lg text-foreground">{subProgram.title}</h5>
                                </div>
                                <p className="text-sm text-muted-foreground font-inter mb-3">
                                  <strong className="text-foreground">Dla kogo:</strong> {subProgram.forWho}
                                </p>
                                <div className="space-y-2">
                                  {subProgram.benefits.map((benefit, bIdx) => (
                                    <div key={bIdx} className="flex items-start space-x-2">
                                      <div className="w-1 h-1 bg-primary rounded-full mt-2" />
                                      <span className="text-xs text-muted-foreground font-inter">{benefit}</span>
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* CASE STUDY - tylko dla AI Start */}
                  {program.title === "AI Start" && (
                    <div className="mb-6 p-6 bg-secondary/50 border-2 border-primary/20 rounded-xl">
                      <h4 className="font-anton text-xl text-primary mb-4">PRZYKŁAD Z ŻYCIA:</h4>
                      <p className="text-sm text-muted-foreground font-inter font-semibold mb-4">
                        Zespół HR w firmie produkcyjnej (80 osób):
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <p className="text-sm font-inter font-semibold text-foreground mb-2">PRZED:</p>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p className="flex items-start space-x-2">
                              <span className="text-primary">→</span>
                              <span>Screening 50 CV = <strong className="text-foreground">4 godziny</strong> pracy</span>
                            </p>
                            <p className="flex items-start space-x-2">
                              <span className="text-primary">→</span>
                              <span>Pisanie ogłoszenia = <strong className="text-foreground">2 godziny</strong></span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-inter font-semibold text-primary mb-2">PO WARSZTACIE:</p>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p className="flex items-start space-x-2">
                              <span className="text-primary">✓</span>
                              <span>Screening 50 CV = <strong className="text-primary">45 minut</strong></span>
                            </p>
                            <p className="flex items-start space-x-2">
                              <span className="text-primary">✓</span>
                              <span>Pisanie ogłoszenia = <strong className="text-primary">20 minut</strong></span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-primary/20">
                        <p className="text-sm font-inter font-semibold text-foreground">
                          Zaoszczędzony czas: <span className="text-primary">~12h tygodniowo</span>
                        </p>
                        <p className="text-sm font-inter text-muted-foreground">
                          ROI po 1 miesiącu
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        className="bg-primary hover:bg-primary-dark text-primary-foreground font-inter font-semibold px-6 py-3 hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all duration-300"
                        onClick={() => window.location.href = '#contact'}
                      >
                        Porozmawiajmy 15 min
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold px-6 py-3"
                        onClick={() => window.location.href = '#programs'}
                      >
                        Zobacz wszystkie programy
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground font-inter text-center">
                      📞 Oddzwaniamy w 24h • ✉️ Bez spamu, bez zobowiązań
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 p-12 bg-card/50 border border-primary/20 rounded-2xl backdrop-blur-sm">
          <h2 className="font-anton text-4xl md:text-5xl text-foreground mb-6">
            <span className="gradient-text">Twój Następny Ruch</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter mb-4 max-w-3xl mx-auto">
            Nie musisz być programistą – wystarczy ciekawość.
          </p>
          <p className="text-lg text-foreground font-inter mb-8 max-w-3xl mx-auto">
            Pokażemy Ci drogę od pierwszego promptu do realnych efektów, które zobaczysz już pierwszego dnia roboczego po szkoleniu.
          </p>
          <p className="text-xl text-foreground font-inter font-semibold mb-8">
            Bo AI nie jest dla wybranych.<br />
            <span className="text-primary">Jest dla każdego, kto chce pracować mądrzej.</span>
          </p>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-inter font-semibold px-8 py-4 text-lg hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                onClick={() => window.location.href = '#contact'}
              >
                Porozmawiajmy 15 min
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-semibold px-8 py-4 text-lg"
                onClick={() => window.location.href = '#programs'}
              >
                Zobacz programy
              </Button>
            </div>
            <p className="text-sm text-muted-foreground font-inter">
              📞 Oddzwaniamy w 24h • ✉️ Bez spamu, bez zobowiązań
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsSection;

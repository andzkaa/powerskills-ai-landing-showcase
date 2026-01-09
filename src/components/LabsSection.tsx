import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Rocket,
  Target,
  TrendingUp,
  Megaphone,
  HeadphonesIcon,
  Users,
  Settings,
  DollarSign,
  Lightbulb,
  Wrench
} from 'lucide-react';
import PowerDots from './PowerDots';

const labs = [
  {
    level: "POZIOM 1: FUNDAMENT",
    items: [
      {
        icon: Rocket,
        title: "AI-Lab Start",
        subtitle: "Od pierwszego promptu do codziennej pracy",
        forWho: "Każdy dział, każde stanowisko",
        benefits: [
          "Podstawy AI - jak działa, czego się nie bać",
          "Narzędzia praktyczne - ChatGPT, Claude, Gemini",
          "Pierwsze automaty w pracy",
          "Bezpieczeństwo i etyka"
        ],
        format: "20% teoria | 80% praktyka"
      },
      {
        icon: Target,
        title: "AI-Lab Zero",
        subtitle: "Dla firm, które chcą zacząć, ale nie wiedzą od czego",
        forWho: "Zarząd, management, liderzy działów",
        benefits: [
          "Mapa możliwości AI w Twojej firmie",
          "Quick wins - co wdrożyć w pierwszy miesiąc",
          "Roadmapa wdrożenia AI (6-12 miesięcy)",
          "Jak przygotować zespół"
        ],
        format: "30% strategia | 70% praktyka"
      }
    ]
  },
  {
    level: "POZIOM 2: DLA DZIAŁÓW",
    items: [
      {
        icon: TrendingUp,
        title: "AI-Lab Sales",
        subtitle: "Sprzedaż wspomagana AI - od leada do zamknięcia",
        forWho: "Zespoły sprzedaży, account managerzy",
        benefits: [
          "Personalizacja w skali - cold email, LinkedIn",
          "Przygotowanie do rozmów handlowych",
          "Analiza klientów i prognozowanie",
          "CRM + AI"
        ],
        format: "10% teoria | 90% praktyka"
      },
      {
        icon: Megaphone,
        title: "AI-Lab Marketing",
        subtitle: "Content, kampanie i kreacja bez wypalenia",
        forWho: "Marketerzy, social media, content creators",
        benefits: [
          "Content marketing z AI - posty, artykuły, skrypty",
          "Kampanie reklamowe - copy, landing pages",
          "Pomysły i kreacja - brainstorming, trendy",
          "Visual AI - generatory obrazów"
        ],
        format: "10% teoria | 90% praktyka"
      },
      {
        icon: HeadphonesIcon,
        title: "AI-Lab Customer Care",
        subtitle: "Obsługa klienta szybsza, lepsza, bardziej ludzka",
        forWho: "BOK, customer success, support",
        benefits: [
          "Automatyzacja odpowiedzi (z empatią)",
          "Baza wiedzy + AI, chatboty",
          "Analiza nastrojów klientów",
          "Eskalacje i trudne przypadki"
        ],
        format: "15% teoria | 85% praktyka"
      },
      {
        icon: Users,
        title: "AI-Lab HR & Rekrutacja",
        subtitle: "Od ogłoszenia do onboardingu - AI w People Ops",
        forWho: "HR, talent acquisition, people ops",
        benefits: [
          "Pisanie ogłoszeń i screening CV",
          "Przygotowanie do rozmów rekrutacyjnych",
          "Onboarding i rozwój pracowników",
          "Komunikacja wewnętrzna"
        ],
        format: "20% teoria | 80% praktyka"
      },
      {
        icon: Settings,
        title: "AI-Lab Operations",
        subtitle: "Procesy, dokumentacja, raportowanie - bez bólu",
        forWho: "Operations, project management, quality",
        benefits: [
          "Automatyzacja dokumentacji - SOP, procedury",
          "Optymalizacja procesów",
          "Raportowanie operacyjne - KPI, dashboardy",
          "Analiza danych operacyjnych"
        ],
        format: "25% teoria | 75% praktyka"
      },
      {
        icon: DollarSign,
        title: "AI-Lab Finance",
        subtitle: "Liczby, analizy, prognozy - AI jako partner CFO",
        forWho: "Finance, controlling, analitycy finansowi",
        benefits: [
          "Automatyzacja raportów finansowych",
          "Analiza trendów i anomalii",
          "Budżetowanie i forecasting",
          "Prezentacje dla zarządu"
        ],
        format: "30% teoria | 70% praktyka"
      }
    ]
  },
  {
    level: "POZIOM 3: STRATEGICZNE",
    items: [
      {
        icon: Lightbulb,
        title: "AI-Lab Strategy",
        subtitle: "Jak wdrożyć AI w całej organizacji",
        forWho: "Zarząd, C-level, liderzy transformacji",
        benefits: [
          "Strategia AI dla Twojej firmy",
          "ROI i koszty wdrożenia",
          "Change management i komunikacja",
          "Bezpieczeństwo i compliance"
        ],
        format: "50% strategia | 50% praktyka"
      },
      {
        icon: Wrench,
        title: "AI-Lab Custom",
        subtitle: "Szyjemy na miarę - Twoje wyzwania, nasze doświadczenie",
        forWho: "Każda firma z konkretnym wyzwaniem",
        benefits: [
          "Indywidualnie zaprojektowany program",
          "Fokus na Wasze pain points",
          "Dedykowane case studies z branży",
          "Follow-up po warsztacie"
        ],
        format: "Cena: od 10 000 PLN (zależy od scope)",
        isCustom: true
      }
    ]
  }
];

const LabsSection: React.FC = () => {
  return (
    <section id="labs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <PowerDots animated />
            <span className="text-primary font-inter font-semibold tracking-wide uppercase text-sm">
              Nasze LAB-y
            </span>
            <PowerDots animated />
          </div>
          <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Wybierz program dla <span className="gradient-text">swojego zespołu</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 mb-8">
            <p className="text-xl text-muted-foreground font-inter font-light">
              <strong className="text-foreground">6 godzin. Do 15 osób. 80% praktyki.</strong>
              <br />
              Pracujemy na realnych przypadkach z Twojej firmy.
            </p>
          </div>

          <div className="bg-primary/5 rounded-2xl p-6 max-w-4xl mx-auto border border-primary/10">
            <p className="text-foreground font-inter font-semibold mb-4">Każdy LAB to:</p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <span className="font-inter text-foreground">Konkretne narzędzia do codziennej pracy</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <span className="font-inter text-foreground">Praktyczne ćwiczenia na Waszych zadaniach</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <span className="font-inter text-foreground">Materiały i wsparcie po warsztacie</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <span className="font-inter text-foreground">Dwóch trenerów - biznesowa i techniczna perspektywa</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-primary/20">
              <p className="text-foreground font-inter">
                <strong className="text-primary">Cena: 10 000 PLN netto</strong> | Lokalizacja: Szczecin, zachodniopomorskie, Poznań
              </p>
            </div>
          </div>
        </div>

        {labs.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <h3 className="font-anton text-2xl md:text-3xl text-primary mb-8 text-center">
              {section.level}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {section.items.map((lab, index) => (
                <Card
                  key={lab.title}
                  className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <lab.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-anton text-2xl text-foreground">{lab.title}</h4>
                      </div>
                    </div>

                    <p className="text-foreground font-inter font-medium mb-4">
                      {lab.subtitle}
                    </p>

                    <div className="mb-6 p-3 bg-primary/5 rounded-lg">
                      <p className="text-sm text-muted-foreground font-inter">
                        <strong className="text-foreground">Dla kogo:</strong> {lab.forWho}
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-inter font-semibold text-foreground mb-3">Co daje:</p>
                      <div className="space-y-2">
                        {lab.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                            <span className="text-muted-foreground font-inter text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6 pt-4 border-t border-border/50">
                      <p className="text-sm text-foreground font-inter font-medium">
                        <strong>Format:</strong> <span className="text-primary">{lab.format}</span>
                      </p>
                    </div>

                    <Button
                      className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-inter font-semibold transition-all duration-300"
                      onClick={() => window.location.href = '#contact'}
                    >
                      Zapytaj o ten LAB
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl">
          <p className="text-2xl font-anton text-foreground mb-4">
            Nie widzisz swojego przypadku?
          </p>
          <p className="text-lg text-muted-foreground font-inter mb-6">
            Napisz do nas - zaprojektujemy LAB dla Ciebie.
          </p>
          <Button
            className="bg-primary hover:bg-primary-dark text-primary-foreground font-inter font-semibold px-8 py-4 text-lg"
            onClick={() => window.location.href = '#contact'}
          >
            Skontaktuj się
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LabsSection;

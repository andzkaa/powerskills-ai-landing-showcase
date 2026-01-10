import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Castle, User, Shield } from 'lucide-react';
import PowerDots from './PowerDots';

const services = [
  {
    icon: User,
    title: "AI Start",
    subtitle: "Podstawy dla każdego działu",
    description: "6 godzin praktyki na Twoich realnych zadaniach.",
    benefits: [
      "Pisanie emaili: z 20 min → 3 minuty",
      "Przygotowanie prezentacji: z 2h → 30 min",
      "Research konkurencji: z 1 dnia → 1 godzina",
      "Automatyzacja powtarzalnych zadań"
    ],
    forWho: "Każdy dział, każde stanowisko",
    details: "6 godzin | Do 15 osób | 10 000 PLN netto"
  },
  {
    icon: Crown,
    title: "AI Strategia",
    subtitle: "Dla zarządu i liderów",
    description: "Roadmapa wdrożenia AI w Twojej firmie.",
    benefits: [
      "Plan wdrożenia AI (6-12 miesięcy)",
      "Budżet i ROI: ile kosztuje, kiedy się zwróci",
      "Quick wins: co wdrożyć w pierwszy miesiąc",
      "Jak przygotować zespół do zmian"
    ],
    forWho: "Zarząd, C-level, liderzy",
    details: "6 godzin | Do 15 osób | 10 000 PLN netto"
  },
  {
    icon: Castle,
    title: "AI dla Działów",
    subtitle: "HR, Sprzedaż, Marketing, Operacje",
    description: "Dedykowane programy dla konkretnych obszarów biznesu.",
    benefits: [
      "HR: Proces rekrutacji krótszy o 40%",
      "Sales: Cold email z 20% → 45% response rate",
      "Marketing: 30 dni contentu w 6 godzin",
      "Operations: Raport z 2 dni → 2 godziny"
    ],
    forWho: "Konkretne działy w firmie",
    details: "6 godzin | Do 15 osób | 10 000 PLN netto"
  },
  {
    icon: Shield,
    title: "90 Dni Wsparcia",
    subtitle: "",
    description: "Po szkoleniu dostajesz:",
    benefits: [
      "Materiały i gotowe prompty do pracy",
      "Dostęp do bazy narzędzi (aktualizowana)",
      "90 dni wsparcia mailowego/Slack",
      "Konsultacje przy wdrażaniu"
    ],
    forWho: "",
    details: "Bo AI to nie jednorazowe szkolenie. To proces, w którym jesteśmy z Tobą."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <PowerDots animated />
            <span className="text-primary font-inter font-semibold tracking-wide uppercase text-sm">
              Jak możemy Ci pomóc
            </span>
            <PowerDots animated />
          </div>
          <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Konkretne <span className="gradient-text">Rozwiązania</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter font-light max-w-3xl mx-auto">
            Nie teoria. Konkretne narzędzia, które działają od pierwszego dnia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all duration-500 border border-primary/20 hover:border-primary bg-card/90 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(0,255,136,0.3)] transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-anton text-2xl text-foreground">{service.title}</h3>
                    {service.subtitle && (
                      <p className="text-sm text-primary font-inter font-medium">{service.subtitle}</p>
                    )}
                  </div>
                </div>

                <p className="text-foreground font-inter font-medium leading-relaxed mb-4">
                  {service.description}
                </p>

                {service.forWho && (
                  <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-sm text-muted-foreground font-inter">
                      <strong className="text-foreground">Dla kogo:</strong> {service.forWho}
                    </p>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-sm font-inter font-semibold text-foreground mb-3">Co konkretnie zyskasz:</p>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                        <span className="text-muted-foreground font-inter text-sm leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-foreground font-inter font-medium">
                    {service.details}
                  </p>
                </div>

                {service.title !== "90 Dni Wsparcia" && (
                  <Button
                    variant="outline"
                    className="w-full mt-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] font-inter font-semibold transition-all duration-300"
                    onClick={() => window.location.href = '#programs'}
                  >
                    Zobacz program
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
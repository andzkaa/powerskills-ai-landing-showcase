import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Building, Heart, Sparkles } from 'lucide-react';
import PowerDots from './PowerDots';

const services = [
  {
    icon: GraduationCap,
    title: "Warsztaty AI",
    description: "Kamerlane szkolenia w Szczecinie i okolicy, gdzie teoria spotyka się z praktyką. Od pierwszego promptu do realnych efektów.",
    features: ["Praktyczne promptowanie", "Automatyzacja zadań", "Gotowe narzędzia AI"]
  },
  {
    icon: Users,
    title: "AI-Lab lokalny",
    description: "Społeczność ludzi, którzy uczą się przez praktykę. Żadnych masowych kursów online – tylko konkretne rozwiązania, które działają.",
    features: ["Uczenie przez działanie", "Wsparcie trenerów", "Lokalna społeczność"]
  },
  {
    icon: Building,
    title: "Szkolenia dla firm",
    description: "Programy szkoleniowe dopasowane do potrzeb Twojej organizacji. Zwiększ efektywność zespołu dzięki AI.",
    features: ["Szkolenia na miarę", "Automatyzacja procesów", "Oszczędność czasu"]
  },
  {
    icon: Sparkles,
    title: "90 dni wsparcia",
    description: "Po szkoleniu otrzymujesz wyzwania i wsparcie, by utrzymać tempo rozwoju i utrwalić nowe umiejętności.",
    features: ["Ciągły rozwój", "Praktyczne wyzwania", "Indywidualne wsparcie"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <PowerDots animated />
            <span className="text-primary font-inter font-semibold tracking-wide uppercase text-sm">
              Co oferujemy
            </span>
            <PowerDots animated />
          </div>
          <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Od promptu do <span className="gradient-text">Efektu</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter font-light max-w-3xl mx-auto">
            Każda lekcja kończy się gotowym narzędziem, które działa w praktyce. Nie teoria – konkret: 
            pisanie CV, planowanie budżetu, automatyzacja maili. Wychodzisz z rozwiązaniami, które od razu oszczędzają czas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="card-hover group bg-card backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-anton text-2xl text-foreground">{service.title}</h3>
                </div>

                <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground font-inter font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <PowerDots className="justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
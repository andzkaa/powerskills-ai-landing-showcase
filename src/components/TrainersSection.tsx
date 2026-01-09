import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

const TrainersSection: React.FC = () => {
  return (
    <div className="mt-16">
      <h3 className="font-anton text-3xl md:text-4xl text-foreground mb-12 text-center">
        Dwóch trenerów. Dwa spojrzenia. Jedna praktyka.
      </h3>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="card-hover group bg-card backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <User className="w-16 h-16 text-primary" />
              </div>
            </div>

            <h4 className="font-anton text-2xl text-foreground text-center mb-2">Artur Ciszczoń</h4>
            <p className="text-primary font-inter font-semibold text-center mb-6">Biznes i procesy</p>

            <div className="space-y-4 text-muted-foreground font-inter leading-relaxed mb-6">
              <p>23 lata w bankowości i sprzedaży na wysokich stanowiskach.</p>
              <p>Pomysłodawca stowarzyszenia ON.AI.</p>
              <p>Kilkadziesiąt kursów AI za pasem.</p>
            </div>

            <div className="pt-6 border-t border-border/50">
              <p className="text-foreground font-inter font-medium">
                Patrzy na AI przez: <span className="text-primary">procesy biznesowe, dane, efektywność, ROI.</span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover group bg-card backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <User className="w-16 h-16 text-primary" />
              </div>
            </div>

            <h4 className="font-anton text-2xl text-foreground text-center mb-2">Ania Leśniewska</h4>
            <p className="text-primary font-inter font-semibold text-center mb-6">Marketing i technologia</p>

            <div className="space-y-4 text-muted-foreground font-inter leading-relaxed mb-6">
              <p>Marketing, technologia i edukacja.</p>
              <p>Współtwórczyni Ryōshin AI Podcast.</p>
              <p>+4000 followersów w 3 tygodnie.</p>
            </div>

            <div className="pt-6 border-t border-border/50">
              <p className="text-foreground font-inter font-medium">
                Patrzy na AI przez: <span className="text-primary">ludzi, komunikację, zrozumiałość, praktyczne zastosowanie.</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center space-y-6 text-muted-foreground font-inter leading-relaxed max-w-3xl mx-auto">
        <p className="text-xl">
          <strong className="text-foreground">Razem prowadzimy PowerSkills AI-Lab.</strong>
        </p>
        <p className="text-lg">
          W AI potrzebujemy różnych punktów widzenia. Dlatego w naszym LAB nie ma jednej prawdy.
          Jest 80% praktyki i przestrzeń na Twoje pytania.
        </p>
        <p className="text-lg">
          <strong className="text-foreground">Bo prawdziwa zmiana rodzi się tam, gdzie spotykają się różne światy.</strong>
        </p>
      </div>
    </div>
  );
};

export default TrainersSection;

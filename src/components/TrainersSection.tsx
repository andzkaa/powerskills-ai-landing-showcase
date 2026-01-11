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
        <Card className="group hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all duration-500 border border-primary/20 hover:border-primary bg-card/90 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-primary/10 border-2 border-primary/30 rounded-full flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300">
                <User className="w-16 h-16 text-primary drop-shadow-[0_0_5px_rgba(0,255,136,0.3)]" />
              </div>
            </div>

            <h4 className="font-anton text-2xl text-foreground text-center mb-2">Artur Ciszczoń</h4>
            <p className="text-primary font-inter font-semibold text-center mb-6">Biznes i procesy</p>

            <div className="space-y-4 text-muted-foreground font-inter leading-relaxed mb-6">
              <p>23 lata w bankowości i sprzedaży na wysokich stanowiskach.</p>
              <p>Pomysłodawca Stowarzyszenia ON.AI.</p>
              <p>Kilkadziesiąt kursów AI za pasem.</p>
            </div>

            <div className="pt-6 border-t border-border/50">
              <p className="text-foreground font-inter font-medium">
                Patrzy na AI przez: <span className="text-primary">procesy biznesowe, dane, efektywność, ROI.</span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all duration-500 border border-primary/20 hover:border-primary bg-card/90 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-primary/10 border-2 border-primary/30 rounded-full flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300">
                <User className="w-16 h-16 text-primary drop-shadow-[0_0_5px_rgba(0,255,136,0.3)]" />
              </div>
            </div>

            <h4 className="font-anton text-2xl text-foreground text-center mb-2">Anna Hawryluk-Wiraszka</h4>
            <p className="text-primary font-inter font-semibold text-center mb-6">Marketing i technologia</p>

            <div className="space-y-4 text-muted-foreground font-inter leading-relaxed mb-6">
              <p>Marketing, technologia i edukacja.</p>
              <p>Współtwórczyni Yourtwinmind, członkini Stowarzyszenia ON.AI</p>
              <p>+6000 followersów w 3 tygodnie.</p>
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
          <strong className="text-foreground">Razem dajemy Ci:</strong>
        </p>
        <p className="text-lg">
          → Perspektywę biznesową (jak zarabiać więcej)<br />
          → Perspektywę praktyczną (jak robić to szybciej)
        </p>
        <p className="text-lg">
          <strong className="text-foreground">Realne wyniki:</strong> Bridgestone wprowadza zmiany w organizacji po naszym szkoleniu.
        </p>
      </div>
    </div>
  );
};

export default TrainersSection;

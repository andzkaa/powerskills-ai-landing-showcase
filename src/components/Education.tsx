import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, BookOpen, Users, Lightbulb, Shield, Target } from 'lucide-react';
import PowerDots from './PowerDots';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <PowerDots animated />
            <span className="text-primary font-inter font-semibold tracking-wide uppercase text-sm">
              Edukacja
            </span>
            <PowerDots animated />
          </div>
          <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            <span className="gradient-text">Szkoły</span> Gotowe na Przyszłość
          </h2>
          <p className="text-xl text-muted-foreground font-inter font-light max-w-3xl mx-auto">
            Wspieramy szkoły w mądrym i bezpiecznym wdrażaniu sztucznej inteligencji. 
            Dzięki nam szkoła nie tylko nadąża za zmianami, ale aktywnie przygotowuje uczniów i kadrę do wyzwań cyfrowej przyszłości.
          </p>
        </div>

        {/* Main Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
          {/* Teachers Program */}
          <Card className="card-hover group bg-card backdrop-blur-sm animate-fade-in">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-9 h-9 text-primary" />
                </div>
                <div>
                  <h3 className="font-anton text-3xl text-foreground">Dla Nauczycieli</h3>
                  <p className="text-primary font-inter text-sm font-semibold">AI w Edukacji</p>
                </div>
              </div>

              <p className="text-muted-foreground font-inter leading-relaxed mb-6 text-lg">
                Szkolenia pokazujące, jak wykorzystywać GenAI w pracy dydaktycznej, planowaniu lekcji, 
                tworzeniu materiałów edukacyjnych i komunikacji z uczniami.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-primary/5">
                  <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-inter font-semibold">Praktyczne narzędzia</p>
                    <p className="text-muted-foreground font-inter text-sm">Gotowe rozwiązania do zastosowania na lekcjach</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-primary/5">
                  <Lightbulb className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-inter font-semibold">Dobre praktyki</p>
                    <p className="text-muted-foreground font-inter text-sm">Metodyka efektywnego wykorzystania AI</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg bg-primary/5">
                  <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-inter font-semibold">Realne wsparcie</p>
                    <p className="text-muted-foreground font-inter text-sm">AI jako sprzymierzeniec, nie zagrożenie</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <PowerDots className="justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </CardContent>
          </Card>

          {/* Students Program */}
          <Card className="card-hover group bg-card backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-9 h-9 text-primary" />
                </div>
                <div>
                  <h3 className="font-anton text-3xl text-foreground">Dla Uczniów</h3>
                  <p className="text-primary font-inter text-sm font-semibold">Odpowiedzialna AI</p>
                </div>
              </div>

              <p className="text-muted-foreground font-inter leading-relaxed mb-6 text-lg">
                Warsztaty wprowadzające młodych w świat AI w sposób odpowiedzialny i ciekawy. 
                Uczymy korzystania z narzędzi, rozmawiamy o etyce, prawie i bezpiecznym używaniu AI.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-primary/5">
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-inter font-semibold">Bezpieczeństwo</p>
                    <p className="text-muted-foreground font-inter text-sm">Etyczne i bezpieczne korzystanie z AI</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-primary/5">
                  <Lightbulb className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-inter font-semibold">Kreatywność</p>
                    <p className="text-muted-foreground font-inter text-sm">AI jako narzędzie do nauki i rozwoju</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg bg-primary/5">
                  <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-inter font-semibold">Przyszłość</p>
                    <p className="text-muted-foreground font-inter text-sm">Przygotowanie do wyzwań cyfrowego świata</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <PowerDots className="justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover bg-card backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h3 className="font-anton text-2xl text-center text-foreground mb-8">
                Dlaczego warto wdrożyć AI w szkole?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl mb-3">🎯</div>
                  <h4 className="font-anton text-lg text-foreground mb-2">Nowoczesność</h4>
                  <p className="text-muted-foreground font-inter text-sm">
                    Szkoła na czele zmian technologicznych
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="text-4xl mb-3">⚡</div>
                  <h4 className="font-anton text-lg text-foreground mb-2">Efektywność</h4>
                  <p className="text-muted-foreground font-inter text-sm">
                    Oszczędność czasu nauczycieli i lepsze wyniki
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="text-4xl mb-3">🚀</div>
                  <h4 className="font-anton text-lg text-foreground mb-2">Przewaga</h4>
                  <p className="text-muted-foreground font-inter text-sm">
                    Uczniowie przygotowani na cyfrową przyszłość
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50 text-center">
                <p className="text-foreground font-inter font-semibold text-lg mb-2">
                  Od analizy potrzeb przez warsztat promptowania, aż po plan wdrożenia
                </p>
                <p className="text-muted-foreground font-inter">
                  Dostarczamy rozwiązania, które działają od razu 👉
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import PowerDots from './PowerDots';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <PowerDots animated />
            <span className="text-primary font-inter font-semibold tracking-wide uppercase text-sm">
              Pozostańmy w kontakcie
            </span>
            <PowerDots animated />
          </div>
          <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Rozpocznij Swoją <span className="gradient-text">Przygodę z AI</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter font-light max-w-3xl mx-auto">
            Jesteś gotowy, by odkryć swój potencjał? Skontaktuj się z nami, by poznać nasze programy szkoleniowe i zobaczyć,
            jak możemy pomóc Ci rozwinąć kompetencje, które dadzą Ci przewagę w przyszłości – praktycznie, konkretnie, na Twoich warunkach.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in">
            <CardContent className="p-8">
              <h3 className="font-anton text-2xl text-foreground mb-6">Send us a message</h3>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-foreground font-inter font-medium mb-2">Name</label>
                    <Input
                      placeholder="Your name"
                      className="bg-background/80 border-border/50 focus:border-primary font-inter"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-inter font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background/80 border-border/50 focus:border-primary font-inter"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-foreground font-inter font-medium mb-2">Subject</label>
                  <Input
                    placeholder="How can we help you?"
                    className="bg-background/80 border-border/50 focus:border-primary font-inter"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-inter font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your training needs..."
                    rows={6}
                    className="bg-background/80 border-border/50 focus:border-primary font-inter resize-none"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-inter font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-anton text-lg text-foreground">Email</h4>
                      <p className="text-muted-foreground font-inter">contact@powerskills.ai</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-anton text-lg text-foreground">Phone</h4>
                      <p className="text-muted-foreground font-inter">+48 123 456 789</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-anton text-lg text-foreground">Location</h4>
                      <p className="text-muted-foreground font-inter">Warsaw, Poland</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/10">
                <h4 className="font-anton text-xl text-foreground mb-4">Ready to get started?</h4>
                <p className="text-muted-foreground font-inter mb-4">
                  Join thousands of learners who are already developing their AI skills with PowerSkills.ai
                </p>
                <PowerDots className="opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
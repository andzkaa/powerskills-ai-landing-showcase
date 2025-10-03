import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import PowerDots from './PowerDots';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mblzybpw';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data,
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(
          (json?.errors && json.errors.map((e: any) => e.message).join(' ')) ||
          'Nie udało się wysłać formularza. Spróbuj ponownie.'
        );
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Problem z połączeniem. Sprawdź internet i spróbuj ponownie.');
    }
  }

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
            Dołącz do <span className="gradient-text">AI-Lab</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter font-light max-w-3xl mx-auto">
            Nie musisz być programistą – wystarczy ciekawość. Pokażemy Ci drogę od pierwszego promptu do realnych efektów,
            które poczujesz już następnego dnia. Bo AI nie jest dla wybranych – jest dla każdego, kto chce uczyć się szybciej i żyć mądrzej.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in">
            <CardContent className="p-8">
              <h3 className="font-anton text-2xl text-foreground mb-6">Napisz do nas</h3>

              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                {/* honeypot anty-spam */}
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />
                {/* opcjonalne metadane */}
                <input type="hidden" name="_subject" value="Wiadomość z formularza PowerSkills.ai" />
                <input type="hidden" name="source" value="powerskills.ai/contact" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-foreground font-inter font-medium mb-2">Imię</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Twoje imię"
                      required
                      className="bg-background/80 border-border/50 focus:border-primary font-inter"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-foreground font-inter font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="twoj@email.com"
                      required
                      className="bg-background/80 border-border/50 focus:border-primary font-inter"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-foreground font-inter font-medium mb-2">Temat</label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="W czym możemy pomóc?"
                    className="bg-background/80 border-border/50 focus:border-primary font-inter"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground font-inter font-medium mb-2">Wiadomość</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Opowiedz nam o swoich potrzebach szkoleniowych..."
                    rows={6}
                    required
                    className="bg-background/80 border-border/50 focus:border-primary font-inter resize-none"
                  />
                </div>

                <div aria-live="polite" className="min-h-[1.25rem] text-sm">
                  {status === 'success' && (
                    <p className="text-green-600">Dziękujemy! Wiadomość została wysłana. Odezwiemy się wkrótce.</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-600">{errorMsg}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-inter font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Wysyłanie…' : 'Wyślij wiadomość'}
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
                      <p className="text-muted-foreground font-inter">office@powerskills.ai</p>
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
                      <h4 className="font-anton text-lg text-foreground">Telefon</h4>
                      <p className="text-muted-foreground font-inter">+48 505 984 676</p>
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
                      <h4 className="font-anton text-lg text-foreground">Lokalizacja</h4>
                      <p className="text-muted-foreground font-inter">Szczecin, Polska</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/10">
                <h4 className="font-anton text-xl text-foreground mb-4">Gotowy na start?</h4>
                <p className="text-muted-foreground font-inter mb-4">
                  Dołącz do ludzi, którzy już nauczyli się mówić językiem przyszłości i wykorzystują AI na co dzień
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

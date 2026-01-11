import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PowerDots from './PowerDots';

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

const faqData: FAQItem[] = [
  {
    question: "Co muszę umieć, żeby to zadziałało?",
    answer: (
      <>
        <p className="mb-3">Wystarczy podstawowa obsługa komputera i ciekawość. Nie musisz programować. Nie musisz znać AI. Wszystko tłumaczymy od zera, ludzkim językiem.</p>
        <p className="font-semibold text-foreground mb-2">Jeśli potrafisz:</p>
        <ul className="space-y-1 mb-3">
          <li className="flex items-center space-x-2">
            <span className="text-primary">✓</span>
            <span>Wysłać email</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-primary">✓</span>
            <span>Otworzyć stronę w przeglądarce</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-primary">✓</span>
            <span>Skopiować tekst</span>
          </li>
        </ul>
        <p>...to wystarczy. Resztę robimy razem.</p>
      </>
    )
  },
  {
    question: "Czy 6 godzin to wystarczy?",
    answer: (
      <>
        <p className="mb-3">To nie jest „szkolenie na 6h". To <strong className="text-primary">sprint wdrożeniowy</strong>.</p>
        <p className="font-semibold text-foreground mb-2">W 6 godzin:</p>
        <ul className="space-y-1 mb-3">
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>Dostajesz podstawy</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>Pracujesz na swoich realnych zadaniach</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>Wychodzisz z gotowymi narzędziami</span>
          </li>
        </ul>
        <p className="font-semibold text-foreground mb-2">A po warsztacie:</p>
        <ul className="space-y-1 mb-3">
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>90 dni wsparcia mailowego/Slack</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>Materiały i baza narzędzi</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>Możliwość konsultacji</span>
          </li>
        </ul>
        <p className="text-primary font-semibold">Nasi klienci wracają po więcej, bo widzą efekty.</p>
      </>
    )
  },
  {
    question: "Czy to jest bezpieczne? Co z danymi firmy?",
    answer: (
      <>
        <p className="mb-3"><strong className="text-foreground">Bezpieczeństwo to podstawa.</strong></p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start space-x-2">
            <span className="text-primary">✓</span>
            <span>Zgodnie z GDPR i polityką Twojej firmy</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">✓</span>
            <span>Nie przesyłamy danych firmowych do AI bez Twojej zgody</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">✓</span>
            <span>Uczymy jak chronić dane wrażliwe</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">✓</span>
            <span>Pokazujemy narzędzia zgodne z compliance</span>
          </li>
        </ul>
        <p className="font-semibold text-foreground mb-2">Na warsztacie omówimy:</p>
        <ul className="space-y-1">
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>Co wolno, czego nie</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>Jak anonimizować dane</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>Jak ustawić politykę AI w firmie</span>
          </li>
        </ul>
      </>
    )
  },
  {
    question: "Czy mogę przetestować AI przed warsztatem?",
    answer: (
      <>
        <p className="mb-3"><strong className="text-primary">Tak!</strong></p>
        <p className="mb-2">Przed warsztatem dostaniesz:</p>
        <ul className="space-y-1 mb-3">
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>Krótki prework (30 min)</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>Dostęp do podstawowych narzędzi</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>Listę pytań do przemyślenia</span>
          </li>
        </ul>
        <p className="text-foreground">Dzięki temu na warsztacie możemy od razu przejść do praktyki.</p>
      </>
    )
  },
  {
    question: "Co jeśli mój zespół się opiera?",
    answer: (
      <>
        <p className="mb-3">Wiemy że zmiana to stres.</p>
        <p className="mb-2 font-semibold text-foreground">Dlatego:</p>
        <div className="space-y-3 mb-3">
          <div>
            <p className="text-muted-foreground">→ Nie mówimy <span className="line-through">"AI zastąpi Twoją pracę"</span></p>
            <p className="text-primary">→ Mówimy <strong>"AI odbierze Ci rutynę"</strong></p>
          </div>
          <div>
            <p className="text-muted-foreground">→ Nie mówimy <span className="line-through">"musisz się nauczyć"</span></p>
            <p className="text-primary">→ Mówimy <strong>"pokaż jak robisz to teraz, my pokażemy jak szybciej"</strong></p>
          </div>
        </div>
        <p className="text-foreground font-semibold mb-2">Naszym celem nie jest zastąpić ludzi.</p>
        <p className="text-foreground">To dać im narzędzia, żeby mogli robić to co lubią, a nie to co ich męczy.</p>
      </>
    )
  },
  {
    question: "A co jeśli AI się zmieni za pół roku?",
    answer: (
      <>
        <p className="mb-3">AI zmienia się codziennie. To prawda.</p>
        <p className="mb-2 font-semibold text-foreground">Ale:</p>
        <ul className="space-y-1 mb-3">
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>Uczymy <strong className="text-foreground">ZASAD</strong>, nie konkretnych przycisków</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>Jeśli wiesz JAK myśleć o AI, każde nowe narzędzie ogarniasz w 15 min</span>
          </li>
        </ul>
        <p className="mb-2 font-semibold text-foreground">Dodatkowo:</p>
        <ul className="space-y-1 mb-3">
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>90 dni wsparcia po warsztacie</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>Aktualizowana baza narzędzi</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-primary">→</span>
            <span>Dostęp do naszej społeczności</span>
          </li>
        </ul>
        <p className="text-primary font-semibold">Nie zostawiamy Was samych.</p>
      </>
    )
  }
];

const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <PowerDots animated />
            <span className="text-primary font-inter font-semibold tracking-wide uppercase text-sm">
              Pytania i odpowiedzi
            </span>
            <PowerDots animated />
          </div>
          <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            <span className="gradient-text">Najczęściej</span> Zadawane Pytania
          </h2>
          <p className="text-xl text-muted-foreground font-inter font-light max-w-3xl mx-auto">
            Wszystko co musisz wiedzieć zanim dołączysz
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-card/60 border border-primary/20 rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 backdrop-blur-sm"
            >
              <button
                className="w-full p-6 flex items-center justify-between text-left hover:bg-primary/5 transition-all duration-300"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex items-start space-x-4 flex-1">
                  <span className="text-primary text-2xl">❓</span>
                  <h3 className="font-anton text-xl md:text-2xl text-foreground pr-4">
                    {item.question}
                  </h3>
                </div>
                {expandedIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                )}
              </button>

              {expandedIndex === index && (
                <div className="px-6 pb-6 border-t border-primary/10 pt-6 animate-fade-in">
                  <div className="pl-12 text-muted-foreground font-inter leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground font-inter mb-4">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </p>
          <a
            href="#contact"
            className="inline-block text-primary font-inter font-semibold text-lg hover:underline hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.5)] transition-all duration-300"
          >
            Napisz do nas →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

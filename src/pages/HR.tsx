import React from 'react';
import { Button } from '@/components/ui/button';

// Import images - add your files to src/assets folder
// import aiHrLabLogo from '@/assets/AI HR LAB czarne tło.png';
// import backgroundImage from '@/assets/background.png';

// Fallback to existing assets for now
import aiHrLabLogo from '@/assets/HRwhite.png';
import backgroundImage from '@/assets/bgrhr.png';
import headerBackgroundImage from '@/assets/dodatek.png';

const HR = () => {
  return (
    <div className="min-h-screen relative overflow-hidden font-be-vietnam">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Old Background Pattern - keeping for fallback */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="200" height="173.2" patternUnits="userSpaceOnUse">
              <polygon points="100,0 150,43.3 150,129.9 100,173.2 50,129.9 50,43.3"
                       fill="none" stroke="#93c5fd" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="100" cy="86.6" r="2" fill="#3b82f6" opacity="0.3"/>
              <circle cx="50" cy="43.3" r="1.5" fill="#3b82f6" opacity="0.2"/>
              <circle cx="150" cy="43.3" r="1.5" fill="#3b82f6" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Logo - Image background bar */}
        <div
          className="py-8 mb-12 bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${headerBackgroundImage})` }}
        >
          <div className="container mx-auto px-4 max-w-4xl flex justify-center relative z-10">
            <img
              src={aiHrLabLogo}
              alt="AI HR LAB Logo"
              className="h-24 md:h-32 w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>


        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Warsztat AI dla HR-owców
            </h1>
            <p className="text-xl md:text-2xl text-white mb-4">
              ze Szczecina
            </p>
            <p className="text-lg text-white max-w-2xl mx-auto">
              To nie jest event z prezentacjami.<br/>
              <strong>To jest system pracy z AI w HR.</strong>
            </p>
          </div>

        {/* Main Pitch */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Jeśli pracujesz w HR i masz poczucie, że:
          </p>
          <ul className="space-y-3 mb-8 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">→</span>
              <span>AI jest wszędzie, ale trudno z tego zrobić realny użytek</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">→</span>
              <span>jedni mówią „AI zrobi wszystko", inni straszą ryzykiem i prawem</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl">→</span>
              <span>a Ty po prostu chcesz pracować mądrzej, szybciej i bezpiecznie</span>
            </li>
          </ul>
          <p className="text-lg text-gray-800 font-semibold">
            To zapraszamy Cię na dwudniowe szkolenie zaprojektowane specjalnie dla HR-ów ze Szczecina i regionu.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Jak to działa</h2>
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-gray-900 mb-2">Przed szkoleniem</h3>
              <p className="text-gray-700">Dostajesz prework, który wyrównuje poziom wiedzy i przygotowuje do pracy</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-gray-900 mb-2">Dzień 1</h3>
              <p className="text-gray-700">Uczysz się, jak sensownie pracować z AI w zadaniach HR (bez technicznego żargonu)</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-gray-900 mb-2">Tydzień przerwy</h3>
              <p className="text-gray-700">Testujesz AI w swojej realnej pracy</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-gray-900 mb-2">Dzień 2</h3>
              <p className="text-gray-700">Pracujemy na Twoich przypadkach, poprawiamy błędy, dopasowujemy rozwiązania</p>
            </div>
          </div>
        </div>

        {/* After Training */}
        <div className="bg-blue-600 text-white rounded-lg p-8 md:p-10 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Po szkoleniu nie zostajesz sam/a</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Zamknięta grupa na Discordzie tylko dla uczestników</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">✓</span>
              <span>Dwa webinary kilka tygodni po szkoleniu – konsultacje, pytania, realne problemy</span>
            </li>
          </ul>
        </div>

        {/* What You Get */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 md:p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Co wynosisz</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 text-2xl">→</span>
              <span className="text-gray-700">Mniej ręcznej roboty</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 text-2xl">→</span>
              <span className="text-gray-700">Większa kontrola</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 text-2xl">→</span>
              <span className="text-gray-700">Jasne granice, gdzie AI pomaga, a gdzie nie</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-600 text-2xl">→</span>
              <span className="text-gray-700">Gotowe schematy do użycia następnego dnia</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl font-semibold text-white mb-6">
            Lokalnie. Kameralnie. Praktycznie.
          </p>
          <p className="text-lg text-white mb-8">
            Jeśli chcesz pracować z AI bez chaosu i bez ściemy – dołącz.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg font-semibold rounded-lg shadow-xl"
            onClick={() => window.open('https://forms.office.com/r/cLgQKs5rKt', '_blank')}
          >
            Zapisz się na warsztat
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-white text-sm">
          <p>Pytania? Skontaktuj się: <a href="mailto:kontakt@powerskills.ai" className="text-blue-300 hover:underline">contact@powerskills.ai</a></p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HR;

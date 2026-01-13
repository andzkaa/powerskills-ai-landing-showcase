import React from 'react';
import { Button } from '@/components/ui/button';

// Import images
import logowht from '@/assets/logowht.png';
import backgroundImage from '@/assets/bgrhr.png';
import headerBackgroundImage from '@/assets/dodatek1.png';

const HR = () => {
  return (
    <div className="min-h-screen bg-[#0b0f19] font-be-vietnam relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Logo Section with Header Background */}
        <div
          className="py-8 mb-12 bg-cover bg-top bg-no-repeat relative border-b border-[#1f2a44]"
          style={{ backgroundImage: `url(${headerBackgroundImage})` }}
        >
          <div className="absolute inset-0 bg-[#0f172a]/30"></div>
          <div className="container mx-auto px-4 max-w-4xl flex justify-center relative z-10">
            <img
              src={logowht}
              alt="AI HR LAB Logo"
              className="h-20 md:h-28 w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl pb-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              AI HR LAB — Nienaturalnie dobrzy
            </h1>
            <p className="text-lg md:text-xl text-[#93c5fd] mb-2">
              Dwudniowe warsztaty praktyczne: AI w HR
            </p>
            <p className="text-base text-[#c7d2fe] mb-6">
              Szczecin
            </p>
            <p className="text-base md:text-lg text-[#e5e7eb] max-w-2xl mx-auto leading-relaxed">
              Jeśli w HR chcesz oszczędzać czas bez utraty jakości i mieć jasne zasady:<br/>
              co delegować AI, a czego nigdy — to jest program dla Ciebie.
            </p>
          </div>

          {/* Po AI HR LAB wychodzisz z */}
          <div className="bg-[#0b1224] rounded-[14px] border border-[#1f2a44] p-8 md:p-10 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Po AI HR LAB wychodzisz z
            </h2>
            <ul className="space-y-4 text-[#e5e7eb]">
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3 text-lg">→</span>
                <span>modelem pracy HR + AI (do wdrożenia od razu)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3 text-lg">→</span>
                <span>sposobem na pisanie i redakcję treści HR szybciej i lepiej</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3 text-lg">→</span>
                <span>workflow do rekrutacji, onboardingu i komunikacji</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3 text-lg">→</span>
                <span>granicami i bezpieczeństwem: człowiek decyduje, AI wspiera</span>
              </li>
            </ul>
          </div>

          {/* Jak to działa */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
              Jak to działa
            </h2>
            <div className="space-y-6">
              <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6">
                <h3 className="font-bold text-white mb-3 text-lg">
                  MODUŁ 1 (Dzień 1) - Sposób pracy HR z AI
                </h3>
                <p className="text-[#93c5fd] text-sm mb-2">
                  14 marca 2025, 9:00-17:00
                </p>
                <p className="text-[#cbd5e1] leading-relaxed">
                  Fundament: gdzie AI pomaga, jak pisać/porządkować treści HR i jak pracować bez oddawania odpowiedzialności.
                </p>
              </div>

              <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6">
                <h3 className="font-bold text-white mb-3 text-lg">
                  MODUŁ 2 (Dzień 2) - Praktyka na realnych przypadkach
                </h3>
                <p className="text-[#93c5fd] text-sm mb-2">
                  21 marca 2025, 9:00-17:00
                </p>
                <p className="text-[#cbd5e1] leading-relaxed">
                  Dopasowanie do Twojej organizacji + korekta błędów + rozwiązania na konkretne problemy uczestników.
                </p>
              </div>

              <div className="bg-[#0b1224] rounded-[14px] border border-[#1f2a44] p-6">
                <p className="text-[#e5e7eb] leading-relaxed">
                  <span className="font-semibold text-white">Uwaga:</span> Dla osób biorących 2 moduły: prework + tydzień praktyki między modułami (żeby przerobić to na realnych zadaniach HR).
                </p>
              </div>
            </div>
          </div>

          {/* Ceny */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
              Ceny (netto)
            </h2>
            <div className="space-y-6">
              {/* Pełny program */}
              <div className="bg-[#0b1224] rounded-[14px] border-2 border-[#93c5fd] p-8">
                <h3 className="font-bold text-white text-lg mb-4">
                  PEŁNY PROGRAM: Moduł 1 + Moduł 2
                </h3>
                <div className="space-y-3 mb-6">
                  <p className="text-[#cbd5e1]">
                    Cena regularna: <span className="text-white font-semibold line-through">2 998 zł netto</span>
                  </p>
                  <p className="text-2xl font-bold text-[#86efac]">
                    Early Bird do 31.01: 2 498 zł netto
                  </p>
                </div>
                <div className="border-t border-[#1f2a44] pt-4">
                  <p className="text-sm text-[#cbd5e1] mb-3 font-semibold">W cenie pełnego programu:</p>
                  <ul className="space-y-2 text-sm text-[#e5e7eb]">
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">✓</span>
                      <span>Dostęp do grupy (Discord) tylko dla uczestników</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">✓</span>
                      <span>Dwa spotkania online po szkoleniu</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Opcja awaryjna */}
              <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-8">
                <h3 className="font-bold text-white text-lg mb-4">
                  OPCJA AWARYJNA: Tylko Moduł 1
                </h3>
                <div className="space-y-3">
                  <p className="text-xl font-semibold text-white">
                    Cena: 1 999 zł netto
                  </p>
                  <p className="text-sm text-[#cbd5e1]">
                    (bez Modułu 2, bez rabatów, bez Discorda i spotkań online)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bonus */}
          <div className="bg-gradient-to-br from-[#0b1224] to-[#0f172a] rounded-[14px] border-2 border-[#fde68a] p-8 md:p-10 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-[#fde68a] mb-6">
              Bonus dla pierwszych 10 zapisów
            </h2>
            <div className="flex items-start">
              <span className="text-[#fde68a] mr-3 text-xl">✓</span>
              <p className="text-[#e5e7eb] text-lg">
                Darmowa konsultacja wdrożeniowa (wartość 500 zł)
              </p>
            </div>
          </div>

          {/* Dlaczego ten program powstał */}
          <div className="bg-[#0f172a] rounded-[14px] border border-[#1f2a44] p-8 md:p-10 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Dlaczego ten program powstał
            </h2>
            <div className="space-y-4 text-[#e5e7eb] leading-relaxed">
              <p>
                AI w HR jest dziś wszędzie. W prezentacjach, w artykułach, w ofertach narzędzi.
                A jednocześnie bardzo rzadko wiadomo, jak korzystać z niej normalnie, spokojnie i odpowiedzialnie.
              </p>
              <p>
                HR został wciągnięty pomiędzy:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">•</span>
                  <span>obietnice, że „AI zrobi wszystko"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">•</span>
                  <span>strach przed błędami, prawem i odpowiedzialnością</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">•</span>
                  <span>realną, codzienną pracę, która musi być wykonana dobrze</span>
                </li>
              </ul>
              <p className="font-semibold text-white">
                AI HR LAB powstało po to, aby HR odzyskał kontrolę. Nie nad technologią. Nad sposobem pracy z technologią.
              </p>
            </div>
          </div>

          {/* Co oznacza "Nienaturalnie dobrzy" */}
          <div className="bg-[#0b1224] rounded-[14px] border border-[#233055] p-8 md:p-10 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Co oznacza „Nienaturalnie dobrzy"
            </h2>
            <p className="text-[#e5e7eb] leading-relaxed mb-4">
              „Nienaturalnie dobrzy" to HR, którzy:
            </p>
            <ul className="space-y-3 text-[#e5e7eb]">
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3">→</span>
                <span>wiedzą, kiedy AI pomaga, a kiedy przeszkadza</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3">→</span>
                <span>potrafią używać AI bez utraty jakości i odpowiedzialności</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3">→</span>
                <span>zachowują decyzyjność po stronie człowieka</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3">→</span>
                <span>pracują spokojniej, czyściej i pewniej</span>
              </li>
            </ul>
          </div>

          {/* Dla kogo */}
          <div className="bg-[#0f172a] rounded-[14px] border border-[#1f2a44] p-8 md:p-10 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Dla kogo jest to szkolenie
            </h2>
            <ul className="space-y-3 text-[#e5e7eb]">
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3">•</span>
                <span>HR Business Partnerzy</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3">•</span>
                <span>Specjaliści i liderzy HR</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3">•</span>
                <span>Osoby odpowiedzialne za rekrutację, onboarding i komunikację</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3">•</span>
                <span>HR z małych, średnich i większych organizacji</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3">•</span>
                <span>Osoby, które chcą korzystać z AI odpowiedzialnie, nie modnie</span>
              </li>
            </ul>
          </div>

          {/* Dlaczego lokalnie */}
          <div className="bg-[#0b1224] rounded-[14px] border border-[#233055] p-8 md:p-10 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Dlaczego lokalnie
            </h2>
            <div className="space-y-4 text-[#e5e7eb] leading-relaxed">
              <p>To nie jest szkolenie „z centrali".</p>
              <p>Pracujemy na realiach firm ze Szczecin i regionu.</p>
              <p className="font-semibold text-white">Kameralnie. Bez sceny. Bez marketingowego show.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mb-12">
            <div className="space-y-8">
              {/* Główne buttony płatności */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Button 1: Pełny program */}
                <div className="flex flex-col">
                  <Button
                    size="lg"
                    className="bg-[#93c5fd] hover:bg-[#c7d2fe] text-[#0b0f19] px-8 py-6 text-base md:text-lg font-semibold rounded-lg shadow-xl w-full"
                    onClick={() => window.location.href = 'https://buy.stripe.com/bJe9AV3A8dGZePa2tC6g800'}
                  >
                    Kupuję pełny program (2 moduły)
                  </Button>
                  <p className="text-sm text-[#86efac] mt-3 font-medium">
                    Early Bird do 31.01: użyj kodu EARLYHR i oszczędź 500 zł
                  </p>
                </div>

                {/* Button 2: Tylko Moduł 1 */}
                <div className="flex flex-col">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#93c5fd] text-[#93c5fd] hover:bg-[#93c5fd]/10 px-8 py-6 text-base md:text-lg font-semibold rounded-lg w-full"
                    onClick={() => window.location.href = 'https://buy.stripe.com/5kQeVf7Qo6excH29W46g801'}
                  >
                    Kupuję tylko Moduł 1
                  </Button>
                  <p className="text-sm text-[#94a3b8] mt-3">
                    1 999 zł netto (bez rabatów)
                  </p>
                </div>
              </div>

              {/* Kontakt */}
              <div className="pt-4">
                <p className="text-sm text-[#cbd5e1]">
                  Jeśli masz pytanie lub potrzebujesz faktury, napisz na{' '}
                  <a
                    href="mailto:contact@powerskills.ai?subject=AI%20HR%20LAB%20-%20zapytanie"
                    className="text-[#93c5fd] hover:text-[#c7d2fe] underline"
                  >
                    contact@powerskills.ai
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center border-t border-[#1f2a44] pt-8">
            <p className="text-[#e5e7eb] mb-2">
              Pozdrawiamy,
            </p>
            <p className="text-white font-semibold mb-4">
              Ania, Artur i Magda
            </p>
            <p className="text-[#93c5fd] font-semibold mb-6">
              AI HR LAB
            </p>
            <p className="text-sm text-[#cbd5e1]">
              Ceny netto (+VAT). Rabaty nie łączą się.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HR;

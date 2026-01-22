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
              📍 Szczecin
            </p>
            <div className="text-base md:text-lg text-[#e5e7eb] max-w-2xl mx-auto leading-relaxed mb-6">
              <p className="mb-4">
                Jeśli w HR chcesz <strong>oszczędzać czas bez utraty jakości</strong>
              </p>
              <p className="mb-6">
                i mieć <strong>jasne zasady: co delegować AI, a czego nigdy</strong> —
              </p>
              <p className="mb-2">
                to jest program dla Ciebie.
              </p>
            </div>

            <div className="text-base text-[#e5e7eb] max-w-2xl mx-auto mb-6 space-y-1">
              <p>Bez hype'u.</p>
              <p>Bez straszenia.</p>
              <p>Bez korporacyjnego teatru.</p>
            </div>

            <div className="text-base md:text-lg text-[#e5e7eb] max-w-2xl mx-auto mb-6">
              <p className="mb-4">
                AI HR LAB to <strong>robocze warsztaty</strong>, po których:
              </p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">-</span>
                  <span>wiesz <strong>jak</strong> pracować z AI,</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">-</span>
                  <span>wiesz <strong>gdzie są granice</strong>,</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">-</span>
                  <span>masz <strong>gotowy model działania</strong>, a nie inspirację na 3 dni.</span>
                </li>
              </ul>
            </div>

            <p className="text-lg md:text-xl font-bold text-white">
              Człowiek decyduje. AI wspiera.
            </p>
          </div>

          {/* Po AI HR LAB wychodzisz z */}
          <div className="bg-[#0b1224] rounded-[14px] border border-[#1f2a44] p-8 md:p-10 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Po AI HR LAB wychodzisz z:
            </h2>
            <ul className="space-y-4 text-[#e5e7eb]">
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3 text-lg">→</span>
                <span><strong>modelem pracy HR + AI</strong>, gotowym do wdrożenia od razu</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3 text-lg">→</span>
                <span><strong>workflow do rekrutacji, onboardingu i komunikacji</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3 text-lg">→</span>
                <span><strong>sposobem na pisanie i redakcję treści HR szybciej i lepiej</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3 text-lg">→</span>
                <span><strong>jasnymi granicami odpowiedzialności (AI Act – w praktyce)</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3 text-lg">→</span>
                <span><strong>narzędziownikiem do budowania marki HR i pracodawcy z pomocą AI</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3 text-lg">→</span>
                <span><strong>większym spokojem i kontrolą w codziennej pracy</strong></span>
              </li>
            </ul>
          </div>

          {/* Jak działa AI HR LAB */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
              Jak działa AI HR LAB
            </h2>
            <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6 md:p-8 mb-6">
              <p className="text-[#e5e7eb] leading-relaxed mb-4">
                To <strong className="text-white">dwudniowy program rozłożony w czasie</strong>, żeby AI nie zostało „na sali", tylko realnie weszło do Twojej pracy.
              </p>
              <ul className="space-y-2 text-[#e5e7eb]">
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-3">-</span>
                  <span><strong className="text-white">Dzień 1</strong> — fundamenty, schematy, narzędzia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-3">-</span>
                  <span><strong className="text-white">Tydzień praktyki</strong> — testy w realnych zadaniach HR</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-3">-</span>
                  <span><strong className="text-white">Dzień 2</strong> — korekta, dopasowanie, decyzje</span>
                </li>
              </ul>
            </div>
          </div>

          {/* PROGRAM */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              PROGRAM
            </h2>

            {/* DZIEŃ 1 */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-[#0b1224] to-[#0f172a] rounded-[14px] border-2 border-[#93c5fd] p-8 md:p-10 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  DZIEŃ 1
                </h3>
                <h4 className="text-lg md:text-xl text-[#93c5fd] mb-4">
                  Fundamenty pracy HR z AI + komunikacja i marka
                </h4>
                <p className="text-[#c7d2fe] text-base mb-4">
                  📅 14 marca 2025 | 9:00–17:00
                </p>
                <p className="text-[#e5e7eb] leading-relaxed">
                  Dzień 1 porządkuje <strong className="text-white">myślenie, odpowiedzialność i sposób pracy HR z AI</strong>, zanim przejdziesz do automatyzacji i komunikacji.
                </p>
              </div>

              {/* Bloki Dzień 1 */}
              <div className="space-y-6">
                {/* Blok 1 */}
                <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6">
                  <h5 className="font-bold text-white mb-3 flex items-start">
                    <span className="text-[#93c5fd] mr-2">🔹</span>
                    <span>Blok 1: Rola AI w pracy HR (odpowiedzialność i prawo)</span>
                  </h5>
                  <ul className="space-y-2 text-[#cbd5e1] text-sm ml-6">
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>AI jako <strong>wsparcie, nie decydent</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>odpowiedzialność człowieka w procesach HR</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>granice użycia AI w HR</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span><strong>AI Act w praktyce HR</strong>:</span>
                    </li>
                    <li className="ml-6 flex items-start">
                      <span className="text-[#93c5fd] mr-2">•</span>
                      <span>gdzie AI pomaga,</span>
                    </li>
                    <li className="ml-6 flex items-start">
                      <span className="text-[#93c5fd] mr-2">•</span>
                      <span>gdzie wymaga ostrożności,</span>
                    </li>
                    <li className="ml-6 flex items-start">
                      <span className="text-[#93c5fd] mr-2">•</span>
                      <span>gdzie nie powinno być używane wcale</span>
                    </li>
                    <li className="ml-6 text-[#94a3b8] italic">
                      (bez prawniczego języka, bez straszenia)
                    </li>
                  </ul>
                </div>

                {/* Blok 2 */}
                <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6">
                  <h5 className="font-bold text-white mb-3 flex items-start">
                    <span className="text-[#93c5fd] mr-2">🔹</span>
                    <span>Blok 2: Podstawowy schemat pracy z AI w HR</span>
                  </h5>
                  <ul className="space-y-2 text-[#cbd5e1] text-sm ml-6">
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>cel zadania (operacyjny vs. komunikacyjny)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>kontekst (biznesowy, organizacyjny, wizerunkowy)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>oczekiwany format odpowiedzi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>iteracja</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>weryfikacja</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span><strong>jak pracować z AI bez podawania danych wrażliwych</strong></span>
                    </li>
                  </ul>
                </div>

                {/* Blok 3 */}
                <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6">
                  <h5 className="font-bold text-white mb-3 flex items-start">
                    <span className="text-[#93c5fd] mr-2">🔹</span>
                    <span>Blok 3: Promptowanie praktyczne (HR + komunikacja)</span>
                  </h5>
                  <ul className="space-y-2 text-[#cbd5e1] text-sm ml-6">
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>formułowanie poleceń do:</span>
                    </li>
                    <li className="ml-6 flex items-start">
                      <span className="text-[#93c5fd] mr-2">•</span>
                      <span>treści HR,</span>
                    </li>
                    <li className="ml-6 flex items-start">
                      <span className="text-[#93c5fd] mr-2">•</span>
                      <span>komunikatów do pracowników,</span>
                    </li>
                    <li className="ml-6 flex items-start">
                      <span className="text-[#93c5fd] mr-2">•</span>
                      <span>materiałów employer brandingowych</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>doprecyzowanie odpowiedzi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>wymuszanie struktury</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>ograniczanie halucynacji</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span><strong>jak zachować spójny ton marki firmy i HR</strong></span>
                    </li>
                  </ul>
                </div>

                {/* Blok 4 */}
                <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6">
                  <h5 className="font-bold text-white mb-3 flex items-start">
                    <span className="text-[#93c5fd] mr-2">🔹</span>
                    <span>Blok 4: Praca na kontekście i spójności marki</span>
                  </h5>
                  <ul className="space-y-2 text-[#cbd5e1] text-sm ml-6">
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>jeden temat = jeden wątek</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>prowadzenie rozmowy z AI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>budowanie kontekstu <strong>bez danych wrażliwych</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span><strong>jak „uczyć" AI stylu Twojej organizacji</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>jak uniknąć chaosu komunikacyjnego</span>
                    </li>
                  </ul>
                </div>

                {/* Blok 5 */}
                <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6">
                  <h5 className="font-bold text-white mb-3 flex items-start">
                    <span className="text-[#93c5fd] mr-2">🔹</span>
                    <span>Blok 5: HR w praktyce + marka pracodawcy</span>
                  </h5>
                  <p className="text-[#cbd5e1] text-sm mb-3 ml-6">
                    Gotowe szablony i schematy do:
                  </p>
                  <ul className="space-y-2 text-[#cbd5e1] text-sm ml-6">
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>opisów stanowisk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>ogłoszeń rekrutacyjnych</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>pytań do rozmów + kryteriów</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>planów onboardingu</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>komunikatów do pracowników</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span><strong>treści wizerunkowych HR i employer brandingu</strong></span>
                    </li>
                  </ul>
                </div>

                {/* Blok 6 */}
                <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6">
                  <h5 className="font-bold text-white mb-3 flex items-start">
                    <span className="text-[#93c5fd] mr-2">🔹</span>
                    <span>Blok 6: Narzędziownik HR + AI</span>
                  </h5>
                  <p className="text-[#cbd5e1] text-sm mb-3 ml-6">
                    tworzenie:
                  </p>
                  <ul className="space-y-2 text-[#cbd5e1] text-sm ml-6">
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>prezentacji HR,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>prostych materiałów wizualnych,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>grafik do komunikacji wewnętrznej i EB,</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>interaktywnych danych i podsumowań</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span><strong>awatary i grafiki — gdzie mają sens, a gdzie nie</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>praca na jednym narzędziu (ChatGPT)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>jasne zasady korzystania w HR</span>
                    </li>
                  </ul>
                </div>

                {/* Blok 7 */}
                <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6">
                  <h5 className="font-bold text-white mb-3 flex items-start">
                    <span className="text-[#93c5fd] mr-2">🔹</span>
                    <span>Blok 7: Kontrola jakości i zgodność</span>
                  </h5>
                  <ul className="space-y-2 text-[#cbd5e1] text-sm ml-6">
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>sprawdzanie treści generowanych przez AI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>poprawianie i upraszczanie wyników</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>rozpoznawanie treści pozornie poprawnych</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span><strong>zgodność z AI Act i odpowiedzialność HR</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>co można bezpiecznie publikować, a czego nie</span>
                    </li>
                  </ul>
                </div>

                {/* Blok 8 */}
                <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6">
                  <h5 className="font-bold text-white mb-3 flex items-start">
                    <span className="text-[#93c5fd] mr-2">🔹</span>
                    <span>Blok 8: Zadanie między dniami</span>
                  </h5>
                  <ul className="space-y-2 text-[#cbd5e1] text-sm ml-6">
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>wybór <strong>2 realnych zadań HR</strong> (operacyjnych lub komunikacyjnych)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>tydzień testów AI w codziennej pracy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>obserwacja:</span>
                    </li>
                    <li className="ml-6 flex items-start">
                      <span className="text-[#93c5fd] mr-2">•</span>
                      <span>jakości,</span>
                    </li>
                    <li className="ml-6 flex items-start">
                      <span className="text-[#93c5fd] mr-2">•</span>
                      <span>oszczędności czasu,</span>
                    </li>
                    <li className="ml-6 flex items-start">
                      <span className="text-[#93c5fd] mr-2">•</span>
                      <span>reakcji organizacji</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>zebranie problemów i pytań na Dzień 2</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* DZIEŃ 2 */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-[#0b1224] to-[#0f172a] rounded-[14px] border-2 border-[#93c5fd] p-8 md:p-10 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  DZIEŃ 2
                </h3>
                <h4 className="text-lg md:text-xl text-[#93c5fd] mb-4">
                  Praktyka, korekta i dopasowanie do Twojej organizacji
                </h4>
                <p className="text-[#c7d2fe] text-base mb-4">
                  📅 21 marca 2025 | 9:00–17:00
                </p>
                <p className="text-[#e5e7eb] leading-relaxed">
                  Dzień 2 to <strong className="text-white">moment, w którym AI zaczyna naprawdę działać</strong> — albo zostaje poprawione.
                </p>
              </div>

              {/* Bloki Dzień 2 */}
              <div className="space-y-6">
                {/* Blok 1 */}
                <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6">
                  <h5 className="font-bold text-white mb-3 flex items-start">
                    <span className="text-[#93c5fd] mr-2">🔹</span>
                    <span>Blok 1: FAQ po tygodniu pracy z AI</span>
                  </h5>
                  <ul className="space-y-2 text-[#cbd5e1] text-sm ml-6">
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>pytania uczestników</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>sytuacje, w których AI zawiodła</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>wątpliwości prawne, komunikacyjne i wizerunkowe</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>problemy z jakością treści</span>
                    </li>
                  </ul>
                </div>

                {/* Blok 2 */}
                <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6">
                  <h5 className="font-bold text-white mb-3 flex items-start">
                    <span className="text-[#93c5fd] mr-2">🔹</span>
                    <span>Blok 2: Korekta sposobu pracy</span>
                  </h5>
                  <ul className="space-y-2 text-[#cbd5e1] text-sm ml-6">
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>analiza błędów</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>poprawa poleceń</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>poprawa kontekstu</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>dopasowanie AI do realiów organizacji</span>
                    </li>
                  </ul>
                </div>

                {/* Blok 3 */}
                <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6">
                  <h5 className="font-bold text-white mb-3 flex items-start">
                    <span className="text-[#93c5fd] mr-2">🔹</span>
                    <span>Blok 3: Praca na przypadkach uczestników</span>
                  </h5>
                  <ul className="space-y-2 text-[#cbd5e1] text-sm ml-6">
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>rekrutacja</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>onboarding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>komunikacja wewnętrzna</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>dokumenty HR</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span><strong>materiały wizerunkowe i employer branding</strong></span>
                    </li>
                  </ul>
                </div>

                {/* Blok 4 */}
                <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6">
                  <h5 className="font-bold text-white mb-3 flex items-start">
                    <span className="text-[#93c5fd] mr-2">🔹</span>
                    <span>Blok 4: Budowanie własnych schematów pracy</span>
                  </h5>
                  <ul className="space-y-2 text-[#cbd5e1] text-sm ml-6">
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>powtarzalne zadania HR</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>indywidualne workflow HR + AI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>checklisty:</span>
                    </li>
                    <li className="ml-6 flex items-start">
                      <span className="text-[#93c5fd] mr-2">•</span>
                      <span>co delegować AI,</span>
                    </li>
                    <li className="ml-6 flex items-start">
                      <span className="text-[#93c5fd] mr-2">•</span>
                      <span>co zawsze zostaje po stronie człowieka</span>
                    </li>
                  </ul>
                </div>

                {/* Blok 5 */}
                <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6">
                  <h5 className="font-bold text-white mb-3 flex items-start">
                    <span className="text-[#93c5fd] mr-2">🔹</span>
                    <span>Blok 5: Granice użycia AI w HR (AI Act w praktyce)</span>
                  </h5>
                  <ul className="space-y-2 text-[#cbd5e1] text-sm ml-6">
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>obszary wspierane przez AI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>obszary wyłączone z użycia AI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>odpowiedzialność HR wobec:</span>
                    </li>
                    <li className="ml-6 flex items-start">
                      <span className="text-[#93c5fd] mr-2">•</span>
                      <span>kandydatów,</span>
                    </li>
                    <li className="ml-6 flex items-start">
                      <span className="text-[#93c5fd] mr-2">•</span>
                      <span>pracowników,</span>
                    </li>
                    <li className="ml-6 flex items-start">
                      <span className="text-[#93c5fd] mr-2">•</span>
                      <span>organizacji</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>jak spokojnie rozmawiać o AI z biznesem i zarządem</span>
                    </li>
                  </ul>
                </div>

                {/* Blok 6 */}
                <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-6">
                  <h5 className="font-bold text-white mb-3 flex items-start">
                    <span className="text-[#93c5fd] mr-2">🔹</span>
                    <span>Blok 6: Transfer do codziennej pracy</span>
                  </h5>
                  <ul className="space-y-2 text-[#cbd5e1] text-sm ml-6">
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>utrwalenie sposobu pracy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>checklisty „na potem"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>dalszy, samodzielny rozwój kompetencji</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">-</span>
                      <span>jak nie wrócić do chaosu po szkoleniu</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Dlaczego to szkolenie jest inne */}
          <div className="bg-[#0f172a] rounded-[14px] border border-[#1f2a44] p-8 md:p-10 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Dlaczego to szkolenie jest inne
            </h2>
            <div className="space-y-4 text-[#e5e7eb] leading-relaxed">
              <p>
                To <strong className="text-white">nie jest ogólnopolski event z gotową prezentacją</strong>.
              </p>
              <p>To:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">-</span>
                  <span>lokalne, robocze spotkanie HR ze Szczecina i regionu,</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">-</span>
                  <span>praca na <strong className="text-white">realnych problemach Twojej firmy</strong>,</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">-</span>
                  <span>kameralna grupa,</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">-</span>
                  <span>brak sceny, brak show, brak „slajdów dla slajdów".</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Przygotowanie przed szkoleniem */}
          <div className="bg-[#0b1224] rounded-[14px] border border-[#233055] p-8 md:p-10 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Przygotowanie przed szkoleniem
            </h2>
            <div className="space-y-4 text-[#e5e7eb] leading-relaxed">
              <p>
                Warsztat zaczyna się wcześniej.
              </p>
              <p>
                Każdy uczestnik otrzymuje <strong className="text-white">prework</strong>, który:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">-</span>
                  <span>wyrównuje poziom wiedzy,</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">-</span>
                  <span>wprowadza wspólny język AI i HR,</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">-</span>
                  <span>przygotowuje technicznie do pracy z narzędziami.</span>
                </li>
              </ul>
              <p>
                Dzięki temu na sali <strong className="text-white">pracujemy od razu na konkretach</strong>.
              </p>
            </div>
          </div>

          {/* Społeczność i wsparcie po szkoleniu */}
          <div className="bg-[#0f172a] rounded-[14px] border border-[#1f2a44] p-8 md:p-10 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Społeczność i wsparcie po szkoleniu
            </h2>
            <div className="space-y-4 text-[#e5e7eb] leading-relaxed">
              <p>Po szkoleniu:</p>
              <ul className="space-y-2 ml-6 mb-4">
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">-</span>
                  <span>dołączasz do <strong className="text-white">zamkniętej grupy na Discordzie</strong>,</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">-</span>
                  <span>możesz konsultować swoje przypadki,</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">-</span>
                  <span>wymieniasz się schematami pracy.</span>
                </li>
              </ul>
              <p>Dodatkowo:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">-</span>
                  <span><strong className="text-white">2 webinary online</strong> (2–3 tygodnie po szkoleniu),</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">-</span>
                  <span>omówienie tego, co zadziałało, a co nie,</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#93c5fd] mr-2">-</span>
                  <span>korekta realnych wdrożeń.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Co wynosisz z AI HR LAB */}
          <div className="bg-[#0b1224] rounded-[14px] border border-[#233055] p-8 md:p-10 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Co wynosisz z AI HR LAB
            </h2>
            <ul className="space-y-3 text-[#e5e7eb]">
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3">-</span>
                <span>gotowy sposób pracy HR + AI</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3">-</span>
                <span>szablony i schematy do natychmiastowego użycia</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3">-</span>
                <span>większą kontrolę nad jakością i decyzjami</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3">-</span>
                <span>spokojniejszą pracę z AI</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3">-</span>
                <span>lokalną sieć kontaktów HR</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#93c5fd] mr-3">-</span>
                <span>wsparcie także po zakończeniu szkolenia</span>
              </li>
            </ul>
          </div>

          {/* Dla kogo jest AI HR LAB */}
          <div className="bg-[#0f172a] rounded-[14px] border border-[#1f2a44] p-8 md:p-10 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Dla kogo jest AI HR LAB
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
                <span>Osoby, które chcą korzystać z AI <strong className="text-white">odpowiedzialnie, nie modnie</strong></span>
              </li>
            </ul>
          </div>

          {/* Ceny */}
          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
              Ceny (netto)
            </h2>
            <div className="space-y-6">
              {/* Pełny program */}
              <div className="bg-[#0b1224] rounded-[14px] border-2 border-[#93c5fd] p-8">
                <div className="flex items-start mb-4">
                  <span className="text-xl mr-2">✅</span>
                  <h3 className="font-bold text-white text-lg">
                    PEŁNY PROGRAM — Moduł 1 + Moduł 2
                  </h3>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-[#cbd5e1]">
                    Cena regularna: <span className="text-white font-semibold">2 998 zł</span>
                  </p>
                  <p className="text-2xl font-bold text-[#86efac]">
                    Early Bird do 31.01: 2 498 zł
                  </p>
                </div>
                <div className="border-t border-[#1f2a44] pt-4 mb-4">
                  <p className="text-sm text-[#cbd5e1] mb-3 font-semibold">W cenie:</p>
                  <ul className="space-y-2 text-sm text-[#e5e7eb]">
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">✓</span>
                      <span>dostęp do Discorda</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#93c5fd] mr-2">✓</span>
                      <span>2 webinary online</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-[#fef3c7] to-[#fde68a] rounded-lg p-4">
                  <p className="text-sm text-[#78350f] flex items-start">
                    <span className="mr-2">🎁</span>
                    <span><strong>Bonus dla pierwszych 10 zapisów:</strong><br />Darmowa konsultacja wdrożeniowa (wartość 500 zł)</span>
                  </p>
                </div>
              </div>

              {/* Opcja awaryjna */}
              <div className="bg-[#0f172a] rounded-[14px] border border-[#233055] p-8">
                <div className="flex items-start mb-4">
                  <span className="text-xl mr-2">⚠️</span>
                  <h3 className="font-bold text-white text-lg">
                    OPCJA AWARYJNA — tylko Moduł 1
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-xl font-semibold text-white">
                    1 999 zł netto
                  </p>
                  <p className="text-sm text-[#cbd5e1]">
                    (bez Modułu 2, bez Discorda, bez webinarów)
                  </p>
                </div>
              </div>
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
                    Early Bird: użyj kodu <strong>EARLYHR</strong> i oszczędź 500 zł
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
                </div>
              </div>

              {/* Kontakt */}
              <div className="pt-4">
                <p className="text-sm text-[#cbd5e1] mb-2">
                  Masz pytanie? Potrzebujesz faktury?
                </p>
                <p className="text-base text-[#e5e7eb]">
                  📩{' '}
                  <a
                    href="mailto:contact@powerskills.ai?subject=AI%20HR%20LAB%20-%20zapytanie"
                    className="text-[#93c5fd] hover:text-[#c7d2fe] underline font-semibold"
                  >
                    contact@powerskills.ai
                  </a>
                </p>
                <p className="text-sm text-[#93c5fd] mt-2">
                  👉 <a href="https://powerskills.ai/hr" className="underline hover:text-[#c7d2fe]">https://powerskills.ai/hr</a>
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
              Rabaty nie łączą się.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HR;

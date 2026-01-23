import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// Import images
import logowht from '@/assets/logowht.png';
import backgroundImage from '@/assets/bgrhr.png';
import headerBackgroundImage from '@/assets/dodatek1.png';
import teamPhoto from '@/assets/team-aihrlab.png';

const HR = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] font-inter relative overflow-hidden">
      {/* Radial gradient glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-radial from-[#ff3131]/15 via-[#ff914d]/10 to-transparent blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Logo Section */}
        <div className="py-6 md:py-8 border-b border-[#1e293b]">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <img
              src={logowht}
              alt="PowerSkills AI Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>
        </div>

        {/* HERO SECTION - 10XDEVS STYLE */}
        <section className="min-h-[90vh] flex items-center py-16 md:py-20 relative">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none opacity-50">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff3131]/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff914d]/20 rounded-full blur-[100px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 max-w-[1400px] relative z-10">
            {/* 2-COLUMN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

              {/* LEFT COLUMN - CONTENT */}
              <div className="space-y-8 text-center lg:text-left">
                {/* Main Heading with underline */}
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight mb-4">
                    AI HR LAB{' '}
                    <span className="bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">|</span>
                  </h1>
                  <div className="w-full max-w-md h-1.5 bg-gradient-to-r from-[#ff3131] to-[#ff914d] rounded-full mb-4 mx-auto lg:mx-0"></div>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#cbd5e1] mb-2">
                    Nienaturalnie dobrzy
                  </p>
                </div>

                {/* Lead */}
                <div className="space-y-3">
                  <p className="text-xl md:text-2xl text-[#94a3b8] font-medium">
                    Dwudniowe warsztaty praktyczne: AI w HR
                  </p>
                  <p className="text-lg md:text-xl text-[#94a3b8]">
                    📍 Szczecin
                  </p>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl text-[#cbd5e1] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Jeśli w HR chcesz <strong className="text-white">oszczędzać czas bez utraty jakości</strong> i mieć <strong className="text-white">jasne zasady: co delegować AI, a czego nigdy</strong> — to jest program dla Ciebie.
                </p>

                {/* STATYSTYKI - 10XDEVS STYLE */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 py-8 border-y border-white/10">
                  <div className="text-center lg:text-left">
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent leading-none mb-2">
                      2
                    </div>
                    <div className="text-sm md:text-base text-[#94a3b8] uppercase tracking-wide">
                      DNI PRAKTYKI
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent leading-none mb-2">
                      14+21
                    </div>
                    <div className="text-sm md:text-base text-[#94a3b8] uppercase tracking-wide">
                      MARCA 2025
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent leading-none mb-2">
                      30
                    </div>
                    <div className="text-sm md:text-base text-[#94a3b8] uppercase tracking-wide">
                      OSÓB MAX
                    </div>
                  </div>
                </div>

                {/* CTA BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#ff3131] to-[#ff914d] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(255,49,49,0.4)] text-white px-8 md:px-12 py-6 md:py-7 text-base md:text-lg font-bold rounded-lg shadow-xl transition-all uppercase tracking-wide"
                    onClick={() => window.location.href = 'https://buy.stripe.com/bJe9AV3A8dGZePa2tC6g800'}
                  >
                    DOŁĄCZ TERAZ
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#ff6142] text-[#ff6142] hover:bg-[rgba(255,97,66,0.1)] px-8 md:px-12 py-6 md:py-7 text-base md:text-lg font-bold rounded-lg transition-all uppercase tracking-wide"
                    onClick={() => {
                      const programSection = document.getElementById('program');
                      programSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    PROGRAM
                  </Button>
                </div>

                {/* 3 punkty */}
                <p className="text-sm md:text-base text-[#94a3b8] italic">
                  Bez hype'u. Bez straszenia. Bez korporacyjnego teatru.
                </p>
              </div>

              {/* RIGHT COLUMN - ZDJĘCIE ZESPOŁU */}
              <div className="relative flex items-center justify-center lg:justify-end order-first lg:order-last">
                {/* Glow za zdjęciem */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
                  <div className="w-full h-full bg-gradient-radial from-[#ff3131]/30 via-[#ff914d]/20 to-transparent blur-[80px]"></div>
                </div>

                {/* Zdjęcie zespołu */}
                <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#ff6142]/30 shadow-2xl">
                  <img
                    src={teamPhoto}
                    alt="Zespół AI HR LAB"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay text */}
                  <div className="absolute -bottom-8 -right-8 text-7xl md:text-9xl font-black bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent opacity-10 pointer-events-none select-none hidden lg:block">
                    AI HR LAB
                  </div>
                </div>

                {/* Drop shadow effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 shadow-[0_20px_80px_rgba(0,0,0,0.5)] rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <div className="container mx-auto px-4 max-w-[1200px] pb-16">

          {/* Po AI HR LAB wychodzisz z - GRADIENT ARROWS */}
          <section className="py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Po AI HR LAB wychodzisz z:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-[#1e293b]/50 rounded-xl border-l-4 border-[#ff6142] hover:bg-[#1e293b]/70 transition-all">
                <span className="text-2xl font-bold flex-shrink-0 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">→</span>
                <p className="text-[#e2e8f0] leading-relaxed">
                  <strong className="text-white">modelem pracy HR + AI</strong>, gotowym do wdrożenia od razu
                </p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-[#1e293b]/50 rounded-xl border-l-4 border-[#ff6142] hover:bg-[#1e293b]/70 transition-all">
                <span className="text-2xl font-bold flex-shrink-0 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">→</span>
                <p className="text-[#e2e8f0] leading-relaxed">
                  <strong className="text-white">workflow do rekrutacji, onboardingu i komunikacji</strong>
                </p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-[#1e293b]/50 rounded-xl border-l-4 border-[#ff6142] hover:bg-[#1e293b]/70 transition-all">
                <span className="text-2xl font-bold flex-shrink-0 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">→</span>
                <p className="text-[#e2e8f0] leading-relaxed">
                  <strong className="text-white">sposobem na pisanie i redakcję treści HR szybciej i lepiej</strong>
                </p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-[#1e293b]/50 rounded-xl border-l-4 border-[#ff6142] hover:bg-[#1e293b]/70 transition-all">
                <span className="text-2xl font-bold flex-shrink-0 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">→</span>
                <p className="text-[#e2e8f0] leading-relaxed">
                  <strong className="text-white">jasnymi granicami odpowiedzialności (AI Act – w praktyce)</strong>
                </p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-[#1e293b]/50 rounded-xl border-l-4 border-[#ff6142] hover:bg-[#1e293b]/70 transition-all">
                <span className="text-2xl font-bold flex-shrink-0 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">→</span>
                <p className="text-[#e2e8f0] leading-relaxed">
                  <strong className="text-white">narzędziownikiem do budowania marki HR i pracodawcy z pomocą AI</strong>
                </p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-[#1e293b]/50 rounded-xl border-l-4 border-[#ff6142] hover:bg-[#1e293b]/70 transition-all">
                <span className="text-2xl font-bold flex-shrink-0 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">→</span>
                <p className="text-[#e2e8f0] leading-relaxed">
                  <strong className="text-white">większym spokojem i kontrolą w codziennej pracy</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Jak działa AI HR LAB */}
          <section className="py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Jak działa AI HR LAB
            </h2>
            <div className="bg-[#1e293b]/50 rounded-xl border border-[#334155] p-8">
              <p className="text-[#e2e8f0] leading-relaxed mb-6 text-lg">
                To <strong className="text-white">dwudniowy program rozłożony w czasie</strong>, żeby AI nie zostało „na sali", tylko realnie weszło do Twojej pracy.
              </p>
              <ul className="space-y-3 text-[#e2e8f0] text-base md:text-lg">
                <li className="flex items-start">
                  <span className="text-[#ff6142] mr-3 text-xl">-</span>
                  <span><strong className="text-white">Dzień 1</strong> — fundamenty, schematy, narzędzia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6142] mr-3 text-xl">-</span>
                  <span><strong className="text-white">Tydzień praktyki</strong> — testy w realnych zadaniach HR</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6142] mr-3 text-xl">-</span>
                  <span><strong className="text-white">Dzień 2</strong> — korekta, dopasowanie, decyzje</span>
                </li>
              </ul>
            </div>
          </section>

          {/* PROGRAM - ACCORDION - GRADIENT */}
          <section id="program" className="py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              PROGRAM
            </h2>

            <div className="space-y-6">
              {/* DZIEŃ 1 - ACCORDION */}
              <div className="border-2 border-[#ff6142] rounded-xl bg-[#ff6142]/5 overflow-hidden">
                <button
                  onClick={() => toggleAccordion('day1')}
                  className="w-full px-6 md:px-8 py-6 flex justify-between items-center hover:bg-[rgba(255,97,66,0.1)] transition-all"
                >
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-2 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                      DZIEŃ 1 — Fundamenty pracy HR z AI + komunikacja i marka
                    </h3>
                    <p className="text-sm md:text-base text-[#60A5FA]">
                      📅 14 marca 2025 | 9:00–17:00
                    </p>
                  </div>
                  <span className={`text-[#ff6142] text-2xl transition-transform ${openAccordion === 'day1' ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {openAccordion === 'day1' && (
                  <div className="px-6 md:px-8 pb-8">
                    <p className="text-[#cbd5e1] leading-relaxed mb-8 text-base md:text-lg">
                      Dzień 1 porządkuje <strong className="text-white">myślenie, odpowiedzialność i sposób pracy HR z AI</strong>, zanim przejdziesz do automatyzacji i komunikacji.
                    </p>

                    <div className="space-y-6">
                      {/* Blok 1 */}
                      <div className="border-l-4 border-[#ff6142] pl-6 py-2">
                        <h4 className="text-base md:text-lg font-bold mb-3 flex items-start bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                          🔹 Blok 1: Rola AI w pracy HR (odpowiedzialność i prawo)
                        </h4>
                        <ul className="space-y-2 text-sm md:text-base text-[#cbd5e1]">
                          <li>• AI jako <strong className="text-white">wsparcie, nie decydent</strong></li>
                          <li>• odpowiedzialność człowieka w procesach HR</li>
                          <li>• granice użycia AI w HR</li>
                          <li>• <strong className="text-white">AI Act w praktyce HR</strong>:
                            <ul className="ml-6 mt-2 space-y-1">
                              <li>- gdzie AI pomaga,</li>
                              <li>- gdzie wymaga ostrożności,</li>
                              <li>- gdzie nie powinno być używane wcale</li>
                              <li className="italic text-[#94a3b8] text-sm">(bez prawniczego języka, bez straszenia)</li>
                            </ul>
                          </li>
                        </ul>
                      </div>

                      {/* Blok 2 */}
                      <div className="border-l-4 border-[#ff6142] pl-6 py-2">
                        <h4 className="text-base md:text-lg font-bold mb-3 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                          🔹 Blok 2: Podstawowy schemat pracy z AI w HR
                        </h4>
                        <ul className="space-y-2 text-sm md:text-base text-[#cbd5e1]">
                          <li>• cel zadania (operacyjny vs. komunikacyjny)</li>
                          <li>• kontekst (biznesowy, organizacyjny, wizerunkowy)</li>
                          <li>• oczekiwany format odpowiedzi</li>
                          <li>• iteracja</li>
                          <li>• weryfikacja</li>
                          <li>• <strong className="text-white">jak pracować z AI bez podawania danych wrażliwych</strong></li>
                        </ul>
                      </div>

                      {/* Blok 3 */}
                      <div className="border-l-4 border-[#ff6142] pl-6 py-2">
                        <h4 className="text-base md:text-lg font-bold mb-3 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                          🔹 Blok 3: Promptowanie praktyczne (HR + komunikacja)
                        </h4>
                        <ul className="space-y-2 text-sm md:text-base text-[#cbd5e1]">
                          <li>• formułowanie poleceń do:
                            <ul className="ml-6 mt-2 space-y-1">
                              <li>- treści HR,</li>
                              <li>- komunikatów do pracowników,</li>
                              <li>- materiałów employer brandingowych</li>
                            </ul>
                          </li>
                          <li>• doprecyzowanie odpowiedzi</li>
                          <li>• wymuszanie struktury</li>
                          <li>• ograniczanie halucynacji</li>
                          <li>• <strong className="text-white">jak zachować spójny ton marki firmy i HR</strong></li>
                        </ul>
                      </div>

                      {/* Blok 4 */}
                      <div className="border-l-4 border-[#ff6142] pl-6 py-2">
                        <h4 className="text-base md:text-lg font-bold mb-3 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                          🔹 Blok 4: Praca na kontekście i spójności marki
                        </h4>
                        <ul className="space-y-2 text-sm md:text-base text-[#cbd5e1]">
                          <li>• jeden temat = jeden wątek</li>
                          <li>• prowadzenie rozmowy z AI</li>
                          <li>• budowanie kontekstu <strong className="text-white">bez danych wrażliwych</strong></li>
                          <li>• <strong className="text-white">jak „uczyć" AI stylu Twojej organizacji</strong></li>
                          <li>• jak uniknąć chaosu komunikacyjnego</li>
                        </ul>
                      </div>

                      {/* Blok 5 */}
                      <div className="border-l-4 border-[#ff6142] pl-6 py-2">
                        <h4 className="text-base md:text-lg font-bold mb-3 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                          🔹 Blok 5: HR w praktyce + marka pracodawcy
                        </h4>
                        <p className="text-sm md:text-base text-[#cbd5e1] mb-2">Gotowe szablony i schematy do:</p>
                        <ul className="space-y-2 text-sm md:text-base text-[#cbd5e1]">
                          <li>• opisów stanowisk</li>
                          <li>• ogłoszeń rekrutacyjnych</li>
                          <li>• pytań do rozmów + kryteriów</li>
                          <li>• planów onboardingu</li>
                          <li>• komunikatów do pracowników</li>
                          <li>• <strong className="text-white">treści wizerunkowych HR i employer brandingu</strong></li>
                        </ul>
                      </div>

                      {/* Blok 6 */}
                      <div className="border-l-4 border-[#ff6142] pl-6 py-2">
                        <h4 className="text-base md:text-lg font-bold mb-3 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                          🔹 Blok 6: Narzędziownik HR + AI
                        </h4>
                        <p className="text-sm md:text-base text-[#cbd5e1] mb-2">tworzenie:</p>
                        <ul className="space-y-2 text-sm md:text-base text-[#cbd5e1]">
                          <li>• prezentacji HR,</li>
                          <li>• prostych materiałów wizualnych,</li>
                          <li>• grafik do komunikacji wewnętrznej i EB,</li>
                          <li>• interaktywnych danych i podsumowań</li>
                          <li>• <strong className="text-white">awatary i grafiki — gdzie mają sens, a gdzie nie</strong></li>
                          <li>• praca na jednym narzędziu (ChatGPT)</li>
                          <li>• jasne zasady korzystania w HR</li>
                        </ul>
                      </div>

                      {/* Blok 7 */}
                      <div className="border-l-4 border-[#ff6142] pl-6 py-2">
                        <h4 className="text-base md:text-lg font-bold mb-3 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                          🔹 Blok 7: Kontrola jakości i zgodność
                        </h4>
                        <ul className="space-y-2 text-sm md:text-base text-[#cbd5e1]">
                          <li>• sprawdzanie treści generowanych przez AI</li>
                          <li>• poprawianie i upraszczanie wyników</li>
                          <li>• rozpoznawanie treści pozornie poprawnych</li>
                          <li>• <strong className="text-white">zgodność z AI Act i odpowiedzialność HR</strong></li>
                          <li>• co można bezpiecznie publikować, a czego nie</li>
                        </ul>
                      </div>

                      {/* Blok 8 */}
                      <div className="border-l-4 border-[#ff6142] pl-6 py-2">
                        <h4 className="text-base md:text-lg font-bold mb-3 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                          🔹 Blok 8: Zadanie między dniami
                        </h4>
                        <ul className="space-y-2 text-sm md:text-base text-[#cbd5e1]">
                          <li>• wybór <strong className="text-white">2 realnych zadań HR</strong> (operacyjnych lub komunikacyjnych)</li>
                          <li>• tydzień testów AI w codziennej pracy</li>
                          <li>• obserwacja:
                            <ul className="ml-6 mt-2 space-y-1">
                              <li>- jakości,</li>
                              <li>- oszczędności czasu,</li>
                              <li>- reakcji organizacji</li>
                            </ul>
                          </li>
                          <li>• zebranie problemów i pytań na Dzień 2</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* DZIEŃ 2 - ACCORDION */}
              <div className="border-2 border-[#ff6142] rounded-xl bg-[#ff6142]/5 overflow-hidden">
                <button
                  onClick={() => toggleAccordion('day2')}
                  className="w-full px-6 md:px-8 py-6 flex justify-between items-center hover:bg-[rgba(255,97,66,0.1)] transition-all"
                >
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-2 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                      DZIEŃ 2 — Praktyka, korekta i dopasowanie do Twojej organizacji
                    </h3>
                    <p className="text-sm md:text-base text-[#60A5FA]">
                      📅 21 marca 2025 | 9:00–17:00
                    </p>
                  </div>
                  <span className={`text-[#ff6142] text-2xl transition-transform ${openAccordion === 'day2' ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {openAccordion === 'day2' && (
                  <div className="px-6 md:px-8 pb-8">
                    <p className="text-[#cbd5e1] leading-relaxed mb-8 text-base md:text-lg">
                      Dzień 2 to <strong className="text-white">moment, w którym AI zaczyna naprawdę działać</strong> — albo zostaje poprawione.
                    </p>

                    <div className="space-y-6">
                      {/* Blok 1 */}
                      <div className="border-l-4 border-[#ff6142] pl-6 py-2">
                        <h4 className="text-base md:text-lg font-bold mb-3 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                          🔹 Blok 1: FAQ po tygodniu pracy z AI
                        </h4>
                        <ul className="space-y-2 text-sm md:text-base text-[#cbd5e1]">
                          <li>• pytania uczestników</li>
                          <li>• sytuacje, w których AI zawiodła</li>
                          <li>• wątpliwości prawne, komunikacyjne i wizerunkowe</li>
                          <li>• problemy z jakością treści</li>
                        </ul>
                      </div>

                      {/* Blok 2 */}
                      <div className="border-l-4 border-[#ff6142] pl-6 py-2">
                        <h4 className="text-base md:text-lg font-bold mb-3 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                          🔹 Blok 2: Korekta sposobu pracy
                        </h4>
                        <ul className="space-y-2 text-sm md:text-base text-[#cbd5e1]">
                          <li>• analiza błędów</li>
                          <li>• poprawa poleceń</li>
                          <li>• poprawa kontekstu</li>
                          <li>• dopasowanie AI do realiów organizacji</li>
                        </ul>
                      </div>

                      {/* Blok 3 */}
                      <div className="border-l-4 border-[#ff6142] pl-6 py-2">
                        <h4 className="text-base md:text-lg font-bold mb-3 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                          🔹 Blok 3: Praca na przypadkach uczestników
                        </h4>
                        <ul className="space-y-2 text-sm md:text-base text-[#cbd5e1]">
                          <li>• rekrutacja</li>
                          <li>• onboarding</li>
                          <li>• komunikacja wewnętrzna</li>
                          <li>• dokumenty HR</li>
                          <li>• <strong className="text-white">materiały wizerunkowe i employer branding</strong></li>
                        </ul>
                      </div>

                      {/* Blok 4 */}
                      <div className="border-l-4 border-[#ff6142] pl-6 py-2">
                        <h4 className="text-base md:text-lg font-bold mb-3 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                          🔹 Blok 4: Budowanie własnych schematów pracy
                        </h4>
                        <ul className="space-y-2 text-sm md:text-base text-[#cbd5e1]">
                          <li>• powtarzalne zadania HR</li>
                          <li>• indywidualne workflow HR + AI</li>
                          <li>• checklisty:
                            <ul className="ml-6 mt-2 space-y-1">
                              <li>- co delegować AI,</li>
                              <li>- co zawsze zostaje po stronie człowieka</li>
                            </ul>
                          </li>
                        </ul>
                      </div>

                      {/* Blok 5 */}
                      <div className="border-l-4 border-[#ff6142] pl-6 py-2">
                        <h4 className="text-base md:text-lg font-bold mb-3 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                          🔹 Blok 5: Granice użycia AI w HR (AI Act w praktyce)
                        </h4>
                        <ul className="space-y-2 text-sm md:text-base text-[#cbd5e1]">
                          <li>• obszary wspierane przez AI</li>
                          <li>• obszary wyłączone z użycia AI</li>
                          <li>• odpowiedzialność HR wobec:
                            <ul className="ml-6 mt-2 space-y-1">
                              <li>- kandydatów,</li>
                              <li>- pracowników,</li>
                              <li>- organizacji</li>
                            </ul>
                          </li>
                          <li>• jak spokojnie rozmawiać o AI z biznesem i zarządem</li>
                        </ul>
                      </div>

                      {/* Blok 6 */}
                      <div className="border-l-4 border-[#ff6142] pl-6 py-2">
                        <h4 className="text-base md:text-lg font-bold mb-3 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                          🔹 Blok 6: Transfer do codziennej pracy
                        </h4>
                        <ul className="space-y-2 text-sm md:text-base text-[#cbd5e1]">
                          <li>• utrwalenie sposobu pracy</li>
                          <li>• checklisty „na potem"</li>
                          <li>• dalszy, samodzielny rozwój kompetencji</li>
                          <li>• jak nie wrócić do chaosu po szkoleniu</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Pozostałe sekcje */}

          {/* Dlaczego to szkolenie jest inne */}
          <section className="py-12 md:py-16">
            <div className="bg-[#1e293b]/50 rounded-xl border border-[#334155] p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Dlaczego to szkolenie jest inne
              </h2>
              <div className="space-y-4 text-[#e2e8f0] leading-relaxed">
                <p>
                  To <strong className="text-white">nie jest ogólnopolski event z gotową prezentacją</strong>.
                </p>
                <p>To:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-[#ff6142] mr-3">-</span>
                    <span>lokalne, robocze spotkanie HR ze Szczecina i regionu,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff6142] mr-3">-</span>
                    <span>praca na <strong className="text-white">realnych problemach Twojej firmy</strong>,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff6142] mr-3">-</span>
                    <span>kameralna grupa,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff6142] mr-3">-</span>
                    <span>brak sceny, brak show, brak „slajdów dla slajdów".</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Przygotowanie przed szkoleniem */}
          <section className="py-12 md:py-16">
            <div className="bg-[#1e293b]/50 rounded-xl border border-[#334155] p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Przygotowanie przed szkoleniem
              </h2>
              <div className="space-y-4 text-[#e2e8f0] leading-relaxed">
                <p>Warsztat zaczyna się wcześniej.</p>
                <p>
                  Każdy uczestnik otrzymuje <strong className="text-white">prework</strong>, który:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-[#ff6142] mr-3">-</span>
                    <span>wyrównuje poziom wiedzy,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff6142] mr-3">-</span>
                    <span>wprowadza wspólny język AI i HR,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff6142] mr-3">-</span>
                    <span>przygotowuje technicznie do pracy z narzędziami.</span>
                  </li>
                </ul>
                <p>
                  Dzięki temu na sali <strong className="text-white">pracujemy od razu na konkretach</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Społeczność i wsparcie po szkoleniu */}
          <section className="py-12 md:py-16">
            <div className="bg-[#1e293b]/50 rounded-xl border border-[#334155] p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Społeczność i wsparcie po szkoleniu
              </h2>
              <div className="space-y-4 text-[#e2e8f0] leading-relaxed">
                <p>Po szkoleniu:</p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="flex items-start">
                    <span className="text-[#ff6142] mr-3">-</span>
                    <span>dołączasz do <strong className="text-white">zamkniętej grupy na Discordzie</strong>,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff6142] mr-3">-</span>
                    <span>możesz konsultować swoje przypadki,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff6142] mr-3">-</span>
                    <span>wymieniasz się schematami pracy.</span>
                  </li>
                </ul>
                <p>Dodatkowo:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-[#ff6142] mr-3">-</span>
                    <span><strong className="text-white">2 webinary online</strong> (2–3 tygodnie po szkoleniu),</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff6142] mr-3">-</span>
                    <span>omówienie tego, co zadziałało, a co nie,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff6142] mr-3">-</span>
                    <span>korekta realnych wdrożeń.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Co wynosisz z AI HR LAB */}
          <section className="py-12 md:py-16">
            <div className="bg-[#1e293b]/50 rounded-xl border border-[#334155] p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Co wynosisz z AI HR LAB
              </h2>
              <ul className="space-y-3 text-[#e2e8f0]">
                <li className="flex items-start">
                  <span className="text-[#ff6142] mr-3">-</span>
                  <span>gotowy sposób pracy HR + AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6142] mr-3">-</span>
                  <span>szablony i schematy do natychmiastowego użycia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6142] mr-3">-</span>
                  <span>większą kontrolę nad jakością i decyzjami</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6142] mr-3">-</span>
                  <span>spokojniejszą pracę z AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6142] mr-3">-</span>
                  <span>lokalną sieć kontaktów HR</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6142] mr-3">-</span>
                  <span>wsparcie także po zakończeniu szkolenia</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Dla kogo jest AI HR LAB */}
          <section className="py-12 md:py-16">
            <div className="bg-[#1e293b]/50 rounded-xl border border-[#334155] p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Dla kogo jest AI HR LAB
              </h2>
              <ul className="space-y-3 text-[#e2e8f0]">
                <li className="flex items-start">
                  <span className="text-[#ff6142] mr-3">•</span>
                  <span>HR Business Partnerzy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6142] mr-3">•</span>
                  <span>Specjaliści i liderzy HR</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6142] mr-3">•</span>
                  <span>Osoby odpowiedzialne za rekrutację, onboarding i komunikację</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6142] mr-3">•</span>
                  <span>HR z małych, średnich i większych organizacji</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff6142] mr-3">•</span>
                  <span>Osoby, które chcą korzystać z AI <strong className="text-white">odpowiedzialnie, nie modnie</strong></span>
                </li>
              </ul>
            </div>
          </section>

          {/* CENY - GRADIENT */}
          <section className="py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Ceny (netto)
            </h2>
            <div className="space-y-6">
              {/* Pełny program */}
              <div className="bg-[#ff6142]/10 rounded-xl border-2 border-[#ff6142] p-8">
                <div className="flex items-start mb-4">
                  <span className="text-2xl mr-3">✅</span>
                  <h3 className="font-bold text-white text-xl">
                    PEŁNY PROGRAM — Moduł 1 + Moduł 2
                  </h3>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-[#cbd5e1]">
                    Cena regularna: <span className="text-white font-semibold">2 998 zł</span>
                  </p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
                    Early Bird do 31.01: 2 498 zł
                  </p>
                </div>
                <div className="border-t border-[#334155] pt-4 mb-4">
                  <p className="text-sm text-[#cbd5e1] mb-3 font-semibold">W cenie:</p>
                  <ul className="space-y-2 text-sm text-[#e2e8f0]">
                    <li className="flex items-start">
                      <span className="text-[#ff6142] mr-2">✓</span>
                      <span>dostęp do Discorda</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff6142] mr-2">✓</span>
                      <span>2 webinary online</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-900 flex items-start">
                    <span className="mr-2">🎁</span>
                    <span><strong>Bonus dla pierwszych 10 zapisów:</strong><br />Darmowa konsultacja wdrożeniowa (wartość 500 zł)</span>
                  </p>
                </div>
              </div>

              {/* Opcja awaryjna */}
              <div className="bg-[#1e293b]/50 rounded-xl border border-[#334155] p-8">
                <div className="flex items-start mb-4">
                  <span className="text-2xl mr-3">⚠️</span>
                  <h3 className="font-bold text-white text-xl">
                    OPCJA AWARYJNA — tylko Moduł 1
                  </h3>
                </div>
                <div className="space-y-3">
                  <p className="text-2xl font-semibold text-white">
                    1 999 zł netto
                  </p>
                  <p className="text-sm text-[#cbd5e1]">
                    (bez Modułu 2, bez Discorda, bez webinarów)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA FINAL - GRADIENT */}
          <section className="py-12 md:py-16">
            <div className="text-center">
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#ff3131] to-[#ff914d] hover:opacity-90 hover:shadow-[0_10px_25px_rgba(255,49,49,0.3)] text-white px-10 py-6 text-base md:text-lg font-semibold rounded-lg shadow-xl transition-all w-full md:w-auto"
                  onClick={() => window.location.href = 'https://buy.stripe.com/bJe9AV3A8dGZePa2tC6g800'}
                >
                  Kupuję pełny program (2 moduły)
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#ff6142] text-[#ff6142] hover:bg-gradient-to-r hover:from-[#ff3131] hover:to-[#ff914d] hover:text-white hover:border-transparent px-10 py-6 text-base md:text-lg font-semibold rounded-lg transition-all w-full md:w-auto"
                  onClick={() => window.location.href = 'https://buy.stripe.com/5kQeVf7Qo6excH29W46g801'}
                >
                  Kupuję tylko Moduł 1
                </Button>
              </div>
              <div className="pt-4">
                <p className="text-sm text-[#cbd5e1] mb-2">
                  Masz pytanie? Potrzebujesz faktury?
                </p>
                <p className="text-base text-[#e2e8f0]">
                  📩{' '}
                  <a
                    href="mailto:contact@powerskills.ai?subject=AI%20HR%20LAB%20-%20zapytanie"
                    className="bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent hover:opacity-80 underline font-semibold"
                  >
                    contact@powerskills.ai
                  </a>
                </p>
                <p className="text-sm text-[#60A5FA] mt-2">
                  👉 <a href="https://powerskills.ai/hr" className="underline hover:text-[#3b82f6]">https://powerskills.ai/hr</a>
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center border-t border-[#334155] pt-8">
            <p className="text-[#cbd5e1] mb-2">
              Pozdrawiamy,
            </p>
            <p className="text-white font-semibold mb-4">
              Ania, Artur i Magda
            </p>
            <p className="font-semibold mb-6 bg-gradient-to-r from-[#ff3131] to-[#ff914d] bg-clip-text text-transparent">
              AI HR LAB
            </p>
            <p className="text-sm text-[#94a3b8]">
              Rabaty nie łączą się.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default HR;

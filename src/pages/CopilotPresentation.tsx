import { useState, useEffect } from 'react';

const CopilotPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  const slides = [
    { id: 'intro', title: 'Microsoft Copilot Studio', subtitle: 'Kompletny Przewodnik' },
    { id: 'architecture', title: 'Architektura Platformy', subtitle: 'Struktura i sekcje' },
    { id: 'home', title: 'Strona Główna', subtitle: 'Start z platformą' },
    { id: 'create', title: 'Utwórz Agenta', subtitle: 'Proces tworzenia krok po kroku' },
    { id: 'agents', title: 'Agenci', subtitle: 'Zarządzanie agentami' },
    { id: 'topics', title: 'Tematy i Przepływy', subtitle: 'Konfiguracja konwersacji' },
    { id: 'automation', title: 'Automatyzacje', subtitle: 'Power Automate i integracje' },
    { id: 'analytics', title: 'Analiza i Monitoring', subtitle: 'Metryki wydajności' },
    { id: 'settings', title: 'Ustawienia', subtitle: 'Admin i bezpieczeństwo' },
    { id: 'process', title: 'Proces Konfiguracji', subtitle: 'Od A do Z' },
    { id: 'faq', title: 'FAQ', subtitle: 'Najczęstsze pytania' }
  ];

  // Keyboard navigation
  useEffect(() => {
    if (!isPresentationMode) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Escape':
          e.preventDefault();
          exitPresentation();
          break;
        case 'Home':
          e.preventDefault();
          setCurrentSlide(0);
          break;
        case 'End':
          e.preventDefault();
          setCurrentSlide(slides.length - 1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isPresentationMode, currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const startPresentation = () => {
    setIsPresentationMode(true);
    setCurrentSlide(0);
  };

  const exitPresentation = () => {
    setIsPresentationMode(false);
    setCurrentSlide(0);
  };

  const getHighlightedSection = () => {
    const sectionMap: { [key: string]: string } = {
      'create': 'tworzenie',
      'agents': 'zarzadzanie',
      'topics': 'zarzadzanie',
      'automation': 'publikacja',
      'analytics': 'analityka',
      'settings': 'ustawienia'
    };
    return sectionMap[slides[currentSlide].id] || '';
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        :root {
            --color-primary: #1ed23c;
            --color-primary-dark: #18b332;
            --color-accent: #2185d0;
            --color-bg: #f4f6fa;
            --color-surface: #FFFFFF;
            --color-text: #222;
            --color-text-light: #6B7280;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body.presentation-active {
            overflow: hidden;
        }

        .copilot-presentation {
            font-family: 'Segoe UI', sans-serif;
            background: var(--color-bg);
            color: var(--color-text);
            min-height: 100vh;
        }

        /* NORMAL MODE */
        .normal-mode {
            max-width: 1200px;
            margin: 0 auto;
            padding: 48px 24px;
        }

        .start-button {
            display: inline-block;
            padding: 20px 48px;
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 24px;
            font-weight: 700;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(30, 210, 60, 0.3);
            transition: all 0.3s ease;
            margin: 32px 0;
        }

        .start-button:hover {
            transform: translateY(-4px);
            box-shadow: 0 15px 40px rgba(30, 210, 60, 0.4);
        }

        .preview-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 24px;
            margin-top: 32px;
        }

        .preview-card {
            background: white;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: all 0.3s ease;
            border-left: 4px solid var(--color-primary);
        }

        .preview-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }

        .preview-card h3 {
            font-size: 20px;
            margin-bottom: 8px;
            color: var(--color-text);
        }

        .preview-card p {
            font-size: 14px;
            color: var(--color-text-light);
        }

        /* PRESENTATION MODE */
        .presentation-mode {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: #1a1a1a;
            z-index: 9999;
            display: flex;
            flex-direction: column;
        }

        .slide-container {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 80px;
            overflow: auto;
        }

        .slide {
            width: 100%;
            max-width: 1400px;
            animation: slideIn 0.4s ease-out;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .slide h1 {
            font-size: 72px;
            color: var(--color-primary);
            margin-bottom: 24px;
            font-weight: 800;
            line-height: 1.1;
        }

        .slide h2 {
            font-size: 56px;
            color: white;
            margin-bottom: 24px;
            font-weight: 700;
        }

        .slide h3 {
            font-size: 36px;
            color: #ddd;
            margin-bottom: 48px;
            font-weight: 400;
        }

        .slide-content {
            color: #ddd;
            font-size: 24px;
            line-height: 1.8;
        }

        .slide-content ul {
            list-style: none;
            padding: 0;
        }

        .slide-content li {
            padding: 16px 0;
            padding-left: 48px;
            position: relative;
            font-size: 28px;
        }

        .slide-content li::before {
            content: "→";
            position: absolute;
            left: 0;
            color: var(--color-primary);
            font-weight: bold;
            font-size: 32px;
        }

        .slide-content strong {
            color: var(--color-primary);
            font-weight: 600;
        }

        /* DIAGRAM */
        .diagram-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 48px 0;
        }

        .diagram-image {
            max-width: 600px;
            width: 100%;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            transition: all 0.3s ease;
        }

        .diagram-image.highlight-tworzenie {
            filter: hue-rotate(0deg) brightness(1.2);
        }

        .diagram-legend {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-top: 48px;
        }

        .legend-item {
            background: rgba(255,255,255,0.1);
            padding: 20px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            gap: 16px;
            font-size: 22px;
        }

        .legend-color {
            width: 32px;
            height: 32px;
            border-radius: 8px;
        }

        /* TABLE */
        .slide-table {
            width: 100%;
            border-collapse: collapse;
            margin: 32px 0;
            background: rgba(255,255,255,0.05);
            border-radius: 12px;
            overflow: hidden;
        }

        .slide-table th,
        .slide-table td {
            padding: 20px;
            text-align: left;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            font-size: 22px;
        }

        .slide-table th {
            background: var(--color-primary);
            color: white;
            font-weight: 600;
            font-size: 24px;
        }

        /* CODE */
        .code-example {
            background: rgba(255,255,255,0.05);
            border-left: 4px solid var(--color-primary);
            padding: 32px;
            border-radius: 12px;
            font-family: 'Courier New', monospace;
            font-size: 20px;
            line-height: 1.6;
            color: #ddd;
            margin: 32px 0;
        }

        /* CONTROLS */
        .presentation-controls {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0,0,0,0.9);
            padding: 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 2px solid var(--color-primary);
        }

        .control-buttons {
            display: flex;
            gap: 16px;
        }

        .control-btn {
            background: rgba(255,255,255,0.1);
            border: 2px solid rgba(255,255,255,0.3);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 18px;
            font-weight: 600;
            transition: all 0.2s;
        }

        .control-btn:hover {
            background: rgba(255,255,255,0.2);
            border-color: var(--color-primary);
        }

        .control-btn:disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }

        .exit-btn {
            background: rgba(255,107,107,0.2);
            border-color: #ff6b6b;
        }

        .exit-btn:hover {
            background: rgba(255,107,107,0.4);
        }

        .progress-container {
            flex: 1;
            margin: 0 48px;
            display: flex;
            align-items: center;
            gap: 24px;
        }

        .progress-text {
            color: white;
            font-size: 20px;
            font-weight: 600;
            min-width: 100px;
        }

        .progress-bar {
            flex: 1;
            height: 8px;
            background: rgba(255,255,255,0.1);
            border-radius: 4px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
            transition: width 0.3s ease;
        }

        .slide-title-mini {
            color: #999;
            font-size: 16px;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
            .slide-container {
                padding: 40px;
            }
            .slide h1 { font-size: 48px; }
            .slide h2 { font-size: 40px; }
            .slide h3 { font-size: 28px; }
            .slide-content { font-size: 20px; }
            .slide-content li { font-size: 22px; }
        }

        @media (max-width: 768px) {
            .slide h1 { font-size: 36px; }
            .slide h2 { font-size: 32px; }
            .slide h3 { font-size: 22px; }
            .slide-content { font-size: 18px; }
            .diagram-legend { grid-template-columns: 1fr; }
            .progress-container { margin: 0 16px; }
            .control-btn { padding: 8px 16px; font-size: 14px; }
        }
      `}} />

      <div className="copilot-presentation">
        {!isPresentationMode ? (
          /* NORMAL MODE - Landing */
          <div className="normal-mode">
            <h1 style={{fontSize: '48px', color: 'var(--color-text)', marginBottom: '24px'}}>
              Microsoft Copilot Studio
            </h1>
            <p style={{fontSize: '20px', color: 'var(--color-text-light)', marginBottom: '16px'}}>
              Kompletny przewodnik w formie interaktywnej prezentacji – idealny do warsztatów i szkoleń.
            </p>
            
            <button className="start-button" onClick={startPresentation}>
              🎬 Rozpocznij Prezentację
            </button>

            <div style={{background: 'rgba(33,133,208,0.1)', padding: '20px', borderRadius: '12px', marginTop: '32px', borderLeft: '4px solid #2185d0'}}>
              <strong style={{color: '#2185d0', fontSize: '18px'}}>💡 Skróty klawiszowe:</strong>
              <ul style={{marginTop: '12px', fontSize: '16px', color: 'var(--color-text-light)'}}>
                <li>→ / Spacja - Następny slajd</li>
                <li>← - Poprzedni slajd</li>
                <li>Home - Pierwszy slajd</li>
                <li>End - Ostatni slajd</li>
                <li>ESC - Wyjście z prezentacji</li>
              </ul>
            </div>

            <h2 style={{fontSize: '32px', marginTop: '64px', marginBottom: '24px', color: 'var(--color-text)'}}>
              Spis slajdów ({slides.length})
            </h2>

            <div className="preview-grid">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id} 
                  className="preview-card"
                  onClick={() => {
                    setCurrentSlide(index);
                    startPresentation();
                  }}
                >
                  <div style={{fontSize: '14px', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '8px'}}>
                    Slajd {index + 1}
                  </div>
                  <h3>{slide.title}</h3>
                  <p>{slide.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* PRESENTATION MODE */
          <div className="presentation-mode">
            <div className="slide-container">
              <div className="slide">
                {/* SLIDE CONTENT */}
                {currentSlide === 0 && (
                  <div style={{textAlign: 'center'}}>
                    <h1>Microsoft Copilot Studio</h1>
                    <h3>Kompletny Przewodnik</h3>
                    <p style={{fontSize: '28px', color: '#999', marginTop: '64px'}}>
                      Przewodnik po wszystkich sekcjach i możliwościach platformy
                    </p>
                    <p style={{fontSize: '24px', color: '#666', marginTop: '32px'}}>
                      Naciśnij → lub SPACJĘ aby kontynuować
                    </p>
                  </div>
                )}

                {currentSlide === 1 && (
                  <div>
                    <h2>Architektura Platformy</h2>
                    <h3>Struktura Microsoft Copilot Studio</h3>
                    <div className="diagram-container">
                      <img 
                        src="/copilot-diagram.png" 
                        alt="Diagram Copilot Studio"
                        className={`diagram-image highlight-${getHighlightedSection()}`}
                      />
                    </div>
                    <div className="diagram-legend">
                      <div className="legend-item">
                        <div className="legend-color" style={{background: '#e74c3c'}}></div>
                        <span><strong>Tworzenie</strong> - Tematy, Agenci, Akcje</span>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color" style={{background: '#27ae60'}}></div>
                        <span><strong>Zarządzanie</strong> - Zespoły, Encje</span>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color" style={{background: '#546e7a'}}></div>
                        <span><strong>Publikacja</strong> - Kanały</span>
                      </div>
                      <div className="legend-item">
                        <div className="legend-color" style={{background: '#f39c12'}}></div>
                        <span><strong>Analityka</strong> - Raporty, Wydajność</span>
                      </div>
                    </div>
                  </div>
                )}

                {currentSlide === 2 && (
                  <div>
                    <h2>Strona Główna</h2>
                    <h3>Start z platformą</h3>
                    <div className="slide-content">
                      <ul>
                        <li><strong>Podsumowanie środowiska</strong> – szybki dostęp do agentów i funkcji</li>
                        <li><strong>Szablony i przykłady</strong> – gotowe projekty do startu</li>
                        <li><strong>Aktualności i przewodniki</strong> – szybkie linki do pomocy</li>
                      </ul>
                      <div style={{background: 'rgba(33,133,208,0.2)', padding: '24px', borderRadius: '12px', marginTop: '48px', borderLeft: '4px solid #2185d0'}}>
                        <strong style={{color: '#2185d0'}}>💡 Tip:</strong> Menu po lewej stronie pozwala na szybkie przechodzenie pomiędzy sekcjami: Utwórz, Agenci, Tematy, Przepływy, Narzędzia, Analiza, Ustawienia.
                      </div>
                    </div>
                  </div>
                )}

                {currentSlide === 3 && (
                  <div>
                    <h2>Utwórz Agenta</h2>
                    <h3>Proces tworzenia krok po kroku</h3>
                    <div className="slide-content">
                      <ul>
                        <li>Wybierz "Utwórz"</li>
                        <li>Opisz funkcję agenta – np. "Agent HR do obsługi pytań o urlopy"</li>
                        <li>Zdefiniuj rolę, instrukcje pracy i źródła wiedzy</li>
                        <li>Dodaj sugerowane monity dla użytkowników</li>
                        <li>Przetestuj działanie agenta</li>
                      </ul>
                      <div className="code-example">
Przykład instrukcji:
"Jesteś przyjaznym asystentem HR. Pomagasz pracownikom 
w zrozumieniu polityki urlopowej, benefitów, procedur firmowych. 
Jeśli nie znasz odpowiedzi, skieruj do HR."
                      </div>
                    </div>
                  </div>
                )}

                {currentSlide === 4 && (
                  <div>
                    <h2>Źródła Wiedzy</h2>
                    <h3>Typy źródeł dla agenta</h3>
                    <table className="slide-table">
                      <thead>
                        <tr>
                          <th>Typ źródła</th>
                          <th>Opis</th>
                          <th>Przykład</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Strona internetowa</td>
                          <td>Podaj URL</td>
                          <td>learn.microsoft.com</td>
                        </tr>
                        <tr>
                          <td>Dokument</td>
                          <td>Załaduj pliki</td>
                          <td>.pdf, .docx, .txt</td>
                        </tr>
                        <tr>
                          <td>Baza danych</td>
                          <td>SQL/MySQL</td>
                          <td>Wewnętrzne systemy</td>
                        </tr>
                        <tr>
                          <td>SharePoint</td>
                          <td>Biblioteka dokumentów</td>
                          <td>Firmowe zasoby</td>
                        </tr>
                        <tr>
                          <td>API/Power Platform</td>
                          <td>Łączniki</td>
                          <td>Procesy biznesowe</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {currentSlide === 5 && (
                  <div>
                    <h2>Zarządzanie Agentami</h2>
                    <h3>Kontrola i optymalizacja</h3>
                    <div className="slide-content">
                      <ul>
                        <li><strong>Lista agentów</strong> – nazwa, status, data edycji, akcje</li>
                        <li><strong>Edycja</strong> – zmień instrukcje, informacje, linki</li>
                        <li><strong>Zarządzanie wiedzą</strong> – dodawanie/usuwanie źródeł</li>
                        <li><strong>Branding</strong> – zmiana ikony agenta</li>
                      </ul>
                    </div>
                  </div>
                )}

                {currentSlide === 6 && (
                  <div>
                    <h2>Tematy i Przepływy</h2>
                    <h3>Konfiguracja konwersacji</h3>
                    <div className="slide-content">
                      <ul>
                        <li><strong>Tematy systemowe</strong> – powitanie, zakończenie, transfer</li>
                        <li><strong>Tematy niestandardowe</strong> – edytuj krok po kroku:
                          <ul style={{marginTop: '16px', marginLeft: '32px'}}>
                            <li>Zadaj pytanie - agent pyta, zapisuje odpowiedź</li>
                            <li>Wysłanie wiadomości - agent odpowiada tekstem</li>
                            <li>Warunkowe rozgałęzienie - różne ścieżki akcji</li>
                            <li>Wywołaj przepływ - podłącz do Power Automate</li>
                          </ul>
                        </li>
                      </ul>
                      <div style={{background: 'rgba(33,133,208,0.2)', padding: '24px', borderRadius: '12px', marginTop: '32px', borderLeft: '4px solid #2185d0'}}>
                        <strong style={{color: '#2185d0'}}>Przepływ:</strong> Wyzwalacz → Pytanie o datę → Rodzaj urlopu → Warunki → Potwierdzenie
                      </div>
                    </div>
                  </div>
                )}

                {currentSlide === 7 && (
                  <div>
                    <h2>Automatyzacje</h2>
                    <h3>Power Automate i integracje</h3>
                    <div className="slide-content">
                      <ul>
                        <li><strong>Power Automate</strong> – przepływy z wysyłką emaili, wpisami do baz</li>
                        <li><strong>Integracje:</strong>
                          <ul style={{marginTop: '16px', marginLeft: '32px'}}>
                            <li>Outlook, Excel, PowerPoint</li>
                            <li>SharePoint, Dynamics 365</li>
                            <li>Teams, Azure</li>
                            <li>REST API</li>
                          </ul>
                        </li>
                      </ul>
                      <div style={{background: 'rgba(30,210,60,0.2)', padding: '24px', borderRadius: '12px', marginTop: '48px', borderLeft: '4px solid var(--color-primary)'}}>
                        <strong style={{color: 'var(--color-primary)'}}>✓</strong> Możesz tworzyć przepływy natychmiastowe z wyzwalaczem i wieloma akcjami biznesowymi
                      </div>
                    </div>
                  </div>
                )}

                {currentSlide === 8 && (
                  <div>
                    <h2>Analiza i Monitoring</h2>
                    <h3>Metryki wydajności</h3>
                    <table className="slide-table">
                      <thead>
                        <tr>
                          <th>Metryka</th>
                          <th>Opis</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Liczba rozmów</td>
                          <td>Suma rozpoczętych konwersacji</td>
                        </tr>
                        <tr>
                          <td>Satysfakcja</td>
                          <td>Ocena zadowolenia użytkowników</td>
                        </tr>
                        <tr>
                          <td>Transfery</td>
                          <td>Ile rozmów przechodzi do człowieka</td>
                        </tr>
                        <tr>
                          <td>Błędy</td>
                          <td>Ilość nieudanych odpowiedzi</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="slide-content" style={{marginTop: '32px'}}>
                      <ul>
                        <li>Top 5 najczęstszych pytań użytkowników</li>
                        <li>Raporty błędów i transkrypcje rozmów</li>
                      </ul>
                    </div>
                  </div>
                )}

                {currentSlide === 9 && (
                  <div>
                    <h2>Ustawienia i Admin</h2>
                    <h3>Bezpieczeństwo i kontrola</h3>
                    <div className="slide-content">
                      <ul>
                        <li><strong>Ustawienia środowiska</strong> – preferencje konta</li>
                        <li><strong>Zarządzanie użytkownikami</strong> – role i licencje</li>
                        <li><strong>Bezpieczeństwo:</strong>
                          <ul style={{marginTop: '16px', marginLeft: '32px'}}>
                            <li>Publiczny dostęp</li>
                            <li>Azure AD</li>
                            <li>Niestandardowe logowanie</li>
                          </ul>
                        </li>
                        <li><strong>Audyt</strong> – historia aktywności</li>
                      </ul>
                    </div>
                  </div>
                )}

                {currentSlide === 10 && (
                  <div>
                    <h2>Proces Konfiguracji</h2>
                    <h3>Od A do Z</h3>
                    <div className="slide-content">
                      <ul>
                        <li><strong>1. Planowanie</strong> – cel agenta, źródła wiedzy, scenariusze</li>
                        <li><strong>2. Konfiguracja</strong> – instrukcje pracy, tematy, automatyzacje</li>
                        <li><strong>3. Testowanie</strong> – chat testowy, iteracje, poprawki</li>
                        <li><strong>4. Publikacja</strong> – Teams, WWW, inne kanały</li>
                        <li><strong>5. Monitoring</strong> – optymalizacja na podstawie analityki</li>
                      </ul>
                      <div style={{background: 'rgba(30,210,60,0.2)', padding: '24px', borderRadius: '12px', marginTop: '48px', borderLeft: '4px solid var(--color-primary)'}}>
                        <strong style={{color: 'var(--color-primary)'}}>💡 Tip:</strong> Agenta można rozwijać, zmieniać i optymalizować w każdym momencie!
                      </div>
                    </div>
                  </div>
                )}

                {currentSlide === 11 && (
                  <div>
                    <h2>FAQ</h2>
                    <h3>Najczęstsze pytania</h3>
                    <div className="slide-content">
                      <div style={{marginBottom: '32px'}}>
                        <strong style={{fontSize: '28px', color: 'var(--color-primary)'}}>Q:</strong>
                        <span style={{fontSize: '28px', marginLeft: '16px'}}>Czy muszę umieć programować?</span>
                        <p style={{marginTop: '12px', marginLeft: '48px', color: '#999'}}>
                          Nie! Wszystko robisz przez interfejs graficzny. Platforma jest no-code/low-code.
                        </p>
                      </div>
                      <div style={{marginBottom: '32px'}}>
                        <strong style={{fontSize: '28px', color: 'var(--color-primary)'}}>Q:</strong>
                        <span style={{fontSize: '28px', marginLeft: '16px'}}>Ile trwa stworzenie pierwszego agenta?</span>
                        <p style={{marginTop: '12px', marginLeft: '48px', color: '#999'}}>
                          Prosty agent FAQ – nawet w 2 godziny.
                        </p>
                      </div>
                      <div style={{marginBottom: '32px'}}>
                        <strong style={{fontSize: '28px', color: 'var(--color-primary)'}}>Q:</strong>
                        <span style={{fontSize: '28px', marginLeft: '16px'}}>Czy integruje się z CRM?</span>
                        <p style={{marginTop: '12px', marginLeft: '48px', color: '#999'}}>
                          Tak, przez Dynamics 365, Power Automate lub REST API.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CONTROLS */}
            <div className="presentation-controls">
              <div className="control-buttons">
                <button 
                  className="control-btn"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                >
                  ← Poprzedni
                </button>
                <button 
                  className="control-btn"
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                >
                  Następny →
                </button>
              </div>

              <div className="progress-container">
                <div className="progress-text">
                  {currentSlide + 1} / {slides.length}
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{width: `${((currentSlide + 1) / slides.length) * 100}%`}}
                  ></div>
                </div>
                <div className="slide-title-mini">
                  {slides[currentSlide].title}
                </div>
              </div>

              <button 
                className="control-btn exit-btn"
                onClick={exitPresentation}
              >
                ESC - Wyjście
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CopilotPresentation;

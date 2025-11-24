import { useEffect } from 'react';

const Copilot = () => {
  useEffect(() => {
    // Smooth scroll for anchor links with offset for sticky header
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        :root {
            --color-primary: #1ed23c;
            --color-primary-dark: #18b332;
            --color-primary-light: #2ef04d;
            --color-accent: #2185d0;
            --color-accent-light: #eaf8ff;
            --color-bg: #f4f6fa;
            --color-surface: #FFFFFF;
            --color-text: #222;
            --color-text-light: #6B7280;
            --color-border: #E5E7EB;
            --space-8: 8px;
            --space-16: 16px;
            --space-24: 24px;
            --space-32: 32px;
            --space-48: 48px;
            --space-64: 64px;
            --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
            --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.12);
            --radius: 8px;
            --radius-lg: 12px;
        }

        .copilot-page * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .copilot-page {
            font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
            background-color: var(--color-bg);
            color: var(--color-text);
            line-height: 1.6;
        }

        .copilot-page .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--space-24);
        }

        /* HEADER */
        .copilot-page header {
            position: sticky;
            top: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--color-border);
            padding: var(--space-16) 0;
            z-index: 100;
            box-shadow: var(--shadow-sm);
        }

        .copilot-page header .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .copilot-page .logo {
            font-size: 22px;
            font-weight: 700;
            color: var(--color-primary);
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .copilot-page .logo:hover {
            color: var(--color-primary-dark);
        }

        .copilot-page nav {
            display: flex;
            gap: var(--space-32);
            align-items: center;
        }

        .copilot-page nav a {
            text-decoration: none;
            color: var(--color-text);
            font-size: 15px;
            font-weight: 500;
            transition: color 0.3s;
            position: relative;
        }

        .copilot-page nav a:hover {
            color: var(--color-primary);
        }

        .copilot-page nav a::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--color-primary);
            transition: width 0.3s;
        }

        .copilot-page nav a:hover::after {
            width: 100%;
        }

        /* HERO */
        .copilot-page .hero {
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
            color: white;
            padding: var(--space-64) var(--space-24);
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .copilot-page .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="2"/></svg>');
            opacity: 0.3;
        }

        .copilot-page .hero .container {
            position: relative;
            z-index: 1;
        }

        .copilot-page .hero h1 {
            font-size: 48px;
            margin-bottom: var(--space-24);
            font-weight: 800;
            line-height: 1.1;
            letter-spacing: -0.02em;
        }

        .copilot-page .hero p {
            font-size: 20px;
            margin-bottom: var(--space-32);
            opacity: 0.95;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        .copilot-page .btn {
            display: inline-block;
            padding: var(--space-16) var(--space-32);
            background-color: white;
            color: var(--color-primary);
            text-decoration: none;
            border-radius: var(--radius);
            font-weight: 600;
            font-size: 16px;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            box-shadow: var(--shadow-md);
        }

        .copilot-page .btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        /* SECTIONS */
        .copilot-page section {
            padding: var(--space-64) var(--space-24);
        }

        .copilot-page section h2 {
            font-size: 36px;
            margin-bottom: var(--space-32);
            color: var(--color-text);
            font-weight: 700;
        }

        .copilot-page section h3 {
            font-size: 24px;
            margin-bottom: var(--space-16);
            color: var(--color-text);
            font-weight: 600;
        }

        .copilot-page .section-card {
            background: var(--color-surface);
            border-radius: var(--radius-lg);
            padding: var(--space-32);
            margin-bottom: var(--space-24);
            box-shadow: var(--shadow-sm);
            transition: all 0.3s ease;
        }

        .copilot-page .section-card:hover {
            box-shadow: var(--shadow-md);
            transform: translateY(-2px);
        }

        .copilot-page .info-box {
            background: var(--color-accent-light);
            border-left: 5px solid var(--color-accent);
            padding: var(--space-16) var(--space-24);
            margin: var(--space-24) 0;
            border-radius: var(--radius);
        }

        .copilot-page .info-box strong {
            color: var(--color-accent);
        }

        /* TABLE */
        .copilot-page table {
            width: 100%;
            border-collapse: collapse;
            margin: var(--space-24) 0;
            background: var(--color-surface);
            border-radius: var(--radius);
            overflow: hidden;
            box-shadow: var(--shadow-sm);
        }

        .copilot-page table th,
        .copilot-page table td {
            padding: var(--space-16);
            text-align: left;
            border-bottom: 1px solid var(--color-border);
        }

        .copilot-page table th {
            background: var(--color-accent);
            color: white;
            font-weight: 600;
        }

        .copilot-page table tr:last-child td {
            border-bottom: none;
        }

        .copilot-page table tr:hover {
            background: var(--color-bg);
        }

        /* CODE BLOCK */
        .copilot-page .code-block {
            background: #f8f8fa;
            border-radius: var(--radius);
            padding: var(--space-16);
            font-family: 'Courier New', monospace;
            white-space: pre-wrap;
            margin: var(--space-16) 0;
            border: 1px solid var(--color-border);
        }

        /* LISTS */
        .copilot-page ul, .copilot-page ol {
            margin-left: var(--space-24);
            margin-bottom: var(--space-16);
        }

        .copilot-page li {
            margin-bottom: var(--space-8);
        }

        /* DIAGRAM */
        .copilot-page .diagram {
            display: block;
            margin: var(--space-32) auto;
            max-width: 470px;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md);
        }

        /* FAQ */
        .copilot-page .faq-item {
            background: var(--color-surface);
            margin-bottom: var(--space-16);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: var(--shadow-sm);
        }

        .copilot-page .faq-question {
            padding: var(--space-24);
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            color: var(--color-text);
        }

        .copilot-page .faq-question:hover {
            background-color: var(--color-bg);
        }

        .copilot-page .faq-toggle {
            transition: transform 0.3s;
        }

        .copilot-page .faq-item.active .faq-toggle {
            transform: rotate(180deg);
        }

        .copilot-page .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
        }

        .copilot-page .faq-item.active .faq-answer {
            max-height: 500px;
            padding: 0 var(--space-24) var(--space-24);
        }

        /* FOOTER */
        .copilot-page footer {
            background-color: var(--color-text);
            color: white;
            text-align: center;
            padding: var(--space-48) var(--space-24);
        }

        .copilot-page footer a {
            color: var(--color-primary);
            text-decoration: none;
        }

        .copilot-page footer a:hover {
            opacity: 0.8;
        }

        .copilot-page footer p {
            margin-bottom: var(--space-16);
            opacity: 0.9;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
            .copilot-page .hero h1 {
                font-size: 32px;
            }

            .copilot-page nav {
                gap: var(--space-16);
                font-size: 14px;
            }

            .copilot-page section h2 {
                font-size: 28px;
            }

            .copilot-page table {
                font-size: 14px;
            }

            .copilot-page table th,
            .copilot-page table td {
                padding: var(--space-8);
            }
        }
      `}} />

      <div className="copilot-page">
        <header>
          <div className="container">
            <a href="/" className="logo">PowerSkills.ai</a>
            <nav>
              <a href="#wprowadzenie">Wprowadzenie</a>
              <a href="#tworzenie">Tworzenie</a>
              <a href="#automatyzacje">Automatyzacje</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div className="container">
            <h1>Microsoft Copilot Studio<br />Kompletny Przewodnik</h1>
            <p>Wszystko, czego potrzebujesz do stworzenia inteligentnych agentów AI dla Twojej firmy – od podstaw do zaawansowanych integracji.</p>
            <a href="mailto:contact@powerskills.ai" className="btn">Skontaktuj się z nami</a>
          </div>
        </section>

        <section id="wprowadzenie" style={{background: 'var(--color-surface)'}}>
          <div className="container">
            <div className="info-box">
              <strong>💡 Dla kogo?</strong> Przewodnik po wszystkich sekcjach i możliwościach platformy Microsoft Copilot Studio – do wykorzystania w firmie, edukacji lub pracy indywidualnej.
            </div>

            <h2>Architektura platformy</h2>
            <img 
              src="/copilot-diagram.png" 
              alt="Diagram struktury Microsoft Copilot Studio" 
              className="diagram"
            />

            <div className="section-card">
              <h3>Główne sekcje platformy:</h3>
              <ul>
                <li><strong style={{color: '#e74c3c'}}>🔴 Tworzenie</strong> – Tematy, Nowe Copiloty, Akcje</li>
                <li><strong style={{color: '#27ae60'}}>🟢 Zarządzanie</strong> – Zespoły, Encje, organizacja pracy</li>
                <li><strong style={{color: '#546e7a'}}>⚫ Publikacja</strong> – Kanały dystrybucji agentów</li>
                <li><strong style={{color: '#f39c12'}}>🟡 Analityka</strong> – Raporty, Wydajność, metryki</li>
                <li><strong style={{color: '#bdc3c7'}}>⚪ Ustawienia</strong> – Konfiguracja środowiska i bezpieczeństwo</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{background: 'var(--color-bg)'}}>
          <div className="container">
            <h2>1. Strona Główna</h2>
            <div className="section-card">
              <ul>
                <li><strong>Podsumowanie środowiska</strong> – szybki dostęp do agentów i funkcji</li>
                <li><strong>Szablony i przykłady</strong> – gotowe projekty do startu</li>
                <li><strong>Aktualności, przewodniki</strong> – szybkie linki do pomocy i nowości</li>
              </ul>
              <div className="info-box">
                <strong>Tip:</strong> Menu po lewej stronie pozwala na szybkie przechodzenie pomiędzy sekcjami: Utwórz, Agenci, Tematy, Przepływy, Narzędzia, Analiza, Ustawienia.
              </div>
            </div>
          </div>
        </section>

        <section id="tworzenie" style={{background: 'var(--color-surface)'}}>
          <div className="container">
            <h2>2. Utwórz Agenta</h2>
            <div className="section-card">
              <ol>
                <li>Wybierz "Utwórz".</li>
                <li>Opisz funkcję agenta – np. "Agent HR do obsługi pytań o urlopy".</li>
                <li>Zdefiniuj rolę, instrukcje pracy i źródła wiedzy (strony, dokumenty, bazy).</li>
                <li>Dodaj sugerowane monity – krótkie pytania wyświetlane użytkownikowi.</li>
                <li>Przetestuj działanie agenta (chat testowy po prawej).</li>
              </ol>

              <div className="code-block">
Przykład instrukcji:
"Jesteś przyjaznym asystentem HR. Pomagasz pracownikom w zrozumieniu polityki urlopowej, benefitów, procedur firmowych. Jeśli nie znasz odpowiedzi, skieruj do HR."
              </div>

              <h3>Typy źródeł wiedzy</h3>
              <table>
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
                    <td>https://learn.microsoft.com</td>
                  </tr>
                  <tr>
                    <td>Dokument</td>
                    <td>Załaduj pliki</td>
                    <td>.pdf, .docx, .txt</td>
                  </tr>
                  <tr>
                    <td>Baza danych</td>
                    <td>Połączenie SQL/MySQL</td>
                    <td>Wewnętrzne systemy</td>
                  </tr>
                  <tr>
                    <td>SharePoint</td>
                    <td>Biblioteka dokumentów</td>
                    <td>Firmowe zasoby</td>
                  </tr>
                  <tr>
                    <td>API/Power Platform</td>
                    <td>Łączniki z systemami</td>
                    <td>Procesy biznesowe</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section style={{background: 'var(--color-bg)'}}>
          <div className="container">
            <h2>3. Agenci</h2>
            <div className="section-card">
              <ul>
                <li>Lista agentów w środowisku (nazwa, status, data edycji, akcje)</li>
                <li>Edycja – zmień instrukcje, informacje, linki</li>
                <li>Zarządzanie wiedzą – dodawanie/usuwanie źródeł</li>
                <li>Zmiana ikony agenta – branding</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{background: 'var(--color-surface)'}}>
          <div className="container">
            <h2>4. Tematy i Przepływy Konwersacji</h2>
            <div className="section-card">
              <ul>
                <li><strong>Tematy systemowe</strong> – powitanie, zakończenie, transfer</li>
                <li><strong>Tematy niestandardowe</strong> – edytuj krok po kroku przepływ rozmowy
                  <ul>
                    <li>Zadaj pytanie - agent pyta, zapisuje odpowiedź</li>
                    <li>Wysłanie wiadomości - agent odpowiada tekstem</li>
                    <li>Warunkowe rozgałęzienie - różne ścieżki akcji</li>
                    <li>Wywołaj przepływ - podłącz do Power Automate</li>
                  </ul>
                </li>
                <li>Testowanie - chat testowy pozwala sprawdzić zachowanie agenta</li>
              </ul>

              <div className="info-box">
                <strong>Przepływ:</strong><br />
                Wyzwalacz → Pytanie o datę → Rodzaj urlopu → Warunki → Potwierdzenie/Komunikat błędu.
              </div>
            </div>
          </div>
        </section>

        <section id="automatyzacje" style={{background: 'var(--color-bg)'}}>
          <div className="container">
            <h2>5. Automatyzacje i Integracje</h2>
            <div className="section-card">
              <ul>
                <li>Power Automate – utwórz przepływy obsługujące np. wysyłkę emaila, wpisy do baz</li>
                <li>Integracje: Outlook, Excel, PowerPoint, SharePoint, Dynamics 365, Teams, Azure, REST API</li>
              </ul>
              <div className="info-box">
                Możesz tworzyć przepływy natychmiastowe z wyzwalaczem i wieloma akcjami biznesowymi.
              </div>
            </div>
          </div>
        </section>

        <section style={{background: 'var(--color-surface)'}}>
          <div className="container">
            <h2>6. Analiza i Monitoring</h2>
            <div className="section-card">
              <ul>
                <li>Metryki: liczba rozmów, satysfakcja, liczbę transferów, skuteczność odpowiedzi</li>
                <li>Top 5 najczęstszych pytań użytkowników</li>
                <li>Raporty błędów i transkrypcje</li>
              </ul>

              <h3>Metryki Performance</h3>
              <table>
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
            </div>
          </div>
        </section>

        <section style={{background: 'var(--color-bg)'}}>
          <div className="container">
            <h2>7. Ustawienia i Uprawnienia Admina</h2>
            <div className="section-card">
              <ul>
                <li>Ustawienia środowiska, preferencje konta</li>
                <li>Zarządzanie użytkownikami, rolami i licencjami</li>
                <li>Bezpieczeństwo: publiczny dostęp / Azure AD / niestandardowe logowanie</li>
                <li>Audyt i historia aktywności</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{background: 'var(--color-surface)'}}>
          <div className="container">
            <h2>8. Pełny proces konfiguracji agenta</h2>
            <div className="section-card">
              <ol>
                <li>Planowanie: cel agenta, źródła wiedzy, scenariusze</li>
                <li>Konfiguracja: instrukcje pracy, dodać tematy, automatyzacje</li>
                <li>Testowanie & iteracja: chat testowy, poprawki</li>
                <li>Publikacja: Teams, WWW, inne kanały</li>
                <li>Monitoring i optymalizacja na podstawie analityki</li>
              </ol>
              <div className="info-box">
                <strong>Tip:</strong> Agenta można rozwijać, zmieniać i optymalizować w każdym momencie!
              </div>
            </div>
          </div>
        </section>

        <section id="faq" style={{background: 'var(--color-bg)'}}>
          <div className="container">
            <h2>FAQ – Najczęstsze pytania</h2>
            
            <div className="faq-item">
              <div className="faq-question" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('active')}>
                <span>Czy muszę umieć programować?</span>
                <span className="faq-toggle">▼</span>
              </div>
              <div className="faq-answer">
                <p>Nie, wszystko robisz przez interfejs graficzny! Microsoft Copilot Studio jest zaprojektowany jako platforma no-code/low-code.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('active')}>
                <span>Ile trwa stworzenie pierwszego agenta?</span>
                <span className="faq-toggle">▼</span>
              </div>
              <div className="faq-answer">
                <p>Prosty agent FAQ – nawet w 2 godziny. Bardziej zaawansowane rozwiązania z integracjami mogą zająć kilka dni.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('active')}>
                <span>Czy system integruje się z CRM?</span>
                <span className="faq-toggle">▼</span>
              </div>
              <div className="faq-answer">
                <p>Tak, przez Dynamics 365, Power Automate lub REST API możesz połączyć agenta z praktycznie każdym systemem CRM.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('active')}>
                <span>Jak zabezpieczyć agenta?</span>
                <span className="faq-toggle">▼</span>
              </div>
              <div className="faq-answer">
                <p>Wybierz logowanie z Azure AD lub własne reguły autoryzacji. Możesz kontrolować, kto ma dostęp do agenta i jakie dane może przetwarzać.</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden'}}>
          <div style={{content: '', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "url('data:image/svg+xml,<svg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"none\" stroke=\"rgba(255,255,255,0.05)\" stroke-width=\"2\"/></svg>')", opacity: 0.3}}></div>
          <div className="container" style={{position: 'relative', zIndex: 1}}>
            <h2 style={{color: 'white', fontSize: '36px', marginBottom: 'var(--space-24)'}}>Potrzebujesz wsparcia?</h2>
            <p style={{fontSize: '18px', marginBottom: 'var(--space-32)', opacity: 0.95}}>Skontaktuj się z nami, aby dowiedzieć się więcej o wdrożeniu Microsoft Copilot Studio w Twojej firmie.</p>
            <a href="mailto:contact@powerskills.ai" className="btn">Napisz do nas</a>
          </div>
        </section>

        <footer>
          <div className="container">
            <p style={{fontSize: '16px', fontWeight: 500}}>© 2025 PowerSkills.ai – Edukacja AI dla przyszłości</p>
            <p>Pytania? <a href="mailto:contact@powerskills.ai">contact@powerskills.ai</a> | <a href="/">Strona główna</a></p>
            <p style={{fontSize: '13px', marginTop: 'var(--space-24)', opacity: 0.7}}>
              Przewodnik Microsoft Copilot Studio | PowerSkills.ai
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Copilot;

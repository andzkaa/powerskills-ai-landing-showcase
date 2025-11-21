import { useEffect } from 'react';

const Matura = () => {
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
          const headerOffset = 80; // Height of sticky header
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

  const handleRegister = () => {
    window.location.href = 'https://forms.gle/X2pbsYjYgsvCRMEUA';
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        :root {
            --color-primary: #1ed23c;
            --color-primary-dark: #18b332;
            --color-primary-light: #2ef04d;
            --color-secondary: #FF6B6B;
            --color-bg: #F5F5F5;
            --color-surface: #FFFFFF;
            --color-text: #1a1a1a;
            --color-text-light: #6B7280;
            --color-border: #E5E7EB;
            --space-4: 4px;
            --space-8: 8px;
            --space-16: 16px;
            --space-24: 24px;
            --space-32: 32px;
            --space-48: 48px;
            --space-64: 64px;
            --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
            --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.12);
            --radius: 12px;
            --radius-lg: 16px;
        }

        .matura-page * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .matura-page {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
            background-color: var(--color-bg);
            color: var(--color-text);
            line-height: 1.6;
        }

        .matura-page .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--space-24);
        }

        /* HEADER / NAVIGATION */
        .matura-page header {
            position: sticky;
            top: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--color-border);
            padding: var(--space-16) 0;
            z-index: 100;
            box-shadow: var(--shadow-sm);
        }

        .matura-page header .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .matura-page .logo {
            font-size: 22px;
            font-weight: 700;
            color: var(--color-primary);
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .matura-page .logo:hover {
            color: var(--color-primary-dark);
        }

        .matura-page nav {
            display: flex;
            gap: var(--space-32);
            align-items: center;
        }

        .matura-page nav a {
            text-decoration: none;
            color: var(--color-text);
            font-size: 15px;
            font-weight: 500;
            transition: color 0.3s;
            position: relative;
        }

        .matura-page nav a:hover {
            color: var(--color-primary);
        }

        .matura-page nav a::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--color-primary);
            transition: width 0.3s;
        }

        .matura-page nav a:hover::after {
            width: 100%;
        }

        /* HERO SECTION */
        .matura-page .hero {
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
            color: white;
            padding: var(--space-64) var(--space-24);
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .matura-page .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="2"/></svg>');
            opacity: 0.3;
        }

        .matura-page .hero .container {
            position: relative;
            z-index: 1;
        }

        .matura-page .hero h1 {
            font-size: 56px;
            margin-bottom: var(--space-24);
            font-weight: 800;
            line-height: 1.1;
            letter-spacing: -0.02em;
        }

        .matura-page .hero p {
            font-size: 22px;
            margin-bottom: var(--space-32);
            opacity: 0.95;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
            font-weight: 400;
        }

        .matura-page .btn {
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

        .matura-page .btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
            background-color: var(--color-bg);
        }

        .matura-page .btn-primary {
            background-color: var(--color-secondary);
            color: white;
        }

        .matura-page .btn-primary:hover {
            background-color: #E85555;
        }

        /* SECTION COMMON */
        .matura-page section {
            padding: var(--space-64) var(--space-24);
        }

        .matura-page section h2 {
            font-size: 42px;
            margin-bottom: var(--space-48);
            text-align: center;
            color: var(--color-text);
            font-weight: 700;
            letter-spacing: -0.02em;
        }

        .matura-page section h3 {
            font-size: 24px;
            margin-bottom: var(--space-16);
            color: var(--color-text);
            font-weight: 600;
        }

        /* PROBLEMS SECTION */
        .matura-page .problems {
            background-color: var(--color-surface);
        }

        .matura-page .problems-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: var(--space-24);
            margin-top: var(--space-32);
        }

        .matura-page .problem-card {
            background: var(--color-bg);
            padding: var(--space-32);
            border-radius: var(--radius-lg);
            border-left: 4px solid var(--color-secondary);
            box-shadow: var(--shadow-sm);
            transition: all 0.3s ease;
        }

        .matura-page .problem-card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-md);
        }

        .matura-page .problem-card h4 {
            color: var(--color-secondary);
            margin-bottom: var(--space-16);
            font-size: 20px;
            font-weight: 600;
        }

        .matura-page .problem-card p {
            color: var(--color-text-light);
            line-height: 1.7;
        }

        /* MODULES SECTION */
        .matura-page .modules {
            background-color: var(--color-bg);
        }

        .matura-page .modules-list {
            display: grid;
            gap: var(--space-24);
            margin-top: var(--space-32);
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
        }

        .matura-page .module {
            background: var(--color-surface);
            padding: var(--space-32);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            display: flex;
            gap: var(--space-24);
            align-items: flex-start;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .matura-page .module:hover {
            border-color: var(--color-primary);
            transform: translateX(4px);
        }

        .matura-page .module-time {
            flex-shrink: 0;
            min-width: 85px;
            background: var(--color-primary);
            color: white;
            padding: var(--space-8) var(--space-16);
            border-radius: var(--radius);
            text-align: center;
            font-weight: 700;
            font-size: 15px;
        }

        .matura-page .module-content h4 {
            margin-bottom: var(--space-16);
            color: var(--color-text);
            font-size: 20px;
            font-weight: 600;
        }

        .matura-page .module-content p {
            color: var(--color-text-light);
            line-height: 1.7;
            margin-bottom: var(--space-16);
        }

        .matura-page .module-goal {
            padding: var(--space-16);
            background: linear-gradient(135deg, rgba(30, 210, 60, 0.08) 0%, rgba(30, 210, 60, 0.03) 100%);
            border-left: 3px solid var(--color-primary);
            border-radius: var(--radius);
            font-size: 15px;
            color: var(--color-text);
            font-weight: 500;
        }

        /* BENEFITS SECTION */
        .matura-page .benefits {
            background-color: var(--color-surface);
        }

        .matura-page .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: var(--space-32);
            margin-top: var(--space-32);
        }

        .matura-page .benefit-card {
            background: var(--color-bg);
            padding: var(--space-32);
            border-radius: var(--radius-lg);
            text-align: center;
            box-shadow: var(--shadow-sm);
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .matura-page .benefit-card:hover {
            border-color: var(--color-primary);
            transform: translateY(-4px);
            box-shadow: var(--shadow-md);
        }

        .matura-page .benefit-icon {
            font-size: 56px;
            margin-bottom: var(--space-24);
            filter: grayscale(0.2);
        }

        .matura-page .benefit-card h4 {
            margin-bottom: var(--space-16);
            color: var(--color-text);
            font-size: 20px;
            font-weight: 600;
        }

        .matura-page .benefit-card p {
            color: var(--color-text-light);
            line-height: 1.7;
        }

        /* PRICING SECTION */
        .matura-page .pricing {
            background: linear-gradient(180deg, var(--color-bg) 0%, var(--color-surface) 100%);
        }

        .matura-page .pricing-card {
            max-width: 650px;
            margin: 0 auto;
            background: var(--color-surface);
            padding: var(--space-64) var(--space-48);
            border-radius: var(--radius-lg);
            text-align: center;
            box-shadow: var(--shadow-lg);
            border: 2px solid var(--color-primary);
            position: relative;
        }

        .matura-page .pricing-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
            border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }

        .matura-page .price {
            font-size: 72px;
            font-weight: 800;
            color: var(--color-primary);
            margin-bottom: var(--space-32);
            letter-spacing: -0.02em;
        }

        .matura-page .price-currency {
            font-size: 36px;
            vertical-align: super;
            margin-right: var(--space-8);
            font-weight: 700;
        }

        .matura-page .included-list {
            list-style: none;
            text-align: left;
            margin-bottom: var(--space-48);
            max-width: 450px;
            margin-left: auto;
            margin-right: auto;
        }

        .matura-page .included-list li {
            padding: var(--space-16) 0;
            padding-left: var(--space-32);
            position: relative;
            color: var(--color-text);
            font-size: 16px;
            line-height: 1.6;
            border-bottom: 1px solid var(--color-border);
        }

        .matura-page .included-list li:last-child {
            border-bottom: none;
        }

        .matura-page .included-list li::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: var(--color-primary);
            font-weight: bold;
            font-size: 20px;
        }

        /* FINAL CTA */
        .matura-page .final-cta {
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
            color: white;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .matura-page .final-cta::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="2"/></svg>');
            opacity: 0.3;
        }

        .matura-page .final-cta .container {
            position: relative;
            z-index: 1;
        }

        .matura-page .final-cta h2 {
            color: white;
            font-size: 42px;
            margin-bottom: var(--space-24);
        }

        .matura-page .final-cta p {
            font-size: 20px;
            margin-bottom: var(--space-32);
            opacity: 0.95;
        }

        /* FOOTER */
        .matura-page footer {
            background-color: var(--color-text);
            color: white;
            text-align: center;
            padding: var(--space-48) var(--space-24);
        }

        .matura-page footer a {
            color: var(--color-primary);
            text-decoration: none;
            transition: opacity 0.3s;
        }

        .matura-page footer a:hover {
            opacity: 0.8;
        }

        .matura-page footer p {
            margin-bottom: var(--space-16);
            opacity: 0.9;
        }

        /* MOBILE RESPONSIVENESS */
        @media (max-width: 768px) {
            .matura-page .hero h1 {
                font-size: 36px;
            }

            .matura-page .hero p {
                font-size: 18px;
            }

            .matura-page section h2 {
                font-size: 32px;
            }

            .matura-page nav {
                gap: var(--space-16);
                font-size: 14px;
            }

            .matura-page .module {
                flex-direction: column;
            }

            .matura-page .module-time {
                width: 100%;
                min-width: auto;
            }

            .matura-page .price {
                font-size: 56px;
            }

            .matura-page .pricing-card {
                padding: var(--space-48) var(--space-24);
            }

            .matura-page .problems-grid,
            .matura-page .benefits-grid {
                grid-template-columns: 1fr;
            }
        }
      `}} />

      <div className="matura-page">
        <header>
          <div className="container">
            <a href="/" className="logo">PowerSkills.ai</a>
            <nav>
              <a href="#about">O warsztacie</a>
              <a href="#modules">Program</a>
              <a href="#benefits">Benefity</a>
              <a href="#pricing">Cena</a>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div className="container">
            <h1>Maturalny Upgrade z AI.<br />Ucz się szybciej — 67 vibes.</h1>
            <p>3,5-godzinny warsztat dla maturzystów – jak używać AI mądrze, legalnie i efektywnie w nauce.</p>
            <a href="https://forms.gle/X2pbsYjYgsvCRMEUA" className="btn" target="_blank" rel="noopener noreferrer">Zarezerwuj miejsce – 399 zł</a>
          </div>
        </section>

        <section className="problems" id="about">
          <div className="container">
            <h2>Co Cię blokuje w nauce?</h2>
            <div className="problems-grid">
              <div className="problem-card">
                <h4>📚 Totalny overload</h4>
                <p>Matma, polski, angielski – wszystko naraz. Nie ogarniasz od czego zacząć i masz już mental crash.</p>
              </div>
              <div className="problem-card">
                <h4>⏰ Brak planu</h4>
                <p>Nauka bez planu = chaos. Nie ma czasu? To zarządzaj lepiej – nie ucz się więcej.</p>
              </div>
              <div className="problem-card">
                <h4>💔 Zero motywacji</h4>
                <p>Nauka do matury wydaje się bezsensowna. Pytanie "Po co mi to?" zabija każdy impuls do otwarcia podręcznika.</p>
              </div>
              <div className="problem-card">
                <h4>🤖 Stres i presja</h4>
                <p>Countdown do matury, oczekiwania rodziny, presja rówieśników. Wszystko paraliżuje zamiast motywować.</p>
              </div>
              <div className="problem-card">
                <h4>😴 Nuda level max</h4>
                <p>Klasyczne metody nauki = ziewanie. Szukasz czegoś bardziej interaktywnego, kreatywnego, żywego.</p>
              </div>
              <div className="problem-card">
                <h4>🚫 AI – nie wiem jak</h4>
                <p>Słyszysz o ChatGPT, ale jak z tego korzystać bez plagiaryzmu? Gdzie jest granica? Nikt Cię nie nauczył.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="modules" id="modules">
          <div className="container">
            <h2>Program warsztatu</h2>
            <h3 style={{textAlign: 'center', marginBottom: 'var(--space-32)', color: 'var(--color-text-light)', fontWeight: 400}}>3,5 godzinny warsztat ;p </h3>
            <div className="modules-list">
              <div className="module">
                <div className="module-time">15 min</div>
                <div className="module-content">
                  <h4>🎯 Wprowadzenie: Dlaczego AI nie jest Twoim wrogiem?</h4>
                  <p>Obalamy mit. AI to narzędzie – nie zastąpi Cię, tylko pomoże w nauce.</p>
                  <div className="module-goal">✓ Zmiana mindset'u</div>
                </div>
              </div>

              <div className="module">
                <div className="module-time">20 min</div>
                <div className="module-content">
                  <h4>🔥 Pokaz na żywo: AI w akcji</h4>
                  <p>ChatGPT, Perplexity, Claude – jakie modele? Które do czego? Live demo.</p>
                  <div className="module-goal">✓ Hands-on experience</div>
                </div>
              </div>

              <div className="module">
                <div className="module-time">25 min</div>
                <div className="module-content">
                  <h4>📝 Język polski z AI: "Esej bez stresu"</h4>
                  <p>Jak analizować lektury, pisać eseje ze wsparciem AI – bez plagiaryzmu.</p>
                  <div className="module-goal">✓ Case study: tekst ucznia vs. tekst AI – kto lepszy?</div>
                </div>
              </div>

              <div className="module">
                <div className="module-time">25 min</div>
                <div className="module-content">
                  <h4>🔢 Matematyka z AI: "Zrozum, nie przepisuj"</h4>
                  <p>Photomath, Math Solver, GeoGebra. AI do nauki, nie do ściągania.</p>
                  <div className="module-goal">✓ Mini-challenge: kto szybciej zrozumie zadanie?</div>
                </div>
              </div>

              <div className="module">
                <div className="module-time">🧃 10 min</div>
                <div className="module-content">
                  <h4>Przerwa / Energizer</h4>
                  <p>Odpoczynek. Może śmieszne AI-faile? Krótkie wideo? Dystans.</p>
                  <div className="module-goal">Reset energii</div>
                </div>
              </div>

              <div className="module">
                <div className="module-time">35 min</div>
                <div className="module-content">
                  <h4>📅 Zaplanuj swoją naukę z AI</h4>
                  <p>Notion AI, szablon "Twój Plan Maturalny 2.0". Konkretny plan do działania.</p>
                  <div className="module-goal">✓ Promptbook do pobrania i na całe życie</div>
                </div>
              </div>

              <div className="module">
                <div className="module-time">20 min</div>
                <div className="module-content">
                  <h4>🏆 AI vs. Człowiek – Challenge</h4>
                  <p>3 zespoły rywalizują. Kto przygotuje lepsze streszczenie? Publiczna ocena.</p>
                  <div className="module-goal">✓ Zrozumienie, kiedy AI wspomaga – a kiedy przegrywa</div>
                </div>
              </div>

              <div className="module">
                <div className="module-time">15 min</div>
                <div className="module-content">
                  <h4>⚖️ Etyka i odpowiedzialność</h4>
                  <p>Gdzie jest granica? Case study. Jasne zasady "fair use".</p>
                  <div className="module-goal">✓ Świadomość etyczna i pewność siebie</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits" id="benefits">
          <div className="container">
            <h2>Co zyskasz?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🎯</div>
                <h4>Konkretne narzędzia</h4>
                <p>Nie teoria. Każdy prompt testowany na prawdziwych maturzystach.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🏆</div>
                <h4>Grywalizacja</h4>
                <p>Nie będziesz się nudzić. Będziesz się bawić i rywalizować.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📲</div>
                <h4>Dostęp forever</h4>
                <p> promptbook, szablony – Twoje na zawsze.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">👥</div>
                <h4>Wspólnota</h4>
                <p>20-40 maturzystów chcących się uczyć inaczej. Networking bonus.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💪</div>
                <h4>Pewność siebie</h4>
                <p>Wychodzisz wiedząc, jak AI faktycznie wygląda. Nie boisz się tego.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🚀</div>
                <h4>Twój power-up</h4>
                <p>Rozumiesz AI lepiej niż twoi konkurenci do matury.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing" id="pricing">
          <div className="container">
            <h2>Cena</h2>
            <div className="pricing-card">
              <p style={{color: 'var(--color-text-light)', marginBottom: 'var(--space-8)', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600}}>Od osoby</p>
              <div className="price"><span className="price-currency">zł</span>399</div>
              
              <ul className="included-list">
                <li>3,5 godzin warsztatu live</li>
                <li>Promptbook "Twój Plan Maturalny 2.0"</li>
                <li>Dostęp do grupy Discord</li>
              </ul>

              <p style={{marginBottom: 'var(--space-32)', color: 'var(--color-text-light)', fontSize: '14px'}}>
                Grupy 5+ – rabat grupowy. Napisz: <a href="mailto:contact@powerskills.ai" style={{color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600}}>contact@powerskills.ai</a>
              </p>

              <button className="btn btn-primary" onClick={handleRegister}>
                Zarezerwuj miejsce teraz
              </button>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <h2>Gotowy na zmianę?</h2>
            <p>Zarezerwuj miejsce na warsztat "Maturalny Upgrade z AI. Ucz się szybciej — 67 vibes." już teraz.</p>
            <a href="https://forms.gle/X2pbsYjYgsvCRMEUA" className="btn" target="_blank" rel="noopener noreferrer">Dołącz – 399 zł</a>
          </div>
        </section>

        <footer>
          <div className="container">
            <p style={{fontSize: '16px', fontWeight: 500}}>© 2025 PowerSkills.ai – Edukacja AI dla przyszłości</p>
            <p>Pytania? <a href="mailto:contact@powerskills.ai">contact@powerskills.ai</a> | <a href="/">Strona główna</a></p>
            <p style={{fontSize: '13px', marginTop: 'var(--space-24)', opacity: 0.7}}>
              Warsztat prowadzi Anna Hawryluk-Wiraszka oraz Artur Ciszczoń, AI Educators & Founders PowerSkills.ai
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Matura;
import React from 'react';
import PowerDots from './PowerDots';
import { Building2, Shield, Clock, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="container mx-auto px-6 py-12">
        {/* Trust Signals */}
        <div className="mb-12 pb-8 border-b border-primary/10">
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground font-inter font-semibold uppercase tracking-wide mb-4">
              Zaufały nam
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-foreground font-anton text-lg">
              <span className="flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-primary" />
                <span>Bridgestone</span>
              </span>
              <span className="text-primary">|</span>
              <span className="flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-primary" />
                <span>Microsoft</span>
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-card/30 rounded-lg border border-primary/10">
              <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-sm text-foreground font-inter font-semibold">Zgodność z GDPR</p>
            </div>
            <div className="text-center p-4 bg-card/30 rounded-lg border border-primary/10">
              <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-sm text-foreground font-inter font-semibold">90 dni wsparcia</p>
            </div>
            <div className="text-center p-4 bg-card/30 rounded-lg border border-primary/10">
              <Award className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-sm text-foreground font-inter font-semibold">10 lat doświadczenia</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-primary-foreground rounded-full relative">
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary-foreground rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              <span className="font-anton text-xl text-foreground">powerskills.ai</span>
            </div>
            <PowerDots />
            <p className="text-muted-foreground font-inter leading-relaxed">
              Szczecińska firma szkoleniowa specjalizująca się w praktycznym wdrażaniu AI w biznesie.
            </p>
            <div className="text-xs text-muted-foreground font-inter space-y-1">
              <p><strong className="text-foreground">NIP:</strong> [do uzupełnienia]</p>
              <p><strong className="text-foreground">REGON:</strong> [do uzupełnienia]</p>
              <p className="text-foreground">📍 Szczecin, Polska</p>
            </div>
          </div>

          <div>
            {/* <h4 className="font-anton text-lg text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground font-inter">
              <li><a href="#" className="hover:text-primary transition-colors">Teacher Training</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Student Programs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Corporate Training</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Women's Courses</a></li>
            </ul> */}
          </div>

          <div>
            <h4 className="font-anton text-lg text-foreground mb-4">Firma</h4>
            <ul className="space-y-2 text-muted-foreground font-inter">
              <li><a href="#about" className="hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">O nas</a></li>
              {/* <li><a href="#" className="hover:text-primary transition-colors">Our Mission</a></li> */}
              <li><a href="#" className="hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">Szkolenia</a></li>
              <li><a href="#contact" className="hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">Kontakt</a></li>
            </ul>
          </div>

          <div>
            {/* <h4 className="font-anton text-lg text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground font-inter">
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            </ul> */}
          </div>
        </div>

        <div className="border-t border-primary/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-muted-foreground font-inter text-sm">
            © 2025 PowerSkills.ai. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-muted-foreground font-inter text-sm">
            <a href="#" className="hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
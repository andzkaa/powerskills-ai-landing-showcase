import React from 'react';
import PowerDots from './PowerDots';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="space-y-4">
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
              Empowering the future through AI education and human potential development.
            </p>
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
              <li><a href="#about" className="hover:text-primary transition-colors">O nas</a></li>
              {/* <li><a href="#" className="hover:text-primary transition-colors">Our Mission</a></li> */}
              <li><a href="#" className="hover:text-primary transition-colors">Szkolenia</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Kontakt</a></li>
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

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-muted-foreground font-inter text-sm">
            © 2025 PowerSkills.ai. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-muted-foreground font-inter text-sm">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Button } from '@/components/ui/button';
import PowerDots from './PowerDots';
import Logo from "@/assets/logo.png";


const Header: React.FC = () => {
  return (
    <header className="header-dark sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">

        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"> */}
            <div className="w-4 h-4 border-2 border-primary-foreground rounded-full relative">
              <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary-foreground rounded-full transform -translate-x-1/2 -translate-y-1/2" />
              {/* </div> */}
            </div>
            {/* <span className="font-anton text-2xl text-foreground">powerskills.ai</span>
            <PowerDots className="ml-2" /> */}
            <img
              src={Logo}
              alt="powerskills.ai"
              className="h-8 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-inter font-medium">
              Szkolenia
            </a>
            <a href="#education" className="text-foreground hover:text-primary transition-colors font-inter font-medium">
              Edukacja
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-inter font-medium">
              O nas
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-inter font-medium">
              Kontakt
            </a>
          </nav>

          {/* <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-inter font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
            Start Learning
          </Button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
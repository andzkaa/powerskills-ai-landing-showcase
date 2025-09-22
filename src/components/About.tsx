import React from 'react';
import { Button } from '@/components/ui/button';
import PowerDots from './PowerDots';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-4 mb-6">
              <PowerDots animated />
              <span className="text-primary font-inter font-semibold tracking-wide uppercase text-sm">
                About PowerSkills.ai
              </span>
            </div>
            
            <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Where Technology Meets
              <br />
              <span className="gradient-text">Human Potential</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-inter leading-relaxed">
              <p className="text-lg">
                <strong className="text-foreground">Our Mission:</strong> PowerSkills.ai supports people and organizations 
                in developing the competencies of the future – skills that truly have power. We create a space where 
                technology and human potential meet to activate development, creativity, and agency.
              </p>
              
              <p className="text-lg">
                <strong className="text-foreground">Our Vision:</strong> To be a recognizable brand in the field of education 
                and development of future competencies, inspiring action, simplifying the complexity of the AI world, 
                and giving people concrete tools to enter the future with courage.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <h3 className="font-anton text-xl text-foreground mb-4">Our Approach</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-inter font-medium text-foreground">Professional & Modern</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-inter font-medium text-foreground">Accessible & Substantive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-inter font-medium text-foreground">Energetic & Concrete</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-inter font-medium text-foreground">Engaged & Responsible</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-card/80 rounded-2xl p-6 text-center backdrop-blur-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 border-2 border-primary rounded-full relative">
                        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                    <h4 className="font-anton text-2xl text-foreground mb-2">AI Training</h4>
                    <p className="text-muted-foreground font-inter text-sm">Cutting-edge curriculum</p>
                  </div>
                  
                  <div className="bg-card/80 rounded-2xl p-6 text-center backdrop-blur-sm">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <PowerDots className="scale-75" />
                    </div>
                    <h4 className="font-anton text-2xl text-foreground mb-2">Future Skills</h4>
                    <p className="text-muted-foreground font-inter text-sm">Tomorrow's competencies</p>
                  </div>
                  
                  <div className="bg-card/80 rounded-2xl p-6 text-center backdrop-blur-sm col-span-2">
                    <div className="flex justify-center mb-4">
                      <div className="flex space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-3 h-3 bg-primary rounded-full opacity-80" />
                        ))}
                      </div>
                    </div>
                    <h4 className="font-anton text-2xl text-foreground mb-2">Human-Centered Technology</h4>
                    <p className="text-muted-foreground font-inter text-sm">Technology with a human approach</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-float" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
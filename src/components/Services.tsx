import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Building, Heart, Sparkles } from 'lucide-react';
import PowerDots from './PowerDots';

const services = [
  {
    icon: GraduationCap,
    title: "Teachers",
    description: "Empower educators with AI tools and methodologies to enhance learning experiences and prepare students for the future.",
    features: ["AI-Enhanced Teaching", "Digital Pedagogy", "Future Skills Framework"]
  },
  {
    icon: Users,
    title: "Students",
    description: "Develop critical thinking, creativity, and AI literacy skills essential for success in the digital age.",
    features: ["AI Literacy", "Creative Problem Solving", "Digital Competencies"]
  },
  {
    icon: Building,
    title: "Hotels & Organizations",
    description: "Transform your workforce with comprehensive AI training programs tailored to your industry needs.",
    features: ["Custom Training Programs", "Industry Solutions", "Organizational Development"]
  },
  {
    icon: Heart,
    title: "Women's Programs",
    description: "Specialized courses designed to empower women in technology and AI, fostering inclusion and diversity.",
    features: ["Women in Tech", "Leadership Development", "Mentorship Programs"]
  },
  {
    icon: Sparkles,
    title: "Individual Growth",
    description: "Personal development programs for individuals seeking to enhance their AI skills and digital competencies.",
    features: ["Personal Learning Paths", "Skill Assessment", "Career Advancement"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <PowerDots animated />
            <span className="text-primary font-inter font-semibold tracking-wide uppercase text-sm">
              Our Services
            </span>
            <PowerDots animated />
          </div>
          <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Activate Your <span className="gradient-text">Potential</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter font-light max-w-3xl mx-auto">
            We provide comprehensive AI training solutions for diverse audiences, 
            ensuring everyone can harness the power of artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-anton text-2xl text-foreground">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground font-inter font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-border/50">
                  <PowerDots className="justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
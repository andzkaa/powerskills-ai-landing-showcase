import React from 'react';
import greenWaves from '@/assets/green-waves.png';

interface WaveSeparatorProps {
  className?: string;
  opacity?: number;
}

const WaveSeparator: React.FC<WaveSeparatorProps> = ({ className = '', opacity = 0.2 }) => {
  return (
    <div className={`relative w-full h-32 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${greenWaves})`,
          opacity: opacity
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
    </div>
  );
};

export default WaveSeparator;

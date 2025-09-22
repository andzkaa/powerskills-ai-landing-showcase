import React from 'react';

interface PowerDotsProps {
  className?: string;
  animated?: boolean;
}

const PowerDots: React.FC<PowerDotsProps> = ({ className = "", animated = false }) => {
  return (
    <div className={`power-dots ${animated ? 'animate-slide-in' : ''} ${className}`}>
      {Array.from({ length: 10 }, (_, i) => (
        <div 
          key={i} 
          className="power-dot"
          style={{ 
            animationDelay: animated ? `${i * 0.1}s` : '0s',
          }}
        />
      ))}
    </div>
  );
};

export default PowerDots;
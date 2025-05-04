import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  bordered?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  bordered = true,
}) => {
  const baseClasses = 'bg-white rounded-lg overflow-hidden';
  const hoverClasses = hoverable ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : '';
  const borderClasses = bordered ? 'border border-gray-200' : '';
  const shadowClasses = 'shadow-sm';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${borderClasses} ${shadowClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
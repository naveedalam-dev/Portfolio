import React from 'react';

interface SimpleIconProps {
  icon: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const sizeMapping = {
  xs: 'w-4 h-4',
  sm: 'w-5 h-5', 
  md: 'w-6 h-6',
  lg: 'w-8 h-8'
};

const SimpleIcon: React.FC<SimpleIconProps> = ({ 
  icon, 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false
}) => {
  const sizeClass = sizeMapping[size];

  if (onClick) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${sizeClass} flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      >
        {icon}
      </button>
    );
  }

  return (
    <div className={`${sizeClass} flex items-center justify-center text-gray-600 dark:text-gray-400 ${className}`}>
      {icon}
    </div>
  );
};

export default SimpleIcon;
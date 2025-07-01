import React, { memo } from 'react';
import './GlassIcon.css';

interface GlassIconProps {
  icon: React.ReactNode;
  color: string;
  label?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const gradientMapping = {
  blue: "linear-gradient(135deg, hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(135deg, hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(135deg, hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(135deg, hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(135deg, hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(135deg, hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
  yellow: "linear-gradient(135deg, hsl(53, 90%, 50%), hsl(38, 90%, 50%))",
  pink: "linear-gradient(135deg, hsl(323, 90%, 50%), hsl(308, 90%, 50%))",
  cyan: "linear-gradient(135deg, hsl(183, 90%, 50%), hsl(168, 90%, 50%))",
  gray: "linear-gradient(135deg, hsl(220, 10%, 40%), hsl(220, 10%, 30%))",
  emerald: "linear-gradient(135deg, hsl(158, 90%, 40%), hsl(143, 90%, 40%))",
  violet: "linear-gradient(135deg, hsl(263, 90%, 50%), hsl(248, 90%, 50%))",
  rose: "linear-gradient(135deg, hsl(343, 90%, 50%), hsl(328, 90%, 50%))",
  amber: "linear-gradient(135deg, hsl(48, 90%, 50%), hsl(33, 90%, 50%))",
  teal: "linear-gradient(135deg, hsl(173, 90%, 40%), hsl(158, 90%, 40%))",
};

const sizeMapping = {
  xs: { container: 'w-8 h-8', icon: 'w-3 h-3', text: 'text-xs' },
  sm: { container: 'w-10 h-10', icon: 'w-4 h-4', text: 'text-xs' },
  md: { container: 'w-12 h-12', icon: 'w-5 h-5', text: 'text-sm' },
  lg: { container: 'w-16 h-16', icon: 'w-6 h-6', text: 'text-sm' },
  xl: { container: 'w-20 h-20', icon: 'w-8 h-8', text: 'text-base' }
};

const GlassIcon: React.FC<GlassIconProps> = memo(({ 
  icon, 
  color, 
  label, 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false
}) => {
  const getBackgroundStyle = (color: string) => {
    if (gradientMapping[color as keyof typeof gradientMapping]) {
      return { background: gradientMapping[color as keyof typeof gradientMapping] };
    }
    return { background: color };
  };

  const sizeClasses = sizeMapping[size];

  return (
    <div className={`glass-icon-container icon-container ${className}`}>
      <button
        className={`glass-icon motion-element ${sizeClasses.container} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-label={label}
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        <span
          className="glass-icon__back"
          style={getBackgroundStyle(color)}
        ></span>
        <span className="glass-icon__front">
          <span className={`glass-icon__icon ${sizeClasses.icon}`} aria-hidden="true">
            {icon}
          </span>
        </span>
        {label && (
          <span className={`glass-icon__label ${sizeClasses.text}`}>
            {label}
          </span>
        )}
      </button>
    </div>
  );
});

GlassIcon.displayName = 'GlassIcon';

export default GlassIcon;
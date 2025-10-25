import React from 'react';

interface BulmaIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const BulmaIcon: React.FC<BulmaIconProps> = ({ 
  width = 24, 
  height = 24, 
  className,
  style 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 128 128"
      className={className}
      style={style}
      fill="currentColor"
    >
      <path fill="#00D1B2" d="M59.2 0l40 40-24 24 32 31.9L59.4 128l-40-39.9 7.7-56z"/>
    </svg>
  );
};

export default BulmaIcon;

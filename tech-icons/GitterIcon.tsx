import React from 'react';

interface GitterIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const GitterIcon: React.FC<GitterIconProps> = ({ 
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
      <path d="M96.8 25.6H107v51.2H96.8zM71.2 25.6h10.2V128H71.2zM45.6 25.6h10.2V128H45.6zM20 0h10.2v76.8H20z"/>
    </svg>
  );
};

export default GitterIcon;

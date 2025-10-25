import React from 'react';

interface Alpine.jsIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const Alpine.jsIcon: React.FC<Alpine.jsIconProps> = ({ 
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
      <path fill="#77c1d2" fillRule="evenodd" d="M98.444 35.562 126 62.997 98.444 90.432 70.889 62.997z" clipRule="evenodd"/><path fill="#2d3441" fillRule="evenodd" d="m29.556 35.562 57.126 56.876H31.571L2 62.997z" clipRule="evenodd"/></svg>
    </svg>
  );
};

export default Alpine.jsIcon;

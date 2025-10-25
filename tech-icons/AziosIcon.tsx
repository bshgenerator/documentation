import React from 'react';

interface AziosIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const AziosIcon: React.FC<AziosIconProps> = ({ 
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
      <path
      fill="#5a29e4" 
      d="m 34,43.977569 27.379067,-22.912155 0.0385,91.494586 -9.3189,7.74007 -0.15403,-76.091455 z"  />
   <path
      fill="#5a29e4" 
      d="M 96.961687,82.322502 69.582627,105.23466 69.544127,13.74007 78.863017,6 l 0.15403,76.091452 z"  />
</svg>
    </svg>
  );
};

export default AziosIcon;

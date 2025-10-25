import React from 'react';

interface ViteIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const ViteIcon: React.FC<ViteIconProps> = ({ 
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
      <path fill="#006bff" d="M128 3.83 48.72 22.547 36.977 124.17ZM39.464 24.264 0 33.167l35.658 90.604Z"/></svg>
    </svg>
  );
};

export default ViteIcon;

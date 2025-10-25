import React from 'react';

interface VercelIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const VercelIcon: React.FC<VercelIconProps> = ({ 
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
      <path style="fill-rule:nonzero;fill:#000;fill-opacity:1" d="M63.984 17.184 127.964 128H0Zm0 0"/></svg>
    </svg>
  );
};

export default VercelIcon;

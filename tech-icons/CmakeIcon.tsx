import React from 'react';

interface CmakeIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const CmakeIcon: React.FC<CmakeIconProps> = ({ 
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
      <path fill="#064F8C" d="M62.8.4L.3 123.8l68.1-57.9z"/><path fill="#249847" d="M123.8 127.7l-84-33.9L0 127.7z"/><path fill="#BE2128" d="M128 126.6L65.6 2.5l9.2 102.6z"/><path fill="#CDCDCE" d="M71.9 104l-3.1-34.9L42 92z"/></svg>
    </svg>
  );
};

export default CmakeIcon;

import React from 'react';

interface Typo3IconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const Typo3Icon: React.FC<Typo3IconProps> = ({ 
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
      <path fill="#f49700" d="M94.79 87a16.73 16.73 0 01-5.12.73c-15.44 0-38.11-53.95-38.11-71.91 0-6.6 1.57-8.81 3.78-10.7-18.9 2.2-41.57 9.14-48.82 18C5 25.27 4 28.73 4 33.14c0 28 29.92 91.64 51 91.64 9.77 0 26.23-16 39.77-37.79M84.94 3.22c19.52 0 39.06 3.15 39.06 14.17 0 22.36-14.18 49.46-21.42 49.46-12.91 0-29-35.91-29-53.87 0-8.19 3.14-9.76 11.33-9.76"/>
    </svg>
  );
};

export default Typo3Icon;

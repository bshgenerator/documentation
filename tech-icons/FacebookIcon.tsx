import React from 'react';

interface FacebookIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const FacebookIcon: React.FC<FacebookIconProps> = ({ 
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
      <rect fill="#3d5a98" x="4.83" y="4.83" width="118.35" height="118.35" rx="6.53" ry="6.53"/><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"/>
    </svg>
  );
};

export default FacebookIcon;

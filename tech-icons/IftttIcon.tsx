import React from 'react';

interface IftttIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const IftttIcon: React.FC<IftttIconProps> = ({ 
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
      <path d="M2 47.6h10.5v32.9H2V47.6zm59.8 0h-18V58h7.5v22.4h10.5V58h7.5V47.6h-7.5zm28.3 0H72.2V58h7.5v22.4h10.5V58h7.5V47.6h-7.6zm28.4 0h-17.9V58h7.5v22.4h10.5V58h7.5V47.6h-7.6zM40.8 58V47.6H16.9v32.9h10.5v-9h9V61h-9v-3h13.4z"/></svg>
    </svg>
  );
};

export default IftttIcon;

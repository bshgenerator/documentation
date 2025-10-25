import React from 'react';

interface TensorflowIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const TensorflowIcon: React.FC<TensorflowIconProps> = ({ 
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
      <path d="m61.55 128-21.84-12.68V40.55L6.81 59.56l.08-28.32L61.55 0zM66.46 0v128l21.84-12.68V79.31l16.49 9.53-.1-24.63-16.39-9.36v-14.3l32.89 19.01-.08-28.32z" fill="#ff6f00" />
    </svg>
  );
};

export default TensorflowIcon;

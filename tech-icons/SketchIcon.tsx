import React from 'react';

interface SketchIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const SketchIcon: React.FC<SketchIconProps> = ({ 
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
      <path fill="#fdb300" d="M29.62 12.85L64 9.24l34.38 3.61L125 48.29l-61 70.47L3 48.29z"/><path fill="#ea6c00" d="M27.71 48.29L64 118.76 3 48.29h24.71zM100.29 48.29L64 118.76l61-70.47h-24.71z"/><path fill="#fdad00" d="M27.71 48.29h72.58L64 118.76 27.71 48.29z"/><path fill="#fdd231" d="M64 9.24l-34.38 3.61-1.91 35.44L64 9.24zM64 9.24l34.38 3.61 1.91 35.44L64 9.24z"/><path fill="#fdad00" d="M125 48.29L98.38 12.85l1.91 35.44H125z"/><path fill="#feeeb7" d="M64 9.24L27.71 48.29h72.58L64 9.24z"/><path fill="#fdad00" d="M3 48.29l26.62-35.44-1.91 35.44H3z"/>
    </svg>
  );
};

export default SketchIcon;

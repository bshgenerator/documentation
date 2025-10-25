import React from 'react';

interface ModxIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const ModxIcon: React.FC<ModxIconProps> = ({ 
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
      <path fill="#00b5de" d="M63.864 14.059l-8.29 13.317 43.215 26.5 24.869-39.817z"/><path className="modx-original-st2" fill="#ff5529" d="M99.06 58.089l-27.178 42.806L111.97 125.9V66.106z"/><path className="modx-original-st3" fill="#00decc" d="M29.483 69.911l69.306-16.035L15.622 2.1v59.794z"/><path className="modx-original-st4" fill="#ff9640" d="M64.136 113.67L99.06 58.088 29.21 74.532 4.342 113.669z"/>
    </svg>
  );
};

export default ModxIcon;

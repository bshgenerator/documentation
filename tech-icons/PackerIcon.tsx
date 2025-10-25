import React from 'react';

interface PackerIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const PackerIcon: React.FC<PackerIconProps> = ({ 
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
      <path d="M66.477 39.691v88.547L24.918 104.23V15.676zm0 0" fillRule="evenodd" fill="#1daeff"/><path d="M87.055 26.023L41.879 0v18.078l30.715 17.738v54.22l14.46 8.284c8.95 5.168 16.266 2.07 16.266-6.875V51.688c0-8.95-7.316-20.497-16.265-25.665zm0 0" fill="#1d94dd"/></svg>
    </svg>
  );
};

export default PackerIcon;

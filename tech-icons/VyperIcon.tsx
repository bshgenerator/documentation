import React from 'react';

interface VyperIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const VyperIcon: React.FC<VyperIconProps> = ({ 
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
      <polygon transform="matrix(.0625 0 0 .0625 3.75e-7 8.5744)" points="1280 1330.2 1024 886.81 768 1330.2 1024 1773.6" opacity=".8"/>
<polygon transform="matrix(.0625 0 0 .0625 3.75e-7 8.5744)" points="1536 886.81 1280 443.41 1024 886.81 1280 1330.2" opacity=".6"/>
<polygon transform="matrix(.0625 0 0 .0625 3.75e-7 8.5744)" points="1024 886.81 768 443.41 512 886.81 768 1330.2" opacity=".6"/>
<polygon transform="matrix(.0625 0 0 .0625 3.75e-7 8.5744)" points="1792 443.41 1536 0 1280 443.41 1536 886.81" opacity=".45"/>
<polygon transform="matrix(.0625 0 0 .0625 3.75e-7 8.5744)" points="768 443.41 1024 886.81 1280 443.41 1152 221.7 896 221.7" opacity=".45"/>
<polygon transform="matrix(.0625 0 0 .0625 3.75e-7 8.5744)" points="768 443.41 512 0 256 443.41 512 886.81" opacity=".45"/>
<polygon transform="matrix(.0625 0 0 .0625 3.75e-7 8.5744)" points="2048 0 1536 0 1792 443.4" opacity=".3"/>
<polygon transform="matrix(.0625 0 0 .0625 3.75e-7 8.5744)" points="512 0 0 0 256 443.4" opacity=".3"/>
    </svg>
  );
};

export default VyperIcon;

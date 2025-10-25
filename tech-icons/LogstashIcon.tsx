import React from 'react';

interface LogstashIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const LogstashIcon: React.FC<LogstashIconProps> = ({ 
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
      <path fill="#00bfb3" d="M72 128h44V80H72Zm0 0"/>
    <path fill="#fec514" d="M12 0H8v80h52V48C60 21.488 38.508 0 12 0"/>
    <path fill="#343741" d="M8 80c0 26.508 21.492 48 48 48h4V80Zm0 0"/>
</svg>
    </svg>
  );
};

export default LogstashIcon;

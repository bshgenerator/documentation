import React from 'react';

interface KibanaIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const KibanaIcon: React.FC<KibanaIconProps> = ({ 
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
      <path fill="#f04e98" d="M112 0H12v48c17.3 0 33.54 4.453 47.73 12.188Zm0 0"/>
    <path fill="#343741" d="M12 48v67.152l47.73-54.96A99.422 99.422 0 0 0 12 48"/>
    <path fill="#00bfb3" d="m70.04 66.621-48.974 56.406L16.738 128h93.258c-5.121-25.21-19.758-46.945-39.957-61.379"/>
</svg>
    </svg>
  );
};

export default KibanaIcon;

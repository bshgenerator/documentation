import React from 'react';

export type BadgeVariant = 'soon' | 'new' | 'beta' | 'deprecated' | 'experimental' | 'planned';

export interface BadgeProps {
  label?: string;
  variant?: BadgeVariant;
  customColor?: string;
  customBackground?: string;
  className?: string;
}

const badgeVariants = {
  soon: {
    background: '#007bff1a',
    color: '#007bff',
  },
  new: {
    background: '#28a7451a',
    color: '#28a745',
  },
  beta: {
    background: '#ffc1071a',
    color: '#ffc107',
  },
  deprecated: {
    background: '#dc35451a',
    color: '#dc3545',
  },
  experimental: {
    background: '#6f42c11a',
    color: '#6f42c1',
  },
  planned: {
    background: '#6c757d1a',
    color: '#6c757d',
  },
};

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'soon',
  customColor,
  customBackground,
  className = '',
}) => {
  const variantStyles = badgeVariants[variant];
  
  const badgeStyle: React.CSSProperties = {
    background: customBackground || variantStyles.background,
    color: customColor || variantStyles.color,
    borderRadius: '1000px',
    padding: '2px 8px',
    fontSize: '0.85em',
    marginLeft: '8px',
    verticalAlign: 'middle',
    fontWeight: 500,
    display: 'inline-block',
  };

  return (
    <span style={badgeStyle} className={className}>
      {label || variant}
    </span>
  );
};

// Convenience components for common variants
export const SoonBadge: React.FC<Omit<BadgeProps, 'variant'>> = (props) => (
  <Badge variant="soon" label="Soon" {...props} />
);

export const NewBadge: React.FC<Omit<BadgeProps, 'variant'>> = (props) => (
  <Badge variant="new" label="New" {...props} />
);

export const BetaBadge: React.FC<Omit<BadgeProps, 'variant'>> = (props) => (
  <Badge variant="beta" label="Beta" {...props} />
);

export const DeprecatedBadge: React.FC<Omit<BadgeProps, 'variant'>> = (props) => (
  <Badge variant="deprecated" label="Deprecated" {...props} />
);

export const ExperimentalBadge: React.FC<Omit<BadgeProps, 'variant'>> = (props) => (
  <Badge variant="experimental" label="Experimental" {...props} />
);

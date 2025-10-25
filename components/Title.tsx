import React from 'react';
import { Badge, BadgeVariant } from './Badge';

export interface TitleProps {
  title: string;
  badge?: BadgeVariant;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
}

export const Title: React.FC<TitleProps> = ({
  title,
  badge,
  className = '',
  as: Component = 'span',
}) => {
  return (
    <Component className={className}>
      {title}
      {badge && (
        <Badge variant={badge}/>
      )}
    </Component>
  );
};

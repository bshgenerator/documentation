import React from 'react';
import { Badge, BadgeVariant } from './Badge';
import { HttpMethod } from './HttpMethod';

export interface EndpointTitleProps {
  title: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  badge?: BadgeVariant;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
}

export const EndpointTitle: React.FC<EndpointTitleProps> = ({
  title,
  method,
  badge,
  className = '',
  as: Component = 'span',
}) => {
  return (
    <Component className={className}>
      <HttpMethod method={method} /> {title}
      {badge && (
        <Badge variant={badge}/>
      )}
    </Component>
  );
};

import { ButtonHTMLAttributes } from 'react';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconName: 'chevron-left' | 'chevron-right';
}

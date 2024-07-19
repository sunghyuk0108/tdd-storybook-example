import React from 'react';

type TestButtonAnchorProps = {
  href?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export type TestButtonProps = {
  label?: string | React.ReactNode;
  intent?: 'default' | 'primary' | 'secondary' | 'destructive';
  border?: 'default' | 'primary' | 'secondary';
  size?: 's' | 'm' | 'l' | 'xl' | 'xxl';
  onClick?: (event: React.MouseEvent) => void;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & TestButtonAnchorProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

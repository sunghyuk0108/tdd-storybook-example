import React from 'react';

import './index.scss';
import Link from 'next/link';

type TestButtonAnchorProps = {
  href?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

type TestButtonProps = {
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

// otherProps외에 꺼내쓰면 제외됨
const TestButton = (props: TestButtonProps) => {
  const {
    label,
    intent = 'default',
    size = 's',
    border = 'default',
    onClick,
    href,
    leftIcon,
    rightIcon,
    isLoading,
    ...otherProps
  } = props;
  return (
    <>
      {href ? (
        <Link
          href={href}
          className="test-button"
          data-intent={intent}
          data-size={size}
          data-border={border}
          {...otherProps}>
          <button>
            {leftIcon && <span className="left-icon"></span>}
            {label}
            {rightIcon && <span className="right-icon"></span>}
            {isLoading && <div className="is-loading">...</div>}
          </button>
        </Link>
      ) : (
        <button
          className="test-button"
          onClick={onClick}
          data-intent={intent}
          data-size={size}
          data-border={border}
          {...otherProps}>
          {leftIcon && <span className="left-icon" />}
          {label}
          {rightIcon && <span className="right-icon" />}
        </button>
      )}
    </>
  );
};
export default TestButton;

import React from 'react';

import './index.scss';
import Link from 'next/link';
import { TestButtonProps } from '@/shared/components/test-button/type';

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

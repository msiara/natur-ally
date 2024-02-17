import classNames from 'classnames';

import { ButtonProps } from './Button.types';

import styles from './Button.module.css';

export default function Button({
  children,
  className,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        styles.button,
        {
          [styles.primary]: variant === 'primary',
          [styles.outline]: variant === 'outline',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

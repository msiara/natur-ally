import classNames from 'classnames';

import { ICONS } from './IconButton.constants';
import { IconButtonProps } from './IconButton.types';

import styles from './IconButton.module.css';

export default function IconButton({
  className,
  iconName,
  ...props
}: IconButtonProps) {
  const { src, alt } = ICONS[iconName];

  return (
    <button className={classNames(styles.iconButton, className)} {...props}>
      <img src={src} alt={alt} />
    </button>
  );
}

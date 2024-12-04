import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Title.module.scss';

type Props = {
  children: ReactNode;
  size: 'XL' | 'L' | 'M' | 'S' | 'XS';
};

const Title = ({ size = 'M', children }: Props) => {
  return (
    <div
      className={clsx(styles.rootTitle, {
        [styles.xl]: size === 'XL',
        [styles.l]: size === 'L',
        [styles.m]: size === 'M',
        [styles.s]: size === 'S',
        [styles.xs]: size === 'XS',
      })}
    >
      {children}
    </div>
  );
};

export default Title;

import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Title.module.scss';

type Props = {
  children: ReactNode;
  size: 'xxxl' | 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs' | 'xxxs';
  font?: string;
  fontWeight?: 'w400' | 'w600' | 'w700' | 'w900';
  uppercase?: boolean;
  fontBoW?: 'black' | 'white';
  lineHeight?: string;
};

const Title = ({
  size = 'm',
  children,
  font,
  fontWeight = 'w400',
  uppercase,
  fontBoW = 'white',
  lineHeight,
}: Props) => {
  return (
    <div
      className={clsx(styles.rootTitle, {
        [styles[size]]: size,
        [styles.robotoCondensed]: font === 'robotoCondensed',
        [styles[fontWeight]]: fontWeight,
        [styles.uppercase]: uppercase,
        [styles[fontBoW]]: fontBoW,
        // [styles[lineHeight!]]: lineHeight !== undefined,
      })}
      style={{ lineHeight: `${lineHeight}` }}
    >
      {children}
    </div>
  );
};

export default Title;

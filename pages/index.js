import Head from 'next/head';
import Image from 'next/image';
/*
  NOTE:
    - the next two lines are using the css-module pattern
    - this isn't required; you can also use normal classes and global CSS
*/
import styles from '../styles/Home.module.css';
import cn from 'classnames';

export default function Home() {
  return (
    <div className={cn(styles.page)}>
      <h1>hello world</h1>
    </div>
  );
}

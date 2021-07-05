import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
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
      <header>
          <Navbar/>
      </header>
      <main>
        <section>
          
        </section>
      </main>
    </div>
  );
}

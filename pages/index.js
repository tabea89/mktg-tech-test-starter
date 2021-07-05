import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import HeroSection from '../components/HeroSection';
import CaseStudy from '../components/CaseStudy';
import caseStudies from "../data/customer-case-studies.json"

/*
  NOTE:
    - the next two lines are using the css-module pattern
    - this isn't required; you can also use normal classes and global CSS
*/

export default function Home() {
  const caseStudy = caseStudies[0]
  return (
    <div>
      <Head>
        <title>{caseStudy.metaTags.title}</title>
        <meta name="description" content={caseStudy.metaTags.description}></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
          <Navbar/>
      </header>
      <main>
        <HeroSection caseStudy={caseStudy}/>
        <CaseStudy caseStudy={caseStudy}/>
      </main>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

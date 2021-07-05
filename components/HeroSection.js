import Wave from '../assets/hero_wave.svg'
import styles from "../styles/HeroSection.module.scss"

export default function HeroSection(props) {
  const {heading, subHeading} = props.caseStudy
  
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <div className="grid">
            <div className={styles.copy}>
                <h1>{heading}</h1>
                <p>{subHeading}</p>
            </div>
            <div></div>
        </div>
      </div>
      <Wave className={styles.wave}/>
    </section>
  );
}
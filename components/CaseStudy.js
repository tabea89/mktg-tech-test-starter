import styles from "../styles/CaseStudy.module.scss"
import InfoBox from "./InfoBox"

export default function CaseStudy(props) {
  const {content} = props.caseStudy

  return (
    <section className="wrapper">
      <div className={styles.casestudy}>
        <div className={styles.case} dangerouslySetInnerHTML={{ __html: content }}></div>
        <InfoBox/>
      </div>
    </section>
  );
}
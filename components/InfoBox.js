import styles from "../styles/InfoBox.module.scss"
import Logo from "../assets/T-Mobile_logo.svg"

export default function InfoBox() {
  return (
    <div>
      <div className={styles.box}>
        <Logo></Logo>
        <dl>
          <dt>Industry:</dt>
          <dd>Mobile telecommunication</dd>

          <dt>Location:</dt>
          <dd>Bellevue, Washington, USA</dd>

          <dt>Employees:</dt>
          <dd>52,000</dd>

          <dt>Revenue:</dt>
          <dd>$78B 2021 Analyst Projection</dd>
        </dl>
      </div>
    </div>
  );
}
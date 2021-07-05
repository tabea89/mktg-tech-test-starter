import styles from "../styles/Newsletter.module.scss"

export default function Newsletter() {

  return (
    <div className={styles.newsletter}>
      <div>
        <h4>Join our community newsletter</h4>
        <span>Stay up to date with the latest news from the Rasa community</span>
      </div>

      <div className={styles.form}>
        <form>
          <label className={styles.label} htmlFor="fname">Your email address</label>
          <input className={styles.input} type="text" id="fname" name="fname" placeholder="Your email address"/>
        </form>
        <button className={styles.btn} type="submit" form="" value="Submit">Submit</button>
      </div>
    </div>
  );
}
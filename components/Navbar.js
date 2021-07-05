import logo from "../assets/rasa_horizontal_logo_white.svg"
import styles from "./Navbar.module.scss"
import links from "../data/site-header-links.json"

export default function Navbar() {
  const dropdownBtn = links.pop()
  
  return (
    <nav className={styles.nav}>
      <a href="https://rasa.com/">
        <img className={styles.logo} src={logo} alt="Rasa Logo" />
      </a>

      <ul className={styles.links}>
        {links.map(function (link, idx) {
          return (<li className={styles.link} key={idx}>
            {link.text}
          </li>)
        })}
      </ul>

      <button className={styles.dropdownBtn}>
        {dropdownBtn.text}
        <div className={styles.dropdownBtn__icon}></div>
      </button>
    </nav>
  );
}
import styles from "../styles/Footer.module.scss"
import Logo from "../assets/rasa_logo_square_purple.svg"
import items from "../data/site-footer-links.json"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo className={styles.logo}/>

      <div className={styles.links}>
        {items.map(function (item, idx) {
          return (<div className={styles.item} key={idx}>
              <h4>{item.text}</h4>
              <ul>
                {item.items.map(function (link, index) {
                  return (
                    <li>
                      <a href={link.href} className={styles.link} key={index}>
                        {link.text}
                      </a>
                    </li>)
                })}
              </ul>
            </div>)
        })}
      </div>
    </footer>
  );
}
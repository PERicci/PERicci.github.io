import logo from '../../assets/logo_transparentbg.png'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.header__logoContainer}>
        <img src={logo} alt="logo" className={styles.header__logo} />
      </a>
      <div className="header__navbar">
        <ul className={styles.header__list}>
          <li className="header__item">
            <a href="/projects">Projects</a>
          </li>
          <li className="header__item">
            <a href="/skills">Skills</a>
          </li>
          <li className="header__item">
            <a href="/about">About me</a>
          </li>
          <li className="header__item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </header >
  )
}
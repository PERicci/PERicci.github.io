import styles from './Footer.module.css'
import linkedinLogo from '../../assets/linkedin.png'
import githubLogo from '../../assets/github.png'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__socials}>
        <a target='_blank' href="https://github.com/PERicci"><img src={githubLogo} alt="Github" /></a>
        <a target='_blank' href="https://www.linkedin.com/in/pedro-ricciardi/"><img src={linkedinLogo} alt="Linkedin" /></a>
      </div>
      <div className={styles.footer__madeby}>
        <p>Made by <a target='_blank' href="https://github.com/PERicci">Pedro Ricciardi</a></p>
      </div>
      <div className={styles.footer__contacts}>
        <a href="mailto:riccip@outlook.com">riccip@oulook.com</a>
        <a href="tel:+447598138882">+44 75 9813-8882</a>
      </div>
    </footer>
  )
}
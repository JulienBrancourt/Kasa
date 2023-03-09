import styles from './Footer.module.css'
import logo from '../../assets/LogoFooter.png'

function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt="Logo Kasa du footer" className={styles.logo}/>
            <div>© 2020 Kasa. All rights reserved</div>
        </footer>
    )
}

export default Footer

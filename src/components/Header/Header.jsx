import { Link } from 'react-router-dom'
import logo from '../../assets/LogoHeader.png'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt='Logo Kasa du header' className={styles.logo}/>
            <nav className={styles.nav}>
                <Link to="/" className={styles.accueil}>Accueil</Link>
                <Link to="/aPropos" className={styles.about}>A Propos</Link>
            </nav>
        </header>
        
    )
}

export default Header
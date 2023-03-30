import { NavLink } from 'react-router-dom'
import logo from '../../assets/LogoHeader.png'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt='Logo Kasa du header' className={styles.logo}/>
            <nav className={styles.nav}>
                <NavLink 
                    // exact={true} 
                    to="/" 
                    className={({isActive}) => (
                        isActive ? styles.accueilsouligne : styles.accueil)}
                    >
                    Accueil
                </NavLink>
                <NavLink 
                    // exact={true} 
                    to="/a-propos/" 
                    className={({isActive}) => (
                        isActive ? styles.aboutsouligne : styles.about)} 
                    >
                    A Propos
                </NavLink>
            </nav>
        </header>
        
    )
}

export default Header



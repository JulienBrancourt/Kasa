// import { useLocation } from 'react-router-dom'
// import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/LogoHeader.png'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt='Logo Kasa du header' className={styles.logo}/>
            <nav className={styles.nav}>
                <NavLink 
                    exact to="/" 
                    className={({isActive}) => (
                        isActive ? styles.accueilsouligne : styles.accueil)}
                    strict="true">
                    Accueil
                </NavLink>
                <NavLink 
                    exact to="/a-propos/" 
                    className={({isActive}) => (
                        isActive ? styles.aboutsouligne : styles.about)} 
                    strict="true">
                    A Propos
                </NavLink>
            </nav>
        </header>
        
    )
}

export default Header
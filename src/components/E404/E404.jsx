import { Link } from 'react-router-dom'
import styles from "./E404.module.css"

function E404 () {
    return (
    
        <div className={styles.container}>  
          <div className={styles.chiffre}>404</div>
          <div className={styles.message}>Oups! La page que vous demandez n'existe pas.</div>
          <Link to="/" className={styles.lien}>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default E404
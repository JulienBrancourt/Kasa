import { useState } from "react"
import VectorDown from '../../assets/VectorDown.svg'
import styles from './Collapse.module.css'

function Collapse (props) {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className={styles.container}>
            {/* ajout de l'evenement onToggle de l'element details pour detecter le changement d'etat de la section */}
            <details 
                open={isOpen} //le contenu supplémentaire est initialement masqué car égal à isOpen
                onToggle={(e) => setIsOpen(e.target.open)} //e.target.open correspond à l'état actuel
                className={styles.details}
                >
                <summary className={styles.entete}>
                    <p className={styles.titre}>{props.titre}</p>
                    <img 
                        src={VectorDown}
                        alt={isOpen ? "flèche haut" : "flèche bas"} 
                        className={`${styles.fleche} ${isOpen ? styles.rotate : styles.rotateInverse}`} 
                    />
                </summary>
                {/* le texte aura une opacité 0, si isOpen il aura une opacité 0 qui passera à 1 */}
                <div className={`${styles.texte} ${isOpen ? styles.visible : styles.cache}`}>
                    <p>{props.description}</p>
                </div>
            </details>
        </div>
    )
}

export default Collapse

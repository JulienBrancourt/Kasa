import { useState } from "react"
import VectorUp from '../../assets/VectorUp.svg'
import VectorDown from '../../assets/VectorDown.svg'
import styles from './Collapse.module.css'

function Collapse (props) {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
        <div className={styles.container}>
            <div onClick={() => {isOpen ? setIsOpen(false) : setIsOpen(true)}} className={styles.entete}>
                <p className={styles.titre}>{props.titre}</p>
                {isOpen ? <img src={VectorUp} alt="flèche haut" className={styles.fleche} />: <img src={VectorDown} alt="flèche bas" className={styles.fleche} /> }


            </div>
            {isOpen && (
            <div className={styles.texte}>
                <p>{props.description}</p>
            </div>
            )}
        </div>
    )
}

export default Collapse
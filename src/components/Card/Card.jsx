import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import styles from './Card.module.css'

function Card() {
//on utilise le hook usestate pour définir la variable d'état local logements et setLogement pour la mettre à jour + re-render
const [logements, setLogements] = useState([])

//on fait un fetch sur les données
useEffect(() => {
    fetch('/datas/logements.json')
        .then(response => response.json())
//on prends les données et on maj grâce à setLogements
        .then(data => setLogements(data))
        .catch(error => console.error(error))
//tableau de dépendance vide pour exécuter le useEffect uniquement après le 1er render
},[])

return (
    <div className={styles.Card}>
        {logements.map(logement => (
            <div key={logement.id} className={styles.vignette}>
                <Link to={`/fiche-logement/${logement.id}`}>
                    <img src={logement.cover} alt={logement.title} className={styles.cover}/>
                    <div className={styles.filtre}></div>
                    <h2 className={styles.title}>{logement.title}</h2>
                </Link>
            </div>
        
        ))}
    </div>
)
}

export default Card
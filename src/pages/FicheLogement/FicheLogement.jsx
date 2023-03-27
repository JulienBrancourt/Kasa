import Carousel from "../../components/Carousel/Carousel"
import Collapse from "../../components/Collapse/Collapse"
import Rating from "../../components/Rating/Rating"
import Loader from "../../components/Loader/Loader"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import styles from './FicheLogement.module.css'

function FicheLogement() {
  const {id} = useParams()
//on va stocker le contenu du fetch dans logement
  const [logement, setLogement] = useState(null)

  const [isLoading, setIsLoading] = useState(true) // Ajout de l'état isLoading

  const navigate = useNavigate() // permet de créer une fonction de navigation

  useEffect(() => {
    fetch(`/datas/logements.json`)
      .then(response => response.json())
      .then(data => {
//on cherche dans le tableau "data" l'objet logement dont l'id est indiqué dans l'url
        const logement = data.find(logement => logement.id === id)
        
        setLogement(logement)
        setIsLoading(false) // Changement de l'état isLoading une fois les données chargées
        document.title = `Kasa : ${logement.title}`
      })
      .catch(error => {
        console.error(error)
        setLogement(null)
        setIsLoading(false) // Changement de l'état isLoading en cas d'erreur
      })
  }, [id])

  if (isLoading) {
    return (
    <div><Loader /></div>
    )
  }

  if (!logement) {
    return (
      navigate('/erreur')//redirection vers la page Erreur
    )
  }

  

  return (
    <div className={styles.container}>

      <Carousel images={logement.pictures} />

      <div className={styles.infosGlobales}>

        <div className={styles.presentation}>
          <h1 className={styles.title}>{logement.title}</h1>
          <p className={styles.localisation}>{logement.location}</p>
          {logement.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        
        <div className={styles.hoteNotation}>
          <div className={styles.infosHote}>
            <div className={styles.hote}>
              <p className={styles.hostName}>{logement.host.name}</p>
            </div>
            <div className={styles.cerclehost}>
              <img src={logement.host.picture} alt={logement.host.name} className={styles.photoHost}/>
            </div>
          </div>
          <Rating className={styles.notes}
            note= {logement.rating}
          />  
        </div>
      </div>

      <div className={styles.zonecollapse}>
        <div className={styles.collapse}>
          <Collapse 
            titre="Description"
            description = {logement.description}
          />
        </div>
        <div className={styles.collapse}>
          <Collapse 
            titre="Equipements"
            description = {logement.equipments.map((equipement,index) =>(
              <li key={index} className={styles.liste}>{equipement}</li>
            ))}
          />
        </div>
      </div>
    </div>
  )
}
  
export default FicheLogement
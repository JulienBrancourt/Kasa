import Banner from '../../components/Banner/Banner'
import BannerImageAbout from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png'
import Collapse from '../../components/Collapse/Collapse'
import styles from './APropos.module.css'
import { useEffect } from 'react'

function APropos() {
  useEffect(() => {
    document.title = `Kasa : A propos`
  })
  
  return (
  <div className={styles.container}>
    <Banner sourceImage={BannerImageAbout} texteAltImage="Forêt avec des montagnes en arrière-plan"/>
    <div className={styles.zoneCollapse}>
      <div className={styles.collapse}>
        <Collapse 
          titre="Fiabilité" 
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."            
        />
      </div>
      <div className={styles.collapse}>
        <Collapse
          titre="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
        />
      </div>
      <div className={styles.collapse}>
        <Collapse
          titre="Service"
          description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." 
        />
      </div>
      <div className={styles.collapse}>
        <Collapse
          titre="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." 
        />
      </div>
    </div>
  </div>
  )
}
  
export default APropos
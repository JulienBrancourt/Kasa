import { useState } from "react"
import flechePrecedente from '../../assets/Vectorprev.png'
import flecheSuivante from '../../assets/Vectornext.png'
import styles from './Carousel.module.css'

function Carousel ({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    //les fonctions precedente et suivante appelent setcurrentImageIndex pour mettre à jour l'index de l'image affichée
    function Precedente() {
    //si l'image actuelle est à l'index 0 alors newIndex sera la dernière image, sinon newIndex sera currentIndex -1
      const newIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1
    //puis on maj currentIndex qui devient newIndex grâce à SetCurrentImageIndex
      setCurrentImageIndex(newIndex)
    }
  
    function Suivante() {
      const newIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1
      setCurrentImageIndex(newIndex)
    }
  
    return (
      <div className={styles.carousel}>
        <img src={images[currentImageIndex]} alt="carousel" className={styles.image} />
        {images.length > 1 && (
          <div className={styles.details}>
            <div className={styles.buttons}>
              <img src={flechePrecedente} alt="précédent" onClick={Precedente} className={styles.flecheg}/>
              <img src={flecheSuivante} alt="suivant" onClick={Suivante} className={styles.fleched}/>
            </div>
            <div className={styles.compteur}>
              <p>{currentImageIndex+1}/{images.length}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
  
export default Carousel
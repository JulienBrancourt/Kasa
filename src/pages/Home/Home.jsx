import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'
import styles from './Home.module.css'
import BannerImageHome from '../../assets/IMGBanner.png'
import { useEffect } from 'react'


function Home() {
  useEffect(() => {
    document.title = `Kasa : Accueil`
  })
  
  return (
  <div className={styles.container}> 
{/* on utilise les props renseignées dans Banner, après avoir importé l'image */}
  <Banner sourceImage={BannerImageHome} texteAltImage="une plage et de la forêt" Titre="Chez vous, partout et ailleurs"/>
  <section className={styles.blocCards}>
    <Card />
  </section>
  </div>  
  )
}

export default Home
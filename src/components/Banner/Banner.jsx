import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import styles from './Banner.module.css'


//on passe la src de l'image et la présence du titre en props pour pouvoir personnaliser Banner en fonction de la page
function Banner(props) {
    const [homePage, setHomePage] = useState(false)
    const location = useLocation()

    useEffect(() => {
		if(location.pathname === '/'){
			setHomePage(true)
		};

	},[location.pathname])

    return (
        <div className={homePage ? styles.containerHome : styles.containerApropos}>
            <img src={props.sourceImage} alt={props.texteAltImage} className={styles.imageBanner} />
            <div className={styles.filtre}></div>
{/* condition à mettre entre accolades : si on a props.Titre alors on affiche h1 */}
            {props.Titre && <h1 className={styles.titre}>{props.Titre}</h1>}
        </div>
    )
}

export default Banner;
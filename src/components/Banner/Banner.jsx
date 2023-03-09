import styles from './Banner.module.css'

//on passe la src de l'image et la présence du titre en props pour pouvoir personnaliser Banner en fonction de la page
function Banner(props) {
    return (
        <div className={styles.container}>
            <img src={props.sourceImage} alt={props.texteAltImage} className={styles.imageBanner} />
            <div className={styles.filtre}></div>
{/* condition à mettre entre accolades : si on a props.Titre alors on affiche h1 */}
            {props.Titre && <h1 className={styles.titre}>{props.Titre}</h1>}
        </div>
    )
}

export default Banner;
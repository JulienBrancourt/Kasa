import star from "../../assets/star_rate-24px 5color.png"
import stargrey from "../../assets/star_rate-24px 2gris.png"
import styles from "./Rating.module.css"

function Rating({ note }) {
    const range = [1, 2, 3, 4, 5]

    return (
        <div className={styles.container}>
            {range.map((rangeElement) =>
                <span key={rangeElement}>
                    { note >= rangeElement 
                        ? <img className={styles.etoile} src={star} alt="étoile" /> 
                        : <img className={styles.etoile} src={stargrey} alt="étoile grisée"/>
                    }
                </span>
            )}
        </div>
    )
}

export default Rating
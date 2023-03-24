import styles from "./Loader.module.css"

function Loader() {
    return (
        <div className={styles.loader}>
            <div className={styles.bloc}>
                <div className={styles.l}>L</div>
                <div className={styles.outter}>
                    <div className={styles.mid}>
        
                    </div>
                </div>
                <div className={styles.ading}>ADING</div>
            </div>

        </div>
    )  

}

export default Loader
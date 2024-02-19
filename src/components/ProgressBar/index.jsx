import styles from "./progressBar.module.css";

export default function ProgressBar({ title, percent }) {
    return (
        <div className={styles.progressContainer}>
            <div className={styles.progressTexts} >
                <h4>{ title }</h4>
                <p>{ percent }</p>
            </div>

            <div className={styles.progress}>
                <div className={styles.progressBar} style={{width: percent}}></div>
            </div>
      </div>
    );
}
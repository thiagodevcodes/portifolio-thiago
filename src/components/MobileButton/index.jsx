import styles from "./MobileButton.module.css"

export default function MobileButton({ setActive, active }) {
    const handleClick = () => {
        setActive(!active)
    }

    return (
        <button className={styles.button} onClick={handleClick}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </button>
    );
}
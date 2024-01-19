import styles from "./Section.module.css";

export default function Section({ id, children, color, height, width, flexDirection }) {
    return (
        <section id={id} className={styles.container} style={{backgroundColor: color, height: height, width: width, flexDirection: flexDirection}} >
            { children }
        </section>
    );
}
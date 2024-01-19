import styles from "./Header.module.css";

export default function Header({ children }) {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="/img/tag-html.png" alt="" />
            { children }
        </header>
    );
}
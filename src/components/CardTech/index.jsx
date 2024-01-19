import styles from "./CardTech.module.css"
import Link from "next/link";

export default function CardTech({ title, description, href }) {
    return (
        <div className={styles.container}>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <Link href={href} target="_blank">Acessar</Link>
        </div>
    );
}
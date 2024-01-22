import styles from "./CardTech.module.css"
import Image from "next/image";
import Link from "next/link";

export default function CardTech({ title, description, img, children}) {
    return (
        <div className={styles.container}>
            <div>
                <Image alt="" width={250} height={120} src={img}/>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            { children }
        </div>
    );
}
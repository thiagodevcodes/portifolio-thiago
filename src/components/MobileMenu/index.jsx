import styles from "./MobileMenu.module.css";
import { Link } from "react-scroll";

export default function MobileMenu ({ setActive, active }) {
    return (
        <div className={`${styles.container} ${active ? styles.open : ""}`} >
            <Link onClick={() => setActive(!active)} smooth={true} duration={500} to="about">Sobre</Link>
            <Link onClick={() => setActive(!active)} smooth={true} duration={500} to="tech">Tecnologias</Link>
            <Link onClick={() => setActive(!active)} smooth={true} duration={500} to="project">Projetos</Link>
            <Link onClick={() => setActive(!active)} smooth={true} duration={500} to="contact">Contato</Link>
        </div>
    );
}
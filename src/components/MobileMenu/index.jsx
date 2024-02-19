import styles from "./MobileMenu.module.css";
import { Link } from "react-scroll";

export default function MobileMenu ({ setActive, active }) {
    return (
        <div className={`${styles.container} ${active ? styles.open : ""}`} >
            <Link onClick={() => setActive(!active)} smooth={true} duration={500} offset={-30} to="about">Sobre</Link>
            <Link onClick={() => setActive(!active)} smooth={true} duration={500} offset={-30} to="tech">Tecnologias</Link>
            <Link onClick={() => setActive(!active)} smooth={true} duration={500} offset={-30} to="project">Projetos</Link>
            <Link onClick={() => setActive(!active)} smooth={true} duration={500} offset={-30} to="contact">Contato</Link>
        </div>
    );
}
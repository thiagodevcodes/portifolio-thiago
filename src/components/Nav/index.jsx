import styles from "./Nav.module.css";
import { Link } from "react-scroll";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link smooth={true} duration={500} to="about">Sobre</Link>
                </li>
                <li>
                    <Link smooth={true} duration={500} to="tech">Tecnologias</Link>
                </li>
                <li>
                    <Link smooth={true} duration={500} to="project">Projetos</Link>
                </li>
                <li>
                    <Link smooth={true} duration={500} to="contact">Contato</Link>
                </li>
            </ul>
        </nav>
    );
}
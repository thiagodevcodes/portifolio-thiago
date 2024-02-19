import styles from "./Nav.module.css";
import { Link } from "react-scroll";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link smooth={true} duration={500} to="about" offset={-30} >Sobre</Link>
                </li>
                <li>
                    <Link smooth={true} duration={500} to="tech" offset={-30} >Tecnologias</Link>
                </li>
                <li>
                    <Link smooth={true} duration={500} to="project" offset={-30} >Projetos</Link>
                </li>
                <li>
                    <Link smooth={true} duration={500} to="contact" offset={-30} >Contato</Link>
                </li>
            </ul>
        </nav>
    );
}
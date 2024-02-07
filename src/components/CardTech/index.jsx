import styles from "./CardTech.module.css"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CardTech({ title, description, img, children}) {
    const [larguraDaTela, setLarguraDaTela] = useState(0);

    useEffect(() => {
        const handleResize = () => {
          setLarguraDaTela(window.innerWidth);
        };
    
        if (typeof window !== 'undefined') {
          window.addEventListener('resize', handleResize);
    
          setLarguraDaTela(window.innerWidth);
    
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }
      }, [])

    return (
        <div className={styles.container}>
            <div>
                {larguraDaTela > 500 ? <Image alt="" width={250} height={120} src={img}/> : null }
                
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            { children }
        </div>
    );
}
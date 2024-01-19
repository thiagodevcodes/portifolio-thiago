import Header from "@/components/Header";
import Head from 'next/head';
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import Link from "next/link";
import CardTech from "@/components/CardTech";
import MobileButton from "@/components/MobileButton";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  const [larguraDaTela, setLarguraDaTela] = useState(0);
  const [active, setActive] = useState(false);

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
    <>
      <Head>
        <title>Portifolio - Thiago Silva</title>
        <link rel="icon" href="/img/tag-html.png" type="image/x-icon"></link>
      </Head>
      <Header>
        { larguraDaTela > 915 ? <Nav/> : <MobileButton setActive={setActive} active={active}/> }   
      </Header>

      {active && <MobileMenu setActive={setActive} active={active}/>}

      <Section id="about" color="#1b1b1b" height={larguraDaTela > 915 ? "100vh" : null}>
        <div className={styles.containerAbout}>
          <Image alt="" className={styles.img} width={300} height={300} src="/img/foto.jpg" priority/>
          <div className={styles.aboutTexts}>
            <h2 className={styles.colorBlue}>OLÁ, SOU</h2>
            <h2 className={styles.colorWhite}>THIAGO SILVA RODRIGUES</h2>
            <h2 className={styles.colorBlue}>DESENVOLVEDOR WEB</h2>
            <p>Sou amante da área da tecnologia e este é meu portifólio com 
              alguns mini projetos que desenvolvi, sou formando em faculdade 
              de análise e desenvolvimento de sistemas, estou sempre buscando evoluir na área e 
              tenho disposição para aprender e seguir aprimorando meus conhecimentos, 
              atualmente com foco no desenvolvimento web e estou à procura de uma oportunidade.
            </p>
          </div>
        </div>
      </Section>

      <Section id="tech" color="black" flexDirection={"column"}> 
        <div className={styles.containerTech}>
          <h2 className={styles.colorWhite} style={{fontSize: "25pt"}} >Tecnologias</h2>
          <div>          
            <Image alt="" width={70} height={70} src="/img/html-5.png"/> 
            <Image alt="" width={70} height={70} src="/img/css-3.png"/>
            <Image alt="" width={70} height={70} src="/img/js.png"/>
            <Image alt="" width={70} height={70} src="/img/nodejs.png"/>
            <Image alt="" width={70} height={70} src="/img/java.png"/>
            <Image alt="" width={70} height={70} src="/img/mysql.png"/>
            <Image alt="" width={70} height={70} src="/img/spring.png"/> 
          </div>
        </div>
      </Section>

      <Section id="project" color="#1b1b1b" flexDirection={"column"}>
        <div className={styles.containerProject}>
          <h2 className={styles.colorWhite} style={{fontSize: "25pt" }}>Projetos</h2>
          <div>     
            <CardTech href={"https://github.com/thiagodevcodes/ytdownloader"} title="YouTube Downloader" description="Uma aplicação web para baixar vídeos ou músicas do YouTube utilizando HTML, CSS e JavaScript/NodeJS."/>
            <CardTech href={"https://github.com/thiagodevcodes/netflix"} title="Clone Página Netflix" description="Um clone da landing page da Netflix criado somente com HTML e CSS."/>
            <CardTech href={"https://github.com/thiagodevcodes/orcamento-publico"} title="Sistema de Orçamento" description="Uma aplicação web para orçamentos públicos feita com Java, Spring Boot, React e NextJS."/>
            <CardTech href={"https://github.com/thiagodevcodes/portifolio-thiago"} title="Portifólio" description="Um portifolio de apresentação utilizando as tecnologias de front-end NextJS, React, JavaScript e CSS."/>
          </div>
        </div>
      </Section>

      <Section id="contact" >
        <div className={styles.containerContact}>
          <div className={styles.contactTexts}>
            <h2>Contato</h2>
            <p>E-mail: euthiagosrodrigues@gmail.com</p>
            <p>Telefone: +55 79 98867-4823</p>
          </div>

          <div className={styles.contactLinks}>
            <Link target="_blank" href="https://github.com/thiagodevcodes">
              <Image alt="" width={50} height={50} src="/img/github.png" />
            </Link>
            <Link target="_blank" href="https://wa.me/5579988674823">
              <Image alt="" width={50} height={50} src="/img/whatsapp.png" />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/thiagosilvaweb/">
              <Image alt="" width={50} height={50} src="/img/linkedin.png" />
            </Link>     
          </div>
        </div>
      </Section>
    </>
  )
}

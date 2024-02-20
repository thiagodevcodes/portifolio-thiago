import Header from "@/components/Header";
import Head from 'next/head';
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import Link from "next/link";
import CardTech from "@/components/CardTech";
import MobileButton from "@/components/MobileButton";
import ProgressBar from "@/components/ProgressBar";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import MobileMenu from "@/components/MobileMenu";
import Slider from "react-slick";

export default function Home() {
  const [larguraDaTela, setLarguraDaTela] = useState(0);
  const [active, setActive] = useState(false);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
    <div className="fade-in">
      <Head>
        <title>Portifolio - Thiago Silva</title>
        <link rel="icon" href="/img/tag-html.png" type="image/x-icon"></link>
      </Head>

      <Header>
        {larguraDaTela > 915 ? <Nav /> : <MobileButton setActive={setActive} active={active} />}
      </Header>

      {larguraDaTela < 915 && <MobileMenu setActive={setActive} active={active} />}

      <Section id="about" color="#1b1b1b" height={larguraDaTela > 915 ? "100vh" : "100%"}>
        <div className={styles.containerAbout}>
          <Image alt="foto de thiago" className={styles.img} width={300} height={300} src="/img/foto.jpg" priority />
          <div className={styles.aboutTexts}>
            <h2 className={styles.colorBlue}>OLÁ, SOU</h2>
            <h2 className={styles.colorWhite}>THIAGO SILVA RODRIGUES</h2>
            <h2 className={styles.colorBlue}>DESENVOLVEDOR WEB</h2>
            <p>Sou entusiasta da área da tecnologia e este é meu portifólio com
              alguns mini projetos que desenvolvi, me formei recentemente em análise e desenvolvimento de sistemas, estou sempre buscando evoluir na área e
              tenho disposição para aprender e seguir aprimorando meus conhecimentos,
              atualmente com foco no desenvolvimento web e estou à procura de uma oportunidade.
            </p>
          </div>

        </div>
      </Section>

      <Section color="black">
        <div className={styles.containerEdu}>
          <h2>Formação</h2>
          <br />
          <ul>
            <li>
              <Image alt="imagem de um celular conectado a internet" width={100} height={100} src={"/img/internet.png"}></Image>
              <p><strong>Informática para Internet</strong></p>
              <p>Curso Técnico</p>
              <p>C.E.E.P. José Figueireiro Barreto</p>
              <p>Ano de Conclusão: 2022</p>
            </li>

            <li>
              <Image alt="imagem de um computador" width={100} height={100} src={"/img/computer.png"}></Image>
              <p><strong>Análise e Desenvolvimeto de Sistemas</strong></p>
              <p>Curso Superior</p>
              <p>Instituto Federal de Sergipe</p>
              <p>Ano de Conclusão: 2024</p>
            </li>
          </ul>
        </div>
      </Section>

      <Section color="black" id={"tech"}>
        <div className={styles.containerTech}>
          <h2 className={styles.colorWhite}>Tecnologias</h2>

          <div className={styles.containerBar}>
            <div className={styles.techGraphic}>
              <h2>Front-end</h2>
              <br />
              <ProgressBar percent="70%" title="JavaScript"/>
              <ProgressBar percent="80%" title="CSS"/>
              <ProgressBar percent="90%" title="HTML"/>
              <ProgressBar percent="60%" title="ReactJS"/>
              <ProgressBar percent="40%" title="NextJS"/>
            </div>

            <div className={styles.techGraphic}>
              <h2>Back-end</h2>
              <br />
              <ProgressBar percent="50%" title="Java"/>
              <ProgressBar percent="50%" title="Spring Boot"/>
              <ProgressBar percent="70%" title="NodeJS"/>
              <ProgressBar percent="70%" title="ExpressJS"/>

            </div>
            
          </div>
        </div>
      </Section>

      <section id="project" style={{ backgroundColor: "#1b1b1b" }}>
        <div className={styles.sliderContainer}>
          <h2 className={styles.colorWhite} style={{ fontSize: "25pt" }} >Projetos</h2>

          <div className={styles.slider}>
            <Slider {...settings}>
              <div className={styles.itemSlide}>
                <CardTech img="/img/tela-netflix.png" title="Clone Página Netflix" description="Um clone da landing page da Netflix criado somente com HTML e CSS.">
                  <div>
                    <Link target="_blank" href="https://github.com/thiagodevcodes/netflix">Código Fonte</Link>
                    <Link target="_blank" href="https://streamnetclone.netlify.app/">Acessar</Link>
                  </div>
                </CardTech>
              </div>

              <div className={styles.itemSlide}>
                <CardTech img="/img/tela-orcamento.png" title="Sistema de Orçamento" description="Uma aplicação web para orçamentos públicos feita com Java, Spring Boot, React e NextJS.">
                  <div>
                    <Link target="_blank" href="https://github.com/thiagodevcodes/orcamento-publico">Código Fonte</Link>
                    <Link target="_blank" href="https://orcamento-publico.vercel.app/">Acessar</Link>
                  </div>
                </CardTech>
              </div>

              <div className={styles.itemSlide}>
                <CardTech img="/img/tela-portfolio.png" title="Portifólio" description="Um portifolio utilizando as tecnologias de front-end NextJS, React, JavaScript e CSS.">
                  <div>
                    <Link target="_blank" href="https://github.com/thiagodevcodes/portifolio-thiago">Código Fonte</Link>
                    <Link target="_blank" href="https://thiagodev.vercel.app/">Acessar</Link>
                  </div>
                </CardTech>
              </div>

              <div className={styles.itemSlide}>
                <CardTech img="/img/tela-viagem.png" title="Mundi Viagens" description="Uma landing page com slider utilizando ReactJS + Vite, HTML, JavaScript e CSS.">
                  <div>
                    <Link target="_blank" href="https://github.com/thiagodevcodes/landing-viagem">Código Fonte</Link>
                    <Link target="_blank" href="https://landing-viagem.vercel.app/">Acessar</Link>
                  </div>
                </CardTech>
              </div>
            </Slider>
          </div>
        </div>

      </section>

      <Section id="contact" >
        <div className={styles.containerContact}>
          <div className={styles.contactTexts}>
            <h2>Contato</h2>
            <p>E-mail: euthiagosrodrigues@gmail.com</p>
            <p>Telefone: +55 (79) 98867-4823</p>
          </div>

          <div className={styles.contactLinks}>
            <Link target="_blank" href="https://github.com/thiagodevcodes">
              <Image alt="link do repositório do github" width={50} height={50} src="/img/github.png" />
            </Link>
            <Link target="_blank" href="https://wa.me/5579988674823">
              <Image alt="contato via whatsapp" width={50} height={50} src="/img/whatsapp.png" />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/thiagosilvaweb/">
              <Image alt="link do perfil no linkedin" width={50} height={50} src="/img/linkedin.png" />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}

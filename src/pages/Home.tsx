import Logo from "../assets/darklogo.svg";
import Close from "../assets/Close.svg";
import Menu from "../assets/Menu.svg";
import Star from "../assets/images/star.svg";
import StarOverline from "../assets/images/starOverline.svg";
import App1 from "../assets/images/googleplay.png";
import App2 from "../assets/images/app-store.png";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/section.css"
import { useEffect, useState } from "react";
import Button from "../components/Button";
// import HeroRectangleOne from "../assets/images/rectangleOne.png";
// import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Prototype from "../assets/images/prototype.png";
import "../styles/hero.css";


export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "auto";
        }
    }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">

                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Galleon" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>

                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button secondary text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>



                </nav>
            </header>

            <section id="hero">
                {/* <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" /> */}

                <div className="container content">
                    <h1>Gerencie seus projetos<br /> em um só lugar</h1>
                    <p>A comunidade que reúne os melhores projetos da sua Universidade. <br />Chega de sofrer encontrando colegas de time!
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <div className="content-divider">
                <svg height="100" width="1.5">
                    <rect width="1.5" height="100" style={{ fill: "white" }} />
                </svg>
            </div>

            <section id="solutions">
                <span>
                    <img src={Prototype} alt="imagem mostrando o protótipo escrito 'galleon /br encontre seu projeto'" className="prototype-image" />
                </span>
                <div className="solution-content">
                    <h2>Galleon</h2>
                    <br></br>
                    <h4>Conectando Alunos, Projetos e Oportunidades</h4>
                    <br></br>
                    <p>A melhor comunidade focada em projetos para sua universidade.
                        Encontre uma equipe ou junte-se a uma, e trabalhem juntos para um futuro melhor.</p>
                    <p className="bold-p">Seja parte da mudança. Conecte-se. Colabore. Transforme.</p>
                    <br></br>

                    <div className="small-images">
                        <img src={App1} alt="Imagem pequena 1" className="small-image" />
                        <img src={App2} alt="Imagem pequena 2" className="small-image" />
                    </div>
                </div>
            </section>

            <section className="aligned-text">
                <div>
                    <h3>Encontre Projetos e Equipes</h3>
                    <p>Pesquise por projetos acadêmicos ou extracurriculares que precisam de novas ideias e contribuições.
                        <br></br>
                        Conecte-se com equipes que buscam por integrantes com suas habilidades.</p>

                    <br></br>
                    <br></br>
                    <h3>Divulgue Seus Projetos</h3>
                    <p>Crie visibilidade para seus projetos e recrute colegas com o mesmo interesse.</p>

                    <br></br>
                    <br></br>
                    <h3>Networking Inteligente</h3>
                    <p>Facilite conexões dentro e fora do seu curso, tornando a colaboração entre estudantes mais dinâmica.</p>
                </div>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">Conselho de quem conhece</p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                    Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                    comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>
                <div className="carousel">
                    <div className="carousel-content">
                        <div className="testimony-card">
                            <img src="" alt="Foto perfil cliente"></img>
                            <p>
                            Certamente o mercado chinês de eletricos está bombando, só existe
                            uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço.
                            </p>
                            <span>
                                <img src={Star} alt="Estrela preenchida" width={22} height={20}></img>
                                <img src={Star} alt="Estrela preenchida" width={22} height={20}></img>
                                <img src={Star} alt="Estrela preenchida" width={20} height={20}></img>
                                <img src={Star} alt="Estrela preenchida" width={22} height={20}></img>
                                <img src={StarOverline} alt="Estrela vazada" width={20} height={22}></img>
                            </span>
                            <span>
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>

                            </span>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
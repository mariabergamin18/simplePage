import { useEffect, useState } from "react";

import Logo from "../assets/darklogo.svg";
import Close from "../assets/Close.svg";
import Menu from "../assets/Menu.svg";
import App1 from "../assets/images/googleplay.png";
import App2 from "../assets/images/app-store.png";
import Button from "../components/Button";
import Prototype from "../assets/images/prototype.png";
import TestimonialCard from '../components/TestimonialCard';
import Check from "../assets/images/check.png"

import "../styles/utility.css";
import "../styles/solutions.css";
import "../styles/testimonials.css";
import "../styles/contact.css";
import "../styles/pricing.css"
import "../styles/hero.css"
import "../styles/last.css"
import "../styles/header.css";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    function sendEmail() {
        fetch('api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA1ODg2MTUzNDkxMTkwMTg5ODQyIiwiZW1haWwiOiJkdWRhYmVyZ2FtaW4xOEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InE5Q25zbGhJcWFzZFNTckVfTDlxMUEiLCJuYmYiOjE3MzIzMTQ2ODYsImlhdCI6MTczMjMxNDk4NiwiZXhwIjoxNzMyMzE4NTg2LCJqdGkiOiI0MzAzMGJlZDZhOWY2ODBlOWVkNzMwYTBjOWEwOWFiMmRlOGUzOTg2In0.SWL4YLk4QOtobOW4xfUceeqEQRjtBIkbQekPvrWXRvGR3UMX3uICbTkqJq9A-FLwX4AIcRRRoyEioxHlxW8YXo_g3mhz-6ke7_kAg5P9PmuMZu7bEx4PGUa5XP_7BKS1QxDHmtMHJ9ftcxZZ6Reryf9up7fTSPHuMNh2cOtzApwmrO_0CDxkq_ZXvxFHd2oEPagDmx7aZ4yLT7NM-cF1m1vdPkwlvtdOTXgq_eWEZvt4-_YYlp6EgJW8AfswFLcBGuaKRQYKpVdSVRJFav6BzU2iJFo9Xtkk3sE8zks9jNQdRMoibavcy0DuNp5WSii2k1tLw3EdPquEKaTAf1FrtA',
            },
            body: JSON.stringify({
                toMail: email,
                content: message,
            }),
        })
            .then(res => res.json())
            .then(console.log)
            .catch(error => {
                console.error('Erro ao enviar o e-mail:', error);
            });
    }

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
                <div className="column">
                    <h3>Encontre Projetos e Equipes</h3>
                    <p>Pesquise por projetos acadêmicos ou extracurriculares que precisam de novas ideias e contribuições.</p>
                </div>
                <div className="column">
                    <h3>Divulgue Seus Projetos</h3>
                    <p>Crie visibilidade para seus projetos e recrute colegas com o mesmo interesse.</p>
                </div>
                <div className="column">
                    <h3>Networking Inteligente</h3>
                    <p>Facilite conexões dentro e fora do seu curso, tornando a colaboração entre estudantes mais dinâmica.</p>
                </div>
            </section>


            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            O que os estudantes estão dizendo
                        </p>
                        <h2>Comentários sobre o Galleon</h2>
                    </span>
                    <p>
                        Quem já utilizou sabe da qualidade da nossa comunidade.
                        Estamos deixando para trás a ideia de que encontrar colegas de equipe e gerenciar projetos precisa ser complicado.
                        Confira abaixo os depoimentos de quem já usou e aprovou!
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        <TestimonialCard
                            imgUrl="https://cdn3.pixelcut.app/7/18/profile_photo_maker_hero_100866f715.jpg"
                            nome="Ana"
                            cargo="Estudante de Medicina"
                            testemunho="Antes era um caos encontrar colegas com as mesmas habilidades e objetivos. Agora, consigo me conectar facilmente com pessoas alinhadas ao que eu preciso."
                            rating={1}>
                        </TestimonialCard>
                    </div>

                    <div className="carousel-content">
                        <TestimonialCard
                            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwr_zZjgvmu4BccwDNIHic8K5dyehw7cSYA&s"
                            nome="Carlos"
                            cargo="Estudante de Direito"
                            testemunho="Não só consegui encontrar colegas talentosos, mas também tive a oportunidade de divulgar meu trabalho e atrair pessoas incríveis!"
                            rating={4}>
                        </TestimonialCard>
                    </div>

                    <div className="carousel-content">
                        <TestimonialCard
                            imgUrl="https://st.depositphotos.com/1008939/1316/i/450/depositphotos_13163725-stock-photo-young-man.jpg"
                            nome="Marcos"
                            cargo="Estudante de Engenaria de Software"
                            testemunho="Nunca foi tão fácil gerenciar e participar de projetos na universidade. Recomendo para qualquer estudante que busca colaboração de qualidade."
                            rating={4}>
                        </TestimonialCard>
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>

                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span>
                        <ul className="features">
                            <li>
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
                            </li>
                        </ul>
                    </div>

                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>1º MÊS COM DESCONTO</p>
                        </span>
                        <span className="plan">
                            <h3>Premium</h3>
                            <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Pedir agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Entregas</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>5 Refeições por semana</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Sucos por semana</p>
                        </span>
                    </div>

                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas DonaFrost.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span>
                        <ul className="features">
                            <li>
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Apenas 1 por CPF</p>
                            </li>
                        </ul>
                    </div>
                </section>

            </section>

            <section className="contact">
                <h3 className="contact-subtitle">Envie sua dúvida</h3>
                <h1 className="contact-title">Entre em contato</h1>
                <p className="contact-description">
                    Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento,
                    uma dúvida técnica de algum de nossos produtos. <span>Estamos à disposição para responder 😊</span>
                </p>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="form-input"
                    type="text"
                    placeholder="Motivo do contato:"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendEmail} className="form-button">Enviar</button>

            </section >

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-column">
                        <p className="logo"><img src={Logo} alt="Logo Galleon" width={100} height={50} /></p>
                        <div className="social-links">
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                            <a href="#">YouTube</a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h4>Empresa</h4>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Faça parte do time</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Funcionalidades</h4>
                        <ul>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Análise de dados</a></li>
                            <li><a href="#">Boot discord</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Recursos</h4>
                        <ul>
                            <li><a href="#">iOS & Android</a></li>
                            <li><a href="#">Teste a Demo</a></li>
                            <li><a href="#">Clientes</a></li>
                            <li><a href="#">API</a></li>
                        </ul>
                    </div>
                </div>
                <p className="footer-bottom">
                    Feito com amor na aula de Programação Web💙 ©2024 AktiefTech - Todos os direitos reservados.
                </p>
            </footer>

            {/* <section id="contact">
                <input
                    type="text"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Sua mensagem"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendEmail}>Enviar</button>
            </section> */}

        </>
    )
}
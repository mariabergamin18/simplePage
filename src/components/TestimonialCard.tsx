import Star from "../assets/images/star.svg";
import StarOverline from "../assets/images/starOverline.svg";

interface ITestimonialProps {
    imgUrl: string;
    testemunho: string;
    rating: number; 
    nome: string;
    cargo: string;
}

export default function TestimonialCard(props: ITestimonialProps) {
    return (
        <div className="carousel-card">
            <img src={props.imgUrl} alt="Foto perfil cliente" />
            <span className="testimony">
                <p>{props.testemunho}</p>
            </span>
            <span className="rating">
                {Array.from({ length: 5 }).map((_, index) => (
                    <img
                        key={index}
                        src={index < props.rating ? Star : StarOverline}
                        alt={index < props.rating ? "Estrela preenchida" : "Estrela vazada"}
                        width={22}
                        height={20}
                    />
                ))}
            </span>
            <span>
                <p>{props.nome}</p>
                <p>{props.cargo}</p>
            </span>
        </div>
    );
}

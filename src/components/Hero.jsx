import './Hero.css';
import Background from './imagenes/Background.webp';
import Ensalada from './imagenes/ensalada.jpg';
import Quinoa from './imagenes/quinoa.webp';


const Hero = () => {
    return (
        <div className="hero">
            <div className="slider">
                <img src={Background} alt="Imagen 1" />
                <img src={Ensalada} alt="Imagen 2" />
<               img src={Quinoa} alt="Imagen 3" />

            </div>
            <div className="hero-content">
                <h1>Bienvenido a Fitness Bites</h1>
                <p>Descubre nuestro delicioso menú saludable</p>
                <a href="#menu" className="btn">Ver Menú</a>
            </div>
        </div>
    );
};

export default Hero;

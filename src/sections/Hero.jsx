import '../styles/hero.css';
import FuzzyText from '../effects/FuzzyText';

function Hero() {
    // Definindo as variáveis que faltavam (ajuste os valores conforme necessário)
    const hoverIntensity = 0.5;
    const enableHover = true;

    return (
        <section id='home' className='hero'>
            <FuzzyText 
                baseIntensity={0.2} 
                hoverIntensity={hoverIntensity} 
                enableHover={enableHover}
            >
                Messi
            </FuzzyText>

            <p>Desenvolvedor Front-End & Criador de Experiências Visuais</p>
        </section>
    );
}

export default Hero;
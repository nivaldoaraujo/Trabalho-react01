import './Home.css'
import Cards from "./Cards"
import TextosImagens from "./TextosImagens"
function Home(){
    return(
        <>
        <main id="home">
            <section className="hero container">
            <span className="tag">TECNOLOGIA E INOVAÇÃO</span>
            <h2>Transformando ideias em soluções digitais</h2>
            <p>Desenvolvemos soluções tecnológicas para conectar pessoas, negócios e inovação.</p>
            <img
            className="hero-img"
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200"
            alt="Programador trabalhando com vários monitores"
            />
      </section>
            <Cards />
            <TextosImagens />
        </main>
        </>
    )
}
export default Home
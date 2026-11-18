
import './TextosImagens.css'

function TextosImagens(){
    return(
        <>
    <section id="sobre" className="sobre container">
      <h2>Conheça nossa empresa</h2>
      <div className="sobre-conteudo">
        <div className="sobre-texto">
          <p>
            A TechSolutions acredita que a tecnologia pode transformar o futuro.
            Nossa equipe desenvolve soluções digitais para facilitar processos e
            melhorar resultados.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900"
          alt="Equipe de tecnologia trabalhando em computadores"
        />
      </div>
    </section>
    </>
    )
}
export default TextosImagens
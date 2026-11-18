

import './Cards.css'


function Cards(){
    return(
        <>
    <section id="servicos" className="servicos">
      <div className="container">
        <h2>Nossos serviços</h2>

        <div className="cards-grid">

          <section className="card">
            <span className="card-icone">&lt;/&gt;</span>
            <h3>Desenvolvimento</h3>
            <p>Sistemas e aplicações web.</p>
          </section>

          <section className="card">
            <span className="card-icone">🖌</span>
            <h3>Design</h3>
            <p>Interfaces modernas.</p>
          </section>

          <section className="card">
            <span className="card-icone">🗄</span>
            <h3>Tecnologia</h3>
            <p>Soluções inteligentes.</p>
          </section>

        </div>
      </div>
    </section>
        </>
    )
}
export default Cards
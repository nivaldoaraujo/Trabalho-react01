import './Footer.css'


function Footer(){
    const ano = new Date().getFullYear()
    return(
        <>
       <footer className="footer">
        <h3>TecSolutions - {ano}</h3>
        <p>Todos os direitos reservados.</p>
       </footer>
       <div>

       </div>
        <section>
            
        </section>
        </>
    )
}
export default Footer
import './Header.css'


function Header(){
    return(
        <>
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                <span className="logo-icon">⚙</span>
                <h1>TechSolutions</h1>
            </div>

        <nav className="menu">
          <a href="#home">Home</a>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
        </nav>
      </div>
    </header>
        </>
    )
}
export default Header
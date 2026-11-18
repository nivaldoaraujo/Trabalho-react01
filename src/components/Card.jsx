function Card({icone, titulo, descricao}){
    return (
    <div className="card">
      <span className="card-icone">{icone}</span>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  )
}
export default Card
import { Container } from "../CardMovie/index.js"
import { getImagens } from "../../utils/getImagens.js"
import { useNavigate } from "react-router-dom"

//isShow

function CardMovie({item, text}) {

  const navigate = useNavigate()

function getId(id) {
  if(item) {
       navigate(`/detalhefilmes/${id}`)
  } 

  //Detalhes dos filmes 

  return(
      <Container>
          <img onClick={() => getId(item.id)} src= {getImagens(item.poster_path || item.profile_path || '')}/> 
    <h3>{ text ? item.title || item.name : '' }</h3> 
      </Container>
  )
}
}


export default CardMovie
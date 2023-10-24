import { useNavigate } from "react-router-dom"
import { getImagens } from "../../utils/getImagens"
import { Container } from "./style"

function CardSerie({itemSerie}){
const navigation = useNavigate()

  return(
    <Container>
      <img onClick={() => navigation(`/detailSerie/${itemSerie.id}`)} 
      src={getImagens(itemSerie.poster_path)} />
      <h2>{itemSerie.name}</h2> 
    </Container>
  )
}

export default CardSerie
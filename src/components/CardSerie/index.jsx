import { getImagens } from "../../utils/getImagens"
import { Container } from "./style"

function CardSerie({itemSerie}){
  return(
    <Container>
      <img src={getImagens(itemSerie.poster_path)} />
      <h2>{itemSerie.name}</h2> 
    </Container>
  )
}

export default CardSerie
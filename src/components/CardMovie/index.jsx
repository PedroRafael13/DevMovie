import { getImagens } from "../../utils/getImagens"
import {Container} from "./style"

function CardMovie ({itemMovie}){

  return (
    <Container>
      <img src={getImagens(itemMovie.poster_path )} />
      <h2>{itemMovie.original_title}</h2>
    </Container>
  )
}

export default CardMovie
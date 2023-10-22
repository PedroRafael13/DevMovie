import { useNavigate } from "react-router-dom"
import { getImagens } from "../../utils/getImagens"
import {Container} from "./style"

function CardMovie ({itemMovie}){
const navigation = useNavigate()

  return (
    <Container>
      <img onClick={() => navigation(`/detail/${itemMovie.id}`)} 
      src={getImagens(itemMovie.poster_path )} />
      <h2>{itemMovie.original_title}</h2>
    </Container>
  )
}

export default CardMovie
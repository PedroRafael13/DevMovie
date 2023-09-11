import { getImagens } from "../../utils/getImagens"
import { Container } from "./style"

function Card ({ item }){
console.log(item)

  return (
    <Container>
      <img src={getImagens(item.poster_path || item.profile_path || '')}/>
      <h3>{item.original_title || item.name || ''}</h3>
    </Container>
  )
}

export default Card
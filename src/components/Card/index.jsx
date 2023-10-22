import { useNavigate } from "react-router-dom"
import { getImagens } from "../../utils/getImagens"
import { Container } from "./style"

function Card ({ item }){
const navigation = useNavigate()

  return (
    <Container>
      <img onClick={() => navigation(`/detail/${item.id}`)} src={getImagens(item.poster_path || item.profile_path || '')}/>
      <h3>{item.original_title || item.name || ''}</h3>
    </Container>
  )
}

export default Card
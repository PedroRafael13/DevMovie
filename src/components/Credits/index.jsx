import { getImagens } from "../../utils/getImagens"
import { Container, Title } from "./style"

function Credits ({credits}){

  return (
   <>
    <Title>Créditos</Title>
    {credits && (
    <Container>
      {credits.slice(0, 5).map(artist => (
        <div key={artist.id}>
          <img src={getImagens(artist.profile_path)} />
          <p>{artist.original_name}</p>
        </div>
      ))}
      <div></div>
    </Container>
    )}
   </>
  )
}

export default Credits
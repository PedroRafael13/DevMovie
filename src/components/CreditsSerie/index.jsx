import { Container, Title } from "./styles"
import {getImagens} from "../../utils/getImagens"

function CreditsSerie({creditsSerie}){
  return(
    <>
      <Title>Créditos</Title>
      {creditsSerie && (
      <Container>
        {creditsSerie.slice(0,5).map( artist => (
          <div key={artist.id}>
            <img src={getImagens(artist.profile_path)} />
            <p>{artist.original_name}</p>
          </div>
        ))}
      </Container>
      )}
    </>
  )
}

export default CreditsSerie


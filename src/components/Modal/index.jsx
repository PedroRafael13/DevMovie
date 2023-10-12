import { useEffect, useState } from "react"
import { Background } from "../../containers/Home/styles"


import { getMovie } from "../../services/getData"
import {  Container} from "./style"

function Modal ({movieId, setShowModal }){
  const [movie, setMovie] = useState ()

 useEffect(()=>{
  async function getMovies(){
    setMovie(await getMovie(movieId))
  }

    getMovie()
 }, [])


  return (

    <Background onClick={() => setShowModal(false)}>
      {movie && (
    <Container>
        <h1>X</h1>
      <iframe
        src={`http://www.youtube.com/embed/${movie.key}`}
        title="Trailer Youtube"
        height="500px"
        width="100%"
      ></iframe>
    </Container>
    )}
    </Background>
  )
}

export default Modal
import { useEffect, useState } from "react"
import {  getMovieVideos } from "../../services/getData"

import {  Background, Container} from "./style"

function Modal ({movieId, setShowModal, }){
  const [movie, setMovie] = useState ()

 useEffect(()=>{
  async function getMovies(){
    setMovie(await getMovieVideos(movieId))
  }

    getMovies()
 },[])


  return (

    <Background onClick={() => setShowModal(false)}>
      {movie && (
    <Container>
        <h1>X</h1>
      <iframe
        src={`http://www.youtube.com/embed/${movie[0].key}`}
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
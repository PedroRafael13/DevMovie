import { useEffect, useState } from "react"
//import { Background } from "../../containers/Home/styles"
import api from "../../services/api"
import {  Background, Container } from "./style"

function Modal ({movieId}){
  const [movie, setMovie] = useState ()

 useEffect(()=>{
  async function getMovie (){
    const {data : {results}} = await api.get(`/movie/${movieId}/videos`)
  
    console.log(results[0])
    setMovie(results[0])
  }

    getMovie()
 }, [])


  return (
    <Background>
      {movie && (
    <Container>
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
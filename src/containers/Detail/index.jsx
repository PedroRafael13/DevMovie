import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideo } from "../../services/getData"
import { getImagens } from "../../utils/getImagens"
import {Background, Container } from "./style"

function Detail (){
 const { id } = useParams()
 const [movie, setMovie] = useState() 
 const [movieVideo, setVideo] = useState()
 const [movieCredits, setCredits] = useState()
 const [movieSimilar, setSimilar] = useState()

  useEffect(()=> {
    async function getAllDate (){
      
      Promise.all([
  
          getMovieById(id),
          getMovieVideo(id),
          getMovieCredits(id),
          getMovieSimilar(id),
            
      ]).then(([movie, video, credits, similar]) => {
          console.log({movie, video, credits, similar}) 

          setMovie(movie)
          setVideo(video)
          setCredits(credits)
          setSimilar(similar)

      }).catch((error)=> console.log(error))
      
    }
  
    getAllDate()
  },[] )  


  return (
    <>
    {movie && <Background image={getImagens(movie.backdrop_path)} />}
    <Container>
      <div>Detalhes dos Filmes</div>
    </Container>
    </>
  )
}


export default Detail
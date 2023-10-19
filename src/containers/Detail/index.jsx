import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {getImagens} from "../../utils/getImagens"
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from "../../services/getData"
import { Background,Container, Cover, Info} from "./style"
import SpanGenres from "../../components/SpanGenres"
import Credits from "../../components/Credits"

function Detail (){
const {id} = useParams()
const [movie, setMovie] = useState()
const[movieVideos, setVideos] = useState()
const[movieCredits, setCredits] = useState()
const[movieSimilar, setSimilar] = useState()

  useEffect(() => {
    async function getAllDate() {

      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id)

      ]).then(([movie, videos, credits, similar]) => {
        console.log({ movie, videos, credits, similar })

        setMovie(movie)
        setVideos(videos)
        setCredits(credits)
        setSimilar(similar)

      }).catch((error) => console.log(error))

    }

    getAllDate()

})
  
  return (
    <>
    {movie && (
        <>
          <Background image={getImagens(movie.backdrop_path)} />
      <Container>
      <Cover>
        <img src={getImagens(movie.poster_path)} />
      </Cover>
      <Info>
        <h2>{movie.title}</h2>
        <SpanGenres genres={movie.genres} />
        <p>{movie.overview}</p>
        <Credits credits={movieCredits} />
      </Info>
      </Container>
      </>
    )}
    </>
  )
}

export default Detail
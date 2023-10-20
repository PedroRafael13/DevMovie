
import api from "../../services/api"
import { useState, useEffect } from "react"
import { Container, Background } from "./styles"
import { getImagens } from "../../utils/getImagens"
import SliderMovie from "../../components/SliderMovie"

function Movie () {
const [movieTwo, setMovieTwo] = useState()
const [movieThree, setMovieThree] = useState()
const [movieFour, setMovieFour] = useState()
const [movieFive, setMovieFive] = useState()


useEffect(() => {

  async function getMovieTwo(){
    const {data: {results}} = await api.get('/movie/popular')
    

    setMovieTwo(results[0])
  }

  async function getMovieThree(){
    const {data: {results}} = await api.get('/movie/top_rated')
    

    setMovieThree(results)
  }

  async function getMovieFour(){
    const {data:{results}} = await api.get('/movie/upcoming')
    
    setMovieFour(results)
  }

  async function getMovieFive(){
    const {data:{results}} = await api.get('/movie/now_playing')
    
    setMovieFive(results)
  }
  
  getMovieTwo()
  getMovieThree() 
  getMovieFour()
  getMovieFive()

},[])

  return(

    <>
    {movieTwo && (
    <Background img={getImagens(movieTwo.backdrop_path)}>
    <Container>
       <div>This is Movie</div>
    </Container>
    </Background>
    )}
    {movieThree && <SliderMovie infoMovie={movieThree} titleMovie={"Filmes que todo mundo deveria ver"} />}
    {movieFour && <SliderMovie infoMovie={movieFour} titleMovie={"Acabaram de chegar"} />}
    {movieFive && <SliderMovie infoMovie={movieFive} titleMovie={"Apenas para você"} />}
    </>
  )

}

export default Movie
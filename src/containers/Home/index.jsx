import { useState, useEffect } from "react"
import Button from "../../components/Button"
import Slider from "../../components/Slider"

import api from "../../services/api"
import { Background, Container, ContainerButtons, Info, Poster } from "./styles"

function Home () {

const [movie, setMovie] = useState()
const [topMovie, setTopMovies] = useState()

useEffect(()=> {

  async function getMovies (){
    const {data : {results}} = await api.get('/movie/popular')
  
    setMovie(results[1])
  }

  async function getTopMovies (){
    const {data : {results}} = await api.get('/movie/top_rated')
  
    
    setTopMovies(results)
  }
    
    getMovies()
    getTopMovies()

},[])  

  return(
    <>
      {movie && (
        <Background img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>

        <Container>
          <Info>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>

          <ContainerButtons>
            <Button red>Assista Agora</Button>
            <Button>Assista o Trailer</Button>
          </ContainerButtons>  
          </Info>

          <Poster>
            <img alt="capa-do-filme" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
          </Poster>
          </Container>
        </Background>
      )}

    {topMovie && <Slider info={topMovie} title={'Top Filmes'} />}

    </>
  )

}

export default Home
import { useState, useEffect } from "react"
import Button from "../../components/Button"
import Slider from "../../components/Slider"

import api from "../../services/api"
import { getImagens } from "../../utils/getImagens"
import { Background, Container, ContainerButtons, Info, Poster } from "./styles"

function Home () {

const [movie, setMovie] = useState()
const [topMovie, setTopMovies] = useState()
const [topSeries, setTopSeries] = useState()
const [popularSeries, setSeriesPopular] = useState()
const [popularPeople, setPopularPeople] = useState()

useEffect(()=> {

  async function getMovies (){
    const {data : {results}} = await api.get('/movie/popular')
  
    setMovie(results[1])
  }

  async function getTopMovies (){
    const {data : {results}} = await api.get('/movie/top_rated')
  
    
    setTopMovies(results)
  }

  async function getTopSeries (){
    const {data : {results}} = await api.get('/tv/top_rated')
  
    
    setTopSeries(results)
  }
    
  async function getSeriesPopular (){
    const {data : {results}} = await api.get('/tv/popular')
  
    setSeriesPopular(results)
  }

  async function getPopularPeople (){
    const {data : {results}} = await api.get('/person/popular')
  
    setPopularPeople(results)
  }

    getSeriesPopular()
    getMovies()
    getTopMovies()
    getTopSeries()
    getPopularPeople ()

},[])  

  return(
    <>
      {movie && (
        <Background img={getImagens(movie.backdrop_path)}>

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
            <img alt="capa-do-filme" src={getImagens(movie.poster_path)} />
          </Poster>
          </Container>
        </Background>
      )}

    {topMovie && <Slider info={topMovie} title={'Top Filmes'} />}
    {topSeries && <Slider info={topSeries} title={'Top Series'} />}
    {popularSeries && <Slider info={popularSeries} title={'Series Populares'} />}
    {popularPeople && <Slider info={popularPeople} title={'Atores Populares'} />}

    </>
  )

}

export default Home
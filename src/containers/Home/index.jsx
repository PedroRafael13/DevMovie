import { useState, useEffect } from "react"
import Button from "../../components/Button"
import Slider from "../../components/Slider"

import api from "../../services/api"
import { getImagens } from "../../utils/getImagens"
import { Background, Container, ContainerButtons, Info, Poster } from "./styles"

function Home () {

const [movie, setMovie] = useState()
const [topMovie, setTopMovies] = useState()
const [upcoming, setUpcoming] = useState()
const [topSeries, setTopSeries] = useState()
const [popularSeries, setSeriesPopular] = useState()
const [popularPeople, setPopularPeople] = useState()
const [topAr, setTopAr] = useState()
const [airingToday, setAiringToday] = useState()

useEffect(()=> {

  async function getMovies (){
    const {data : {results}} = await api.get('/movie/popular')
  
    setMovie(results[1])
  }

  async function getTopMovies (){
    const {data : {results}} = await api.get('/movie/top_rated')
  
    
    setTopMovies(results)
  }

  async function getUpcoming (){
    const {data : {results}} = await api.get('/movie/upcoming')
  
    
    setUpcoming(results)
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

  async function getTopAr (){
    const {data : {results}} = await api.get('/tv/on_the_air')
  
    setTopAr(results)
  }

  async function getAiringToday (){
    const {data : {results}} = await api.get('/tv/airing_today')
  
    setAiringToday(results)
  }

    getSeriesPopular()
    getMovies()
    getUpcoming()
    getTopMovies()
    getTopSeries()
    getPopularPeople ()
    getTopAr()
    getAiringToday()

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
    {upcoming && <Slider info={upcoming} title={'Melhores do Cinema'} />}
    {topSeries && <Slider info={topSeries} title={'Top Series'} />}
    {popularSeries && <Slider info={popularSeries} title={'Series Populares'} />}
    {popularPeople && <Slider info={popularPeople} title={'Atores Populares'} />}
    {topAr && <Slider info={topAr} title={'Melhores no Ar'} />}
    {airingToday && <Slider info={airingToday} title={'Melhores em Exebição'} />}

    </>
  )

}

export default Home
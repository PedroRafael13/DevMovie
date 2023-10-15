import { useState, useEffect } from "react"
import Button from "../../components/Button"
import Modal from "../../components/Modal"
import Slider from "../../components/Slider"
import { useNavigate } from "react-router-dom"

import { getImagens } from "../../utils/getImagens"
import { Background, Container, ContainerButtons, Info, Poster } from "./styles"
import { getAiringToday, getBreve, getCertificações, getMovies, getPopularPeople, getSeriesPopular, getTopAr, getTopMovies, getTopSeries, getWantedPeople } from "../../services/getData"

function Home () {

const [showModal, setShowModal] = useState(false)  
const [movie, setMovie] = useState()
const [certificações, setcertificações] = useState()
const [topMovie, setTopMovies] = useState()
const [topSeries, setTopSeries] = useState()
const [popularSeries, setSeriesPopular] = useState()
const [popularPeople, setPopularPeople] = useState()
const [wantedPeople, setWantedPeople] = useState()
const [emBreve, setEmBreve] = useState()
const [topAr, setTopAr] = useState()
const [airingToday, setAiringToday] = useState()
const navigation = useNavigate()

useEffect(()=> {

  async function getAllDate (){

    setMovie(await getMovies())
    setcertificações(await getCertificações())
    setTopMovies(await getTopMovies())
    setTopSeries(await getTopSeries())
    setSeriesPopular(await getSeriesPopular())
    setPopularPeople(await getPopularPeople())
    setWantedPeople(await getWantedPeople())
    setEmBreve(await getBreve())
    setTopAr(await getTopAr())
    setAiringToday(await getAiringToday())
  }

  getAllDate()
},[])  

  return(
    <>
      {movie && (
        <Background img={getImagens(movie.backdrop_path)}>
          {showModal && <Modal movieId={movie.id} setShowModal={setShowModal}/>}

        <Container>
          <Info>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>

          <ContainerButtons>
            <Button onClick={() => navigation(`Detelhes/${movie.id}`)} red>Assista Agora</Button>
            <Button onClick={() => setShowModal(true) } >Assista o Trailer</Button>
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
    {wantedPeople && <Slider info={wantedPeople} title={'Estrelas do Cinema'} />}
    {emBreve && <Slider info={emBreve} title={'Em Breve'} />}
    {topAr && <Slider info={topAr} title={'Melhores no Ar'} />}
    {airingToday && <Slider info={airingToday} title={'Melhores em Exebição'} />}
    {certificações && <Slider info={certificações} title={'Filmes em Cartazes'} />}

    </>
  )

}

export default Home
import { useEffect, useState } from "react"
import SliderSerie from "../../components/SliderSerie"
import api from "../../services/api"
import { getImagens } from "../../utils/getImagens"
import { Container, Background } from "./styles"


function Serie () {
const [serie, setSerie] = useState()
const [seriePopular, setSeriePopular] = useState()
const [serieHere, setSerieHere] = useState()
const [serieKeep, setSerieKeep] = useState()

  useEffect(() => {

    async function getSerie(){
      const {data: {results}} = await api.get('/tv/airing_today')
      
      setSerie(results[2])
    }

    async function getPopular(){
      const {data: {results}} = await api.get('/tv/popular')
      
      setSeriePopular(results)
    }

    async function getSerieHere(){
      const {data: {results}} = await api.get('/tv/top_rated')
      
      setSerieHere(results)
    }

    async function getSerieKeep(){
      const {data: {results}} = await api.get('/tv/on_the_air')
      
      setSerieKeep(results)
    }
    
    getSerie()
    getPopular()
    getSerieHere()
    getSerieKeep()

  },[])
  
   
  return(

    <>
    {serie && (
      <Background img={getImagens(serie.backdrop_path)}>
        <Container>
          <p>This my Series</p>
        </Container>
      </Background>
      )}
      {seriePopular && <SliderSerie infoSerie={seriePopular} titleSerie={"Series Populares"} />}
      {serieHere && <SliderSerie infoSerie={serieHere} titleSerie={"As favoritas da galera"} />}
      {serieKeep && <SliderSerie infoSerie={serieKeep} titleSerie={"Acabaram de chegar"} />}
    </>

  )

}

export default Serie
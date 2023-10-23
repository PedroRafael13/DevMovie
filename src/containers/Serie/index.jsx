import { useEffect, useState } from "react"
import SliderSerie from "../../components/SliderSerie"
import { getPopular, getSerie, getSerieHere, getSerieKeep } from "../../services/getSerie"
import { getImagens } from "../../utils/getImagens"
import { Container, Background, Info, Poster } from "./styles"
import Button from "../../components/Button"
import { ContainerButtons } from "../Home/styles"
import ModalSerie from "../../components/ModalSerie"
import { useNavigate } from "react-router-dom"

function Serie () {

const [serieModal, setShowSerie] = useState(false)
const [serie, setSerie] = useState()
const [seriePopular, setSeriePopular] = useState()
const [serieHere, setSerieHere] = useState()
const [serieKeep, setSerieKeep] = useState()
const navigation = useNavigate()

  useEffect(() => {

    async function getAllDate() {

      Promise.all([
        getSerie(),
        getPopular(),
        getSerieHere(),
        getSerieKeep()

      ]).then(([serie, popular, here, keep]) => {
        
        setSerie(serie)
        setSeriePopular(popular)
        setSerieHere(here)
        setSerieKeep(keep)

      }).catch((error) => console.log(error))

    }

    getAllDate()

  },[])
  
   
  return(

    <>
    {serie && (
      <Background img={getImagens(serie.backdrop_path)}>
        {serieModal && <ModalSerie serieId={serie.id} setShowSerie={setShowSerie} />}

        <Container>        
          <Info> 
            <h1>{serie.name}</h1>
            <p>{serie.overview}</p>

            <ContainerButtons>
              <Button onClick={() => navigation(`/detailSerie/${serie.id}`)} red>Assista Agora</Button>
              <Button onClick={() => setShowSerie(true)} >Veja o trailer</Button>
            </ContainerButtons>
          </Info>   
        <Poster>
            <img src={getImagens(serie.poster_path)} />
        </Poster>
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
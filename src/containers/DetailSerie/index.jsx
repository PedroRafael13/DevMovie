import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SpanGenres from "../../components/SpanGenres"
import { getSeri0eById, getSeriesCredits, getSeriesSimilar, getSerieVideo } from "../../services/getSerie"
import { getImagens } from "../../utils/getImagens"
import { Container, Background, Cover, Info, ContainerSerie} from "./style"

import CreditsSerie from "../../components/CreditsSerie"
import SliderSerie from "../../components/SliderSerie"

function DetailSerie(){
const {id} = useParams()
const [serie, setSerie] = useState() 
const [serieVideo, setSerieVideo] = useState()  
const [serieCredits, setSerieCredits] = useState()  
const [serieSimilar, setSerieSimilar] = useState()   

  useEffect(() => {
    async function getAllDate() {

      Promise.all([
        getSeri0eById(id),
        getSerieVideo(id),
        getSeriesCredits(id),
        getSeriesSimilar(id)

      ]).then(([serie, video, credits, similar ]) => {
        console.log({ serie, video, credits, similar})

        setSerie(serie)
        setSerieVideo(video)
        setSerieCredits(credits)
        setSerieSimilar(similar)

      }).catch((error) => console.log(error))

    }

    getAllDate()

})

  return(
      <>
      {serie && (
        <>
          <Background image={getImagens(serie.backdrop_path)} />
              <Container>
              <Cover>
              <img src={getImagens(serie.poster_path)} />
              </Cover>
              <Info> 
                <h2>{serie.name}</h2>
                <SpanGenres genres={serie.genres} />
                <p>{serie.overview}</p>
                <div>
                  <CreditsSerie creditsSerie={serieCredits} />
                </div>          
              </Info>
            </Container>
            <ContainerSerie>
              {serieVideo && serieVideo.map(videos => (
                <div key={videos.id}>
                  <h4>{videos.name}</h4>
                  <iframe
                      src={`http://www.youtube.com/embed/${videos.key}`}
                      title="Trailer Youtube"
                      height="500px"
                      width="100%"
                  ></iframe>
                </div>
              ))}
            </ContainerSerie>
            {serieSimilar && <SliderSerie infoSerie={serieSimilar} titleSerie={'Series Similares'} />}
        </>
      )}
    </>  
  )
}
export default DetailSerie
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSeri0eById, getSeriesCredits, getSeriesSimilar, getSerieVideo } from "../../services/getSerie"
import { getImagens } from "../../utils/getImagens"
import { Container, Background, Cover, Info} from "./style"

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
                <div>Genero</div>
                <p>{serie.overview}</p>          
              </Info>
            </Container>
        </>
      )}
    </>  
  )
}
export default DetailSerie
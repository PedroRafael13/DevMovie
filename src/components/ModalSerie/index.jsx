import { useEffect, useState } from "react"
import { getSerie} from "../../services/getSerie"

import {  Background, Container} from "./style"

function ModalSerie ({serieId, setShowSerie, }){
  const [serie, setSerie] = useState ()

 useEffect(()=>{
  async function getSeries(){
    setSerie(await getSerie(serieId))
  }

    getSeries()
 },[])

    useEffect(()=> {
      console.log(serie)
    }, [serie])

  return (

    <Background onClick={() => setShowSerie(false)}>
      {serie && (
    <Container>
        <h1>X</h1>
      <iframe
        src={`http://www.youtube.com/embed/${serie[0]}`}
        title="Trailer Youtube"
        height="500px"
        width="100%"
      ></iframe>
    </Container>
    )}
    </Background>
  )
}

export default ModalSerie
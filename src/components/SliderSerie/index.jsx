import {Swiper, SwiperSlide} from "swiper/react"
import CardSerie from "../CardSerie"
import {Container} from "./styles"

function SliderSerie({infoSerie, titleSerie}){
  return(
    <Container>
      <h2>{titleSerie}</h2>
      <Swiper grabCursor
        spaceBetween={10}
        slidesPerView={'auto'}
        className='swiper'>

      {infoSerie.map((itemSerie, indexSerie)=> (
        <SwiperSlide key={indexSerie}>
          <CardSerie itemSerie={itemSerie} />
        </SwiperSlide>
      ))}  
      </Swiper>
    </Container>
  )
}

export default SliderSerie
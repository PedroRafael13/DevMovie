import { Swiper, SwiperSlide } from 'swiper/react'

import CardMovie from '../CardMovie'

import { Container } from "./style"


function SliderMovie ({ infoMovie, titleMovie}){

  return (
    <Container>
      <h2>{titleMovie}</h2>
      <Swiper 
        grabCursor
        spaceBetween={10}
        slidesPerView={'auto'}
        className='swiper'
      >
        {infoMovie.map((itemMovie, indexMovie)=>(
          <SwiperSlide key={indexMovie}>
            <CardMovie itemMovie={itemMovie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default SliderMovie
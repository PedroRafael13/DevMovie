import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from "./style"

function Slider ({ info, title}){

  return (
    <Container>
      <h2>{title}</h2>
      <Swiper 
        grabCursor
        spaceBetween={10}
        slidesPerView={'auto'}
        className='swiper'
      >
        {info.map((item, index)=>(
          <SwiperSlide key={index}>
            <div style={{color:'red'}}>{item.original_title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Slider
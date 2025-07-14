import React, {useEffect, useState } from "react";
import ProdItem from './singleProd'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'


function carousel({listProd}) {

  // validar se está ou nao no mobile para uma exibição melhor de vitrine
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() =>{
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1020)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])


  if( !listProd || listProd === 0 ){
    return <p className="text-center mt-10 text-gray-500">Vitrine não tem produtos.</p>
  }

  const actCarousel = isMobile || listProd.length >= 5

  return actCarousel ? (
    <Swiper 
    modules={[Navigation, Pagination]} 
    spaceBetween={20} 
    slidesPerView={1} 
    navigation
    pagination={{ clickable: true }}
    breakpoints={{
      320: { slidesPerView: 1.5 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1300: { slidesPerView: 5 },
      1600: { slidesPerView: 6 },
    }} className="mySwiper">

      {listProd.map((prodt) =>(
        <SwiperSlide key={prodt.id}>
          <ProdItem produtoS={prodt}/>
        </SwiperSlide>
      ))}

    </Swiper>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {listProd.map((prodt) =>(
        <ProdItem key={prodt.id} produtoS={prodt}/>
      ))}
    </div>
  )
}

export default carousel

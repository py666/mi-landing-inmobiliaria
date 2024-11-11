declare module 'swiper/react' {
  import { SwiperOptions } from 'swiper/types'
  import React from 'react'

  interface SwiperProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onProgress'>, SwiperOptions {
    modules?: any[]
    navigation?: boolean | any
    pagination?: boolean | any
    autoplay?: boolean | any
    effect?: string
    loop?: boolean
    speed?: number
    grid?: any
    className?: string
    spaceBetween?: number
    slidesPerView?: number
    breakpoints?: {
      [width: number]: {
        slidesPerView: number
        grid?: {
          rows: number
        }
      }
    }
  }

  export const Swiper: React.FC<SwiperProps>
  export const SwiperSlide: React.FC<React.HTMLAttributes<HTMLDivElement>>
}

declare module 'swiper/modules' {
  export const Navigation: any
  export const Pagination: any
  export const Autoplay: any
  export const EffectFade: any
  export const Grid: any
}

declare module 'swiper/css'
declare module 'swiper/css/navigation'
declare module 'swiper/css/pagination'
declare module 'swiper/css/effect-fade'
declare module 'swiper/css/grid' 
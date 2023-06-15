'use client'

import Link from 'next/link'
import Image from 'next/image'
import cl from './Hero.module.scss'
import names from 'classnames'
import { lato } from '@/app/styles/fonts'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { Props } from './Hero.interface'
import { FC } from 'react'

import 'swiper/css'
import 'swiper/css/pagination'

const Hero: FC<Props> = async ({ promos }) => {
  return (
    <section className={names(cl.wrapper)}>
      <Swiper pagination={true} modules={[Pagination]} spaceBetween={50}>
        {promos.map((promo) => (
          <SwiperSlide key={promo.id}>
            <div className={names('container', 'flex')}>
              <div className={names('flex', 'column', 'center')}>
                <p className={names(cl.subtitle, lato.className)}>
                  {promo.subtitle}
                </p>
                <h1 className={cl.title}>{promo.title}</h1>
                <p className={cl.description}>{promo.info}</p>
                <Link className={cl.link} href="/products">
                  {promo.buttonText}
                </Link>
              </div>
              <Image
                src={promo.imageMain}
                alt="Best item"
                width="500"
                height="500"
                style={{
                  objectPosition: 'right',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero

import Link from 'next/link'
import Image from 'next/image'
import cl from './Hero.module.scss'
import names from 'classnames'
import { lato } from '@/app/styles/fonts'

const data = {
  mainColor: '#F2F0FF',
  secondaryColor: 'rgba(236, 210, 250, 0.35)',
  subtitle: 'Best Furniture For Your Castle....',
  title: 'New Furniture Collection Trends in 2020',
  description: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
  adipiscing in phasellus non in justo.`,
  buttonText: 'Shop Now',
  imageMain: '',
  imageSecondary: '',
}

const Hero = () => {
  return (
    <section
      style={{ backgroundColor: data.mainColor }}
      className={names(cl.wrapper)}
    >
      <div className={names('container', 'flex')}>
        <div className={names('flex', 'column', 'center')}>
          <p className={names(cl.subtitle, lato.className)}>{data.subtitle}</p>
          <h1 className={cl.title}>{data.title}</h1>
          <p className={cl.description}>{data.description}</p>
          <Link className={cl.link} href="/products">
            {data.buttonText}
          </Link>
        </div>
        <Image
          src="/images/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png"
          alt="Best item"
          width="500"
          height="500"
          style={{
            objectPosition: 'right',
          }}
        />
      </div>
    </section>
  )
}

export default Hero

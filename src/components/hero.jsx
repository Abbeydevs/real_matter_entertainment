import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import heroimg from "../../public/hero-img.svg"
export default function Hero() {
  return (
    <>
      <section className="container">
        <div className="hero__container">
          <div className="hero__wrapper">
            <div className="hero__content__wrapper ">
              <h5 className='hero__subHeading slide-in-text'>Real Matter Ent.</h5>
              <h1 className='hero__Heading slide-in-text'>Where Music Matters.</h1>
              <div className="hero__btn__wrapper slide-in-text">
              <Link href="/artists" className="hero__btn hero__btn__bg">View all artists</Link>
              <Link href="/releases" className="hero__btn hero__btn__bordered">Explore Music</Link>
              </div>
            </div>
            <div className="hero__img__wrapper">
              <Image src={heroimg} alt='hero-person' className='hero-person'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

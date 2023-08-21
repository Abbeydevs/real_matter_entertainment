import Image from 'next/image'
import React from 'react'
import { exploreData } from './data'

export default function Explore() {
  return (
    <div className="explore__container">
      <h2 className="explore__heading">Explore our songs</h2>
      <div className="explore__grid">
        {exploreData.map((item) => (
          <div className="explore__card" key={item.id}>
            <Image src={item.image} alt={item.alt} className="explore__image" width={100} height={100} />
            <p className="explore__text"><span className='explore__artist'>{item.artist}</span> - {item.song}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

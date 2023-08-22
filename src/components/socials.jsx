import React from 'react'
import { socialData } from './data'
import Image from 'next/image'

export default function Socials() {
  return (
    <section className='container'>
    <div className="socials-container">
      <h1 className="socials-heading">Follow Us</h1>
      <div className="social-icons-container">
        {socialData.map((social, index) => (
          <a key={index} href={social.link} className="social-icon-link">
              <Image src={social.icon} alt={social.iconText} className={`fa fa-${social.icon} social-icon`} width={100} height={100} />
          </a>
        ))}
      </div>
    </div>
  </section>
  )
}

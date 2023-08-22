import React from 'react'
import { socialData } from './data'
import Image from 'next/image'

export default function Socials() {
  return (
    <section className='container fade-in'>
    <div className="socials-container">
      <h1 className="socials-heading">Follow Us</h1>
      <div className="social-icons-container">
        {socialData.map((social, index) => (
          <a key={index} href={social.link} className="social-icon-link">
              <Image src={social.icon} alt={social.iconText} className={`fa fa-${social.icon} social-icon`} />
          </a>
        ))}
      </div>
    </div>
  </section>
  )
}

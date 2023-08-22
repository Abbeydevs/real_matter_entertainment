import Link from 'next/link'
import React from 'react'

export default function OurEvents() {
  return (
    <section className="container fade-in">
      <div className="events__container">
        <div className="events__content">
          <div className="events__background">
          <div className="events__center">
            <h2 className="events__heading">Our Events</h2>
            <p className="events__subheading">Do you want to attend our events? Book now</p>
            <Link href="/events" className="events__button">Book now</Link>
          </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

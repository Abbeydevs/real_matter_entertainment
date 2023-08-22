import React from 'react'

export default function Newsletter() {
  return (
    <section className='container'>
      <div className="newsletter-container">
        <h1 className="newsletter-heading">Newsletter</h1>
        <p className="newsletter-subheading">Grab our Monthly Newsletter and stay tuned</p>
        <div className="input-container">
          <input type="email" className="newsletter-input" placeholder="Your email address" />
          <button className="newsletter-submit">Sign up</button>
        </div>
      </div>
    </section>
  )
}

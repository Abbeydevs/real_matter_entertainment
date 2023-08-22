import React from "react";

export default function Newsletter() {
  return (
    <section className="container newsletter-container">
      <h1 className="newsletter-heading">Newsletter</h1>
      <p className="newsletter-subheading">
        Grab our Monthly Newsletter and stay tuned
      </p>
      <form className="form">
        <div className="input-container">
          <input
            type="email"
            className="newsletter-input"
            placeholder="Your email address"
          />
        </div>
        <button type="submit" className="newsletter-submit btn">
          Sign up
        </button>
      </form>
    </section>
  );
}

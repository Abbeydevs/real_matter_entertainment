import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroimg from "../../public/hero-img.svg";
export default function Hero() {
  return (
    <>
      <section className="container hero-container">
        <div className="hero-texts">
          <h5 className="lead-text">Real Matter Ent.</h5>
          <h1 className="hero-heading">Where Music Matters.</h1>
          <div className="hero-btns">
            <Link href="/artists"><button className="btn primary-btn">View all Artists</button></Link>
            <Link href="/artists"><button className="btn outline-btn">Explore Music</button></Link>
          </div>
        </div>
      </section>
    </>
  );
}

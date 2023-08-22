import Link from 'next/link';
import React from 'react';

export default function shop() {
  return (
    <section className='container fade-in'>
      <div className="shop__container">
        <div className="shop__column shop__column-1">
          <div className="shop__imageOverlay shop__column-1">
            {/* Your content for the first column */}
            <div className='shop__text'>
              <p className='shop__subHeading'>All Merch & Digital Music</p>
              <h1 className='shop__heading'>40% off For a Limited time</h1>
            </div>
          </div>
        </div>
        <div className="shop__column shop__column-2">
          <div className="shop__imageOverlay shop__column-2">
            {/* Your content for the second column */}
            <Link href="/shop" className="shop__button">Shop Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

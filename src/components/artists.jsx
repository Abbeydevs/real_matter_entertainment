import React from 'react';
import Image from 'next/image';
import { artistData } from './data';
import Link from 'next/link';

export default function Artists() {
  return (
    <section className="container fade-in">
      <div className="artist__container">
        <div className="artist__header">
          <h2 className="artist__heading">Artists</h2>
          <Link href='/artists' className="artist__bookArtistButton">Book Artist</Link>
        </div>
        <div className="artist__imageGrid">
          {artistData.map((artist) => (
            <div className="artist__imageItem" key={artist.id}>
              <Image src={artist.image} alt={artist.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

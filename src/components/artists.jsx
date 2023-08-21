import React from 'react';
import Image from 'next/image';
import { artistData } from './data';

export default function Artists() {
  return (
    <section className="container">
      <div className="artist__container">
        <div className="artist__header">
          <h2 className="artist__heading">Artists</h2>
          <button className="artist__bookArtistButton">Book Artist</button>
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

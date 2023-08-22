import React from 'react'
import logo from "../../public/logo.svg"
import Image from 'next/image';


export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className='container'>
      <footer className="footer__container">
      <div className="footer__logo">
          <Image src={logo} alt="logo" width="fit" height="250"/>
      </div>
      <div className="copyright__text">© {currentYear} 2023 COPYRIGHT Real Matters Entertainment - All Rights Reserved </div>
    </footer>
    </section>
  )
}

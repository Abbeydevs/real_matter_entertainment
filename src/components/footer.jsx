import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="container fade-in">
      <footer className="footer__container">
        <div className="footer__logo">
          <Image src={logo} alt="logo" className="footer__image" />
        </div>
        <small className="copyright__text">
          &copy; {currentYear} Copyrights Real Matters Entertainment - All Rights
          Reserved
        </small>
      </footer>
    </section>
  );
}

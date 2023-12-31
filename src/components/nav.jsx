// components/Nav.js
"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";

const MENU_ITEMS = [
  { label: "Artists", path: "/artists" },
  { label: "Releases", path: "/releases" },
  { label: "Events", path: "/events" },
  { label: "Contact", path: "/contact" },
];

const Nav = () => {
  const [isNavActive, setIsNavActive] = useState(null);
  const [activeItemIdx, setActiveItemIdx] = useState(-1);
  const [isScrolled, setIsScrolled] = useState(false);

  const NavItem = ({ label, path, isActive }) => {
    return (
      <Link href={path}>
        <span className={`nav__link ${isActive ? "active" : ""}`}>{label}</span>
      </Link>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className={`nav`}>
        <Link href={"/"}>
          <Image src={logo} alt="logo" width="100" height="60" />
        </Link>
        <div
          onClick={() => setIsNavActive(!isNavActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${isNavActive ? "active" : ""} nav__menu-list`}>
          {MENU_ITEMS.map((item, idx) => (
            <div
              onClick={() => {
                setActiveItemIdx(idx);
                setIsNavActive(false);
              }}
              key={item.label}
            >
              <NavItem
                label={item.label}
                path={item.path}
                isActive={activeItemIdx === idx}
              />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;

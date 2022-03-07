import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import data from './data';
import './navbar.scss';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar__main__container">
      <div className="navbar__logo">
        <h4>Sanju;</h4>
      </div>
      <div className="nav__links__container">
        {data.map((link) => {
          const { id, name, to } = link;
          if (name === 'works') {
            return (
              <Link key={id} to={to} className="nav__links">
                {name}
              </Link>
            );
          } else {
            return (
              <HashLink key={id} smooth to={to} className="nav__links">
                {name}
              </HashLink>
            );
          }
        })}
        <RiMenu3Line
          color="#fff"
          size={30}
          className="mobile__link"
          onClick={() => setMenuOpen(true)}
        />
      </div>
      {menuOpen && (
        <div className="mobile__menu__container">
          <RiCloseLine
            color="#fff"
            size={30}
            className="mobile__close__btn"
            onClick={() => setMenuOpen(false)}
          />
          <div className="mobile__nav__links__container slide-bottom">
            <div className="mobile__nav__links">
              {data.map((link) => {
                const { id, name, to } = link;
                if (name === 'works') {
                  return (
                    <Link key={id} to={to} className="nav__links__mobile">
                      {name}
                    </Link>
                  );
                } else {
                  return (
                    <HashLink
                      key={id}
                      smooth
                      to={to}
                      className="nav__links__mobile"
                    >
                      {name}
                    </HashLink>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

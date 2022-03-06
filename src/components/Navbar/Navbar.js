import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import data from './data';
import './navbar.scss';
const Navbar = () => {
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
        <Link to="/works" className="mobile__link">
          works
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

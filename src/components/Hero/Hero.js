import React from 'react';

import './hero.scss';
import ProfilePicture from './assets/profile-owner2.jpg';
const Hero = () => {
  return (
    <section className="hero__container">
      <div className="profile__owner__image__container">
        <img src={ProfilePicture} alt="img" />
      </div>
      <div className="profile__owner__info">
        <div className="profile__owner__info__title">
          <h1>Hi, I'm Sanju,</h1>
          <h1>A Passionate Android Developer & UI/UX Designer</h1>
        </div>
        <button>explore me</button>
      </div>
    </section>
  );
};

export default Hero;

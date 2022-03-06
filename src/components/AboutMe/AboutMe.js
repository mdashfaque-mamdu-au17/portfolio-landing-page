import React from 'react';

import './aboutme.scss';
import ProfilePicture from './assets/profile-owner5.jpg';
const AboutMe = () => {
  return (
    <div className="about__me__container__main" id="about">
      <section
        className="about__me__container"
        // style={{ backgroundColor: 'aquamarine' }}
      >
        <div className="about__me__heading">
          <h1>About me</h1>
          <div className="underline"></div>
        </div>

        <div className="about__me__profile__info">
          <div
            className="about__me__profile__image__container"
            // style={{ backgroundColor: 'green' }}
          >
            <img src={ProfilePicture} alt="img" />
          </div>

          <div
            className="about__me__details"
            // style={{ backgroundColor: 'red' }}
          >
            <h2>A Self taught Android Developer & UI/UX Designer!</h2>
            <p>
              I'm 21 year old Information Technology Engineering student with
              several applications released onto Google Play Store and living in
              Chennai. I am self taught developer and make apps, libraries/APIs
              under Developer Name: spikeysanju. Loves to create hassle free
              user experience to make product even better & meaningful!
            </p>

            <p className="speciality">
              <span>Speciality: </span>UI/UX Design & Android Development
            </p>

            <button>download cv</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;

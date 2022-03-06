import React from 'react';
import SingleSocialPlatform from '../SingleSocialPlatform/SingleSocialPlatform';
import data from './data';

import './mysocialmedia.scss';
const MySocialMedia = () => {
  return (
    <div className="my__social__media__main__container" id="contact">
      <section className="my__social__media__container">
        <h1>you can find me on these</h1>
        <h1 className="heading__end">social media platforms</h1>
        <div className="my__social__media__acounts">
          {data.map((account) => {
            return <SingleSocialPlatform key={account.id} {...account} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default MySocialMedia;

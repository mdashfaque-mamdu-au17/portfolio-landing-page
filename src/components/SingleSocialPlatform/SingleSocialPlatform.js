import React from 'react';

import './singlesocialplatform.scss';

const SingleSocialPlatform = ({ Icon, color, platformName, quote }) => {
  return (
    <div className="single__social__platform__container">
      <div className="single__social__platform__details">
        <div className="social__media__details">
          <Icon color={color} size={20} />
          <h3>{platformName}</h3>
        </div>
        <div className="social__media__info">
          <p>{quote}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleSocialPlatform;

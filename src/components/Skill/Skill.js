import React from 'react';
import './skill.scss';
const Skill = ({ Icon, jobTitle, experience }) => {
  return (
    <div className="single__skill__container">
      <div className="single__skill__details">
        <div className="single__skill__icon__box">
          <Icon className="icon" size={24} />
        </div>

        <div className="single__skill">
          <h3>{jobTitle}</h3>
          <p>{experience}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;

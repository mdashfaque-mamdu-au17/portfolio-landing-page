import React from 'react';
import './singlework.scss';
const SingleWork = ({ title, details, imageUrl, index }) => {
  console.log(index);
  return (
    <section className={`element-${index + 1} single__work__container`}>
      <div className=" single__work__image__container">
        <img src={imageUrl} alt="" />
        <div className={`single__work__job__details`}>
          <h3>{title}</h3>
          <p>{details}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleWork;

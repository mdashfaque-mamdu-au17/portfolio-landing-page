import React from 'react';
import data from './data';
import SingleWork from '../SingleWork/SingleWork';
import './mywork.scss';
const MyWork = () => {
  return (
    <div className="my__work__main__container">
      <div className="my__work__container">
        <h1>my project works</h1>
        <div className="my__works">
          {data.map((work, index) => {
            return <SingleWork key={work.id} {...work} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MyWork;

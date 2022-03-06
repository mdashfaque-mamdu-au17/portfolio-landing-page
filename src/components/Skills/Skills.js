import React from 'react';
import Skill from '../Skill/Skill';
import data from './data';
import './skills.scss';

const Skills = () => {
  return (
    // <div style={{ marginTop: '6rem', color: '#fff', backgroundColor: '#fff' }}>
    //   <MdDesignServices size={70} color={'blue'} />
    // </div>
    <div className="profile__owner__skills__main__container">
      <h1>i got mad skills in</h1>
      <section
        className="profile__owner__skills__container"
        style={{ marginTop: '6rem' }}
      >
        {data.map((skill) => {
          return <Skill key={skill.id} {...skill} />;
        })}
      </section>
    </div>
  );
};

export default Skills;

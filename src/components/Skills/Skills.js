import React from 'react';
import Skill from '../Skill/Skill';
import data from './data';
import './skills.scss';

const Skills = () => {
  return (
    <div className="profile__owner__skills__main__container" id="experience">
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

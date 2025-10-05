import React from 'react';
import GrandFather from './familyMembers/GrandFather';
import Dad from './familyMembers/Dad';
import Uncle from './familyMembers/Uncle';
import Aunt from './familyMembers/Aunt';

const FamilyTree = () => {
  return (
    <div>
      <h2 className="title">Family Tree</h2>
      
      <GrandFather></GrandFather>
      <section className='childrens'>
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunt></Aunt>
      </section>
    </div>
  );
};

export default FamilyTree;
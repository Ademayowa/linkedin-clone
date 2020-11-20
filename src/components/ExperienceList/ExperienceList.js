import React from 'react';
import Experience from '../Experience/Experience';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import Title from '../Title/Title';
import './ExperienceList.css';

const ExperienceList = () => {
  return (
    <div className='experienceList'>
      <Title text='Experience' Icon={AddIcon} />
      <Experience
        image='https://images.unsplash.com/photo-1562783912-21ad31ee2a83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        title='IT Instructor'
        Icon={CreateIcon}
        company='NIIT Limited'
        duration='May 2019 - Present'
        location='Lagos'
      />
      <hr />
      <Experience
        image='https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        title='PHP Developer Intern'
        Icon={CreateIcon}
        company='Bincom ICT Solutions'
        duration='Aug 2017 - Jan 2018'
        location='Lagos'
      />
    </div>
  );
};

export default ExperienceList;

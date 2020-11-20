import React from 'react';
import Education from '../Education/Education';
import Title from '../Title/Title';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import './EducationList.css';

const EducationList = () => {
  return (
    <div className='educationList'>
      <Title text='Education' Icon={AddIcon} />
      <Education
        image='https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        company='Alabian Solutions Limited'
        Icon={CreateIcon}
        title='Web Development'
        duration='2017 - 2017'
      />
      <hr />
      <Education
        image='https://images.unsplash.com/photo-1521058001910-55b77aba2203?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        company='Oracle University (NIIT Ibadan)'
        Icon={CreateIcon}
        title='Oracle Database Administration'
        duration='2016 - 2016'
      />
      <hr />
      <Education
        image='https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        company='Caleb University'
        Icon={CreateIcon}
        title='BSc Computer Science'
        duration='2007 - 2011'
      />
    </div>
  );
};

export default EducationList;

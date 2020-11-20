import React from 'react';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import Header from './components/Header/Header';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <>
        <Header />
        <div className='app__body'>
          <Feed />
          <Widgets />
        </div>
      </>
    </div>
  );
};

export default App;

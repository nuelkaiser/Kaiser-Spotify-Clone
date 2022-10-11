import React from 'react';
import './Player.css';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Body from './Body';

const PLayer = ({spotify}) => {
  return (
    <div className='player'>

      <div className='player__body'>
        <Sidebar />
        <Body spotify={spotify}/>
      </div>

      <Footer/>
    </div>
  )
}

export default PLayer
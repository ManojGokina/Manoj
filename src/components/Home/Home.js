import React from 'react';
import {img} from '../../constants/img';
import Header from '../Header/Header';
import "./Home.css"

function Home() {
  return (
    <div className='home_container'>
      <Header/>
      <div className='text__container'>
         <h1>Hello There !!</h1>
         <img src={img.blogging}/>
      </div>
      
    </div>
  )
}


export default Home;
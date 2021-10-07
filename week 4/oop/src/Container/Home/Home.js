import React, { Component } from 'react';
import {CompTable , App} from '../../Component/CompTable/CompTable'


const Home = () => {
  return(
    <div className='col-md-8 mx-auto'>
      <h1>Mini Liblary </h1>
      <CompTable />
    </div>
  )
};
export default Home;
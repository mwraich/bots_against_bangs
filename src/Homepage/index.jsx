import React from 'react';
import './homepage.css'
import FortuneTelling from '../FortuneTelling'

const HomePage = () => (
  <div className='homepage fixed-top'>
    <h1> Bots Agaisnt Bangs </h1>
    <FortuneTelling/>
  </div>
)
export default HomePage
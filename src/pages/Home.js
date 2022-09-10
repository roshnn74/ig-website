import React from 'react';

import Banner from '../components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Teams from '../components/Teams';
import Events from '../components/Events';

const Home = () => {
  return (
    <div>
        <Banner />
        <Events />
        <Teams /> 
    </div>
  )
}

export default Home;
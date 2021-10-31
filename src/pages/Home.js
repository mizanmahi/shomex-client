import React from 'react';
import ChooseUs from '../components/ChooseUs/ChooseUs';
import Intro from '../components/Intro/Intro';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Services from '../components/Services/Services';

const Home = () => {
   return (
      <div>
         <Intro />
         <Services />
         <NewsLetter />
         <ChooseUs />
         
      </div>
   );
};

export default Home;

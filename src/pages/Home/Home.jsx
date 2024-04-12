import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import EstateData from '../../components/EstateData/EstateData';
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
  const data = useLoaderData()
  return (
    <div>
      <Banner />
      <WhoWeAre/>
      <EstateData data={data}/>
    </div>
  );
};

export default Home;
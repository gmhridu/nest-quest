import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import EstateData from '../../components/EstateData/EstateData';
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre';
import { useLoaderData } from 'react-router-dom';
import MeetOurTeam from '../../components/MeetOurTeam/MeetOurTeam';


const Home = () => {
  const data = useLoaderData()
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
      <Banner />
      <WhoWeAre />
      <EstateData data={data} />
      <MeetOurTeam data={data} />
    </div>
  );
};

export default Home;
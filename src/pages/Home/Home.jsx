import Banner from '../../components/Banner/Banner';
import EstateData from '../../components/EstateData/EstateData';
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre';
import { useLoaderData } from 'react-router-dom';
import MeetOurTeam from '../../components/MeetOurTeam/MeetOurTeam';
import Loader from '../../components/Loader/Loader';
import { useEffect, useState } from 'react';


const Home = () => {
  
  const [jsonData, setJsonData] = useState(null);

   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch("/data.json");
         if (!response.ok) {
           throw new Error("Failed to fetch data");
         }
         const data = await response.json();
         setJsonData(data);
       } catch (error) {
         console.error(error);
       }
     };

     fetchData(); 
   }, []);

   if (!jsonData) {
     return <Loader />; 
  } 
 
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
      <Banner jsonData={jsonData} />
      <WhoWeAre />
      <EstateData jsonData={jsonData} />
      <MeetOurTeam jsonData={jsonData} />
    </div>
  );
};

export default Home;